<template >
  <v-container class="topmargin bottommargin">
    <!-- Überschrift -->
    <v-row no-gutters>
      <v-col cols="1">
        <!-- fuer den linken Abstand -->
      </v-col>
       <v-col cols="11" class="leftmargin">
        <div align="left"  class="topmargin display-1 ppmPlanTitleColor--text mt-8 pl-3">
          <!-- class="display-1 ppmPlanTitleColor--text mt-8 pl-4"> -->
            Integrierte Planung - Status 
        </div>
    
         <div align="left"  class=" header ppmPlanTitleColor--text pl-4">
          <!-- class="display-1 ppmPlanTitleColor--text mt-8 pl-4"> -->
            Planjahr: 2021,  Planversion: 3, Planungslauf: 1 
        </div>
      </v-col>   
    </v-row>
    <!-- Content -->
     <v-row no-gutters  >
        <v-col cols="1">
        <!-- fuer den linken Abstand -->
      </v-col>
      <v-col cols="11" class="leftmargin">
       <PlanungsStatus/>  
     </v-col>
    </v-row>
  </v-container>
</template>

<script>
import PlanungsStatus from  '@/AppPages/Analytics/Status'

export default {
  name: "App",
  data(){
    return {

    }
  },
  components: {
    PlanungsStatus
  },
  
}
</script>

<style>

</style>

 