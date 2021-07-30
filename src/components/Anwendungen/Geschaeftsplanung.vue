<template>

  <v-container  >
     <v-row>
      <!-- Überschrift -->
        <div align="left"  class="topmargin bottommargin">
          <p class="display-1 ppmPlanTitleColor--text mt-8 pl-4">
          Geschäftsplanung</p>
        </div>
    </v-row>
    <v-row no-gutters class="white ">
       <!-- Tabs -->
        <v-tabs 
          color="ppmLightTextColor" 
          background-color="ppmTabsBGColor" 
          show-arrows
          >
          <v-tabs-slider color="ppmSlider"></v-tabs-slider>
          <v-tab>Kredit allgemein</v-tab>
          <v-tab to="status">Hypotheken</v-tab>
          <v-tab>Spezial</v-tab>
        </v-tabs>
    </v-row>
   
   
       <!-- Tabelle          -->
       <v-row>
      <v-col >
        
    <v-simple-table>
    <template v-slot:default>
      <thead>
        <tr>
          <th class="text-left ppmTableTextColor--text">
            Plan-Element
          </th>
          <th class="text-center ppmTableTextColor--text">
            Januar
          </th>
              <th class="text-center ppmTableTextColor--text">
            Februar
          </th>
              <th class="text-center ppmTableTextColor--text">
            Maerz
          </th>
              <th class="text-center ppmTableTextColor--text">
            April
          </th>
              <th class="text-center ppmTableTextColor--text">
            Mai
          </th>
              <th class="text-center ppmTableTextColor--text">
            Juni
          </th>
              <th class="text-center ppmTableTextColor--text">
            Juli
          </th>
              <th class="text-center ppmTableTextColor--text">
            August
          </th>
              <th class="text-center ppmTableTextColor--text">
            September
          </th>
              <th class="text-center ppmTableTextColor--text">
            Oktober
          </th>
              <th class="text-center ppmTableTextColor--text">
            November
          </th>
              <th class="text-center ppmTableTextColor--text">
            Dezember
          </th>
        
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in kreditAllgemein" :key="item.name" >
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
          
        </tr>
      </tbody>
    </template>
    
   
  </v-simple-table>
        
   </v-col>
        </v-row>

           <!-- Reference Tabelle          -->
       <v-row>
      <v-col >
        
  
  <v-data-table
    :headers="headers"
    :items="desserts"

    
    class="elevation-1"
  >
  <template v-slot:top >
        <div>This is content above the actual table</div>
      </template>
      
    <template v-slot:item.calories="{ item }">
      <v-chip
        :color="getColor(item.calories)"
        dark
      >
        {{ item.calories }}
      </v-chip>
    </template>
  </v-data-table>
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
        headers: [
          {
            text: 'Dessert (100g serving)',
            align: 'start',
            sortable: false,
            value: 'name',
          },
          { text: 'Calories', value: 'calories' },
          { text: 'Fat (g)', value: 'fat' },
          { text: 'Carbs (g)', value: 'carbs' },
          { text: 'Protein (g)', value: 'protein' },
          { text: 'Iron (%)', value: 'iron' },
        ],
        desserts: [
          {
            name: 'Frozen Yogurt',
            calories: 159,
            fat: 6.0,
            carbs: 24,
            protein: 4.0,
            iron: '1%',
          },
          {
            name: 'Ice cream sandwich',
            calories: 237,
            fat: 9.0,
            carbs: 37,
            protein: 4.3,
            iron: '1%',
          },
          {
            name: 'Eclair',
            calories: 262,
            fat: 16.0,
            carbs: 23,
            protein: 6.0,
            iron: '7%',
          },
          {
            name: 'Cupcake',
            calories: 305,
            fat: 3.7,
            carbs: 67,
            protein: 4.3,
            iron: '8%',
          },
          {
            name: 'Gingerbread',
            calories: 356,
            fat: 16.0,
            carbs: 49,
            protein: 3.9,
            iron: '16%',
          },
          {
            name: 'Jelly bean',
            calories: 375,
            fat: 0.0,
            carbs: 94,
            protein: 0.0,
            iron: '0%',
          },
          {
            name: 'Lollipop',
            calories: 392,
            fat: 0.2,
            carbs: 98,
            protein: 0,
            iron: '2%',
          },
          {
            name: 'Honeycomb',
            calories: 408,
            fat: 3.2,
            carbs: 87,
            protein: 6.5,
            iron: '45%',
          },
          {
            name: 'Donut',
            calories: 452,
            fat: 25.0,
            carbs: 51,
            protein: 4.9,
            iron: '22%',
          },
          {
            name: 'KitKat',
            calories: 518,
            fat: 26.0,
            carbs: 65,
            protein: 7,
            iron: '6%',
          },
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
    getColor (calories) {
        if (calories > 400) return 'red'
        else if (calories > 200) return 'orange'
        else return 'green'
      },
    
    
  }
}

</script>


<style>

</style>