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
              <my-title-row ElementField="Bestandsveränderung in Mio." ColumnText="Euro" EndTextField="">
              </my-title-row>  
              <my-calc-row :ElementField="RowTitles[5].ElementText" :EndTextField="RowTitles[5].EndText">
                          <my-plan-field 
                          v-for="value in Row06FieldValues"
                          :key="value.id"
                          :fieldValue="value.mbgFieldValue" 
                          :fieldColor="value.mbgFieldColor"
                          :fieldBGColor="value.mbgFieldBGColor"
                      ></my-plan-field> 
                </my-calc-row>  
              <my-plan-row :ElementField="RowTitles[3].ElementText" >
                          <my-plan-field 
                          v-for="value in Row04FieldValues"
                          :key="value.id"
                          :fieldValue="value.mbgFieldValue" 
                          :fieldColor="value.mbgFieldColor"
                          :fieldBGColor="value.mbgFieldBGColor"
                      ></my-plan-field> 
                </my-plan-row>  
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
                          v-for="value in Row02FieldValues"
                          :key="value.id"
                          :fieldValue="value.mbgFieldValue" 
                          :fieldColor="value.mbgFieldColor"
                          :fieldBGColor="value.mbgFieldBGColor"
                      ></my-value-field>            
                </my-goal-row>
                <my-match-row :ElementField="RowTitles[2].ElementText" :EndTextField="RowTitles[2].EndText">
                          <my-value-field 
                          v-for="value in Row03FieldValues"
                          :key="value.id"
                          :fieldValue="value.mbgFieldValue" 
                          :fieldColor="value.mbgFieldColor"
                          :fieldBGColor="value.mbgFieldBGColor"
                      ></my-value-field> 
                </my-match-row>
                <my-plan-row :ElementField="RowTitles[4].ElementText" >
                          <my-plan-field 
                          v-for="value in Row05FieldValues"
                          :key="value.id"
                          :fieldValue="value.mbgFieldValue" 
                          :fieldColor="value.mbgFieldColor"
                          :fieldBGColor="value.mbgFieldBGColor"
                      ></my-plan-field>
                </my-plan-row>
                <my-calc-row :ElementField="RowTitles[6].ElementText" :EndTextField="RowTitles[6].EndText">
                          <my-plan-field 
                          v-for="value in Row07FieldValues"
                          :key="value.id"
                          :fieldValue="value.mbgFieldValue" 
                          :fieldColor="value.mbgFieldColor"
                          :fieldBGColor="value.mbgFieldBGColor"
                      ></my-plan-field> 
                </my-calc-row>  
                <my-divider></my-divider>
                <my-title-row ElementField="Zusatzinformationen" ColumnText="%" EndTextField="">
              </my-title-row>  
                <my-plan-row-extern :ElementField="RowTitles[7].ElementText" :EndTextField="RowTitles[7].EndText">
                          <my-plan-field 
                          v-for="value in Row08FieldValues"
                          :key="value.id"
                          :fieldValue="value.mbgFieldValue" 
                          :fieldColor="value.mbgFieldColor"
                          :fieldBGColor="value.mbgFieldBGColor"
                      ></my-plan-field> 
                </my-plan-row-extern> 
                <my-global-row :ElementField="RowTitles[8].ElementText" :EndTextField="RowTitles[8].EndText">
                          <my-plan-field 
                          v-for="value in Row09FieldValues"
                          :key="value.id"
                          :fieldValue="value.mbgFieldValue" 
                          :fieldColor="value.mbgFieldColor"
                          :fieldBGColor="value.mbgFieldBGColor"
                      ></my-plan-field> 
                </my-global-row>                
                <my-empty-row></my-empty-row>
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
              EndText: "Der Anfangsbestand fuer Januar wird ueber einen Parameter eingetragen."
            },
            {
              id: "Row7",
              ElementText: "Endbestand",
              EndText: "Erechnet sich aus Anfangsbestand + Zugang - Abgang."
            },
            {
              id: "Row8",
              ElementText: "Kundenzuwachs in %",
              EndText: "Wird durch Sales unabhaengig von diesem Planungs-Sheet geplant."
            },
            {
              id: "Row9",
              ElementText: "Forecast Allg.Kredite",
              EndText: "maschinell prognostiziert."
            }
          ],
          Row01FieldValues: [
            {
              id: 'Jan',
              mbgFieldValue: 528.26,
              mbgFieldColor: '#182F6D',
              mbgFieldBGColor: '#E8F0F7'
            },
             {
              id: 'Feb',
              mbgFieldValue: 528.26,
              mbgFieldColor: '#182F6D',
              mbgFieldBGColor: '#E8F0F7'
            },
             {
              id: 'Mar',
              mbgFieldValue: 528.26,
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
          Row02FieldValues: [
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
          Row05FieldValues: [
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
          ]         
        
      }
    },
    ...mapGetters
  }

</script>
