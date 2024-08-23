<template>
  <div class="material-edit section">
      <div class="label">Material Name</div>
      <div class="item-name">{{name}}</div>
      <div class="label" v-if="baseColorFactor">
        Base Color
        <ColorPicker v-model="baseColorSwatch" format="rgb" />
      </div>
      <div class="vec4" v-if="baseColorFactor">
        R: {{baseColorFactor[0]}}<br>
        G: {{baseColorFactor[1]}}<br>
        B: {{baseColorFactor[2]}}<br>
        A: {{baseColorFactor[3]}}<br>
      </div>
      <div class="label" v-if="baseColorTexture">Base Color Texture</div>
      <div class="item-name" v-if="baseColorTexture">{{baseColorImage}}</div>
      <div class="label" v-if="metallicFactor != null">Metallic Factor</div>
      <div class="item-name" v-if="metallicFactor != null">{{metallicFactor}}</div>
      <div class="label" v-if="roughnessFactor != null">Roughness Factor</div>
      <div class="item-name" v-if="roughnessFactor != null">{{roughnessFactor}}</div>      
      <div class="label" v-if="metallicRoughnessTexture">Metallic/Roughness Texture</div>
      <div class="item-name" v-if="metallicRoughnessTexture">{{metallicRoughnessImage}}</div>
      <div class="label" v-if="occlusionTexture">Occlusion Texture</div>
      <div class="item-name" v-if="occlusionTexture">{{occlusionImage}}</div>


      <div class="label" v-if="normalTexture">Normal Texture</div>
      <div class="item-name" v-if="normalTexture">{{normalImage}}</div>
      <div class="label" v-if="normalScale">Normal Scale</div>
      <div class="item-name" v-if="normalScale">{{normalScale}}</div>      
      <div class="label" v-if="alphaMode">Alpha Mode</div>
      <div class="item-name" v-if="alphaMode">{{alphaMode}}</div> 
      <div class="label" v-if="emissiveFactor">Emissive Factor</div>
      <div class="vec3" v-if="emissiveFactor">
        R: {{emissiveFactor[0]}}<br>
        G: {{emissiveFactor[1]}}<br>
        B: {{emissiveFactor[2]}}<br>
      </div>
      <div class="label" v-if="emissiveTexture">Emissive Texture</div>
      <div class="item-name" v-if="emissiveTexture">{{emissiveImage}}</div>

      <div class="extensions-list" v-if="material.extensions">
        <div class="label">Extensions</div>
        <div v-for="[key, obj] of Object.entries(material.extensions)">
          {{key}}
          <div v-for="[key2, valu] of Object.entries(obj)">{{key2}}: {{valu}}</div>
        </div>
      </div>



      <div class="user-list" v-if="showUsers && userList">
        <div class="label">Used By:</div>
        <ul>
          <listView :list="userList" :list-icons="['icon-object']"></listView>
        </ul>
      </div>

  </div>
</template>

<script>
  import gltf from '../../utils/gltf_base.js';
  import listView from '../listView/listView.vue';
  import ColorPicker from 'primevue/colorpicker';

export default {
  name: 'materialEdit',
  props: {
    doc: Object,
    model: Object,
    material: Object,
    showUsers: Boolean,
  },
  components: {
    listView,
    ColorPicker,
  },
  data() {
    return {
      occlusionStrength: 0,
      userList: [],
      baseColorSwatch: [],
      extensionList: [],
    }
  },
  watch: { 
    material: {
      handler(mat) {
        this.getUsers(mat);
        this.setColorSwatches(mat);
      },
      immediate: true,
    },
  },
  computed: {
    name() {
      return (this.material && this.material.name) || 'material'
    },
    alphaMode() {
      return gltf.getAlphaMode(this.material);
    },
    baseColorFactor() {
      return gltf.getBaseColorFactor(this.material);
    },
    baseColorTexture() {
      return gltf.getBaseColorTexture(this.material, this.model);
    },
    baseColorImage() {
      return this.getImageURI(this.baseColorTexture);
    },
    metallicFactor() {
      return gltf.getMetallicFactor(this.material);
    },
    roughnessFactor() {
      return gltf.getRoughnessFactor(this.material);
    },    
    metallicRoughnessTexture() {
      return gltf.getMetallicRoughnessTexture(this.material, this.model);
    },
    metallicRoughnessImage() {
      return this.getImageURI(this.metallicRoughnessTexture);
    },
    normalTexture() {
      return gltf.getNormalTexture(this.material, this.model);
    },
    normalImage() {
      return this.getImageURI(this.normalTexture);
    },    
    normalScale() {
      return gltf.getNormalScale(this.material);
    },
    emissiveFactor() {
      return gltf.getEmissiveFactor(this.material);
    },
    emissiveTexture() {
      return gltf.getEmissiveTexture(this.material, this.model);
    },
    emissiveImage() {
      return this.getImageURI(this.emissiveTexture);
    },
    occlusionTexture() {
      return gltf.getOcclusionTexture(this.material, this.model);
    },
    occlusionImage() {
      return this.getImageURI(this.occlusionTexture);
    },
    doubleSided() {
      return (this.material && this.material.doubleSided) || false;
    },       
  },
  methods: {
    setColorSwatches(mat) {
      this.baseColorSwatch = {
        r: this.baseColorFactor[0] * 255,
        g: this.baseColorFactor[1] * 255,
        b: this.baseColorFactor[2] * 255,
      };
    },
    getImageURI(texture) {
      if (!texture) return '';
      let img = gltf.getImage(texture.source, this.model);
      if (!img) {
        const src = (texture.extensions && texture.extensions.MSFT_texture_dds.source) || null;
        if (src) {
          img = gltf.getImage(src, this.model);
        }
      }
      return (img && img.uri) || '';
    },
    getUsers(mat) {
      const matIndex = gltf.getMaterialIndex(mat, this.model);
      const nodes = gltf.getNodes(this.model);
      const meshes = gltf.getMeshes(this.model);
      const users = [];
      nodes.forEach( (node, nodeIndex) => {
        if (!!node.mesh) {
          const mesh = meshes[node.mesh];
          const primitives = mesh.primitives;
          primitives.forEach( pri => {
            if (pri.material == matIndex) {
              const user = gltf.getNodeByIndex(nodeIndex, this.model);
              if (user) {
                users.push(user);
              }
            };
          });
        };
      });
      this.userList = users;
    },
  }
}
</script>

<style scoped>
  .material-edit {
    margin-top: 24px;
  }

  .material-edit .label {
    padding: 0 0.2em;
    opacity: 0.7;
    padding-top: 0.4em;
    background: rgba(23,23,23,0.3);
  }
  .user-list {
    margin-top: 16px;
  }

  .user-list ul {
    margin: 0;
    padding: 0;
  }

</style>