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
          <v-simple-table dense class="mb-12">
            <tbody>
               <my-row >
                <my-ppm-title-field  text='Plan-Elemente' textColor="#FFFFFF" BGColor="#182F6D" size='16px' weight='normal' align='start'></my-ppm-title-field>
                <my-ppm-title-field  text='2022' textColor="#FFFFFF" BGColor="#182F6D" size='16px' weight='normal' align='center'></my-ppm-title-field>
                <my-ppm-title-field  text='2023' textColor="#FFFFFF" BGColor="#182F6D" size='16px' weight='normal' align='center'></my-ppm-title-field>
                <my-ppm-title-field  text='2024' textColor="#FFFFFF" BGColor="#182F6D" size='16px' weight='normal' align='center'></my-ppm-title-field>
                <my-ppm-title-field  text='2025' textColor="#FFFFFF" BGColor="#182F6D" size='16px' weight='normal' align='center'></my-ppm-title-field>
                <my-ppm-title-field  text='2026' textColor="#FFFFFF" BGColor="#182F6D" size='16px' weight='normal' align='center'></my-ppm-title-field>
                <my-ppm-title-field  text=' Aktionen' textColor="#FFFFFF" BGColor="#182F6D" size='16px' weight='normal' align='start'></my-ppm-title-field>
              </my-row>    
              <my-divider></my-divider> <my-divider></my-divider>   
              <my-row >
                  <my-ppm-title-field  text='Bestandsveränderung' size='24px' weight='bold' align='start'></my-ppm-title-field>
                  <my-ppm-title-field  text='Mio. Euro ' align='center'></my-ppm-title-field>
                  <my-ppm-title-field  text='Mio. Euro ' align='center'></my-ppm-title-field>
                  <my-ppm-title-field  text='Mio. Euro ' align='center'></my-ppm-title-field>
                  <my-ppm-title-field  text='Mio. Euro ' align='center'></my-ppm-title-field>
                  <my-ppm-title-field  text='Mio. Euro ' align='center'></my-ppm-title-field>  
                  <my-ppm-action-field chartIcon text='Zeitreihengrafik'></my-ppm-action-field>            
              </my-row>
              <my-divider></my-divider>  
              <my-row v-show="getRow('PS0103Row02').isActive" >
                  <my-ppm-element-field fieldRow='PS0103Row02' iconType='CalcRow' ></my-ppm-element-field>
                  <my-ppm-value-field :value="this.getResultPS0103Row02Col01" :textColor="this.getRow('PS0103Row02').Color01" :BGColor="this.getRow('PS0103Row05').BGColor01" size="18px"></my-ppm-value-field>
                  <my-ppm-value-field :value="this.getResultPS0103Row02Col02" :textColor="this.getRow('PS0103Row02').Color02" :BGColor="this.getRow('PS0103Row02').BGColor02" size="18px"></my-ppm-value-field>
                  <my-ppm-value-field :value="this.getResultPS0103Row02Col03" :textColor="this.getRow('PS0103Row02').Color03" :BGColor="this.getRow('PS0103Row02').BGColor03" size="18px"></my-ppm-value-field>
                  <my-ppm-value-field :value="this.getResultPS0103Row02Col04" :textColor="this.getRow('PS0103Row02').Color04" :BGColor="this.getRow('PS0103Row02').BGColor04" size="18px"></my-ppm-value-field>
                  <my-ppm-value-field :value="this.getResultPS0103Row02Col05" :textColor="this.getRow('PS0103Row02').Color05" :BGColor="this.getRow('PS0103Row02').BGColor05" size="18px"></my-ppm-value-field>
                  <my-ppm-action-field text=''></my-ppm-action-field>
              </my-row>
              
               <my-row v-show="getRow('PS0103Row03').isActive" >
                  <my-ppm-element-field  fieldRow='PS0103Row03' iconType='PlanRow'></my-ppm-element-field>
                  <my-ppm-plan-field action="updateFieldPS0103Row03Value01" :value="this.getRow('PS0103Row03').Value01" :textColor="this.getRow('PS0103Row03').Color01" :BGColor="this.getRow('PS0103Row03').BGColor01" size="18px" ></my-ppm-plan-field>
                  <my-ppm-plan-field action="updateFieldPS0103Row03Value02" :value="this.getRow('PS0103Row03').Value02" :textColor="this.getRow('PS0103Row03').Color02" :BGColor="this.getRow('PS0103Row03').BGColor02" size="18px"></my-ppm-plan-field>
                  <my-ppm-plan-field action="updateFieldPS0103Row03Value03" :value="this.getRow('PS0103Row03').Value03" :textColor="this.getRow('PS0103Row03').Color03" :BGColor="this.getRow('PS0103Row03').BGColor03" size="18px"></my-ppm-plan-field>
                  <my-ppm-plan-field action="updateFieldPS0103Row03Value04" :value="this.getRow('PS0103Row03').Value04" :textColor="this.getRow('PS0103Row03').Color04" :BGColor="this.getRow('PS0103Row03').BGColor04" size="18px"></my-ppm-plan-field>
                  <my-ppm-plan-field action="updateFieldPS0103Row03Value05" :value="this.getRow('PS0103Row03').Value05" :textColor="this.getRow('PS0103Row03').Color05" :BGColor="this.getRow('PS0103Row03').BGColor05" size="18px"></my-ppm-plan-field>
                  <my-ppm-action-field resetIcon fieldRow='PS0103Row03' showChilds='showChildsRow03' parallelIcon okIcon chartIcon graphic='showChart03'></my-ppm-action-field>  
              </my-row>
              <my-row v-show="getRow('PS0103Row0301').isActive" >
                  <my-ppm-element-field  fieldRow='PS0103Row0301' iconType='GoalRow' small></my-ppm-element-field>
                  <my-ppm-value-field :value="this.getRow('PS0103Row0301').Value01" :textColor="this.getRow('PS0103Row0301').Color01" :BGColor="this.getRow('PS0103Row0301').BGColor01"></my-ppm-value-field>
                  <my-ppm-value-field :value="this.getRow('PS0103Row0301').Value02" :textColor="this.getRow('PS0103Row0301').Color02" :BGColor="this.getRow('PS0103Row0301').BGColor02"></my-ppm-value-field>
                  <my-ppm-value-field :value="this.getRow('PS0103Row0301').Value03" :textColor="this.getRow('PS0103Row0301').Color03" :BGColor="this.getRow('PS0103Row0301').BGColor03"></my-ppm-value-field>
                  <my-ppm-value-field :value="this.getRow('PS0103Row0301').Value04" :textColor="this.getRow('PS0103Row0301').Color04" :BGColor="this.getRow('PS0103Row0301').BGColor04"></my-ppm-value-field>
                  <my-ppm-value-field :value="this.getRow('PS0103Row0301').Value05" :textColor="this.getRow('PS0103Row0301').Color05" :BGColor="this.getRow('PS0103Row0301').BGColor05"></my-ppm-value-field>
                  <my-ppm-action-field copyIcon small text='Controlling-Vorgabe' origin='PS0103Row0301' destination='PS0103Row03'></my-ppm-action-field>
              </my-row>
              <my-row v-show="getRow('PS0103Row0302').isActive" >
                  <my-ppm-element-field  fieldRow='PS0103Row0302' iconType='GoalRow' small></my-ppm-element-field>
                  <my-ppm-value-field :value="this.getRow('PS0103Row0302').Value01" :textColor="this.getRow('PS0103Row0302').Color01" :BGColor="this.getRow('PS0103Row0302').BGColor01"></my-ppm-value-field>
                  <my-ppm-value-field :value="this.getRow('PS0103Row0302').Value02" :textColor="this.getRow('PS0103Row0302').Color02" :BGColor="this.getRow('PS0103Row0302').BGColor02"></my-ppm-value-field>
                  <my-ppm-value-field :value="this.getRow('PS0103Row0302').Value03" :textColor="this.getRow('PS0103Row0302').Color03" :BGColor="this.getRow('PS0103Row0302').BGColor03"></my-ppm-value-field>
                  <my-ppm-value-field :value="this.getRow('PS0103Row0302').Value04" :textColor="this.getRow('PS0103Row0302').Color04" :BGColor="this.getRow('PS0103Row0302').BGColor04"></my-ppm-value-field>
                  <my-ppm-value-field :value="this.getRow('PS0103Row0302').Value05" :textColor="this.getRow('PS0103Row0302').Color05" :BGColor="this.getRow('PS0103Row0302').BGColor05"></my-ppm-value-field>
                  <my-ppm-action-field copyIcon small text='Board-Vorgabe' origin='PS0103Row0302' destination='PS0103Row03'></my-ppm-action-field>      
              </my-row>
              <my-row v-show="getRow('PS0103Row0303').isActive" >
                  <my-ppm-element-field  fieldRow='PS0103Row0303' iconType='MatchRow' small></my-ppm-element-field>
                  <my-ppm-value-field :value="this.getRow('PS0103Row0303').Value01" :textColor="this.getRow('PS0103Row0303').Color01" :BGColor="this.getRow('PS0103Row0303').BGColor01"></my-ppm-value-field>
                  <my-ppm-value-field :value="this.getRow('PS0103Row0303').Value02" :textColor="this.getRow('PS0103Row0303').Color02" :BGColor="this.getRow('PS0103Row0303').BGColor02"></my-ppm-value-field>
                  <my-ppm-value-field :value="this.getRow('PS0103Row0303').Value03" :textColor="this.getRow('PS0103Row0303').Color03" :BGColor="this.getRow('PS0103Row0303').BGColor03"></my-ppm-value-field>
                  <my-ppm-value-field :value="this.getRow('PS0103Row0303').Value04" :textColor="this.getRow('PS0103Row0303').Color04" :BGColor="this.getRow('PS0103Row0303').BGColor04"></my-ppm-value-field>
                  <my-ppm-value-field :value="this.getRow('PS0103Row0303').Value05" :textColor="this.getRow('PS0103Row0303').Color05" :BGColor="this.getRow('PS0103Row0303').BGColor05"></my-ppm-value-field>
                  <my-ppm-action-field copyIcon small text='(1:1) - Match-Planwerte von Christoph' origin='PS0103Row0303' destination='PS0103Row03'></my-ppm-action-field>      
              </my-row>
              <my-row v-if="getChart('Chart03').isActive">
                <td  colspan="7" v-bind:style="{backgroundColor: '#FFFFFF'}">
                  <my-ppm-chart chart="Chart03"></my-ppm-chart>
                </td>                
              </my-row>
              <my-row v-show="getRow('PS0103Row04').isActive" >
                  <my-ppm-element-field  fieldRow='PS0103Row04' iconType='PlanRow'></my-ppm-element-field>
                  <my-ppm-plan-field action="updateFieldPS0103Row04Value01" :value="this.getRow('PS0103Row04').Value01" :textColor="this.getRow('PS0103Row04').Color01" :BGColor="this.getRow('PS0103Row04').BGColor01" size="18px" ></my-ppm-plan-field>
                  <my-ppm-plan-field action="updateFieldPS0103Row04Value02" :value="this.getRow('PS0103Row04').Value02" :textColor="this.getRow('PS0103Row04').Color02" :BGColor="this.getRow('PS0103Row04').BGColor02" size="18px" ></my-ppm-plan-field>
                  <my-ppm-plan-field action="updateFieldPS0103Row04Value03" :value="this.getRow('PS0103Row04').Value03" :textColor="this.getRow('PS0103Row04').Color03" :BGColor="this.getRow('PS0103Row04').BGColor03" size="18px" ></my-ppm-plan-field>
                  <my-ppm-plan-field action="updateFieldPS0103Row04Value04" :value="this.getRow('PS0103Row04').Value04" :textColor="this.getRow('PS0103Row04').Color04" :BGColor="this.getRow('PS0103Row04').BGColor04" size="18px" ></my-ppm-plan-field>
                  <my-ppm-plan-field action="updateFieldPS0103Row04Value05" :value="this.getRow('PS0103Row04').Value05" :textColor="this.getRow('PS0103Row04').Color05" :BGColor="this.getRow('PS0103Row04').BGColor05" size="18px" ></my-ppm-plan-field>
                  <my-ppm-action-field resetIcon fieldRow='PS0103Row04' showChilds='showChildsRow04' parallelIcon okIcon chartIcon graphic='showChart04'></my-ppm-action-field>
                 
              </my-row>
              <my-row v-show="getRow('PS0103Row0401').isActive" >
                  <my-ppm-element-field  fieldRow='PS0103Row0401' iconType='GoalRow' small></my-ppm-element-field>
                  <my-ppm-value-field :value="this.getRow('PS0103Row0401').Value01" :textColor="this.getRow('PS0103Row0401').Color01" :BGColor="this.getRow('PS0103Row0401').BGColor01"></my-ppm-value-field>
                  <my-ppm-value-field :value="this.getRow('PS0103Row0401').Value02" :textColor="this.getRow('PS0103Row0401').Color02" :BGColor="this.getRow('PS0103Row0401').BGColor02"></my-ppm-value-field>
                  <my-ppm-value-field :value="this.getRow('PS0103Row0401').Value03" :textColor="this.getRow('PS0103Row0401').Color03" :BGColor="this.getRow('PS0103Row0401').BGColor03"></my-ppm-value-field>
                  <my-ppm-value-field :value="this.getRow('PS0103Row0401').Value04" :textColor="this.getRow('PS0103Row0401').Color04" :BGColor="this.getRow('PS0103Row0401').BGColor04"></my-ppm-value-field>
                  <my-ppm-value-field :value="this.getRow('PS0103Row0401').Value05" :textColor="this.getRow('PS0103Row0401').Color05" :BGColor="this.getRow('PS0103Row0401').BGColor05"></my-ppm-value-field>
                  <my-ppm-action-field copyIcon small text='Controlling-Vorgabe' origin='PS0103Row0401' destination='PS0103Row04'></my-ppm-action-field>      
              </my-row>
              <my-row v-show="getRow('PS0103Row0402').isActive" >
                  <my-ppm-element-field  fieldRow='PS0103Row0402' iconType='GoalRow' small></my-ppm-element-field>
                  <my-ppm-value-field :value="this.getRow('PS0103Row0402').Value01" :textColor="this.getRow('PS0103Row0402').Color01" :BGColor="this.getRow('PS0103Row0402').BGColor01"></my-ppm-value-field>
                  <my-ppm-value-field :value="this.getRow('PS0103Row0402').Value02" :textColor="this.getRow('PS0103Row0402').Color02" :BGColor="this.getRow('PS0103Row0402').BGColor02"></my-ppm-value-field>
                  <my-ppm-value-field :value="this.getRow('PS0103Row0402').Value03" :textColor="this.getRow('PS0103Row0402').Color03" :BGColor="this.getRow('PS0103Row0402').BGColor03"></my-ppm-value-field>
                  <my-ppm-value-field :value="this.getRow('PS0103Row0402').Value04" :textColor="this.getRow('PS0103Row0402').Color04" :BGColor="this.getRow('PS0103Row0402').BGColor04"></my-ppm-value-field>
                  <my-ppm-value-field :value="this.getRow('PS0103Row0402').Value05" :textColor="this.getRow('PS0103Row0402').Color05" :BGColor="this.getRow('PS0103Row0402').BGColor05"></my-ppm-value-field>
                  <my-ppm-action-field copyIcon small text='Controlling-Vorgabe' origin='PS0103Row0402' destination='PS0103Row04'></my-ppm-action-field>      
              </my-row>
              <my-row v-if="getChart('Chart04').isActive" >
                <td   colspan="7" v-bind:style="{backgroundColor: '#FFFFFF'}">
                  <my-ppm-chart  chart="Chart04"></my-ppm-chart>
                </td>                
              </my-row>

               <my-row v-show="getRow('PS0103Row05').isActive" >
                  <my-ppm-element-field fieldRow='PS0103Row05' iconType='CalcRow' ></my-ppm-element-field>
                  <my-ppm-value-field :value="this.getResultPS0103Row05Col01" :textColor="this.getRow('PS0103Row05').Color01" :BGColor="this.getRow('PS0103Row05').BGColor01" size="18px"></my-ppm-value-field>
                  <my-ppm-value-field :value="this.getResultPS0103Row05Col02" :textColor="this.getRow('PS0103Row05').Color02" :BGColor="this.getRow('PS0103Row05').BGColor02" size="18px"></my-ppm-value-field>
                  <my-ppm-value-field :value="this.getResultPS0103Row05Col03" :textColor="this.getRow('PS0103Row05').Color03" :BGColor="this.getRow('PS0103Row05').BGColor03" size="18px"></my-ppm-value-field>
                  <my-ppm-value-field :value="this.getResultPS0103Row05Col04" :textColor="this.getRow('PS0103Row05').Color04" :BGColor="this.getRow('PS0103Row05').BGColor04" size="18px"></my-ppm-value-field>
                  <my-ppm-value-field :value="this.getResultPS0103Row05Col05" :textColor="this.getRow('PS0103Row05').Color05" :BGColor="this.getRow('PS0103Row05').BGColor05" size="18px"></my-ppm-value-field>
                  <my-ppm-action-field text=''></my-ppm-action-field>
              </my-row>
              
              <my-divider></my-divider>
            </tbody>    
        </v-simple-table>
        
    </v-container>
  </v-container>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
  name: "spezial",
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
        'getRow',
        'getChart',
        'getResultPS0103Row02Col01',
        'getResultPS0103Row02Col02',
        'getResultPS0103Row02Col03',
        'getResultPS0103Row02Col04',
        'getResultPS0103Row02Col05',
        'getResultPS0103Row05Col01',
        'getResultPS0103Row05Col02',
        'getResultPS0103Row05Col03',
        'getResultPS0103Row05Col04',
        'getResultPS0103Row05Col05',
    ]),
     },
    data () {
      return {      
        showChart: true
      }
    },
    
    methods: {
      reload() {
         var container = document.getElementById("yourDiv");
          var content = container.innerHTML;
          container.innerHTML= content; 
          
        //this line is to watch the result in console , you can remove it later	
          // eslint-disable-next-line no-console
          console.log("Refreshed"); 
      }
     
     
      
    },
    created: function(){   
              
        this.$store.dispatch('ColorTrigger');
        
        this.$store.dispatch('Chart03Trigger', {
          Column01: this.getRow('PS0103Row03'), // Plan
          Column02: this.getRow('PS0103Row0303'),  // Match
          Column03: this.getRow('PS0103Row0301'), // Default
          Column04: this.getRow('PS0103Row0302'), // Goal
          });

          this.$store.dispatch('Chart04Trigger', {
          Column01: this.getRow('PS0103Row04'), // Plan
          Column02: this.getRow('PS0103Row0401'),  // Min
          Column03: this.getRow('PS0103Row0402'), // Max
          });
        
          
     
  },
      updated: function(){   
              
        this.$store.dispatch('ColorTrigger');
        
        this.$store.dispatch('Chart03Trigger', {
          Column01: this.getRow('PS0103Row03'), // Plan
          Column02: this.getRow('PS0103Row0303'),  // Match
          Column03: this.getRow('PS0103Row0301'), // Default
          Column04: this.getRow('PS0103Row0302'), // Goal
          }); 

        this.$store.dispatch('Chart04Trigger', {
          Column01: this.getRow('PS0103Row04'), // Plan
          Column02: this.getRow('PS0103Row0401'),  // Min
          Column03: this.getRow('PS0103Row0402'), // Max
          });
              
  }
  
  
    
 
}
</script>