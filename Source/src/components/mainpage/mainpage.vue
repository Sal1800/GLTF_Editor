

<template>
  <div id="app">
    <div class="header">
      <div class="file-drop">
          <dropzone @files-added="handleFiles" ref="dropZone" />
      </div>
      <div class="file-status">
          <div class="error" v-if="fileError">{{fileError}}</div>
      </div>
      <div class="main-header">

      </div> 
      <div class="controls">
        <div class="save-file">
          <button  @click="saveFile">Save</button>
          <button id="download" ref="downloadBtn">Download</button>
        </div>
      </div> 

      
      

    </div>
    <div class="cols">
      <div class="mainpanel">
        <inspector :item="selectedNode" :icon="selectedNodeIcon" :index="selectedIndex" :model="selectedModel" :buffer="selectedBuffer"></inspector>
        <div class="model-list">
          <ul class="model-selector">
            <li v-for="mdl, idx in models" :class="{active: idx === selectedModelIndex}" @click="selectedModelIndex = idx">{{mdl.name}}</li>
          </ul>
          <tabs :tab-names="['Nodes','Materials', 'Animations']" default-tab="Nodes">
            <template v-slot:Nodes>
              <nodeList :model="selectedModel" :selectedNode="selectedNode"></nodeList>
            </template>
            <template v-slot:Materials>
              <listView :list="materialList" :list-icons="['icon-material']" :model="selectedModel"></listView>
            </template>
            <template v-slot:Animations>
              <listView :list="animationsList" :list-icons="['icon-anim']" :model="selectedModel"></listView>
            </template>        
          </tabs>
        </div>
        <modelViewer :model="selectedModel" :buffer="selectedBuffer" :index="selectedIndex" :selectedNode="selectedNode"></modelViewer>
      </div>
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
import modelViewer from '../modelViewer/modelViewer.vue';

export default {
  name: 'mainpage',
  components: {
    dropzone,
    nodeList,
    inspector,
    tabs,
    listView,
    modelViewer,
  },
  data() {
    return {
      fileError: '',
      models: [],
      g_json: null,
      g_bin: null,
      g_document: {},
      g_root: null,
      g_model: {},
      selectedModelIndex: 0,
      selectedNode: null,
      selectedNodeIcon: '',
      selectedMaterial: null,
      selectedIndex: null,
      fileNames: {},
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
      return gltf.getMaterials(this.selectedModel);
    },
    animationsList() {
      return gltf.getAnimations(this.selectedModel);
    },
    selectedModel() {
      return this.models[this.selectedModelIndex]?.model || {};
    },
    selectedBuffer() {
      return this.models[this.selectedModelIndex]?.buffer || {};
    },    
  },
  methods: {
    handleFiles(files) {
      this.fileError = '';
      files.forEach( file => {
        const reader = new FileReader();
        const type = file.type == 'model/gltf+json' ? 'json' : 'bin';
        reader.onload = (e) => {
          const result = e.target.result;
          if (type == 'json') {
            try {
              const model = JSON.parse(result);
              // const g_model = gltf.parseModel(result);
              this.addToModels(file.name, model);
              this.fileNames.gltf = file.name;
              this.setFilename(file.name);
            } catch (error) {
              console.error('Error parsing JSON:', error);
              this.fileError = `Error parsing JSON: ${error}`;
            }
          } else {
            const bufferArray = new Uint8Array(result);
            this.fileNames.bin = file.name;
            this.setFilename(file.name);
            if (gltf) {
              this.addToModels(file.name, bufferArray);
              // gltf.setBuffer(this.g_bin);
            }
          }
        }
        reader.onerror = (e) => {
          console.error('Error reading file:', e);
          this.fileError = `Error reading file: ${e}`;
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
    addToModels(fileName, obj) {
      const isGltf = (fn => fn.match(/\.gltf$/i));
      const name = fileName.replace(/\.gltf$/,'').replace(/\.bin$/,'');
      const match = this.models.findIndex(m => m.name === name);
      if (match !== -1) {
        if (isGltf(fileName)) {
          this.models[match].model = obj;
        } else {
          this.models[match].buffer = obj;
        }
      } else {
        if (isGltf(fileName)) {
          this.models.push({ name, model: obj});
        } else {
          this.models.push({ name, buffer: obj});
        }        
      }
      // select last model
      this.selectedModelIndex = Math.max(0, this.models.length - 1);

    },

    setFilename(name) {
      if (this.$refs.dropZone) {
        this.$refs.dropZone.setFilename(name);
      }
    },
    saveFile() {
      const fileContent = JSON.stringify(this.g_json);
      const file = new Blob([fileContent], {type: 'model/gltf+json'});
      const url = URL.createObjectURL(file);
      this.$refs.downloadBtn.setAttribute('href', url);
      this.$refs.downloadBtn.setAttribute('download', 'model.gltf');

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
    max-width: 640px;
    flex: 1 1 auto;
    margin-top: 24px;
    min-height: 50vh;
  }  
  .mainpanel .tabs {
    max-width: 640px;
  }

  .mainpanel .tab-view {
    flex: 1 1 25%;
    min-height: 50vh;
  }
  .header {
    display: flex;

  }
  .model-list {
    min-width: 30%;
    margin: 0 4px;
  }

  .model-selector {
    margin: 0;
    margin-bottom: 6px;
    padding: 0;
    display: flex;
    justify-content: flex-start;
  }
  .model-selector > li {
    margin: 0;
    padding: 0;
    list-style: none;
    padding: 2px 6px;
    max-width: 30%;
    margin-right: 8px;
    border: 1px solid #DDD;
    border-radius: 3px;
    white-space: nowrap;
    text-overflow: ellipsis;
    display: block;
    overflow: hidden;
    text-align: left;
    direction: rtl;
    cursor: pointer;
  }

  .model-selector > li.active {
    background: #2c4c7b;
  }


</style>