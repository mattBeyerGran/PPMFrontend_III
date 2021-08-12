// **********************************************
// *  PlanSheet: 01_02_Hypotheken.vue.          *
// *  Module: 01_02_Hypotheken.js               *
// **********************************************

<template>
  <v-container>
    <my-plan-head 
        title="Geschäftsplanung - Hypotheken" 
        subtitle="Planjahr: 2022, Planversion: 3, Planungslauf: 1"
        v-bind:plannerName=" plName "
        v-bind:plannerRole=" plRole "
        ></my-plan-head>  
    <my-plan-sheet-tool-bar ToolBarTitle="Hypotheken - Bestandsveränderung" ></my-plan-sheet-tool-bar>
    <!-- PlanSheetTable -->
    <v-container>
          <v-simple-table dense>
            <thead>
                <my-table-header-quartale></my-table-header-quartale>
            </thead>
            <tbody>      
              <my-goal-row></my-goal-row>
             
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
    }
  }
}
</script>