<template>   
       <GChart
            type="LineChart"                   
            :data="getChart(chart).chartData"
            :options="getChart(chart).chartOptions"   
            :resizeDebounce="500"                                       
        /> 
</template>
<script>
import { GChart } from 'vue-google-charts';
import { mapGetters } from 'vuex';

export default {
  name: "my-ppm-chart",
  props: {
      chart: { type: String, required: true }
  },
  components: {
      GChart
  },
  computed: {    
   ...mapGetters([
       'getChart',  
    ]) 
  }
}
</script>