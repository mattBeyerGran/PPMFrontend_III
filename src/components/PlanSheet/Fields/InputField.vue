<template>
    <td  id="input-usage"  dense class="" v-bind:style="{color: fieldColor, backgroundColor: fieldBGColor, borderColor: fieldBGColor}">
    <!-- <v-container -->
      
  
   
        <v-text-field v-bind:style="{color: fieldColor, backgroundColor: fieldBGColor, borderColor: fieldBGColor}"
          
        >
          Default Slot
        </v-text-field>
    <!-- </v-container> -->
    </td>
</template>
<script>
export default {
  name: "my-input-field", 
  props: {
      fieldValue: { type: Number, required: false },
      fieldColor: { type: String, required: false },
      fieldBGColor: { type: String, required: false },
  },
  data () {
      return {
        bpm: 40,
      text: '',
      
      }
    },
   computed: {
      // color () {
      //   if (this.bpm < 100) return 'indigo'
      //   if (this.bpm < 125) return 'teal'
      //   if (this.bpm < 140) return 'green'
      //   if (this.bpm < 175) return 'orange'
      //   return 'red'
      // }
   },
    methods: {
     
    }
}
</script>

<style>
  #input-usage .v-input__prepend-outer,
  #input-usage .v-input__append-outer,
  #input-usage .v-input__slot,
  #input-usage .v-messages {
    border: 1px dashed rgba(0,0,0, .4);
    /* background: cornflowerblue; */
  }
</style>