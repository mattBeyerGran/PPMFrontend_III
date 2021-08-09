// **********************************************
// *  PlanSheet: PS01                           *
// *  Module: "KreditAllgemein.js"              *
// **********************************************

<template>
  <v-container>
    <PlanHead 
        title="Geschäftsplanung - Allgemeine Kredite" 
        subtitle="Planjahr: 2022, Planversion: 3, Planungslauf: 1"
        v-bind:plannerName=" plName "
        v-bind:plannerRole=" plRole "
        />    
    <PlanSheetToolBar ToolBarTitle="Allgemeine Kredite - Bestandsveränderung" />
    <KreditAllgemeinTable/>
  </v-container>
</template>

<script>
import PlanHead from  '@/components/PlanSheet/PlanHead'
import PlanSheetToolBar from  '@/components/PlanSheet/PlanSheetToolBar'
import KreditAllgemeinTable from  '@/AppPages/PlanSheetPages/PlanSheetTables/PL01_PST01_KreditAllgemeinTable'
export default {
  name: "KreditAllgemein",
  components: {
    PlanHead,
    PlanSheetToolBar,
    KreditAllgemeinTable
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