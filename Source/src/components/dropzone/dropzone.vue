<template>
  <div class="file-dropper">
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
        <li v-for="file in files" :key="file">{{ file }}</li>
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
      this.$emit('files-added', Array.from(fileList))
    },
    setFilename(fileName) {
      const isGltf = (fn => fn.match(/\.gltf$/i));
      const isBin = (fn => fn.match(/\.bin$/i));

      // filter to only have one each gltf and bin
      /*
      if (isGltf(fileName)) {
        this.files = this.files.filter(f => !isGltf(f));
      } else {
        this.files = this.files.filter(f => !isBin(f));
      }
      */

      // filter duplicate names
      if (!this.files.includes(fileName)) {
        this.files.push(fileName);
      }

      
    },
  }
}
</script>

<style scoped>
.drop-zone {
  border: 2px dashed #ccc;
  border-radius: 20px;
  width: 480px;
  padding: 8px 16px;
  max-height: 200px;
  overflow-y: auto;
  text-align: center;
  font-family: Arial, sans-serif;
}
.heading {
  font-size: 18px;
}
.drop-zone li {
  text-align: left;
  line-height: 1.4em;
}


</style>