<template>
  <div class="accessor-edit section">
      <div class="label">Accessor</div>
      <div>
  </div>
</template>

<script>
  import gltf from '../../utils/gltf_base.js';
  import { quatToEuler, formatValue } from '../../utils/utils.js';
  import listView from '../listView/listView.vue';

export default {
  name: 'accessorEdit',
  props: {
    accessorIndex,
  },
  components: {
    listView,
  },
  data() {
    return {
    }
  },
  watch: { 
  },
  computed: {
    accessor() {
      return this.getAccessor(this.accessorIndex);
    },
    accessorType() {
      return this.accessor && this.accessor.type;
    },
    accessorData() {
      const accessor = this.getAccessor(this.accessorIndex)  
      const data = this.getAccessorData(this.accessorIndex);
      const chunkSize = gltf.bufferTypes.getItemSize(accessor.type);
      const chunks = data.reduce((all,one,i) => {
         const ch = Math.floor(i/chunkSize); 
         all[ch] = [].concat((all[ch]||[]),one); 
         return all
      }, []);
      return {
        accessor,
        data,
        chunks,
      };
    },    
  },
  methods: {
    getAccessor(index) {
      return gltf.getAccessor(index, this.model) || {};
    },
    getAccessorData(index) {
      return gltf.getAccessorData(index, this.model) || [];
    },
    getKeyframe(time) {
      return Math.floor(time / 0.041666);
    },
    getFormattedQuat(quat) {
      return quat ? formatValue(quatToEuler(quat, true)) : quat;
    },
    getFormattedVec3(vec3) {
      return vec3 && formatValue(vec3);
    },
    getFrameCount(sampler) {
      return (sampler && sampler.input && sampler.input.chunks.length) || 0;
    },
  }
}
</script>

<style scoped>
  .accessor-edit {
    margin-top: 24px;
  }
  .anim-edit .selected {
    background-color: rgba(121, 199, 242, 0.2);
  }
  .cols {
    display: flex;
    flex-direction: row;
  }
  .cols > div {
    flex: 0 0 auto;
    min-width: 100px;
  }


</style>