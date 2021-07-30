<template>

  <v-container class="topmargin">
    <!-- <v-row no-gutters class="white">
      <v-col  cols="3" > -->
      <!-- Überschrift -->
        <div align="left" >
          <p class="display-1 ppmDarkTextColor--text mt-12 pl-4">
          Geschäftsplanung</p><br>
          <p class="title ppmLightTextColor--text pl-4">
          Kredit Allgemein</p> 
        </div>
      <!-- </v-col> -->
      <!-- Tabs -->
      <!-- <v-col cols="7" > -->
        <v-tabs 
          color="ppmLightTextColor" 
          background-color="ppmTabsBGColor" 
          show-arrows
          >
          <v-tabs-slider color="ppmSlider"></v-tabs-slider>
          <v-tab>Kredit allgemein</v-tab>
          <v-tab>Hypotheken</v-tab>
          <v-tab>Spezial</v-tab>
        </v-tabs>
      <!-- </v-col>
    </v-row> -->
   
       <!-- Tabelle          -->
       <v-row>
      <v-col >
        
          <v-simple-table class="" >
    <template v-slot:default>
      <thead>
        <tr>
          <th class="text-left">
            Item
          </th>
          <th class="text-center">
            Januar
          </th>
              <th class="text-center">
            Februar
          </th>
              <th class="text-center">
            Maerz
          </th>
              <th class="text-center">
            April
          </th>
              <th class="text-center">
            Mai
          </th>
              <th class="text-center">
            Juni
          </th>
              <th class="text-center">
            Juli
          </th>
              <th class="text-center">
            August
          </th>
              <th class="text-center">
            September
          </th>
              <th class="text-center">
            Oktober
          </th>
              <th class="text-center">
            November
          </th>
              <th class="text-center">
            Dezember
          </th>
          <th class="text-center">
            Aktion
          </th>
        </tr>
      </thead>
      <!-- <tbody> -->
        <tr
          v-for="item in kreditAllgemein"
          :key="item.name"
        >
          <td>{{ item.name }}</td>
          <td>{{ item.Jan }} <input v-model="input" placeholder="edit me"></td>
          <td>{{ item.Feb }}</td>
          <td>{{ item.Mar }}</td>
          <td>{{ item.Apr }}</td>
          <td>{{ item.Mai }}</td>
          <td>{{ item.Jun }}</td>
          <td>{{ item.Jul }}</td>
          <td>{{ item.Aug }}</td>
          <td>{{ item.Sep }}</td>
          <td>{{ item.Okt }}</td>
          <td>{{ item.Nov }}</td>
          <td>{{ item.Dez }}</td>
          <td><v-btn small>R</v-btn></td>
        </tr>
      <!-- </tbody> -->
    </template>
    
   
  </v-simple-table>
        
   </v-col>
        </v-row>
    </v-container>

       
    
   
  
</template>
<script >
import { mapGetters } from 'vuex';
// import { GChart } from 'vue-google-charts';



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
           input: 'Moin!',
         kreditAllgemein: [
          {
            name: 'Anfangsbestand',
            Jan: 159,
            Feb: 159,
            Mar: 159,
            Apr: 159,
            Mai: 159,
            Jun: 159,
            Jul: 159,
            Aug: 159,
            Sep: 159,
            Okt: 159,
            Nov: 159,
            Dez: 159
          },
          {
            name: 'Zugang',
            Jan: 237,
            Feb: 159,
            Mar: 159,
            Apr: 159,
            Mai: 159,
            Jun: 159,
            Jul: 159,
            Aug: 159,
            Sep: 159,
            Okt: 159,
            Nov: 159,
            Dez: 159
          },
          {
            name: 'Abgang',
            Jan: 262,
            Feb: 159,
            Mar: 159,
            Apr: 159,
            Mai: 159,
            Jun: 159,
            Jul: 159,
            Aug: 159,
            Sep: 159,
            Okt: 159,
            Nov: 159,
            Dez: 159
          },
          {
            name: 'Endbestand',
            Jan: 305,
            Feb: 159,
            Mar: 159,
            Apr: 159,
            Mai: 159,
            Jun: 159,
            Jul: 159,
            Aug: 159,
            Sep: 159,
            Okt: 159,
            Nov: 159,
            Dez: 159
          }
        ],   
    }
  },
  components: {
    // GChart
  },
  computed: {
    
    ...mapGetters(['loading','visits']),
    
   
   
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

/* table {
  border: 1px solid rgb(36, 12, 168);
  border-collapse: collapse;
  text-align: right;
  padding: 15px;
}
th {
  border: 1px solid rgb(36, 12, 168);
  border-collapse: collapse;
  text-align: right;
  padding: 15px;
}
td {
  border: 1px solid rgb(36, 12, 168);
  border-collapse: collapse;
  text-align: right;
  padding: 15px;
} */
</style>