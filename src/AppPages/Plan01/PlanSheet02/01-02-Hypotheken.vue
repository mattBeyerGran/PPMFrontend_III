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
          <v-simple-table dense class="bottommargin">
            <thead>
                <my-table-header-quartale></my-table-header-quartale>
            </thead>
            <tbody>      
              <my-divider></my-divider><my-divider></my-divider>
              <my-title-row4 v-show="getRow01.isActive" :ElementField="getRow01.ElementText" :ColumnText="getRow01.Unit01" :EndTextField="getRow01.EndText">
              </my-title-row4> 
              <my-divider></my-divider>
              <my-calc-row v-show="getRow02.isActive" :ElementField="getRow02.ElementText" :EndTextField="getRow02.EndText">
                  <my-result-field :fieldValue="getRow02.Value01" :fieldColor="getRow02.Color01" :fieldBGColor="getRow02.BGColor01"></my-result-field>
                  <my-result-field :fieldValue="getRow02.Value02" :fieldColor="getRow02.Color02" :fieldBGColor="getRow02.BGColor02"></my-result-field> 
                  <my-result-field :fieldValue="getRow02.Value03" :fieldColor="getRow02.Color03" :fieldBGColor="getRow02.BGColor03"></my-result-field> 
                  <my-result-field :fieldValue="getRow02.Value04" :fieldColor="getRow02.Color04" :fieldBGColor="getRow02.BGColor04"></my-result-field>  
              </my-calc-row> 
              <my-plan-row v-show="getRow03.isActive" :ElementField="getRow03.ElementText" :isParallel="true" :isReload="true" :isOK="true" showChilds="showCildsRow03">
                  <my-plan-field :fieldValue="getRow03.Value01" :fieldColor="getRow03.Color01" :fieldBGColor="getRow03.BGColor01"></my-plan-field>
                  <my-plan-field :fieldValue="getRow03.Value02" :fieldColor="getRow03.Color02" :fieldBGColor="getRow03.BGColor02"></my-plan-field> 
                  <my-plan-field :fieldValue="getRow03.Value03" :fieldColor="getRow03.Color03" :fieldBGColor="getRow03.BGColor03"></my-plan-field> 
                  <my-plan-field :fieldValue="getRow03.Value04" :fieldColor="getRow03.Color04" :fieldBGColor="getRow03.BGColor04"></my-plan-field>  
              </my-plan-row >
                    <my-goal-row v-show="getRow0301.isActive" :ElementField="getRow0301.ElementText" :EndTextField="getRow0301.EndText" :isUpload="true">            
                          <my-value-field :fieldValue="getRow0301.Value01" :fieldColor="getRow0301.Color01" :fieldBGColor="getRow0301.BGColor01"></my-value-field>
                          <my-value-field :fieldValue="getRow0301.Value02" :fieldColor="getRow0301.Color02" :fieldBGColor="getRow0301.BGColor02"></my-value-field> 
                          <my-value-field :fieldValue="getRow0301.Value03" :fieldColor="getRow0301.Color03" :fieldBGColor="getRow0301.BGColor03"></my-value-field> 
                          <my-value-field :fieldValue="getRow0301.Value04" :fieldColor="getRow0301.Color04" :fieldBGColor="getRow0301.BGColor04"></my-value-field>         
                    </my-goal-row>   
                    <my-goal-row v-show="getRow0302.isActive" :ElementField="getRow0302.ElementText" :EndTextField="getRow0302.EndText" :isUpload="true">            
                          <my-value-field :fieldValue="getRow0302.Value01" :fieldColor="getRow0302.Color01" :fieldBGColor="getRow0302.BGColor01"></my-value-field>
                          <my-value-field :fieldValue="getRow0302.Value02" :fieldColor="getRow0302.Color02" :fieldBGColor="getRow0302.BGColor02"></my-value-field> 
                          <my-value-field :fieldValue="getRow0302.Value03" :fieldColor="getRow0302.Color03" :fieldBGColor="getRow0302.BGColor03"></my-value-field> 
                          <my-value-field :fieldValue="getRow0302.Value04" :fieldColor="getRow0302.Color04" :fieldBGColor="getRow0302.BGColor04"></my-value-field>         
                    </my-goal-row>
                    <my-match-row v-show="getRow0303.isActive" :ElementField="getRow0303.ElementText" :EndTextField="getRow0303.EndText" :isUpload="true">            
                          <my-value-field :fieldValue="getRow0303.Value01" :fieldColor="getRow0303.Color01" :fieldBGColor="getRow0303.BGColor01"></my-value-field>
                          <my-value-field :fieldValue="getRow0303.Value02" :fieldColor="getRow0303.Color02" :fieldBGColor="getRow0303.BGColor02"></my-value-field> 
                          <my-value-field :fieldValue="getRow0303.Value03" :fieldColor="getRow0303.Color03" :fieldBGColor="getRow0303.BGColor03"></my-value-field> 
                          <my-value-field :fieldValue="getRow0303.Value04" :fieldColor="getRow0303.Color04" :fieldBGColor="getRow0303.BGColor04"></my-value-field>         
                    </my-match-row>    
              <my-plan-row v-show="getRow04.isActive" :ElementField="getRow04.ElementText" :isParallel="true" :isReload="true" :isOK="true" showChilds="showCildsRow04">
                  <my-plan-field :fieldValue="getRow04.Value01" :fieldColor="getRow04.Color01" :fieldBGColor="getRow04.BGColor01"></my-plan-field>
                  <my-plan-field :fieldValue="getRow04.Value02" :fieldColor="getRow04.Color02" :fieldBGColor="getRow04.BGColor02"></my-plan-field> 
                  <my-plan-field :fieldValue="getRow04.Value03" :fieldColor="getRow04.Color03" :fieldBGColor="getRow04.BGColor03"></my-plan-field> 
                  <my-plan-field :fieldValue="getRow04.Value04" :fieldColor="getRow04.Color04" :fieldBGColor="getRow04.BGColor04"></my-plan-field>  
              </my-plan-row >
                    <my-goal-row v-show="getRow0401.isActive" :ElementField="getRow0401.ElementText" :EndTextField="getRow0401.EndText" :isUpload="true">            
                          <my-value-field :fieldValue="getRow0401.Value01" :fieldColor="getRow0401.Color01" :fieldBGColor="getRow0401.BGColor01"></my-value-field>
                          <my-value-field :fieldValue="getRow0401.Value02" :fieldColor="getRow0401.Color02" :fieldBGColor="getRow0401.BGColor02"></my-value-field> 
                          <my-value-field :fieldValue="getRow0401.Value03" :fieldColor="getRow0401.Color03" :fieldBGColor="getRow0401.BGColor03"></my-value-field> 
                          <my-value-field :fieldValue="getRow0401.Value04" :fieldColor="getRow0401.Color04" :fieldBGColor="getRow0401.BGColor04"></my-value-field>         
                    </my-goal-row>   
                    <my-goal-row v-show="getRow0402.isActive" :ElementField="getRow0402.ElementText" :EndTextField="getRow0402.EndText" :isUpload="true">            
                          <my-value-field :fieldValue="getRow0402.Value01" :fieldColor="getRow0402.Color01" :fieldBGColor="getRow0402.BGColor01"></my-value-field>
                          <my-value-field :fieldValue="getRow0402.Value02" :fieldColor="getRow0402.Color02" :fieldBGColor="getRow0402.BGColor02"></my-value-field> 
                          <my-value-field :fieldValue="getRow0402.Value03" :fieldColor="getRow0402.Color03" :fieldBGColor="getRow0402.BGColor03"></my-value-field> 
                          <my-value-field :fieldValue="getRow0402.Value04" :fieldColor="getRow0402.Color04" :fieldBGColor="getRow0402.BGColor04"></my-value-field>         
                    </my-goal-row>  
              <my-calc-row v-show="getRow05.isActive" :ElementField="getRow05.ElementText" :EndTextField="getRow05.EndText">
                  <my-result-field :fieldValue="getRow05.Value01" :fieldColor="getRow05.Color01" :fieldBGColor="getRow05.BGColor01"></my-result-field>
                  <my-result-field :fieldValue="getRow05.Value02" :fieldColor="getRow05.Color02" :fieldBGColor="getRow05.BGColor02"></my-result-field> 
                  <my-result-field :fieldValue="getRow05.Value03" :fieldColor="getRow05.Color03" :fieldBGColor="getRow05.BGColor03"></my-result-field> 
                  <my-result-field :fieldValue="getRow05.Value04" :fieldColor="getRow05.Color04" :fieldBGColor="getRow05.BGColor04"></my-result-field>  
              </my-calc-row> 
              <my-empty-row4></my-empty-row4>
             
            </tbody>         
          <!-- </template> -->
        </v-simple-table>
    </v-container>
  </v-container>
</template>

<script>
import { mapGetters } from 'vuex';

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
    ...mapGetters([
      'getRow01',
      'getRow02',
      'getRow03',
      'getRow0301',
      'getRow0302',
      'getRow0303',
      'getRow04',
      'getRow0401',
      'getRow0402',
      'getRow05'
      
    ])
  }
}
</script>