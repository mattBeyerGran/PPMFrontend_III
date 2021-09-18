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
            <tbody>  
              <my-row >
                <my-ppm-title-field  text='Plan-Elemente' textColor="#FFFFFF" BGColor="#182F6D" size='20px' weight='bold' align='start'></my-ppm-title-field>
                <my-ppm-title-field  text=' Q1' textColor="#FFFFFF" BGColor="#182F6D" size='20px' weight='normal' align='center'></my-ppm-title-field>
                <my-ppm-title-field  text=' Q2' textColor="#FFFFFF" BGColor="#182F6D" size='20px' weight='normal' align='center'></my-ppm-title-field>
                <my-ppm-title-field  text=' Q3' textColor="#FFFFFF" BGColor="#182F6D" size='20px' weight='normal' align='center'></my-ppm-title-field>
                <my-ppm-title-field  text=' Q4' textColor="#FFFFFF" BGColor="#182F6D" size='20px' weight='normal' align='center'></my-ppm-title-field>
                <my-ppm-title-field  text=' Aktionen' textColor="#FFFFFF" BGColor="#182F6D" size='20px' weight='normal' align='start'></my-ppm-title-field>
              </my-row>
              <my-divider></my-divider> <my-divider></my-divider>
                
            </tbody>         
         
        </v-simple-table>
    </v-container>
    
  </v-container>
</template>

<script>

export default {
  name: "hypotheken",
  
  computed: {
    plName() {
      return this.$store.getters.plannerName;
    },
    plRole() {
      return this.$store.getters.plannerRole;
    }
  }
}
</script>