

<template>
  <div id="app">
    <dropzone @files-added="handleFiles" />
    <div class="mainpanel">
      <inspector :item="selectedNode" :icon="selectedNodeIcon" :index="selectedIndex" :model="g_model"></inspector>
      <tabs :tab-names="['Nodes','Materials', 'Animations']" default-tab="Nodes">
        <template v-slot:Nodes>
          <nodeList :model="g_model"></nodeList>
        </template>
        <template v-slot:Materials>
          <listView :list="materialList" :list-icons="['icon-material']" :model="g_model"></listView>
        </template>
        <template v-slot:Animations>
          <listView :list="animationsList" :list-icons="['icon-anim']" :model="g_model"></listView>
        </template>        
      </tabs>

    </div>
  </div>
</template>

<script>
import dropzone from '../dropzone/dropzone.vue';
import nodeList from '../nodeList/nodeList.vue';
import inspector from '../inspector/inspector.vue';
import tabs from '../tabs/tabs.vue';
import listView from '../listView/listView.vue';
import gltf from '../../utils/gltf_base.js';
import emitter from '../../utils/emitter.js';

export default {
  name: 'mainpage',
  components: {
    dropzone,
    nodeList,
    inspector,
    tabs,
    listView
  },
  data() {
    return {
      g_json: null,
      g_bin: null,
      g_document: {},
      g_root: null,
      g_model: {},
      selectedNode: null,
      selectedNodeIcon: '',
      selectedMaterial: null,
      selectedIndex: null,
    }
  },
  created() {
    emitter.$on('selectItem', params => {
      this.selectedNodeIcon = params.icon;
      this.selectNode(params.item);
      this.selectedIndex = params.index;
    });
    window.gltf = gltf;
  },
  computed: {
    materialList() {
      return gltf.getMaterials(this.g_model);
    },
    animationsList() {
      return gltf.getAnimations(this.g_model);
    },

  },
  methods: {
    handleFiles(files) {   
      files.forEach( file => {
        const reader = new FileReader();
        const type = file.type == 'model/gltf+json' ? 'json' : 'bin';
        reader.onload = (e) => {
          const result = e.target.result;
          if (type == 'json') {
            try {
              this.g_json = JSON.parse(result);
              this.g_model = gltf.parseModel(result);
              this.readDocument();         
            } catch (error) {
              console.error('Error parsing JSON:', error);
            }
          } else {
            this.g_bin = new Uint8Array(result);
            if (gltf) {
              gltf.g_buffer = this.g_bin;
            }

            // read for gltf-transform
            // this.readDocument();
          }
        }
        reader.onerror = (e) => {
          console.error('Error reading file:', e);
        }
        console.log(file);
        if (type == 'json') {
          reader.readAsText(file);
        } else {
          reader.readAsArrayBuffer(file);
        }
      });
    },
    async readDocument() {
      if (this.g_json && this.g_bin) {
        let JSONDocument = {
          json: this.g_json,
          resources: {},
        }
        JSONDocument.resources[this.getBufferName(this.g_json)] = this.g_bin;
        console.log(JSONDocument);
        try {
          const doc = await gltf.readJSON(JSONDocument);
          this.g_document = doc;
          window.doc = doc;
          console.log(doc);
          this.g_root = doc.getRoot();
        } catch(e) {
          console.error('Failed to parse GLTF Document: ', e);
        }
      }
    },
    getBufferName(json) {
      try {
        return json.buffers[0].uri;
      } catch(e) {
        console.error("Can't get buffer name:", e);
      }
      return '';
    },
    selectNode(item) {
      this.selectedNode = item;
    },

  }
}
</script>

<style>
  .mainpanel {
    display: flex;
    justify-content: space-between;
    margin-top: 16px;
  }
  .mainpanel .inspector {
    flex: 1 1 auto;
    margin-top: 24px;
  }  
  .mainpanel .tab-view {
    flex: 1 1 25%;
  }

</style>