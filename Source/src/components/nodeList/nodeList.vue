<template>
  <div class="node-list">
    <ul class="scenes">
      <li class="sceneItem list-item icon-scene" v-for="scene, index in scenes">{{scene.name}}
        <ul class="nodes">
          <treeNode v-for="node in this.getChildNodes(scene)" :node="node" :model="model"></treeNode>
        </ul>        
      </li>
    </ul>
  </div>
</template>

<script>
import gltf from '../../utils/gltf_base.js';
import treeNode from '../treeNode/treeNode.vue';

export default {
  name: 'nodeList',
  props: {
    root: Object,
    model: Object,
  },
  components: {
    treeNode,
  },
  data() {
    return {
    }
  },
  computed: {
    rootNodes() {
      if (this.root) {
        return this.root.listNodes();
      }
      return [];
    },
    scenes() {
      if (this.model) {
        return gltf.getScenes(this.model);
      }
      return [];
    },
  },
  methods: {
    getChildNodes(scene) {
      if (scene && scene.nodes) {
        return gltf.getChildNodes(scene.nodes, this.model);
      }
      return [];
    },
  }
}
</script>

<style >
  .node-list {
  }

  .node-list ul {
    margin: 0;
    padding: 0;   
    position: relative;
  } 

  .node-list ul.nodes ul { 
    padding-left: 0.7em;
  }   
  .node-list ul ul ul::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 1em;
    height: 100%;
    border-left: 1px solid var(--vt-c-divider-dark-1);
  }

  .node-list li {
    margin: 0;
    padding: 0;
    list-style: none;
    /*border-bottom: 1px solid var(--vt-c-divider-dark-1) ;*/
  }  
/*  .node-list li:first-child {
    border: none;
  }  */

/*  .nodes li:nth-child(odd) > div {
    background: var(--color-background-soft);
  }  
*/

</style>