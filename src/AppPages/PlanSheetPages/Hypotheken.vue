<template>
  <v-container>
    <PlanSheetHead title="Geschäftsplanung - Hypotheken" subtitle="Planjahr: 2022, Planversion: 3, Planungslauf: 1"/>
     <v-row no-gutters  >
        <v-col cols="1">
        <!-- fuer den linken Abstand -->
      </v-col>
      <v-col  cols="11" class="leftmargin "><HypothekenTable/></v-col>
    </v-row> 

  </v-container>
</template>

<script>
import PlanSheetHead from  '@/components/PlanSheet/PlanSheetHead'
import HypothekenTable from  '@/AppPages/PlanSheetPages/PlanSheetTables/HypothekenTable'
export default {
  name: "Hypotheken",
  components: {
    PlanSheetHead,
    HypothekenTable
  }

}
</script>