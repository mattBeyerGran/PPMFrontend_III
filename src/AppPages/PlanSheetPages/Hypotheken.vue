<template>
  <v-container class="bottommargin">
    <PlanSheetHead title="Geschäftsplanung - Hypotheken" subtitle="Planjahr: 2022, Planversion: 3, Planungslauf: 1"/>
     <v-row no-gutters  >
        <v-col cols="1">
        <!-- fuer den linken Abstand -->
      </v-col>
      <v-col  cols="11" class="leftmargin "><hypotheken-form/></v-col>
    </v-row> 

  </v-container>
</template>

<script>
import PlanSheetHead from  '@/components/PlanSheet/PlanSheetHead'
import HypothekenForm from  '@/AppPages/PlanSheetPages/PlanSheetTables/HypothekenForm'
export default {
  name: "Hypotheken",
  components: {
    PlanSheetHead,
    HypothekenForm
  }

}
</script>