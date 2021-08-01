<template >
<div>
  <PlanSheetHead title="Topic-Page-Bezeichnung" subtitle="Planjahr(e): 2022,  Planversion: 3, Planungslauf: 1 "/>
    <v-container class="topmargin bottommargin">
    
      <!-- Content -->
      <v-row no-gutters  >
          <v-col cols="1">
          <!-- fuer den linken Abstand -->
        </v-col>
        <v-col cols="11" class="leftmargin">
          
        </v-col>
      </v-row> 
      <v-row justify="center" class="topmargin">
        <v-img
        
          max-width="450"
          src="@/assets/under-construction.png"
          >
        </v-img>
      </v-row>
    </v-container>
</div>
  
</template>

<script>
import PlanSheetHead from  '@/components/PlanSheet/PlanSheetHead'

export default {
  name: "App",
  data(){
    return {

    }
  },
  components: {
    PlanSheetHead
  },
  
}
</script>

<style>

</style>

 