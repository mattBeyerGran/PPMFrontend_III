// **********************************************
// *  PlanSheet: 01_01_KreditAllgemein.js.      *
// *  Module: "KreditAllgemein.js"              *
// **********************************************

<template>
  <v-container>
    <my-plan-head 
        title="Geschäftsplanung - Allgemeine Kredite" 
        subtitle="Planjahr: 2022, Planversion: 3, Planungslauf: 1"
        v-bind:plannerName=" plName "
        v-bind:plannerRole=" plRole "
        ></my-plan-head>  
    <my-plan-sheet-tool-bar ToolBarTitle="Allgemeine Kredite - Bestandsveränderung" ></my-plan-sheet-tool-bar>
   <!-- PlanSheetTable -->
    <v-container>
          <v-simple-table dense class="bottommargin">
            <thead>
               
            </thead>
            <tbody>
              
              
            </tbody>                  
        </v-simple-table>
    </v-container>
  </v-container>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: "kredit-allgemein",
  components: {

  },
  computed: {
    plName() {
      return this.$store.getters.plannerName;
    },
    plRole() {
      return this.$store.getters.plannerRole;
    }
  },
    data () {
      return { 
         
      }
    },
    ...mapGetters
  }

</script>
