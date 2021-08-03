<template >
  <v-container class="topmargin">
    <!-- Überschrift -->
    
        <div align="left"  class="topmargin display-1 ppmPlanTitleColor--text mt-8 pl-3">      
            {{title}}
        </div>
         <div align="left"  class="ppmPlanTitleColor--text pl-4">
             {{subtitle}}
        </div>
      
  </v-container>
</template>

<script>


export default {
  name: "PlanSheetHead",
  props: {
    title: {
      type: String,
      required: true
    },
    subtitle: {
      type: String,
      required: true
    }
  }
}
</script>