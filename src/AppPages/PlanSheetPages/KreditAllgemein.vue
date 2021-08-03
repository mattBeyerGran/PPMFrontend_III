<template>
  <v-container>
    <PlanSheetHead title="Geschäftsplanung - Allgemeine Kredite" subtitle="Planjahr: 2022, Planversion: 3, Planungslauf: 1"/>
    
    <KreditAllgemeinTable/>
  </v-container>
</template>

<script>
import PlanSheetHead from  '@/components/PlanSheet/PlanSheetHead'
import KreditAllgemeinTable from  '@/AppPages/PlanSheetPages/PlanSheetTables/KreditAllgemeinTable'
export default {
  name: "Spezial",
  components: {
    PlanSheetHead,
    KreditAllgemeinTable
  }

}
</script>