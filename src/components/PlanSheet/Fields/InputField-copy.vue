<template>
    <td  dense class="" v-bind:style="{color: fieldColor, backgroundColor: fieldBGColor, borderColor: fieldBGColor}">
     
     
      
         <v-slider
            height="30"  
    >
    </v-slider>
     <v-text-field
                  label="Outlined"
                  placeholder="Placeholder"
                  
                  dense
                ></v-text-field>
     
     <input />
      
    </td>
</template>
<script>
export default {
  name: "my-input-field", 
  props: {
      // fieldValue: { type: Number, required: false },
      // fieldColor: { type: String, required: false },
      // fieldBGColor: { type: String, required: false },
  },
  data () {
      return {
        bpm: 40,
      
      
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

