// **********************************************
// *  PlanSheet: PS03                           *
// *  Module: "Spezial.js"                      *
// **********************************************
<template>
  <v-container>
    <PlanHead 
        title="Geschäftsplanung - Spezialkredite" 
        subtitle="Planjahr: 2022, Planversion: 3, Planungslauf: 1"
        v-bind:plannerName=" plName "
        v-bind:plannerRole=" plRole "
        /> 
     <PlanSheetToolBar ToolBarTitle="Spezielle Kredite - Bestandsveränderung" />   
     <SpezialTable/>
  </v-container>
</template>

<script>
import PlanHead from  '@/components/PlanSheet/PlanHead'
import PlanSheetToolBar from  '@/components/PlanSheet/PlanSheetToolBar'
import SpezialTable from  '@/AppPages/PlanSheetPages/PlanSheetTables/SpezialTable'
export default {
  name: "Spezial",
  components: {
    PlanHead,
    PlanSheetToolBar,
    SpezialTable
  },
  computed: {
    plName() {
      return this.$store.getters.plannerName;
    },
    plRole() {
      return this.$store.getters.plannerRole;
    }
  }

}
</script>