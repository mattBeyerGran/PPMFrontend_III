<template>
  <td class="text-start font-weight-light" v-bind:style="{color: textColor, backgroundColor: textBGColor, borderColor: textBGColor}">
       <v-icon v-show="isUpload" dark color="ppmPlanElementColor" class="mr-4"  @click="copyRow" >mdi-arrow-up-thin-circle-outline</v-icon>
        {{ text }} 
  </td>
           
</template>
<script>
export default {
  name: "my-text-field",
  props: {
      isUpload: { type: Boolean, required: true },
      copyToPlan: { type: String, required: false },
      text: { type: String, required: false },
      textColor: { type: String, required: false },
      textBGColor: { type: String, required: false },
  },
  methods: {
    copyRow() {
          this.$store.commit(this.copyToPlan);      
    }
  }
}
</script>
