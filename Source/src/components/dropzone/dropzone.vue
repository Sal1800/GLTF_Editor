<template>
  <div class="file-dropper">
    <div class="heading">Import GLTF files </div>
    <div class="instructions">Drop .gltf and .bin files to load model.</div>

    <div 
      class="drop-zone" 
      @dragover.prevent
      @dragenter.prevent
      @drop.prevent="handleDrop"
      tabindex="0"
    >
      <p v-if="files.length === 0">Drop files here</p>
      <ul v-else>
        <li v-for="file in files" :key="file.name">{{ file.name }}</li>
      </ul>
    </div>
    <div class="file-input-container">
      <input 
        type="file" 
        multiple 
        ref="fileInput" 
        @change="handleFileInput"
        accept=".gltf,.bin"
        id="file-input"
        class="file-input"
      >
      
    </div>
  </div>
</template>

<script>
export default {
  name: 'dropzone',
  data() {
    return {
      files: []
    }
  },
  methods: {
    handleDrop(e) {
      const droppedFiles = e.dataTransfer.files
      this.addFiles(droppedFiles)
    },
    handleFileInput(e) {
      const selectedFiles = e.target.files
      this.addFiles(selectedFiles)
    },
    addFiles(fileList) {
      this.files = [...this.files, ...Array.from(fileList)]
      this.$emit('files-added', this.files)
    },

  }
}
</script>

<style scoped>
.drop-zone {
  border: 2px dashed #ccc;
  border-radius: 20px;
  width: 480px;
  padding: 20px;
  text-align: center;
  font-family: Arial, sans-serif;
}
.heading {
  font-size: 18px;
}



</style>