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
              <my-divider></my-divider>  
              <my-row v-show="getRow('PS0103Row03').isActive" >
                  <my-ppm-element-field  fieldRow='PS0103Row03' RowType='PlanRow'></my-ppm-element-field>
                  <my-ps0103-plan-field fieldRow='Row03' :fieldColumn=1 ></my-ps0103-plan-field>
                  <my-ps0103-plan-field fieldRow='Row03' :fieldColumn=2 ></my-ps0103-plan-field>
                  <my-ps0103-plan-field fieldRow='Row03' :fieldColumn=3 ></my-ps0103-plan-field>
                  <my-ps0103-plan-field fieldRow='Row03' :fieldColumn=4 ></my-ps0103-plan-field>
                  <my-ps0103-plan-field fieldRow='Row03' :fieldColumn=5 ></my-ps0103-plan-field>
                  <!-- <my-action-field :actionBGColor="getRow03.ActionBGColor" :isParallel="true" :isReload="true" :isOK="true" showChilds="showCildsRow03" resetData="resetRow03"></my-action-field> -->
              </my-row>
             
            </tbody>    
             <v-btn
                            color="ppmParameterColor"
                            text
                            @click="test"
                          >
                            Test
                            
                          </v-btn>  
         <!--
        <p> id = {{this.getRowPS0103('Row03').id}} </p>
        <p> isActive = {{this.getRowPS0103('Row03').isActive}} </p>
        <p> RowType = {{this.getRowPS0103('Row03').RowType}} </p>
        <p> ChildsOpen = {{this.getRowPS0103('Row03').ChildsOpen}} </p>
        <p> InfoTitle = {{this.getRowPS0103('Row03').InfoTitle}} </p>
        <p> InfoText = {{this.getRowPS0103('Row03').InfoText}} </p>
        <p>
          Col = {{this.getRowPS0103('Row03').RowData[0][0]}} - 
          Value = {{this.getRowPS0103('Row03').RowData[0][1]}} - 
          Initial = {{this.getRowPS0103('Row03').RowData[0][2]}} - 
          Color = {{this.getRowPS0103('Row03').RowData[0][3]}} - 
          BGColor = {{this.getRowPS0103('Row03').RowData[0][4]}}  
        </p>
        <p>
          Col = {{this.getRowPS0103('Row03').RowData[1][0]}} - 
          Value = {{this.getRowPS0103('Row03').RowData[1][1]}} - 
          Initial = {{this.getRowPS0103('Row03').RowData[1][2]}} - 
          Color = {{this.getRowPS0103('Row03').RowData[1][3]}} - 
          BGColor = {{this.getRowPS0103('Row03').RowData[1][4]}}  
        </p>
         <p>
          Col = {{this.getRowPS0103('Row03').RowData[2][0]}} - 
          Value = {{this.getRowPS0103('Row03').RowData[2][1]}} - 
          Initial = {{this.getRowPS0103('Row03').RowData[2][2]}} - 
          Color = {{this.getRowPS0103('Row03').RowData[2][3]}} - 
          BGColor = {{this.getRowPS0103('Row03').RowData[2][4]}}  
        </p>
         <p>
          Col = {{this.getRowPS0103('Row03').RowData[3][0]}} - 
          Value = {{this.getRowPS0103('Row03').RowData[3][1]}} - 
          Initial = {{this.getRowPS0103('Row03').RowData[3][2]}} - 
          Color = {{this.getRowPS0103('Row03').RowData[3][3]}} - 
          BGColor = {{this.getRowPS0103('Row03').RowData[3][4]}}  
        </p>
         <p>
          Col = {{this.getRowPS0103('Row03').RowData[4][0]}} - 
          Value = {{this.getRowPS0103('Row03').RowData[4][1]}} - 
          Initial = {{this.getRowPS0103('Row03').RowData[4][2]}} - 
          Color = {{this.getRowPS0103('Row03').RowData[4][3]}} - 
          BGColor = {{this.getRowPS0103('Row03').RowData[4][4]}}  
        </p>
         <p>
          Col = {{this.getRowPS0103('Row03').RowData[5][0]}} - 
          Value = {{this.getRowPS0103('Row03').RowData[5][1]}} - 
          Initial = {{this.getRowPS0103('Row03').RowData[5][2]}} - 
          Color = {{this.getRowPS0103('Row03').RowData[5][3]}} - 
          BGColor = {{this.getRowPS0103('Row03').RowData[5][4]}}  
        </p>
         <p>
          Col = {{this.getRowPS0103('Row03').RowData[6][0]}} - 
          Value = {{this.getRowPS0103('Row03').RowData[6][1]}} - 
          Initial = {{this.getRowPS0103('Row03').RowData[6][2]}} - 
          Color = {{this.getRowPS0103('Row03').RowData[6][3]}} - 
          BGColor = {{this.getRowPS0103('Row03').RowData[6][4]}}  
        </p>
        <p>
          Col = {{this.getRowPS0103('Row03').RowData[7][0]}} - 
          Value = {{this.getRowPS0103('Row03').RowData[7][1]}} - 
          Initial = {{this.getRowPS0103('Row03').RowData[7][2]}} - 
          Color = {{this.getRowPS0103('Row03').RowData[7][3]}} - 
          BGColor = {{this.getRowPS0103('Row03').RowData[7][4]}}  
        </p> -->
         
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
    // testValue(){
    //   // return this.$store.getters.getRow("Row03");
    // },
    ...mapGetters([
        'getRow'
    ]),
     },
    data () {
      return {      
        // testdata: this.getRow('Row03').InfoTitle
      }
    },
    methods: {
      test() {
          // eslint-disable-next-line no-console
          console.log(this.getRow("PS0103Row03"));   
      },
      
    }
    
  
  
    
 
}
</script>