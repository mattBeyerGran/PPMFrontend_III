<template >
    <tr>        
        <td class="text-start ppmDarkTextColor--text ppmTabsBGColor subtitle-1">
          <v-icon dark color="ppmPlanElementColor" class="mr-2" >mdi-head-question-outline</v-icon>
              {{ ElementField }}
        </td>    
          <slot></slot> 
                
        <td class="ppmTabsBGColor">
            
            <v-icon dark color="ppmPlanElementColor" class="mr-4" >mdi-pencil</v-icon>
            <v-icon v-show="isParallel" dark color="ppmPlanElementColor" class="mr-4" @click="showRowChilds" >mdi-chart-timeline-variant-shimmer</v-icon>
            <v-icon v-show="isReload" dark color="ppmCancel" class="mr-4" >mdi-reload</v-icon> 
            <v-icon v-show="isOK" dark color="ppmOK" class="mr-4" >mdi-check</v-icon> 
        </td>
    </tr>    
</template>

<script>
export default {
  name: "my-plan-row",
  props: {    
      ElementField: { type: String, required: false },
      isParallel: { type: Boolean, required: false},   
      isReload: { type: Boolean, required: false},
      isOK: { type: Boolean, required: false},
      showChilds: { type: String, required: false },
      
  },
  methods: {
    showRowChilds() {
          this.$store.commit(this.showChilds);
        
    }
  }
}
</script>


