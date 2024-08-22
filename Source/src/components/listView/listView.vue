<template>
  <div class="list-view">
    <div class="items" v-for="(item, i) in list">
      <listItem :item="item" :icon="getIcon(i)" :model="model"></listItem>
    </div>
  </div>
</template>

<script>
import emitter from '../../utils/emitter.js';
import listItem from '../listItem/listItem.vue'

export default {
  name: 'listView',
  props: {
    list: Array,
    listIcons: Array,
  },
  components: {
    listItem,
  },
  data() {
    return {

    }
  },
  computed: {
  },
  methods: {
    selectItem(item){
      if (item) {
        emitter.$emit('selectItem', item);
      }
    },
    getIcon(i) {
      if (!this.listIcons) return '';
      return this.listIcons[i] || this.listIcons[0] || '';
    },
  },
}
</script>

<style scoped>

</style>