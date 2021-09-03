<template>
    <td  colspan="4"  v-bind:style="{color: fieldColor, backgroundColor: fieldBGColor, borderColor: fieldBGColor}">
       <GChart
                            type="LineChart"
                            :data="chartData"
                            :options="chartOptions"
                            
                                                  
                        /> 
    </td>
</template>
<script>
import { GChart } from 'vue-google-charts';
export default {
  name: "my-chart-field",
  props: {
      fieldValue: { type: Number, required: false },
      fieldColor: { type: String, required: false },
      fieldBGColor: { type: String, required: false },
  },
  components: {
      GChart
  },
  data () {
      return {
        dialog: false,
      
      // Array will be automatically processed with visualization.arrayToDataTable function
      chartData: [
        ['Quartal', 'Default', 'Plan', 'Goal', 'Match'],
        ['Q 1', 200, 400, 1800, 400],
        ['Q 2', 400, 600, 1750, 600],
        ['Q 3', 400, 1120, 1600, 700],
        ['Q 4', 300, 540, 1800, 350]
      ],
      chartOptions: {
        height: 250,
        backgroundColor: '#FFFFFF',
        animation:{
        duration: 1000,
        easing: 'out',
        startup: true,
      },
        chartArea: { width: '80%', height: '60%', },
        legend: {position: 'top'},
        
        series: {
            0:{color: '#F44336', visibleInLegend: true, lineWidth: 3, lineDashStyle: [10,2]},
            1:{color: '#15C0D6', visibleInLegend: true, lineWidth: 12},
            2:{color: '#3CB283', visibleInLegend: true, lineWidth: 3, lineDashStyle: [10,2]},
            3:{color: '#F2B82B', visibleInLegend: true, lineWidth: 5, }
        }
      },
      
      }
    },
}
</script>
