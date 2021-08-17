<template>
  <td v-bind:style="{backgroundColor: actionBGColor, borderColor: actionBGColor}">
       <v-icon dark color="ppmPlanElementColor" class="mr-4" >mdi-pencil</v-icon>
      <v-icon v-show="isParallel" dark color="ppmPlanElementColor" class="mr-4" @click="showRowChilds" >mdi-chart-timeline-variant-shimmer</v-icon>
      <v-icon v-show="isReload" dark color="ppmCancel" class="mr-4" @click="reset">mdi-reload</v-icon> 
      <v-icon v-show="isOK" dark color="ppmOK" class="mr-4" >mdi-check</v-icon> 
  </td>
           
</template>
<script>
export default {
  name: "my-action-field",
  props: {
      isParallel: { type: Boolean, required: false},   
      isReload: { type: Boolean, required: false},
      isOK: { type: Boolean, required: false},
      resetData: {type: String, required: false },
      showChilds: { type: String, required: false },
      actionBGColor: { type: String, required: false },
  },
  methods: {
    showRowChilds() {
          this.$store.commit(this.showChilds);   
    },
    reset() {
          this.$store.commit(this.resetData);   
    }
  }
}
</script>
