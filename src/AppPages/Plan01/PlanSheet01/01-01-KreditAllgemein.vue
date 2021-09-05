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
                <my-table-header-monate></my-table-header-monate>
            </thead>
            <tbody>
              <my-divider></my-divider>
              
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
            {
              id: "Row3",
              ElementText: "Match (1:1)",
              EndText: "Bitte mit BU-Manager PaPM abstimmen"
            },
            {
              id: "Row4",
              ElementText: "Zugang",
              EndText: ""
            },
            {
              id: "Row5",
              ElementText: "Abgang",
              EndText: ""
            },
            {
              id: "Row6",
              ElementText: "Anfangbestand",
              EndText: ""
            },
            {
              id: "Row7",
              ElementText: "Endbestand",
              EndText: ""
            },
            {
              id: "Row8",
              ElementText: "Kundenzuwachs",
              EndText: "in %"
            },
            {
              id: "Row9",
              ElementText: "Forecast Allg.Kredite",
              EndText: "in Mio. Euro"
            }
          ],
          Row01FieldValues: [
            {
              id: 'Jan',
              mbgFieldValue: 528.26,
              mbgFieldColor: '#3CB283',
              mbgFieldBGColor: '#E8F0F7'
            },
             {
              id: 'Feb',
              mbgFieldValue: 528.26,
              mbgFieldColor: '#3CB283',
              mbgFieldBGColor: '#E8F0F7'
            },
             {
              id: 'Mar',
              mbgFieldValue: 528.26,
              mbgFieldColor: '#F44336',
              mbgFieldBGColor: '#E8F0F7'
            },
            {
              id: 'Apr',
              mbgFieldValue: 528.26,
              mbgFieldColor: '#182F6D',
              mbgFieldBGColor: '#E8F0F7'
            },
             {
              id: 'Mai',
              mbgFieldValue: 528.26,
              mbgFieldColor: '#3CB283',
              mbgFieldBGColor: '#E8F0F7'
            },
             {
              id: 'Jun',
              mbgFieldValue: 528.26,
              mbgFieldColor: '#3CB283',
              mbgFieldBGColor: '#E8F0F7'
            },
            {
              id: 'Jul',
              mbgFieldValue: 528.26,
              mbgFieldColor: '#182F6D',
              mbgFieldBGColor: '#E8F0F7'
            },
             {
              id: 'Aug',
              mbgFieldValue: 528.26,
              mbgFieldColor: '#182F6D',
              mbgFieldBGColor: '#E8F0F7'
            },
             {
              id: 'Sep',
              mbgFieldValue: 528.26,
              mbgFieldColor: '#182F6D',
              mbgFieldBGColor: '#E8F0F7'
            },
            {
              id: 'Okt',
              mbgFieldValue: 528.26,
              mbgFieldColor: '#3CB283',
              mbgFieldBGColor: '#E8F0F7'
            },
             {
              id: 'Nov',
              mbgFieldValue: 528.26,
              mbgFieldColor: '#182F6D',
              mbgFieldBGColor: '#E8F0F7'
            },
             {
              id: 'Dez',
              mbgFieldValue: 528.26,
              mbgFieldColor: '#182F6D',
              mbgFieldBGColor: '#E8F0F7'
            },
          ],
          Row02FieldValues: [
            {
              id: 'Jan',
              mbgFieldValue: 628.26,
              mbgFieldColor: '#3CB283',
              mbgFieldBGColor: '#E8F0F7'
            },
             {
              id: 'Feb',
              mbgFieldValue: 728.26,
              mbgFieldColor: '#3CB283',
              mbgFieldBGColor: '#E8F0F7'
            },
             {
              id: 'Mar',
              mbgFieldValue: 1228.26,
              mbgFieldColor: '#F44336',
              mbgFieldBGColor: '#E8F0F7'
            },
            {
              id: 'Apr',
              mbgFieldValue: 528.26,
              mbgFieldColor: '#182F6D',
              mbgFieldBGColor: '#E8F0F7'
            },
             {
              id: 'Mai',
              mbgFieldValue: 528.26,
              mbgFieldColor: '#3CB283',
              mbgFieldBGColor: '#E8F0F7'
            },
             {
              id: 'Jun',
              mbgFieldValue: 528.26,
              mbgFieldColor: '#3CB283',
              mbgFieldBGColor: '#E8F0F7'
            },
            {
              id: 'Jul',
              mbgFieldValue: 528.26,
              mbgFieldColor: '#182F6D',
              mbgFieldBGColor: '#E8F0F7'
            },
             {
              id: 'Aug',
              mbgFieldValue: 528.26,
              mbgFieldColor: '#182F6D',
              mbgFieldBGColor: '#E8F0F7'
            },
             {
              id: 'Sep',
              mbgFieldValue: 528.26,
              mbgFieldColor: '#182F6D',
              mbgFieldBGColor: '#E8F0F7'
            },
            {
              id: 'Okt',
              mbgFieldValue: 528.26,
              mbgFieldColor: '#F44336',
              mbgFieldBGColor: '#E8F0F7'
            },
             {
              id: 'Nov',
              mbgFieldValue: 528.26,
              mbgFieldColor: '#182F6D',
              mbgFieldBGColor: '#E8F0F7'
            },
             {
              id: 'Dez',
              mbgFieldValue: 528.26,
              mbgFieldColor: '#182F6D',
              mbgFieldBGColor: '#E8F0F7'
            },
          ],
          Row03FieldValues: [
            {
              id: 'Jan',
              mbgFieldValue: 628.26,
              mbgFieldColor: '#182F6D',
              mbgFieldBGColor: '#E8F0F7'
            },
             {
              id: 'Feb',
              mbgFieldValue: 728.26,
              mbgFieldColor: '#182F6D',
              mbgFieldBGColor: '#E8F0F7'
            },
             {
              id: 'Mar',
              mbgFieldValue: 1228.26,
              mbgFieldColor: '#182F6D',
              mbgFieldBGColor: '#E8F0F7'
            },
            {
              id: 'Apr',
              mbgFieldValue: 528.26,
              mbgFieldColor: '#182F6D',
              mbgFieldBGColor: '#E8F0F7'
            },
             {
              id: 'Mai',
              mbgFieldValue: 528.26,
              mbgFieldColor: '#3CB283',
              mbgFieldBGColor: '#E8F0F7'
            },
             {
              id: 'Jun',
              mbgFieldValue: 528.26,
              mbgFieldColor: '#3CB283',
              mbgFieldBGColor: '#E8F0F7'
            },
            {
              id: 'Jul',
              mbgFieldValue: 528.26,
              mbgFieldColor: '#182F6D',
              mbgFieldBGColor: '#E8F0F7'
            },
             {
              id: 'Aug',
              mbgFieldValue: 528.26,
              mbgFieldColor: '#182F6D',
              mbgFieldBGColor: '#E8F0F7'
            },
             {
              id: 'Sep',
              mbgFieldValue: 528.26,
              mbgFieldColor: '#182F6D',
              mbgFieldBGColor: '#E8F0F7'
            },
            {
              id: 'Okt',
              mbgFieldValue: 528.26,
              mbgFieldColor: '#D08B01',
              mbgFieldBGColor: '#E8F0F7'
            },
             {
              id: 'Nov',
              mbgFieldValue: 528.26,
              mbgFieldColor: '#182F6D',
              mbgFieldBGColor: '#E8F0F7'
            },
             {
              id: 'Dez',
              mbgFieldValue: 528.26,
              mbgFieldColor: '#182F6D',
              mbgFieldBGColor: '#E8F0F7'
            },
          ],
          Row04FieldValues: [
            {
              id: 'Jan',
              mbgFieldValue: 628.26,
              mbgFieldColor: '#3CB283',
              mbgFieldBGColor: '#B9F6CA'
            },
             {
              id: 'Feb',
              mbgFieldValue: 728.26,
              mbgFieldColor: '#3CB283',
              mbgFieldBGColor: '#B9F6CA'
            },
             {
              id: 'Mar',
              mbgFieldValue: 1228.26,
              mbgFieldColor: '#182F6D',
              mbgFieldBGColor: '#FFCDD2'
            },
            {
              id: 'Apr',
              mbgFieldValue: 528.26,
              mbgFieldColor: '#182F6D',
              mbgFieldBGColor: '#FFFFFF'
            },
             {
              id: 'Mai',
              mbgFieldValue: 528.26,
              mbgFieldColor: '#3CB283',
              mbgFieldBGColor: '#B9F6CA'
            },
             {
              id: 'Jun',
              mbgFieldValue: 528.26,
              mbgFieldColor: '#3CB283',
              mbgFieldBGColor: '#B9F6CA'
            },
            {
              id: 'Jul',
              mbgFieldValue: 528.26,
              mbgFieldColor: '#182F6D',
              mbgFieldBGColor: '#FFFFFF'
            },
             {
              id: 'Aug',
              mbgFieldValue: 528.26,
              mbgFieldColor: '#182F6D',
              mbgFieldBGColor: '#FFFFFF'
            },
             {
              id: 'Sep',
              mbgFieldValue: 528.26,
              mbgFieldColor: '#182F6D',
              mbgFieldBGColor: '#FFFFFF'
            },
            {
              id: 'Okt',
              mbgFieldValue: 528.26,
              mbgFieldColor: '#D08B01',
              mbgFieldBGColor: '#FFF9C4'
            },
             {
              id: 'Nov',
              mbgFieldValue: 528.26,
              mbgFieldColor: '#182F6D',
              mbgFieldBGColor: '#FFFFFF'
            },
             {
              id: 'Dez',
              mbgFieldValue: 528.26,
              mbgFieldColor: '#182F6D',
              mbgFieldBGColor: '#FFFFFF'
            },
          ],
          Row05FieldValues: [
            {
              id: 'Jan',
              mbgFieldValue: 628.26,
              mbgFieldColor: '#3CB283',
              mbgFieldBGColor: '#B9F6CA'
            },
             {
              id: 'Feb',
              mbgFieldValue: 728.26,
              mbgFieldColor: '#3CB283',
              mbgFieldBGColor: '#B9F6CA'
            },
             {
              id: 'Mar',
              mbgFieldValue: 1228.26,
              mbgFieldColor: '#182F6D',
              mbgFieldBGColor: '#FFCDD2'
            },
            {
              id: 'Apr',
              mbgFieldValue: 528.26,
              mbgFieldColor: '#182F6D',
              mbgFieldBGColor: '#FFFFFF'
            },
             {
              id: 'Mai',
              mbgFieldValue: 528.26,
              mbgFieldColor: '#3CB283',
              mbgFieldBGColor: '#B9F6CA'
            },
             {
              id: 'Jun',
              mbgFieldValue: 528.26,
              mbgFieldColor: '#3CB283',
              mbgFieldBGColor: '#B9F6CA'
            },
            {
              id: 'Jul',
              mbgFieldValue: 528.26,
              mbgFieldColor: '#182F6D',
              mbgFieldBGColor: '#FFFFFF'
            },
             {
              id: 'Aug',
              mbgFieldValue: 528.26,
              mbgFieldColor: '#182F6D',
              mbgFieldBGColor: '#FFFFFF'
            },
             {
              id: 'Sep',
              mbgFieldValue: 528.26,
              mbgFieldColor: '#182F6D',
              mbgFieldBGColor: '#FFFFFF'
            },
            {
              id: 'Okt',
              mbgFieldValue: 528.26,
              mbgFieldColor: '#D08B01',
              mbgFieldBGColor: '#FFF9C4'
            },
             {
              id: 'Nov',
              mbgFieldValue: 528.26,
              mbgFieldColor: '#182F6D',
              mbgFieldBGColor: '#FFFFFF'
            },
             {
              id: 'Dez',
              mbgFieldValue: 528.26,
              mbgFieldColor: '#182F6D',
              mbgFieldBGColor: '#FFFFFF'
            },
          ],
          Row06FieldValues: [
            {
              id: 'Jan',
              mbgFieldValue: 628.26,
              mbgFieldColor: '#182F6D',
              mbgFieldBGColor: '#E8F0F7'
            },
             {
              id: 'Feb',
              mbgFieldValue: 728.26,
              mbgFieldColor: '#182F6D',
              mbgFieldBGColor: '#E8F0F7'
            },
             {
              id: 'Mar',
              mbgFieldValue: 1228.26,
              mbgFieldColor: '#182F6D',
              mbgFieldBGColor: '#E8F0F7'
            },
            {
              id: 'Apr',
              mbgFieldValue: 528.26,
              mbgFieldColor: '#182F6D',
              mbgFieldBGColor: '#E8F0F7'
            },
             {
              id: 'Mai',
              mbgFieldValue: 528.26,
              mbgFieldColor: '#182F6D',
              mbgFieldBGColor: '#E8F0F7'
            },
             {
              id: 'Jun',
              mbgFieldValue: 528.26,
              mbgFieldColor: '#182F6D',
              mbgFieldBGColor: '#E8F0F7'
            },
            {
              id: 'Jul',
              mbgFieldValue: 528.26,
              mbgFieldColor: '#182F6D',
              mbgFieldBGColor: '#E8F0F7'
            },
             {
              id: 'Aug',
              mbgFieldValue: 528.26,
              mbgFieldColor: '#182F6D',
              mbgFieldBGColor: '#E8F0F7'
            },
             {
              id: 'Sep',
              mbgFieldValue: 528.26,
              mbgFieldColor: '#182F6D',
              mbgFieldBGColor: '#E8F0F7'
            },
            {
              id: 'Okt',
              mbgFieldValue: 528.26,
              mbgFieldColor: '#182F6D',
              mbgFieldBGColor: '#E8F0F7'
            },
             {
              id: 'Nov',
              mbgFieldValue: 528.26,
              mbgFieldColor: '#182F6D',
              mbgFieldBGColor: '#E8F0F7'
            },
             {
              id: 'Dez',
              mbgFieldValue: 528.26,
              mbgFieldColor: '#182F6D',
              mbgFieldBGColor: '#E8F0F7'
            },
          ],
          Row07FieldValues: [
            {
              id: 'Jan',
              mbgFieldValue: 628.26,
              mbgFieldColor: '#182F6D',
              mbgFieldBGColor: '#E8F0F7'
            },
             {
              id: 'Feb',
              mbgFieldValue: 728.26,
              mbgFieldColor: '#182F6D',
              mbgFieldBGColor: '#E8F0F7'
            },
             {
              id: 'Mar',
              mbgFieldValue: 1228.26,
              mbgFieldColor: '#182F6D',
              mbgFieldBGColor: '#E8F0F7'
            },
            {
              id: 'Apr',
              mbgFieldValue: 528.26,
              mbgFieldColor: '#182F6D',
              mbgFieldBGColor: '#E8F0F7'
            },
             {
              id: 'Mai',
              mbgFieldValue: 528.26,
              mbgFieldColor: '#182F6D',
              mbgFieldBGColor: '#E8F0F7'
            },
             {
              id: 'Jun',
              mbgFieldValue: 528.26,
              mbgFieldColor: '#182F6D',
              mbgFieldBGColor: '#E8F0F7'
            },
            {
              id: 'Jul',
              mbgFieldValue: 528.26,
              mbgFieldColor: '#182F6D',
              mbgFieldBGColor: '#E8F0F7'
            },
             {
              id: 'Aug',
              mbgFieldValue: 528.26,
              mbgFieldColor: '#182F6D',
              mbgFieldBGColor: '#E8F0F7'
            },
             {
              id: 'Sep',
              mbgFieldValue: 528.26,
              mbgFieldColor: '#182F6D',
              mbgFieldBGColor: '#E8F0F7'
            },
            {
              id: 'Okt',
              mbgFieldValue: 528.26,
              mbgFieldColor: '#182F6D',
              mbgFieldBGColor: '#E8F0F7'
            },
             {
              id: 'Nov',
              mbgFieldValue: 528.26,
              mbgFieldColor: '#182F6D',
              mbgFieldBGColor: '#E8F0F7'
            },
             {
              id: 'Dez',
              mbgFieldValue: 528.26,
              mbgFieldColor: '#182F6D',
              mbgFieldBGColor: '#E8F0F7'
            },
          ],
          Row08FieldValues: [
            {
              id: 'Jan',
              mbgFieldValue: 628.26,
              mbgFieldColor: '#182F6D',
              mbgFieldBGColor: '#E8F0F7'
            },
             {
              id: 'Feb',
              mbgFieldValue: 728.26,
              mbgFieldColor: '#182F6D',
              mbgFieldBGColor: '#E8F0F7'
            },
             {
              id: 'Mar',
              mbgFieldValue: 1228.26,
              mbgFieldColor: '#182F6D',
              mbgFieldBGColor: '#E8F0F7'
            },
            {
              id: 'Apr',
              mbgFieldValue: 528.26,
              mbgFieldColor: '#182F6D',
              mbgFieldBGColor: '#E8F0F7'
            },
             {
              id: 'Mai',
              mbgFieldValue: 528.26,
              mbgFieldColor: '#182F6D',
              mbgFieldBGColor: '#E8F0F7'
            },
             {
              id: 'Jun',
              mbgFieldValue: 528.26,
              mbgFieldColor: '#182F6D',
              mbgFieldBGColor: '#E8F0F7'
            },
            {
              id: 'Jul',
              mbgFieldValue: 528.26,
              mbgFieldColor: '#182F6D',
              mbgFieldBGColor: '#E8F0F7'
            },
             {
              id: 'Aug',
              mbgFieldValue: 528.26,
              mbgFieldColor: '#182F6D',
              mbgFieldBGColor: '#E8F0F7'
            },
             {
              id: 'Sep',
              mbgFieldValue: 528.26,
              mbgFieldColor: '#182F6D',
              mbgFieldBGColor: '#E8F0F7'
            },
            {
              id: 'Okt',
              mbgFieldValue: 528.26,
              mbgFieldColor: '#182F6D',
              mbgFieldBGColor: '#E8F0F7'
            },
             {
              id: 'Nov',
              mbgFieldValue: 528.26,
              mbgFieldColor: '#182F6D',
              mbgFieldBGColor: '#E8F0F7'
            },
             {
              id: 'Dez',
              mbgFieldValue: 528.26,
              mbgFieldColor: '#182F6D',
              mbgFieldBGColor: '#E8F0F7'
            },
          ],
          Row09FieldValues: [
            {
              id: 'Jan',
              mbgFieldValue: 628.26,
              mbgFieldColor: '#182F6D',
              mbgFieldBGColor: '#E8F0F7'
            },
             {
              id: 'Feb',
              mbgFieldValue: 728.26,
              mbgFieldColor: '#182F6D',
              mbgFieldBGColor: '#E8F0F7'
            },
             {
              id: 'Mar',
              mbgFieldValue: 1228.26,
              mbgFieldColor: '#182F6D',
              mbgFieldBGColor: '#E8F0F7'
            },
            {
              id: 'Apr',
              mbgFieldValue: 528.26,
              mbgFieldColor: '#182F6D',
              mbgFieldBGColor: '#E8F0F7'
            },
             {
              id: 'Mai',
              mbgFieldValue: 528.26,
              mbgFieldColor: '#182F6D',
              mbgFieldBGColor: '#E8F0F7'
            },
             {
              id: 'Jun',
              mbgFieldValue: 528.26,
              mbgFieldColor: '#182F6D',
              mbgFieldBGColor: '#E8F0F7'
            },
            {
              id: 'Jul',
              mbgFieldValue: 528.26,
              mbgFieldColor: '#182F6D',
              mbgFieldBGColor: '#E8F0F7'
            },
             {
              id: 'Aug',
              mbgFieldValue: 528.26,
              mbgFieldColor: '#182F6D',
              mbgFieldBGColor: '#E8F0F7'
            },
             {
              id: 'Sep',
              mbgFieldValue: 528.26,
              mbgFieldColor: '#182F6D',
              mbgFieldBGColor: '#E8F0F7'
            },
            {
              id: 'Okt',
              mbgFieldValue: 528.26,
              mbgFieldColor: '#182F6D',
              mbgFieldBGColor: '#E8F0F7'
            },
             {
              id: 'Nov',
              mbgFieldValue: 528.26,
              mbgFieldColor: '#182F6D',
              mbgFieldBGColor: '#E8F0F7'
            },
             {
              id: 'Dez',
              mbgFieldValue: 528.26,
              mbgFieldColor: '#182F6D',
              mbgFieldBGColor: '#E8F0F7'
            },
          ]         
        
      }
    },
    ...mapGetters
  }

</script>
