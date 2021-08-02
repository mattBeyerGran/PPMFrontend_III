<template>
  <v-container>
    <PlanSheetHead title="Geschäftsplanung - Spezial" subtitle="Planjahr: 2022, Planversion: 3, Planungslauf: 1"/>
     <v-row no-gutters  >
        <v-col cols="1">
        <!-- fuer den linken Abstand -->
      </v-col>
      <v-col  cols="11" class="leftmargin "><SpezialTable/></v-col>
    </v-row> 

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