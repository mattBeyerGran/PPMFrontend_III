// **********************************************
// *  PlanSheet: 01_03_SpezialKredit.vue        *
// *  Module: 01_03_SpezialKredit.js            *
// **********************************************

<template>
  <v-container>
    <my-plan-head 
        title="Geschäftsplanung - Spezielle Kredite" 
        subtitle="Planjahr: 2022, Planversion: 3, Planungslauf: 1"
        v-bind:plannerName=" plName "
        v-bind:plannerRole=" plRole "
        ></my-plan-head>  
    <my-plan-sheet-tool-bar ToolBarTitle="Spezielle Kredite - Bestandsveränderung" ></my-plan-sheet-tool-bar>
    <!-- PlanSheetTable -->
    <v-container>
          <v-simple-table dense>
            <thead>
                <my-table-header-5jahre jahr1="2022" jahr2="2023" jahr3="2024" jahr4="2025" jahr5="2026"></my-table-header-5jahre>
            </thead>
            <tbody>      
              
             
            </tbody>         
          <!-- </template> -->
        </v-simple-table>
    </v-container>
  </v-container>
</template>

<script>

export default {
  name: "hypotheken",
  components: {

  },
  computed: {
    plName() {
      return this.$store.getters.plannerName;
    },
    plRole() {
      return this.$store.getters.plannerRole;
    },
    data () {
      return {      
      }
    },
    
  }
}
</script>