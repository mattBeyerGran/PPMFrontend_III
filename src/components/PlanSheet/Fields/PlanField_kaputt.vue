<template>
    <td   class="subtitle-1 text-end ppmTabsBGColor">
      <input 
          id="planfield" 
          type="number"         
          v-model="this.stateValue"
          v-bind:style="{color: fieldColor, backgroundColor: fieldBGColor, borderColor: fieldBGColor}"
          v-on:keyup.enter="updateValue"
      >
    </td>
</template>
<script>
import { mapGetters } from 'vuex';
export default {
  name: "my-plan-field",
  props: {
      fieldRow: { type: Number, required: false },
      fieldColumn: { type: Number, required: false },
      fieldColor: { type: String, required: false },
      fieldBGColor: { type: String, required: false },
  },
  computed: {

    stateValue() {
      
      return this.$store.getters.getRow("Row03").rowElement[this.fieldColumn][1]
    },
    ...mapGetters([
        'getRow03',
        'getRow'
    ]),
    
  },
  methods: {
    updateValue() {
      
      this.storeValue=this.stateValue
     
      // this.$store.dispatch('setValue0301', {row: this.fieldRow, column: this.fieldColumn, value: this.storeValue});
      this.$store.dispatch('setRowValue', {row: this.fieldRow, column: this.fieldColumn, value: this.storeValue});
      
      
      
      // eslint-disable-next-line no-console
      // console.log(document.getElementById("planfield").value);
      
      // eslint-disable-next-line no-console
      console.log(this.stateValue);
       // eslint-disable-next-line no-console
      console.log(this.storeValue);
    }
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