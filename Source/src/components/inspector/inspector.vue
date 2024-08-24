<template>
  <div class="inspector" >
    <div class="info">
      <div class="node-name list-item" :class="itemIcon" v-if="itemName">{{itemName}}</div>

      <div v-if="meshName" class="mesh-name list-item icon-mesh">{{meshName}}</div>

      <template v-if="animations && animations.length && !isAnimation">
        <div class="anim-name list-item icon-anim" v-for="anim in animations" @click="selectItem(anim, 'icon-anim')">{{anim.name}}</div>
      </template>



      <div class="section" v-if="children && children.length">
        <div class="section-name">Children</div>
        <ul class="child-list">
          <li v-for="child in getChildren()">
            <listItem :item="child" :icon="getIcon(child, getChildIndex(child))" :model="model"></listItem>
          </li>
        </ul>
      </div>


      <animEdit v-if="isAnimation" :anim="item" :model="model" ></animEdit>  

      <div v-if="materialsList && materialsList.length" class="material-section">
        <div class="section-name">Materials</div>
        <div class="list-item icon-material" :class="{'selected': isSelected(mat)}" v-for="mat in materialsList" @click="selectMaterial(mat)">
          {{mat.name}}
        </div>
      </div>

      <materialEdit v-if="selectedMaterial" :model="model" :material="isMaterial ? item : selectedMaterial" :showUsers="isMaterial"></materialEdit>      

    </div>
  </div>
</template>

<script>
  import gltf from '../../utils/gltf_base.js';
  import emitter from '../../utils/emitter.js';
  import materialEdit from '../materialEdit/materialEdit.vue';
  import animEdit from '../animEdit/animEdit.vue';  
  import listItem from '../listItem/listItem.vue'

export default {
  name: 'inspector',
  props: {
    doc: Object,
    model: Object,
    item: Object,
    icon: String,
    index: Number,
  },
  components: {
    materialEdit,
    animEdit,
    listItem,
  },
  data() {
    return {
      mesh: null,
      primitives: null,
      children: null,
      selectedMaterial: null,
      selectedAnimation: null,
      itemType: null,
    }
  },
  watch: { 
    item(item) {
      this.selectedMaterial = null;
      this.selectedAnimation = false;
      this.mesh = this.getMesh();
      this.primitives = this.getPrimitives();
      this.children = this.getChildren();
      this.itemType = this.getItemType(item, this.index);
      this.$nextTick( () => {
        if (!this.selectedMaterial && this.icon == 'icon-material') {
          // item prop is a material
          this.isMaterialType  = true;
          this.selectedMaterial = this.item;
        }
        if (!this.selectedAnimation && this.icon == 'icon-anim') {
          // item prop is a animation
          this.selectedAnimation = this.item;
        }        
      });
      
    },
  },
  computed: {
    isNode() {
      return this.itemType === 'object';
    },
    isMaterial() {
      return this.itemType === 'material';
    },
    isAnimation() {
      return this.itemType === 'anim';
    }, 
    isArmature() {
      return this.itemType === 'armature';
    },
    isBone() {
      return this.itemType === 'bone';
    },    
    nodeIndex() {
      if (this.item) {
        return gltf.getNodeIndex(this.item, this.model);
      }
    },       
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
    animations() {
      if (!this.item || !this.model) return [];
      const anims = [];
      this.model.animations.forEach( (anim, idx) => {
        anim.channels.forEach( channel => {
          if (channel.target.node === this.nodeIndex) {
            anims.push(anim);
          }
        });
      });
      return anims;
    },
    itemIcon() {
      return `icon-${this.itemType}`;
    },
  },
  methods: {
    getItemType(item, index) {
      if (!item) return null;
      if (item.mesh != null) return 'object';
      if (item.pbrMetallicRoughness != null) return 'material';
      if (item.channels != null) return 'anim';
      if (item.joints != null) return 'armature';
      if ((index || index === 0) && this.model) {
        if (this.model.skins && this.model.skins.some( skin => skin.joints.includes(index))){
          return 'bone';
        }
      }
      return 'empty';
    },
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
    getChildIndex(child){
      return gltf.getNodeIndex(child, this.model);
    },
    getIcon(item, index) {
        return `icon-${this.getItemType(item, index)}`;
    },
    selectMaterial(mat) {
      this.selectedMaterial = mat;
    },
    isSelected(mat) {
      return mat.name === this.selectedMaterial.name;
    },
    selectItem(item, icon, index){
      emitter.$emit('selectItem', {
        item: item,
        icon: icon,
        index: index,
      });
    },
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