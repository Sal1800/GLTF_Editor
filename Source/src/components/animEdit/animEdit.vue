<template>
  <div class="anim-edit section">
      <div class="label">Channel Targets</div>
      <!-- <div class="item-name" v-for="channel in channels">{{channel}}</div> -->
      <div class="list-item icon-object" @click="selectChannel(i)" v-for="target, i in targets" :class="{selected: selectedChannel === i}">{{target.node.name}} : {{target.path}}</div>  

      <div class="extensions-list" v-if="anim.extensions">
        <div class="label">Extensions</div>
        <div v-for="[key, obj] of Object.entries(anim.extensions)">
          {{key}}
          <div v-for="[key2, valu] of Object.entries(obj)">{{key2}}: {{valu}}</div>
        </div>
      </div>

      <div class="sampler-list" v-if="samplers">
        <div class="label">Samplers</div>
        <button :class="{'selected': this.selectedSamplerIndex === index}" v-for="item, index in samplers" @click="selectChannel(index)">
            Sampler {{index}}
        </button>
      </div>      

      <template v-if="selectedNode"> 
        <div class="label" v-if="selectedNode.translation">Node Translation</div>
        <div v-if="selectedNode.translation">{{getFormattedVec3(selectedNode.translation)}}</div>
        <div class="label" v-if="selectedNode.rotation">Node Rotation</div>
        <div v-if="selectedNode.rotation">{{getFormattedQuat(selectedNode.rotation)}}</div>
      </template>

      <template v-if="selectedSampler"> 
        <div class="label">Sampler</div>
        <div>Accessors: {{samplerAccessors.join(', ')}}</div>
        <div>BufferViews: {{samplerBufferViews.join(', ')}}</div>
        <div>{{selectedSampler.sampler.interpolation}} {{`${getFrameCount(selectedSampler)} frames`}}</div>
        <div class="cols label">
          <div>Keyframe (Input)</div>
          <div>Value (Output) {{samplerOutputType}}</div>
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
  import { quatToEuler, formatValue } from '../../utils/utils.js';
  import listView from '../listView/listView.vue';

export default {
  name: 'animEdit',
  props: {
    model: Object,
    buffer: Object,
    anim: Object,
  },
  components: {
    listView,
  },
  data() {
    return {
      selectedChannel: 0,
      selectedSampler: {},
      selectedSamplerIndex: 0,
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
      if (!this.selectedSampler) return [[],[]];
        return this.selectedSampler.input.chunks.map((item, index) => {
          const kf = this.getKeyframe(item);
          // const vl = this.getEuler(this.selectedSampler.output.chunks[index]).map(d => d.toFixed(4));
          const vl = formatValue(quatToEuler(this.selectedSampler.output.chunks[index], true));
          return [index, vl]; //[kf, vl];
        });
    },
    samplerOutputType() {
      return this.selectedSampler && this.selectedSampler.output.accessor.type || '';
    },
    samplerAccessors() {
      return [this.selectedSampler.input.index, this.selectedSampler.output.index] || [];
    },
    samplerBufferViews() {
      return [this.selectedSampler.input.accessor.bufferView, this.selectedSampler.output.accessor.bufferView] || [];
    }    
  },
  methods: {
    selectChannel(index) {
      this.selectedChannel = index;
      this.selectedSampler = this.getSampler(index);
      this.selectedSamplerIndex = index;
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
        index,
      };
    },
    getAccessor(index) {
      return gltf.getAccessor(index, this.model) || {};
    },
    getAccessorData(index) {
      return gltf.getAccessorData(index, this.model, this.buffer) || [];
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
    flex: 0 0 auto;
    min-width: 100px;
  }

  button {
    display: block;
    background: transparent;
    border: none;
    padding: 0.2em 8px 0.2em 0;
    color: var(--color-text);
    cursor: pointer;
  }
  button:hover, button.selected {
    background: rgba(121, 199, 242, 0.2);
  }


</style>