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
              <!-- // Ueberschrift -->
           
              <!-- Anfangsbestand - Kalkulation-->
              
              <!-- Zugang - Planung  #### Neu -->
             
              
<!--                
                    <my-row v-show="getRow0301.isActive" >
                          <my-element-goal-field :ElementTitle="getRow0301.ElementTitle" :ElementText="getRow0301.ElementText" :fieldColor="getRow0301.ElementColor" :fieldBGColor="getRow0301.ElementBGColor"></my-element-goal-field>
                          <my-value-field :fieldValue="getRow0301.Value01" :fieldColor="getRow0301.Color01" :fieldBGColor="getRow0301.BGColor01"></my-value-field>
                          <my-value-field :fieldValue="getRow0301.Value02" :fieldColor="getRow0301.Color02" :fieldBGColor="getRow0301.BGColor02"></my-value-field> 
                          <my-value-field :fieldValue="getRow0301.Value03" :fieldColor="getRow0301.Color03" :fieldBGColor="getRow0301.BGColor03"></my-value-field> 
                          <my-value-field :fieldValue="getRow0301.Value04" :fieldColor="getRow0301.Color04" :fieldBGColor="getRow0301.BGColor04"></my-value-field>
                          <my-text-field :isUpload="true" copyToPlan="copyRow301onRow03" :text="getRow0301.EndText" :textColor="getRow0301.TextColor" :textBGColor="getRow0301.TextBGColor"></my-text-field>    
                    </my-row>
                    <my-row v-show="getRow0302.isActive" >
                          <my-element-goal-field :ElementTitle="getRow0302.ElementTitle" :ElementText="getRow0302.ElementText" :fieldColor="getRow0302.ElementColor" :fieldBGColor="getRow0302.ElementBGColor"></my-element-goal-field>
                          <my-value-field :fieldValue="getRow0302.Value01" :fieldColor="getRow0302.Color01" :fieldBGColor="getRow0302.BGColor01"></my-value-field>
                          <my-value-field :fieldValue="getRow0302.Value02" :fieldColor="getRow0302.Color02" :fieldBGColor="getRow0302.BGColor02"></my-value-field> 
                          <my-value-field :fieldValue="getRow0302.Value03" :fieldColor="getRow0302.Color03" :fieldBGColor="getRow0302.BGColor03"></my-value-field> 
                          <my-value-field :fieldValue="getRow0302.Value04" :fieldColor="getRow0302.Color04" :fieldBGColor="getRow0302.BGColor04"></my-value-field> 
                          <my-text-field :isUpload="true" copyToPlan="copyRow302onRow03" :text="getRow0302.EndText" :textColor="getRow0302.TextColor" :textBGColor="getRow0302.TextBGColor"></my-text-field>    
                    </my-row>
                    <my-row v-show="getRow0303.isActive" >
                          <my-element-match-field :ElementTitle="getRow0303.ElementTitle" :ElementText="getRow0303.ElementText" :fieldColor="getRow0303.ElementColor" :fieldBGColor="getRow0303.ElementBGColor"></my-element-match-field>
                          <my-value-field :fieldValue="getRow0303.Value01" :fieldColor="getRow0303.Color01" :fieldBGColor="getRow0303.BGColor01"></my-value-field>
                          <my-value-field :fieldValue="getRow0303.Value02" :fieldColor="getRow0303.Color02" :fieldBGColor="getRow0303.BGColor02"></my-value-field> 
                          <my-value-field :fieldValue="getRow0303.Value03" :fieldColor="getRow0303.Color03" :fieldBGColor="getRow0303.BGColor03"></my-value-field> 
                          <my-value-field :fieldValue="getRow0303.Value04" :fieldColor="getRow0303.Color04" :fieldBGColor="getRow0303.BGColor04"></my-value-field>  
                          <my-text-field :isUpload="true" copyToPlan="copyRow303onRow03" :text="getRow0303.EndText" :textColor="getRow0303.TextColor" :textBGColor="getRow0303.TextBGColor"></my-text-field>    
                    </my-row>
                    Chart
                    <my-row v-if="getChart03.isActive">
                        <my-element-chart-field :ElementTitle="getChart03.ElementTitle" :ElementText="getChart03.ElementText" :fieldColor="getChart03.ElementColor" :fieldBGColor="getChart03.ElementBGColor"></my-element-chart-field>                         
                        <my-chart-field :fieldColor="getChart03.ElementColor" fieldBGColor="#FFFFFF"></my-chart-field>
                        <my-text-field :isUpload="false"  :text="getChart03.EndText" :textColor="getChart03.TextColor" :textBGColor="getChart03.TextBGColor"></my-text-field>    
                    </my-row>
                    <my-empty-row4 v-show="getChart03.isActive"></my-empty-row4> 
             
              
                  <my-element-plan-field :ElementTitle="getRow04.ElementTitle" :ElementText="getRow04.ElementText" :fieldColor="getRow04.ElementColor" :fieldBGColor="getRow04.ElementBGColor"></my-element-plan-field>  
                  <my-plan-field :fieldValue="getRow03.Value01" :fieldRow=7  :fieldColumn=1 :fieldColor="getRow04.Color01" :fieldBGColor="getRow04.BGColor01"></my-plan-field>
                  <my-plan-field :fieldValue="getRow03.Value02" :fieldRow=7  :fieldColumn=2 :fieldColor="getRow04.Color02" :fieldBGColor="getRow04.BGColor02"></my-plan-field> 
                  <my-plan-field :fieldValue="getRow03.Value03" :fieldRow=7  :fieldColumn=3 :fieldColor="getRow04.Color03" :fieldBGColor="getRow04.BGColor03"></my-plan-field> 
                  <my-plan-field :fieldValue="getRow03.Value04" :fieldRow=7  :fieldColumn=4 :fieldColor="getRow04.Color04" :fieldBGColor="getRow04.BGColor04"></my-plan-field>  
                  <my-action-field :actionBGColor="getRow04.ActionBGColor" :isParallel="true" :isReload="true" :isOK="true" showChilds="showCildsRow04" resetData="resetRow04"></my-action-field>
              </my-row >
                    <my-row v-show="getRow0401.isActive" >
                          <my-element-goal-field :ElementTitle="getRow0401.ElementTitle" :ElementText="getRow0401.ElementText" :fieldColor="getRow0401.ElementColor" :fieldBGColor="getRow0401.ElementBGColor"></my-element-goal-field>
                          <my-value-field :fieldValue="getRow0401.Value01" :fieldColor="getRow0401.Color01" :fieldBGColor="getRow0401.BGColor01"></my-value-field>
                          <my-value-field :fieldValue="getRow0401.Value02" :fieldColor="getRow0401.Color02" :fieldBGColor="getRow0401.BGColor02"></my-value-field> 
                          <my-value-field :fieldValue="getRow0401.Value03" :fieldColor="getRow0401.Color03" :fieldBGColor="getRow0401.BGColor03"></my-value-field> 
                          <my-value-field :fieldValue="getRow0401.Value04" :fieldColor="getRow0401.Color04" :fieldBGColor="getRow0401.BGColor04"></my-value-field>
                          <my-text-field :isUpload="true" copyToPlan="copyRow401onRow04" :text="getRow0401.EndText" :textColor="getRow0401.TextColor" :textBGColor="getRow0401.TextBGColor"></my-text-field>             
                    </my-row>   
                    <my-row v-show="getRow0402.isActive" >
                          <my-element-goal-field :ElementTitle="getRow0402.ElementTitle" :ElementText="getRow0402.ElementText" :fieldColor="getRow0402.ElementColor" :fieldBGColor="getRow0402.ElementBGColor"></my-element-goal-field>                   
                          <my-value-field :fieldValue="getRow0402.Value01" :fieldColor="getRow0402.Color01" :fieldBGColor="getRow0402.BGColor01"></my-value-field>
                          <my-value-field :fieldValue="getRow0402.Value02" :fieldColor="getRow0402.Color02" :fieldBGColor="getRow0402.BGColor02"></my-value-field> 
                          <my-value-field :fieldValue="getRow0402.Value03" :fieldColor="getRow0402.Color03" :fieldBGColor="getRow0402.BGColor03"></my-value-field> 
                          <my-value-field :fieldValue="getRow0402.Value04" :fieldColor="getRow0402.Color04" :fieldBGColor="getRow0402.BGColor04"></my-value-field>     
                          <my-text-field :isUpload="true" copyToPlan="copyRow402onRow04" :text="getRow0402.EndText" :textColor="getRow0402.TextColor" :textBGColor="getRow0402.TextBGColor"></my-text-field>    
                    </my-row>  
              <my-row v-show="getRow05.isActive" >
                  <my-element-calc-field :ElementTitle="getRow05.ElementTitle" :ElementText="getRow05.ElementText" :fieldColor="getRow05.ElementColor" :fieldBGColor="getRow05.ElementBGColor"></my-element-calc-field>
                  <my-result-field :fieldValue="getRow05.Value01" :fieldColor="getRow05.Color01" :fieldBGColor="getRow05.BGColor01"></my-result-field>
                  <my-result-field :fieldValue="getRow05.Value02" :fieldColor="getRow05.Color02" :fieldBGColor="getRow05.BGColor02"></my-result-field> 
                  <my-result-field :fieldValue="getRow05.Value03" :fieldColor="getRow05.Color03" :fieldBGColor="getRow05.BGColor03"></my-result-field> 
                  <my-result-field :fieldValue="getRow05.Value04" :fieldColor="getRow05.Color04" :fieldBGColor="getRow05.BGColor04"></my-result-field>  
                  <my-text-field :isUpload="false" :text="getRow05.EndText" :textColor="getRow05.TextColor" :textBGColor="getRow05.TextBGColor"></my-text-field>
              </my-row> 
              <my-empty-row4></my-empty-row4>
               -->
            
              
              


            </tbody>         
          <!-- </template> -->
        </v-simple-table>
    </v-container>
    
  </v-container>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  name: "hypotheken",
  
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
      'getRow05',
      'getChart03'
      
    ])
  },
  methods: {
    ...mapActions([
      
    ])
  },
  created: function(){   
      this.$store.dispatch('ResultAction');   
     
  },
  updated: function(){  
      this.$store.dispatch('ResultAction');
      

      this.$store.dispatch('Row03Field01ColorTrigger');    
      this.$store.dispatch('Row03Field02ColorTrigger'); 
      this.$store.dispatch('Row03Field03ColorTrigger'); 
      this.$store.dispatch('Row03Field04ColorTrigger'); 
     
      this.$store.dispatch('Row06Field01ColorTrigger');    
      this.$store.dispatch('Row06Field02ColorTrigger'); 
      this.$store.dispatch('Row06Field03ColorTrigger'); 
      this.$store.dispatch('Row06Field04ColorTrigger'); 
      
     
       
  }
}
</script>