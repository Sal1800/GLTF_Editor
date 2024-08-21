<template>
  <div class="inspector" >
    <div class="info">
      <div class="node-name list-item" :class="icon" v-if="itemName">{{itemName}}</div>

      <div v-if="meshName" class="mesh-name list-item icon-mesh">{{meshName}}</div>

      <div class="section" v-if="children && children.length">
        <div class="section-name">Children</div>
        <ul class="child-list">
          <li v-for="child in getChildren()">
            <listItem :item="child" :model="model"></listItem>
          </li>
        </ul>
      </div>

      <div v-if="materialsList && materialsList.length" class="material-section">
        <div class="section-name">Materials</div>
        <div class="list-item icon-material" :class="{'selected': isSelected(mat)}" v-for="mat in materialsList" @click="selectMaterial(mat)">
          {{mat.name}}
        </div>


      </div>
        <materialEdit v-if="selectedMaterial" :doc="doc" :model="model" :material="selectedMaterial" :showUsers="isMaterialType"></materialEdit>      

    </div>
  </div>
</template>

<script>
  import gltf from '../../utils/gltf_base.js';
  import materialEdit from '../materialEdit/materialEdit.vue';
  import listItem from '../listItem/listItem.vue'

export default {
  name: 'inspector',
  props: {
    doc: Object,
    model: Object,
    item: Object,
    icon: String,
  },
  components: {
    materialEdit,
    listItem,
  },
  data() {
    return {
      mesh: null,
      primitives: null,
      children: null,
      selectedMaterial: null,
      isMaterialType: false,
    }
  },
  watch: { 
    item() {
      this.selectedMaterial = null;
      this.mesh = this.getMesh();
      this.primitives = this.getPrimitives();
      this.children = this.getChildren();
      this.$nextTick( () => {
        if (!this.selectedMaterial && this.icon == 'icon-material') {
          // item prop is a material
          this.isMaterialType  = true;
          this.selectedMaterial = this.item;
        }
      });
      
    },
  },
  computed: {
    itemName() {
        return (this.item && this.item.name) || null;
    },
    meshName() {
      return (this.mesh && this.mesh.name) || '';
    },
    materialsList() {
      if (this.mesh) {
        const primitives = this.getPrimitives(this.mesh);
        if (primitives) {
          const materials = primitives.map( (p, idx) => {
            return this.getMaterial(p)
          });
          if (materials) this.selectMaterial(materials[0]);
          return materials || [];
        }
      }
      return [];
    },
  },
  methods: {
    getMesh() {
      return (this.item && this.item.mesh != null) ? gltf.getMesh(this.item.mesh, this.model) : null;
    },
    getPrimitives() {
      return (this.item && this.item.mesh != null) ? gltf.getPrimitives(this.item.mesh, this.model) : null;
    },
    getMaterial(primitive) {
      return gltf.getMaterial(primitive.material, this.model)
    },
    getChildren() {
      if (!this.item) return null;
      return gltf.getChildNodes(this.item && this.item.children, this.model) || null;
    },
    selectMaterial(mat) {
      this.selectedMaterial = mat;
    },
    isSelected(mat) {
      return mat.name === this.selectedMaterial.name;
    }
  }
}
</script>

<style>
  .inspector {
    border: 2px solid var(--color-border);
    border-radius: 3px;
    padding: 8px;
  }
  .inspector .label {
    font-size: 0.8em;
    color: var(--color-text-light);
    padding: 0 0.2em;
    opacity: 0.7;
    padding-top: 0.4em;
    background: rgba(23,23,23,0.3);
  }

  .inspector .node-name {
    font-size: 18px;
  }

  .inspector .section {
    margin-top: 8px;
    padding: 0.4em;
    border: 1px solid rgb(30,30,30);
    border-radius: 3px;
    box-shadow: 1px 1px 3px 1px rgba(0,0,0,0.2);
  }

  .inspector .section-name {
    font-size: 14px; 
  }  

  .inspector .material-section {
    margin-top: 16px;
    padding-top: 8px;
    border-top: 1px solid var(--vt-c-divider-dark-1);
  }

  .inspector .list-item {
    cursor: pointer;
  }
  .inspector .list-item:hover {
    color: #FFFFFF;
  }
  .inspector .material-section .list-item.selected {
    background-color: rgba(121, 199, 242, 0.2);
  }

  .child-list  {
    margin: 0;
    margin-bottom: 8px;
    padding: 0;   
    padding-left: 0.5em;
  }  
  .child-list li {
    margin: 0;
    padding: 0;
    list-style: none;
    border-top: 1px solid var(--vt-c-divider-dark-1) ;
  }  

</style>