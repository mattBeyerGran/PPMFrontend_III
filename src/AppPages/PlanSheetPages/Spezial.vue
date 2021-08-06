<template>
  <v-container>
    <PlanSheetHead title="Geschäftsplanung - Spezial" subtitle="Planjahr: 2022, Planversion: 3, Planungslauf: 1"/>
     <!-- <SpezialTable/> -->
     <SpezialTable3/>
  </v-container>
</template>

<script>
import PlanSheetHead from  '@/components/PlanSheet/PlanSheetHead'
// import SpezialTable from  '@/AppPages/PlanSheetPages/PlanSheetTables/SpezialTable'
import SpezialTable3 from  '@/AppPages/PlanSheetPages/PlanSheetTables/SpezialTable3'
export default {
  name: "Spezial",
  components: {
    PlanSheetHead,
    // SpezialTable,
    SpezialTable3
  }

}
</script>