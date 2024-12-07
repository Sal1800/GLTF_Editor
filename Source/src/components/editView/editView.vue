<template>
  <div class="edit-view">
    <div class="label" v-if="label">{{label}}</div>
    <slot></slot>
    <div class="controller" :class="{'editing': editing}">
      <div class="value">{{formattedValue}} {{v_units}}</div>
      <div class="edit-control" @click="toggleEdit">
        <svg version="1.1" id="editIcon" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 8 120 130" xml:space="preserve"><g><path class="st0" d="M94.62,2c-1.46-1.36-3.14-2.09-5.02-1.99c-1.88,0-3.56,0.73-4.92,2.2L73.59,13.72l31.07,30.03l11.19-11.72 c1.36-1.36,1.88-3.14,1.88-5.02s-0.73-3.66-2.09-4.92L94.62,2L94.62,2L94.62,2z M41.44,109.58c-4.08,1.36-8.26,2.62-12.35,3.98 c-4.08,1.36-8.16,2.72-12.35,4.08c-9.73,3.14-15.07,4.92-16.22,5.23c-1.15,0.31-0.42-4.18,1.99-13.6l7.74-29.61l0.64-0.66 l30.56,30.56L41.44,109.58L41.44,109.58L41.44,109.58z M22.2,67.25l42.99-44.82l31.07,29.92L52.75,97.8L22.2,67.25L22.2,67.25z"/></g></svg>        
      </div>
    </div>
    <div class="editor" v-if="editing">
      <div class="param" v-for="param, index in valueArray">
        <input type="text" :value="param" @change="changeValue(index, $event)">
      </div>
      <div class="cancel-save">
        <div class="cancel-control" @click="cancelEdit">
          <svg height="100%" viewBox="0 0 1600 1600" width="100%" xmlns="http://www.w3.org/2000/svg" ><g enable-background="new" transform="matrix(100 0 0 100 -6800 -61900)"><path d="m67-636h18v18h-18z" fill="none" stroke-width="1.627" transform="scale(1 -1)"/><path d="m75.999998 620c-3.860077 0-7 3.13991-7 7s3.139924 7 7 7 7-3.13991 7-7-3.139923-7-7-7zm2.990234 2.98633a1.0001 1.0001 0 0 1 .716797 1.7207l-2.292969 2.29297 2.292969 2.29297a1.0001 1.0001 0 1 1 -1.414062 1.41406l-2.292969-2.29297-2.292969 2.29297a1.0001 1.0001 0 1 1 -1.414062-1.41406l2.292969-2.29297-2.292969-2.29297a1.0001 1.0001 0 0 1 .697265-1.7168 1.0001 1.0001 0 0 1 .716797.30274l2.292969 2.29297 2.292969-2.29297a1.0001 1.0001 0 0 1 .697265-.30664z" class="st0" fill="#fff" fill-rule="evenodd"/></g></svg>
        </div>
        <div class="save-control" @click="saveEdit">
            <svg height="100%" viewBox="0 0 1200 1200" width="100%" xmlns="http://www.w3.org/2000/svg"><g  class="st0" fill="#fff"><path d="m282.03125 601c-.56266 0-1.03125.46859-1.03125 1.03125v7.9375c0 .56266.46859 1.03125 1.03125 1.03125h7.9375c.56266 0 1.03125-.46859 1.03125-1.03125v-7.9375c0-.56266-.46859-1.03125-1.03125-1.03125zm6.94922 1.99023a1.0001 1.0001 0 0 1 .72656 1.7168l-4 4a1.0001 1.0001 0 0 1 -1.41406 0l-2-2a1.0001 1.0001 0 1 1 1.41406-1.41406l1.29297 1.29297 3.29297-3.29297a1.0001 1.0001 0 0 1 .6875-.30274z" transform="matrix(100 0 0 100 -28000 -60000)"/></g></svg>
        </div>
      </div> 
    </div>
  </div>
</template>

<script>
  import { formatValue } from '../../utils/utils.js';

  /* 
  Emits 'changedValue' on save
  */

export default {
  name: 'editView',
  props: {
    property: String,
    val: [Number,Object],
    label: String,
    type: String,
    units: {
      type: String,
      default: '',
    },
    showUnits: {
      type: Boolean,
      default: false,
    },
    editable: {
      type: Boolean,
      default: true,
    },
  },
  data() {
    return {
      currentVal: 0,
      editing: false,
    }
  },
  mounted() {
    this.currentVal = this.val;
  },
  watch: {
    val() {
      this.currentVal = this.val;
    },
  },
  computed: {
    v_units() {
      return (this.showUnits && this.units) || '';
    },
    valueArray() {
      return this.currentVal && Array.isArray(this.currentVal) ? this.currentVal : [this.currentVal];
    },
    formattedValue() {
      return formatValue(this.val);
    },
    isString() {
      return this.type && this.type === 'String';
    },
  },
  methods: {
    toggleEdit() {
      this.editing = !this.editing;
    },
    saveEdit() {
      this.$emit('changedValue', {
        value: this.currentVal,
        property: this.property,
      });
      this.editing = false;
    },
    cancelEdit() {
      this.currentValue = this.val;
      this.editing = false;
    },
    changeValue(index, event) {
      const val = event.target.value;
      if (Array.isArray(this.currentVal)) {
        this.currentVal[index] = this.isString ? val : parseFloat(val);
      } else {
        this.currentVal = this.isString ? val : parseFloat(val);
      }
    }

  }
}
</script>

<style scoped>
.st0 {
  fill-rule:evenodd;
  clip-rule:evenodd;
  fill: rgb(220,220,220);
}

.edit-view .controller {
  display: flex;
}
.edit-view .controller:hover .st0 {
  fill: rgb(150,150,150);
}

.edit-view .controller.editing .st0 {
  fill: rgb(20,20,20);
}
.edit-view .controller.editing:hover .st0 {
  fill: rgb(25,25,25);
}

.edit-view .edit-control {
    width: 1.1em;
    height: 1.1em;
    margin: 0 0.6em;
    cursor: pointer;
    padding: 0 0.1em 0.1em 0.1em;
    margin-top: 0.2em;
}

.edit-view .controller.editing .edit-control {
  border-bottom: 1px dotted rgb(150,150,150);
}

.edit-view .cancel-save {
  display: flex;
}

.edit-view .cancel-save > div {
    width: 1.4em;
    height: 1.3em;
    margin: 0 0.3em;
    cursor: pointer;
    padding: 0 0.1em 0.1em 0.1em;
    margin-top: 0.2em;
}
.edit-view .cancel-save > div:hover .st0 {
  fill: rgb(150,150,150);
}

.edit-view .editor {
  display: flex;

}

.edit-view .editor input {
  width: 5em;
  background: transparent;
  color: var(--color-text);
  font-size: 15px;
  border: 1px solid rgb(30, 30, 30);
  border-radius: 3px;
  margin-right: 0.5em;
  background: rgb(49, 49, 49);
  box-shadow: inset 1px 1px 3px 1px rgba(0, 0, 0, 0.2);
}

</style>