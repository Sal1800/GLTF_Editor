<template>
  <div class="anim-edit section">
      <div class="label">Channel Targets</div>
      <!-- <div class="item-name" v-for="channel in channels">{{channel}}</div> -->
      <div class="list-item icon-object" @click="selectChannel(i)" v-for="target, i in targets" :class="{selected: selectedChannel === i}">{{target.node.name}} : {{target.path}}</div>  

      <template v-if="selectedNode"> 
        <div class="label" v-if="selectedNode.translation">Node Translation</div>
        <div v-if="selectedNode.translation">{{selectedNode.translation}}</div>
        <div class="label" v-if="selectedNode.rotation">Node Rotation</div>
        <div v-if="selectedNode.rotation">{{selectedNode.rotation}}</div>
      </template>

      <template v-if="selectedSampler"> 
        <div class="label">Sampler</div>
        <div>{{selectedSampler.sampler.interpolation}}</div>
        <div class="cols">
          <div class="label">Keyframe (Input)</div>
          <div class="label">Value (Output)</div>
        </div>
        <div class="cols" v-for="frames in samplerKeyframes">
          <div>{{frames[0]}}</div>
          <div>{{frames[1]}}</div>
        </div>
          
<!--         <div v-for="dat in selectedSampler.input.chunks">{{getKeyframe(dat)}}</div>
        <div class="label">Value (Output)</div>
        <div v-for="dat in selectedSampler.output.chunks">{{getEuler(dat).map(d => d.toFixed(4))}}</div>   -->
             <!-- <div v-for="dat in selectedSampler.output.chunks">{{dat.map(d => d.toFixed(4))}}</div>    -->
      </template>

  </div>
</template>

<script>
  import gltf from '../../utils/gltf_base.js';
  import { quatToEuler } from '../../utils/utils.js';
  import listView from '../listView/listView.vue';

export default {
  name: 'animEdit',
  props: {
    model: Object,
    anim: Object,
  },
  components: {
    listView,
  },
  data() {
    return {
      selectedChannel: 0,
      selectedSampler: {},
      selectedNode: null,
    }
  },
  watch: { 
    anim: {
      handler(anim) {
        // this.getUsers(anim);
        this.selectChannel(0);
      },
      immediate: true,
    },
  },
  computed: {
    name() {
      return (this.anim && this.anim.name) || 'Animation';
    },
    samplers() {
      return (this.anim && this.anim.samplers) || [];
    },
    channels() {
      return (this.anim && this.anim.channels) || [];
    },
    targets() {
      return this.channels.map( channel => {
        const node = gltf.getNodeByIndex(channel.target.node, this.model);
        return {node: node, path: channel.target.path};
      });
    },
    samplerKeyframes() {
      if (!this.selectedSampler) return [];
        return this.selectedSampler.input.chunks.map((item, index) => {
          const kf = this.getKeyframe(item);
          const vl = this.getEuler(this.selectedSampler.output.chunks[index]).map(d => d.toFixed(4));
          return [kf, vl];
        });
    },
  },
  methods: {
    selectChannel(index) {
      this.selectedChannel = index;
      this.selectedSampler = this.getSampler(index);
      this.selectedNode = this.targets[index].node;
    },
    getSampler(index) {
      const sampler = this.samplers[index];
      const input = this.getSamplerData(sampler.input);
      const output = this.getSamplerData(sampler.output);
      return {sampler, input, output};
    },
    getSamplerData(index) {
      const accessor = this.getAccessor(index)  
      const data = this.getAccessorData(index);
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
    getAccessor(index) {
      return gltf.getAccessor(index, this.model) || {};
    },
    getAccessorData(index) {
      return gltf.getAccessorData(index, this.model) || [];
    },
    getKeyframe(time) {
      return Math.floor(time / 0.041666);
    },
    getEuler(quat) {
      if (!quat || quat.length != 4) return quat;
      const euler = quatToEuler(quat);
      const degrees = euler.map( i => this.toDegrees(i));
      return degrees;
    },
    toDegrees(rad) {
      return rad * (180/Math.PI);
    },
  }
}
</script>

<style scoped>
  .anim-edit {
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
    flex: 0 0 50%;
  }


</style>