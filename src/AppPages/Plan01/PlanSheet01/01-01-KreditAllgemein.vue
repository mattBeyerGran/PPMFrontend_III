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
          <v-simple-table dense>
            <thead>
                <my-table-header-monate></my-table-header-monate>
            </thead>
            <tbody>

              <my-goal-row :ElementField="RowTitles[0].ElementText" :EndTextField="RowTitles[0].EndText">            
                    <my-value-field 
                        v-for="value in Row01FieldValues"
                        :key="value.id"
                        :fieldValue="value.mbgFieldValue" 
                        :fieldColor="value.mbgFieldColor"
                    ></my-value-field>            
              </my-goal-row>             
              <my-goal-row :ElementField="RowTitles[1].ElementText" :EndTextField="RowTitles[1].EndText">            
                      <my-value-field 
                          v-for="value in Row01FieldValues"
                          :key="value.id"
                          :fieldValue="value.mbgFieldValue" 
                          :fieldColor="value.mbgFieldColor"
                      ></my-value-field>            
                </my-goal-row>            
              <my-divider></my-divider>
            </tbody>                  
        </v-simple-table>
        
        <!-- <div v-bind:style="{ color: activeColor}"> 3333</div> -->
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
          RowTitles: [
            {
              id: "Row1",
              ElementText: "Default",
              EndText: "Controlling-Vorgabe"
            },
            {
              id: "Row2",
              ElementText: "Goal",
              EndText: "Board-Vorgabe"
            },
          ],
          Row02FieldValues: [
            {
              id: 'Jan',
              mbgFieldValue: 528.26,
              mbgFieldColor: '#182F6D'
            },
             {
              id: 'Feb',
              mbgFieldValue: 528.26,
              mbgFieldColor: '#182F6D'
            },
             {
              id: 'Mar',
              mbgFieldValue: 528.26,
              mbgFieldColor: '#182F6D'
            },
            {
              id: 'Apr',
              mbgFieldValue: 528.26,
              mbgFieldColor: '#182F6D'
            },
             {
              id: 'Mai',
              mbgFieldValue: 528.26,
              mbgFieldColor: '#182F6D'
            },
             {
              id: 'Jun',
              mbgFieldValue: 528.26,
              mbgFieldColor: '#182F6D'
            },
            {
              id: 'Jul',
              mbgFieldValue: 528.26,
              mbgFieldColor: '#182F6D'
            },
             {
              id: 'Aug',
              mbgFieldValue: 528.26,
              mbgFieldColor: '#182F6D'
            },
             {
              id: 'Sep',
              mbgFieldValue: 528.26,
              mbgFieldColor: '#182F6D'
            },
            {
              id: 'Okt',
              mbgFieldValue: 528.26,
              mbgFieldColor: '#182F6D'
            },
             {
              id: 'Nov',
              mbgFieldValue: 528.26,
              mbgFieldColor: '#182F6D'
            },
             {
              id: 'Dez',
              mbgFieldValue: 528.26,
              mbgFieldColor: '#182F6D'
            },
          ],
                  Row01FieldValues: [
            {
              id: 'Jan',
              mbgFieldValue: 628.26,
              mbgFieldColor: '#182F6D'
            },
             {
              id: 'Feb',
              mbgFieldValue: 728.26,
              mbgFieldColor: '#182F6D'
            },
             {
              id: 'Mar',
              mbgFieldValue: 1228.26,
              mbgFieldColor: '#182F6D'
            },
            {
              id: 'Apr',
              mbgFieldValue: 528.26,
              mbgFieldColor: '#182F6D'
            },
             {
              id: 'Mai',
              mbgFieldValue: 528.26,
              mbgFieldColor: '#3CB283'
            },
             {
              id: 'Jun',
              mbgFieldValue: 528.26,
              mbgFieldColor: '#3CB283'
            },
            {
              id: 'Jul',
              mbgFieldValue: 528.26,
              mbgFieldColor: '#182F6D'
            },
             {
              id: 'Aug',
              mbgFieldValue: 528.26,
              mbgFieldColor: '#182F6D'
            },
             {
              id: 'Sep',
              mbgFieldValue: 528.26,
              mbgFieldColor: '#182F6D'
            },
            {
              id: 'Okt',
              mbgFieldValue: 528.26,
              mbgFieldColor: '#D08B01'
            },
             {
              id: 'Nov',
              mbgFieldValue: 528.26,
              mbgFieldColor: '#D08B01'
            },
             {
              id: 'Dez',
              mbgFieldValue: 528.26,
              mbgFieldColor: '#182F6D'
            },
          ]
      
        
      }
    },
    ...mapGetters
  }

</script>
