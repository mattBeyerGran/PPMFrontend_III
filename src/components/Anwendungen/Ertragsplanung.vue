<template>

  <v-container>
    
    <!-- Überschrift -->
      <div align="center" class="mt-12">
        <p class="display-1 anwendung--text"><v-icon color="anwendung">mdi-certificate mdi-36px</v-icon>
        Ertragsplanung</p> 
      </div>

<!-- CARD 0 - Test Card -->
    <v-card class="mb-12">
      <v-card-title class="subheading secondary--text" >
                 Test
      </v-card-title>
      <GChart
          class="pt-5"
          :settings="{ packages: ['corechart'] }"
          type="BarChart"                 
          :data="testData"
          :options="testOptions"
          ref="gChartTest"
          
        />   
       
   </v-card>
   
    
  </v-container>
</template>
<script >

import { GChart } from 'vue-google-charts';


export default {
  name: 'Zertifikate',
  created(){
   
    
    
   
  },
  updated(){
   
  },
  data(){
    return {
            
            
            text0: '',
            text1: '',
            item: [],
            
            testData: [
                      ['Element', 'Density', { role: 'style' }, {type: 'string', role: 'tooltip', 'p': {'html': true}}],
                      ['Copper', 8.94, '#b87333', this.createCustomHTMLContent('https://upload.wikimedia.org/wikipedia/en/a/a4/Flag_of_the_United_States.svg', 46, 29, 29)],            // RGB value
                      ['Silver', 10.49, 'silver', this.createMeinToolTipp('A', '90')],            // English color name
                      ['Gold', 19.30, 'gold', 'Vier'],
                      ['Platinum', 21.45, 'color: #e5e4e2', 'Fünf' ], // CSS-style declaration
            ],
            testOptions: {
              legend: 'none',
              focusTarget: 'category',
              tooltip: {isHtml: true}
            }
    }
  },
  components: {
    GChart
  },
  computed: {
    
    
    
   
  },
  
  methods: {
     
    createCustomHTMLContent(flagURL, totalGold, totalSilver, totalBronze) {
    return '<div style="padding:5px 5px 5px 5px;">' +
      '<img src="' + flagURL + '" style="width:75px;height:50px"><br/>' +
      '<table class="medals_layout">' + '<tr>' +
      '<td><img src="https://upload.wikimedia.org/wikipedia/commons/1/15/Gold_medal.svg" style="width:25px;height:25px"/></td>' +
      '<td><b>' + totalGold + '</b></td>' + '</tr>' + '<tr>' +
      '<td><img src="https://upload.wikimedia.org/wikipedia/commons/0/03/Silver_medal.svg" style="width:25px;height:25px"/></td>' +
      '<td><b>' + totalSilver + '</b></td>' + '</tr>' + '<tr>' +
      '<td><img src="https://upload.wikimedia.org/wikipedia/commons/5/52/Bronze_medal.svg" style="width:25px;height:25px"/></td>' +
      '<td><b>' + totalBronze + '</b></td>' + '</tr>' + '</table>' + '</div>';
    },
    createMeinToolTipp(A, B) {
    return '<div style="padding:5px 5px 5px 5px;">' + 
      
      '<table class="medals_layout">' + '<tr>' +
      '<td>Mitarbeiter: </td>' +
      '<td><b>' + A + '</b></td>' + '</tr>' + '<tr>' +
      '<td>Ergebnis: </td>' +
      '<td>' + B + '%</td>' + '</tr>' + '<tr>' +
      
       '</table>' + '</div>';
    }
    
    
  }
}

</script>


<style>

</style>

