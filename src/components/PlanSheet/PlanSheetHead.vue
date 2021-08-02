<template >
  <v-container class="topmargin">
    <!-- Überschrift -->
    <v-row no-gutters>
      <v-col cols="1">
        <!-- fuer den linken Abstand -->
      </v-col>
       <v-col cols="11" class="leftmargin">
        <div align="left"  class="topmargin display-1 ppmPlanTitleColor--text mt-8 pl-3">      
            {{title}}
        </div>
         <div align="left"  class="ppmPlanTitleColor--text pl-4">
             {{subtitle}}
        </div>
      </v-col>     
    </v-row> 
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