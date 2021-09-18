<template>
  <td v-if="small"
    class="text-start" 
    v-bind:style="{
          color: textColor, 
          backgroundColor: BGColor, 
          borderColor: BGColor,
          fontSize: size,
          fontWeight: weight,
          textAlign: align
          }"
    >
       <v-icon 
          small
          dark 
          color="ppmPlanElementColor" 
          class="mr-4"  
          @click="copyRow" 
        >
          mdi-arrow-up-thin-circle-outline
        </v-icon>    
          {{ text }}      
  </td>
    <td v-else
    class="text-start" 
    v-bind:style="{
          color: textColor, 
          backgroundColor: BGColor, 
          borderColor: BGColor,
          fontSize: size,
          fontWeight: weight
          }"
    >
       <v-icon 
          dark 
          color="ppmPlanElementColor" 
          class="mr-4"  
          @click="copyRow" 
        >
          mdi-arrow-up-thin-circle-outline
        </v-icon>    
          {{ text }}      
  </td>         
</template>
<script>
export default {
  name: "my-ppm-copy-field",
  props: {
      small: { type: Boolean, required: false },
      text: { type: String, required: true },
      origin: { type: String, required: true }, // Row that shall be copied
      destination: { type: String, required: true }, // Row to that shall be copied
      weight: { type: String, required: false, default: 'normal' }, // bold, normal
      size: { type: String, required: false, default: '14px'}, // 14px, 40px
      textColor: { type: String, required: false, default: '#182F6D' },
      BGColor: { type: String, required: false, default: '#E8F0F7' },
  },
  methods: {
    copyRow() {
          this.$store.dispatch('copyRowToRow', {origin: this.origin, destination: this.destination});      
    }
  }
}
</script>
