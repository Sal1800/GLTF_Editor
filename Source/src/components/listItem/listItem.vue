<template>
  <div class="list-item" :class="icon" @click="selectItem">
    <span class="interactive" @click="selectItem">{{itemName}}</span>
  </div>
</template>

<script>
import gltf from '../../utils/gltf_base.js';
import emitter from '../../utils/emitter.js';

export default {
  name: 'listItem',
  props: {
    model: Object,
    item: Object,
    icon: String,
  },
  components: {
  },
  data() {
    return {
    }
  },
  computed: {
    itemName() {
      if (this.item) {
        return this.item.name;
      }
      return 'Node';
    },
  },
  methods: {
    selectItem(){
      emitter.$emit('selectItem', {
        item: this.item,
        icon: this.icon,
      });
    },
  }
}
</script>

<style>

.list-item {
}

.list-item > span {
  white-space: nowrap;
}

.list-item .interactive {
  cursor: pointer;
}

.list-item[class*="icon-"] {
  position: relative;
  padding-left: 1.5em;
}

.list-item.icon > span {

}

.list-item.icon-object::before {
  content: ' ';
  position: absolute;
  top: 0.3em;
  left: 0.1em;
  width: 1em;
  height: 1em;
  background-repeat: no-repeat;
  background-size: 1em;
  filter: brightness(0) saturate(100%) invert(47%) sepia(100%) saturate(377%) hue-rotate(356deg) brightness(93%) contrast(89%);
  background-image: url('../../assets/icons/blender_icon_object_data.svg');
}
.list-item.icon-outliner-object::before {
  content: ' ';
  position: absolute;
  top: 0.3em;
  left: 0.1em;
  right: 0;
  bottom: 0;
  width: 1em;
  height: 1em;
  background-repeat: no-repeat;
  background-size: 1em;
  filter: brightness(0) saturate(100%) invert(47%) sepia(100%) saturate(377%) hue-rotate(356deg) brightness(93%) contrast(89%);
  background-image: url('../../assets/icons/blender_icon_outliner_ob_mesh.svg');

}
.list-item.icon-outliner-empty::before {
  content: ' ';
  position: absolute;
  top: 0.3em;
  left: 0.1em;
  width: 1em;
  height: 1em;
  background-repeat: no-repeat;
  background-size: 1em;
  filter: brightness(0) saturate(100%) invert(47%) sepia(100%) saturate(377%) hue-rotate(356deg) brightness(93%) contrast(89%);
  background-image: url('../../assets/icons/blender_icon_outliner_ob_empty.svg');
} 
.list-item.icon-empty::before {
  content: ' ';
  position: absolute;
  top: 0.3em;
  left: 0.1em;
  width: 1em;
  height: 1em;
  background-repeat: no-repeat;
  background-size: 1em;
  filter: brightness(0) saturate(100%) invert(47%) sepia(100%) saturate(377%) hue-rotate(356deg) brightness(93%) contrast(89%);
  background-image: url('../../assets/icons/blender_icon_empty_data.svg');
} 
.list-item.icon-scene::before {
  content: ' ';
  position: absolute;
  top: 0.3em;
  left: 0.1em;
  width: 1em;
  height: 1em;
  background-repeat: no-repeat;
  background-size: 1em;
  filter: brightness(0) saturate(100%) invert(41%) sepia(67%) saturate(484%) hue-rotate(152deg) brightness(95%) contrast(102%);
  background-image: url('../../assets/icons/blender_icon_scene_data.svg');
} 
.list-item.icon-material::before {
  content: ' ';
  position: absolute;
  top: 0.3em;
  left: 0.1em;
  width: 1em;
  height: 1em;
  background-repeat: no-repeat;
  background-size: 1em;
  filter: brightness(0) saturate(100%) invert(64%) sepia(34%) saturate(4132%) hue-rotate(323deg) brightness(79%) contrast(97%);
  background-image: url('../../assets/icons/blender_icon_material_data.svg');
} 
.list-item.icon-mesh::before {
  content: ' ';
  position: absolute;
  top: 0.3em;
  left: 0.1em;
  width: 1em;
  height: 1em;
  background-repeat: no-repeat;
  background-size: 1em;
  filter: brightness(0) saturate(100%) invert(49%) sepia(69%) saturate(480%) hue-rotate(109deg) brightness(99%) contrast(86%);
  background-image: url('../../assets/icons/blender_icon_mesh_data.svg');
} 
.list-item.icon-texture::before {
  content: ' ';
  position: absolute;
  top: 0.3em;
  left: 0.1em;
  width: 1em;
  height: 1em;
  background-repeat: no-repeat;
  background-size: 1em;
  filter: brightness(0) saturate(100%) invert(64%) sepia(34%) saturate(4132%) hue-rotate(323deg) brightness(79%) contrast(97%);
  background-image: url('../../assets/icons/blender_icon_texture_data.svg');
} 



</style>