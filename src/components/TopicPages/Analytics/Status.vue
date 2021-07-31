<template>

  
  <v-container>
     <GChart
          class="pt-5"
          :settings="{ packages: ['corechart', 'gantt', 'table'] }"
          type="Gantt"                 
          :data="ganttData"
          :options="ganttOptions"
          ref="gChart"         
        />     
  </v-container>
    
  
</template>

<script>
import { GChart } from 'vue-google-charts';


export default {
  name: 'Patienten',
  created(){
   /*  this.handleGetPatients(); */
    
   
  },
  updated(){
   /*  this.handleGetPatients(); */
  },
  data(){
    return {
            items:[],
            itemsCount: 0,
            
            colors: ['#a6cee3', '#b2df8a', '#fb9a99', '#fdbf6f',
                  '#cab2d6', '#ffff99', '#1f78b4', '#33a02c'],
     // Achtung  die Monate starten mit 0
            ganttData: [
              [{type: 'string', label: 'TaskID', id: 'TaskID'},{type: 'string', label: 'Task Name'}, {type: 'date', label: 'Start Date'}, {type: 'date', label: 'End Date'}, {type: 'number', label: 'Dauer'}, {type: 'number', label: '% fertig'}, {type: 'string', label: 'Dependecies'},],
              ['Default', 'Planungs-Vorbereitung', new Date(2021, 8, 1), new Date(2021, 8, 7), null,  100,  null],
              ['Gesch', 'Geschaeftsplanung', null, new Date(2021, 8, 14), this.daysToMilliseconds(5), 100, 'Default'],
              ['Ertrag', 'Ertragsplanung', null, new Date(2021, 8, 25), this.daysToMilliseconds(7), 20, 'Gesch'],
              ['Kosten', 'Kostenplanung', null, new Date(2021, 9, 5), this.daysToMilliseconds(14), 35, 'Gesch'],
              ['Bilanz', 'Bilanzplanung', null, new Date(2021, 9, 12), this.daysToMilliseconds(12), 0, 'Ertrag,Kosten']
         ],
            ganttOptions: {
              height: 600
            },

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
        
    
  },
  methods: {
      daysToMilliseconds(days) {
      return days * 24 * 60 * 60 * 1000;
      },

  } 
  
}

</script>

