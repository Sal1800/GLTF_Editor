<template>
  <div class="tab-view">
    <div class="tab-list">
      <div v-for="tab, idx in tabNames" tabindex="0" @click="selectTab(tab)">{{tab}}</div>
    </div>
    <div class="tabs">
      <div class="tab-body" v-for="tab in tabNames" :id="tab" :class="{selected: tab == selectedTab}">
        <slot :name="tab"></slot>
      </div>      
    </div>

  </div>
</template>

<script>
import emitter from '../../utils/emitter.js';

export default {
  name: 'tabs',
  props: {
    tabNames: Array,
    defaultTab: String,
  },
  components: {
  },
  data() {
    return {
      selectedTab: this.defaultTab,
    }
  },
  watch: {
  },
  computed: {
  },
  methods: {
    selectTab(tab){
      this.selectedTab = tab;
    },
  }
}
</script>

<style scoped>
  .tab-list {
    display: flex;
    flex-wrap: wrap;
  }
  .tab-list > div {
    flex: 0 0 auto;
    margin-right: 1em;
    cursor: pointer;
  }


  .tabs {
    padding: 0.4em;
    border: 1px solid rgb(30,30,30);
    border-radius: 3px;
    background: rgb(49,49,49);
    box-shadow: inset 1px 1px 3px 1px rgba(0,0,0,0.2);
    max-height: 80vh;
    min-height: 50vh;
    overflow-y: auto;
    scrollbar-color: #606060 #282828;
  }

  .tab-body {
    display: none;
  }
  .tab-body.selected {
    display: block;
  }


</style>