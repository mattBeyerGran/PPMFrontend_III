<template >
    <tr>        
        <td class="text-start  ppmDarkTextColor--text ppmTabsBGColor title" >{{ ElementField }}</td>   
        
           
            <td colspan="4"> 
                <GChart
                    type="LineChart"
                    :data="chartData"
                    :options="chartOptions"   
                />
            </td>
                       
        <td class="text-start font-weight-light ppmDarkTextColor--text ppmTabsBGColor">{{ EndTextField }}</td>
    </tr>    
</template>

<script>
import { GChart } from 'vue-google-charts'
export default {
  name: "my-chart-row",
  components: {
    GChart
  },
  props: {    
      ElementField: { type: String, required: true },
      ColumnText: { type: String, required: false },
      EndTextField: { type: String, required: false },
  },
  data () {
    return {
      // Array will be automatically processed with visualization.arrayToDataTable function
      chartData: [
        ['Year', 'Sales', 'Expenses', 'Profit'],
        ['2014', 1000, 400, 200],
        ['2015', 1170, 460, 250],
        ['2016', 660, 1120, 300],
        ['2017', 1030, 540, 350]
      ],
      chartOptions: {
        chart: {
          title: 'Company Performance',
          subtitle: 'Sales, Expenses, and Profit: 2014-2017',
          width: "400",
        },
        
      }
    }
  }
}
</script>


