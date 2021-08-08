<template >
  <v-container class="bottommargin">
    <PlanHead 
      title="Integrierte Planung - Status" 
      subtitle="Planjahr: 2022, Planversion: 3, Planungslauf: 1"
      v-bind:plannerName=" plName "
      v-bind:plannerRole=" plRole "
      />
    <Status/>  
   
  </v-container>
</template>

<script>
import PlanHead from  '@/components/PlanSheet/PlanHead'
import Status from  '@/AppPages/Analytics/Status'

export default {
  name: "App",
  data(){
    return {

    }
  },
  components: {
    PlanHead,
    Status
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

<style>

</style>

 