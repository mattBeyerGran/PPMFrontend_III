<template>
  <v-container class="bottommargin">
    <PlanHead 
        title="Geschäftsplanung - Hypotheken" 
        subtitle="Planjahr: 2022, Planversion: 3, Planungslauf: 1"
        v-bind:plannerName=" plName "
        v-bind:plannerRole=" plRole "
        />    
    <PlanSheetToolBar ToolBarTitle="Hypotheken - Bestandsveränderung" />
    <HypothekenTable/>

  </v-container>
</template>

<script>
import PlanHead from  '@/components/PlanSheet/PlanHead'
import PlanSheetToolBar from  '@/components/PlanSheet/PlanSheetToolBar'
import HypothekenTable from  '@/AppPages/PlanSheetPages/PlanSheetTables/PL01_PST02_HypothekenTable'
export default {
  name: "PS02_Hypotheken",
  components: {
    PlanHead,
    PlanSheetToolBar,
    HypothekenTable
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