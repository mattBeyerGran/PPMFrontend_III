<template>
    <td   class="subtitle-1 text-end ppmTabsBGColor">
      <input 
          id="planfield" 
          type="number"         
          v-model="this.getRowPS0103(fieldRow).RowData[fieldColumn][1]"
          v-bind:style="{
                color: this.getRowPS0103(fieldRow).RowData[fieldColumn][3], 
                backgroundColor: this.getRowPS0103(fieldRow).RowData[fieldColumn][4], 
                borderColor: this.getRowPS0103(fieldRow).RowData[fieldColumn][4]
                }"
          v-on:keyup.enter="updateValue"
      >
    </td>
</template>
<script>
import { mapGetters } from 'vuex';
export default {
  name: "my-ps0103-plan-field",
  props: {
      fieldRow: { type: String, required: false },
      fieldColumn: { type: Number, required: false },
  },
  computed: {
    ...mapGetters([
        'getRowPS0103'
    ]),
  },
  methods: {
    
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