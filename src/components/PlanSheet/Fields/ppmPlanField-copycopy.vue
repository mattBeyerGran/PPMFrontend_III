<template>
    <td  v-if="fieldColumn===1" class="subtitle-1 text-end ppmTabsBGColor">
      <input 
          id="planfield" 
          type="number"         
          v-model="this.getRow(fieldRow).Value01"
         
          v-on:keyup.enter="updateValue"
      >
    </td>
    <td  v-else-if="fieldColumn===2" class="subtitle-1 text-end ppmTabsBGColor">
      <input 
          id="planfield" 
          type="number"         
          v-model="this.getRow(fieldRow).Value02"
         
          v-on:keyup.enter="updateValue"
      >
    </td>
    <td  v-else-if="fieldColumn===3" class="subtitle-1 text-end ppmTabsBGColor">
      <input 
          id="planfield" 
          type="number"         
          v-model="this.getRow(fieldRow).Value03"
         
          v-on:keyup.enter="updateValue"
      >
    </td>
    <td  v-else-if="fieldColumn===4" class="subtitle-1 text-end ppmTabsBGColor">
      <input 
          id="planfield" 
          type="number"         
          v-model="this.getRow(fieldRow).Value04"
         
          v-on:keyup.enter="updateValue"
      >
    </td>
    <td  v-else-if="fieldColumn===5" class="subtitle-1 text-end ppmTabsBGColor">
      <input 
          id="planfield" 
          type="number"         
          v-model="this.getRow(fieldRow).Value05"
         
          v-on:keyup.enter="updateValue"
      >
    </td>
</template>
<script>
import { mapGetters } from 'vuex';
export default {
  name: "my-ppm-plan-field",
  props: {
      fieldRow: { type: String, required: true },
      fieldColumn: { type: Number, required: true },
  },
  computed: {
    ...mapGetters([
        'getRow'
    ]),
  },
  methods: {
    updateValue() {
          this.$store.dispatch('updateField', {fieldRow: this.fieldRow, fieldColumn: this.fieldColumn});
    },
  },

  data () {
      return {
        col: 0,
        storeValue: 0
      }
    },
}
</script>
<style>
  #planfield {
    margin-right: 0%;
    margin-left: 0%;
    max-width: 100px;
    text-align: right;
  }
</style>