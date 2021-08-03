<template>
  <v-container>
    <PlanSheetHead title="Geschäftsplanung - Spezial" subtitle="Planjahr: 2022, Planversion: 3, Planungslauf: 1"/>
     <SpezialTable/>
  </v-container>
</template>

<script>
import PlanSheetHead from  '@/components/PlanSheet/PlanSheetHead'
import SpezialTable from  '@/AppPages/PlanSheetPages/PlanSheetTables/SpezialTable'
export default {
  name: "Spezial",
  components: {
    PlanSheetHead,
    SpezialTable
  }

}
</script>