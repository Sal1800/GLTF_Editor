<template>
  <div class="material-edit section">
      <div class="label">Material Name</div>
      <div class="item-name">{{name}}</div>
      <div class="label" v-if="baseColorFactor">Base Color</div>
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

  </div>
</template>

<script>
  import gltf from '../../utils/gltf_base.js';

export default {
  name: 'materialEdit',
  props: {
    doc: Object,
    model: Object,
    material: Object,
    showUsers: Boolean,
  },
  data() {
    return {
      occlusionStrength: 0,
      occlusionTexture: null,
    }
  },
  watch: { 
    material(mat) {
      console.log(mat)
      this.alphaMode = gltf.getAlphaMode(mat);
      this.emissiveFactor = gltf.getEmissiveFactor(mat);
      this.emissiveTexture = gltf.getEmissiveTexture(mat, this.model);
    }
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
  },
  methods: {
    getImageURI(texture) {
      if (!texture) return '';
      const img = gltf.getImage(texture.source, this.model);
      return img.uri || '';
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

</style>