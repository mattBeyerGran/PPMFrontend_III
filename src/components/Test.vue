<template>
<div class="">
  <!-- Überschrift -->
  <v-container  fluid>  
    <div align="left" class="mt-12">
      <p class="display-1 anwendung--text"><v-icon color="anwendung">mdi-chart-sankey-variant mdi-36px</v-icon>
      Cost Allocation</p> 
    </div>
  </v-container>

  <v-container>
     <GChart
          class="pt-5"
          :settings="{ packages: ['corechart', 'sankey'] }"
          type="Sankey"                 
          :data="sankeyData1"
          :options="sankeyOptions"
          ref="gChart"         
        />     
  </v-container>


  <v-container  fluid>  
    <div align="left" class="mt-12">
      <p class="display-1 anwendung--text"><v-icon color="anwendung">mdi-chart-sankey-variant mdi-36px</v-icon>
      Revenue Allocation</p> 
    </div>
  </v-container>

  <v-container>
     <GChart
          class="pt-5"
          :settings="{ packages: ['corechart', 'sankey'] }"
          type="Sankey"                 
          :data="sankeyData2"
          :options="sankeyOptions"          
          ref="gChart"
          
        />     
  </v-container>
</div>
  
</template>

<script>
import { mapGetters } from 'vuex';
import { GChart } from 'vue-google-charts';

export default {
  name: 'Test',
  created() {},
  updated() {},
  data() {
    return {
            colors: ['#a6cee3', '#b2df8a', '#fb9a99', '#fdbf6f',
                  '#cab2d6', '#ffff99', '#1f78b4', '#33a02c'],
     
            sankeyData1: [
                ['from', 'to' , '€', {type: 'string', role: 'tooltip'}],
                ['Costs', 'Wages', 2690, 'Wages = 2,690.00 €'],
                ['Costs', 'IT Costs', 1770, 'IT Costs = 1,770.00 €'],
                ['Costs', 'Office Expenses', 480, 'Office Expenses = 480.00 €'],
                // AP-0
                ['IT Costs', 'Global', 400, 'AP-0 >>> 400.00 €'],
                ['Office Expenses', 'Global', 100, 'AP-0 >>> 100.00 €' ],  
                ['Wages', 'Global', 500, 'AP-0 >>> 500.00 €' ],             
                ['Wages', 'Germany', 1200, 'AP-0 >>> 1,200.00 €' ],
                ['IT Costs', 'Germany', 700, 'AP-0 >>> 700.00 €'],
                ['Office Expenses', 'Germany', 200, 'AP-0 >>> 200.00 €'],
                ['Wages', 'United Kingdom', 990, 'AP-0 >>> 990.00 €' ],
                ['IT Costs', 'United Kingdom', 670, 'AP-0 >>> 670.00 €'],
                ['Office Expenses', 'United Kingdom', 180, 'AP-0 >>> 180.00 €'],
                // AP-1
                ['Global', 'Germany', 319.80, 'AP-1 >>> 319.80 € Overhead'],
                ['Global', 'United Kingdom', 280.20, 'AP-1 >>> 280.20 € Overhead'],
                // AP-2
                ['Global', 'Germany', 204.38, 'AP-2 >>> 204,38 € IT Costs'],
                ['Global', 'United Kingdom', 195.62, 'AP-2 >>> 195.62 € IT Costs'],
                // AP 3
                ['Germany', 'DE-A', 1000.00, 'AP-3 >>> 1,000.00 € Consulting'],
                ['Germany', 'DE-B', 500.00, 'AP-3 >>> 500.00 € Consulting'],
                // AP-4
                ['United Kingdom', 'DE-B', 300.00, 'AP-3 >>> 300.00 € Consulting'],
                ['United Kingdom', 'UK-A', 800.00, 'AP-3 >>> 800.00 € Consulting'],
                ],
                        sankeyData2: [
                ['from', 'to' , '€', {type: 'string', role: 'tooltip'}],
                // AP-0
                ['Revenue', 'Germany', 2000, 'AP-0 >>> 2,000.00 € Revenue'],
                ['Revenue', 'Germany', 1890, 'AP-0 >>> 1,890.00 €' ],  
                ['Revenue', 'United Kingdom', 1200, 'AP-0 >>> 1,200.00 €' ],             
                
                // AP-1
                ['Germany', 'Global', 319.80, 'AP-1 >>> 319.80 € Overhead'],
                ['United Kingdom', 'Global', 280.20, 'AP-1 >>> 280.20 € Overhead'],
                // AP-2
                ['Germany', 'Global', 204.38, 'AP-2 >>> 204,38 € IT Costs'],
                ['United Kingdom', 'Global', 195.62, 'AP-2 >>> 195.62 € IT Costs'],
                // AP 3
                ['Germany', 'DE-A', 1000.00, 'AP-3 >>> 1,000.00 € Consulting'],
                ['Germany', 'DE-B', 500.00, 'AP-3 >>> 500.00 € Consulting'],
                // AP-4
                ['United Kingdom', 'DE-B', 300.00, 'AP-3 >>> 300.00 € Consulting'],
                 ['United Kingdom', 'UK-A', 800.00, 'AP-3 >>> 800.00 € Consulting'],
            ],
            sankeyOptions: {
              height: 600,
              sankey: {
                node: {
                  label: {
                    fontName: 'arial',
                    fontSize: 14,
                    color: '#000',
                    bold: true,                 
                    italic: false
                  },
                  width: 25,
                  colors: this.colors ,
                  nodePadding: 100
                },
                link: {
                  colorMode: 'gradient',
                  colors: this.colors ,
                  color: { stroke: 'black', strokeWidth: 0.3 }
                }
              }
              
              
              
            }
            
               
              
              
    }
  },
   components: {
    GChart
  },
  computed: {
    ...mapGetters(['loading','visits']),

    
  },
}
</script>

<style>

</style>