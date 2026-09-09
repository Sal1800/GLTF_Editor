<template>
  <li class="tree-node" v-if="getParent">
    <listItem :item="node" :selected="selected" :icon="getIcon()" :model="model"></listItem>
    <ul class="nodes">
        <treeNode :node="child" v-for="child in getChildren()" :model="model" :selectedNode="selectedNode"></treeNode>
    </ul>
  </li>
</template>

<script>
import gltf from '../../utils/gltf_base.js';
import listItem from '../listItem/listItem.vue'


export default {
  name: 'treeNode',
  components: {
    listItem,
  },
  props: {
    model: Object,
    node: Object,
    selectedNode: Object,
  },
  data() {
    return {
      children: this.getChildren(),
    }
  },
  computed: {
    selected() {
      return this.selectedNode && this.selectedNode.name == this.node.name;
    },
  },
  methods: {
    getChildren() {
      if (this.node) {
        return gltf.getChildNodes(this.node && this.node.children, this.model);
      }
      return [];
    },
    getParent() {
      if (this.node) {
        return gltf.getParentNode(gltf.getNodeIndex(this.node, this.model));
      }
      return null;      
    },
    getIcon() {
      if (this.node) {
        return (this.node.mesh != null) ? 'icon-outliner-object' : 'icon-outliner-empty';
      }
      return '';
    },      

  }
}
</script>

<style scoped>

</style>