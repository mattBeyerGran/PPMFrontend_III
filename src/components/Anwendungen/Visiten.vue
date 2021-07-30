<template>

  <v-container class="ppmmargin">
    <v-row no-gutters>
    <v-col  cols="2" class="white">
    <!-- Überschrift -->
      <div align="left" class="mt-6">
        <p class="display-1 anwendung--text"><v-icon color="anwendung">mdi-file-find mdi-36px</v-icon>
        Visiten</p> 
      </div>
 </v-col>
  <v-col cols="10">
    <v-tabs color="ppmTapTextColor">
      <v-tabs-slider color="ppmSlider"></v-tabs-slider>
      <v-tab>Item One</v-tab>
      <v-tab>Item Two</v-tab>
      <v-tab>Item Three</v-tab>
    </v-tabs>
   
    <!-- CARD 1 -->
  
      <v-card class="mt-12">

      <!-- ADD BUTTON -->
    <v-card-text style="height: 1px; position: absolute" >
   
            <v-btn
              fab
              dark
              color="indigo"
              top
              right
              absolute
              to="/Visite"
            >
              <v-icon>mdi-plus</v-icon>
            </v-btn>  
       </v-card-text>
            <v-card-title class="subheading secondary--text" >
                  Visten je Patient und Pflegekraft
                </v-card-title>
        <GChart
          class="pt-5"
          :settings="{ packages: ['corechart', 'timeline'] }"
          type="Timeline"                 
          :data="timelineData"
          :options="timelineOptions"
          :events="timelineEvents"
          ref="gChart"        
        />     
        "sdsds" 
    </v-card>
    
    </v-col>
     </v-row>
  </v-container>
</template>
<script >
import { mapGetters } from 'vuex';
import { GChart } from 'vue-google-charts';



export default {
  name: 'Visiten',
  created(){
    this.handleGetVisits();
  },
  updated(){
    this.handleGetVisits();
  },
  data(){
    return {
            timelineData: [
                [{type: 'string', label: 'Patient', id: 'Patient'},'Pflegekraft', 'Beginn', 'End'],
                [ 'Max Melwers', 'Leonhard Müller-Riemenscheidt', new Date(2017, 8, 29), new Date(2017, 8, 30) ],
                [ 'Maria Wolters', 'Martin Ährmann',new Date(2018, 1, 16),  new Date(2018, 1, 17) ],
                [ 'Silke Kleibera', 'Holger Kapinsky', new Date(2017, 11, 14),  new Date(2017, 11, 15) ],               
                [ 'Ulrich Atolls', 'Anton Budtke', new Date(2017, 9, 29), new Date(2017, 9, 30) ],
                [ 'Anton Wuhan', 'Ernest Covian',new Date(2018, 6, 5),  new Date(2018, 6, 6) ],
                [ 'Max Reimann', 'Lars Hansen',new Date(2017, 11, 16),  new Date(2017, 11, 17)],
                [ 'Anton Wuhan', 'Stefan Liebscher', new Date(2017, 7, 13),  new Date(2017, 7, 14) ],
                [ 'Max Brcuksen', 'Uwe Moorland', new Date(2018, 1, 10),  new Date(2018, 1, 11) ],
                [ 'Marta Keil', 'Harald Schröder', new Date(2018, 5, 22),  new Date(2018, 5, 23) ]                
            ],
            timelineOptions: { 
               height: "400",
               timeline: {  
                 colorByRowLabel: false, 
                 groupByRowLabel: true,
                 avoidOverlappingGridLines: true,
                 /* singleColor: '#841439' */
                 },
               colors:["#F44336", "#4CAF50", "#FFEB3B","#F44336", "#4CAF50", "#FFEB3B","#F44336", "#4CAF50", "#FFEB3B" ],
               backgroundColor: '#84FFFF'
              },
            text0: '',
            text1: '',
            item: [],
            timelineEvents: {
              select: () => {
                const timeline = this.$refs.gChart.chartObject;
                const selection = timeline.getSelection();
                const item = selection.length !== 0 ? selection[0] : 'nix'
                this.text0='Pflegekraft: ' + this.timelineData[item.row+1][1] 
                this.text1='Patient: ' + this.timelineData[item.row+1][0] 
                this.dialog = true
              }
            }
    }
  },
  components: {
    GChart
  },
  computed: {
    
    ...mapGetters(['loading','visits']),
    
    /* comTest(){
      this.timelineData.length;
      this.visits.length;
      // eslint-disable-next-line no-console
      return console.log('Anzahl Visiten ' + this.timelineData.length - 1 + '  ' + this.visits.length - 1)
    } */
   
  },
  
  methods: {
     handleGetVisits(){
      // reach out to Vuex store, fire action that gets patients 
      this.$store.dispatch("visits");
      this.itemsCount = this.visits.length;
      // eslint-disable-next-line no-console
      console.log('Anzahl Visiten: ' + this.itemsCount);
      // eslint-disable-next-line no-console
      // console.log(this.visits);
    },
    gotoVisit(){
      this.$router.push('/neueVisite');
    },
    
    
    
  }
}

</script>


<style>
.ppmmargin{
  padding: 155px 0;
}

</style>

