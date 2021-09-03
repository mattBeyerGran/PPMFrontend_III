<template>
    <td  colspan="4"  v-bind:style="{backgroundColor: fieldBGColor, borderColor: fieldBGColor}">
       <GChart
            type="LineChart"                   
            :data="getChart03.chartData"
            :options="chartOptions"                                          
        /> 
        
       

    </td>
</template>
<script>
import { GChart } from 'vue-google-charts';
import { mapGetters } from 'vuex';

export default {
  name: "my-chart-field",
  props: {
      
      fieldBGColor: { type: String, required: false },
  },
  components: {
      GChart
  },
  computed: {
   ...mapGetters([
       'getChart03',
      
    ]) 
  },
  data () {
      return {
        dialog: false,
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
<!-- :data="getChart03.chartData" -->