<template>
  <v-container class="bottommargin">
    <PlanSheetHead title="Geschäftsplanung - Hypotheken" subtitle="Planjahr: 2022, Planversion: 3, Planungslauf: 1"/>
     <HypothekenForm/>

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