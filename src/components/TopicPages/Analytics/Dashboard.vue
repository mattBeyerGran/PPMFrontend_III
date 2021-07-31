<template >

  <v-container >
    
    <!-- Überschrift -->
      <div align="left" class="mt-12">
        <p class="display-1 msgBlau--text"><v-icon color="msgBlau" >mdi-chart-bar mdi-36px</v-icon>
        Germany - Profit Center PaPM</p> 
      </div>
    <!--- Alerts -->
        <!-- Alert 1 -->
              <v-alert
                  prominent
                  type="error"
                  color="msgRot"
                  dense
                  max-width="1367"
                >
                  <v-row align="center">
                    <v-col class="h1">Please start Buget planning! Planning Deadline is <strong>12th. October 2021. </strong> Detailed planning instructions below in "documents"</v-col>
                    <v-col class="shrink">
                      <v-btn color="msgBlau" @click='goPlanning'>go plannig</v-btn>
                    </v-col>
                  </v-row>
                </v-alert>
        <!-- Alert 2 -->
                <div>
                  <v-alert
                    v-model="alert"
                    dismissible
                    close-icon="mdi-trash"
                    color="msgBlau"
                    border="left"
                    elevation="2"
                    colored-border
                    icon="mdi-mail"
                    max-width="1367"
                  >
                    You've got <strong>3</strong> new plan updates from Business Unit Head.
                  </v-alert>

                  <div class="text-center">
                    <!-- <v-btn
                      v-if="!alert"
                      dark
                      @click="alert = true"
                    >
                      Reset Alert
                    </v-btn> -->
                  </div>
                </div>
        
          <v-row>       
            <!-- CARD 1 -->
              <v-card 
                  class="ml-5 mt-5" 
                  @click='goDeeper' 
                  v-ripple="{ class: 'primary--text' }"
                  >
                  <v-card-title class="grey--text">
                      <div class="display-3 font-weight-bold green--text ml-2">80%</div> 
                      <div class="display-1 secondary--text ml-5">Utilization</div> 
                  </v-card-title>

                  <v-divider></v-divider>
                  <!-- Chart -->
                  <div class="ml-3">
                    <GChart
                      :settings="{ packages: ['corechart', 'gauge'] }"
                      type="Gauge"
                      :data="gaugeData"
                      :options="gaugeOptions"
                    />
                  </div>
                
              </v-card>
              <!-- CARD 2 -->
              <v-card 
                  class="ml-5 mt-5" 
                  
                  
                  width="600"
                  >
                 <v-card-title 
                  class="grey--text"                 
                  >
                  <div class="display-1 secondary--text ml-5">Revenue</div> 
                  <v-spacer></v-spacer>

                  <!-- Sprung Menu -->
                  <v-menu open-on-hover offset-y>
                    <template v-slot:activator="{ on }">
                      <v-btn
                        icon
                        color="primary"
                        dark
                        v-on="on"
                      ><v-icon>mdi-forward</v-icon>
                      </v-btn>
                    </template>
                    <v-list>
                      <v-list-item
                        v-for="(item, index) in lineZiele"
                        :key="index"
                        :to="item.route"
                      >
                        <v-list-item-title>{{ item.title }}</v-list-item-title>
                      </v-list-item>
                    </v-list>
                  </v-menu>
                   </v-card-title
                >

                <v-divider></v-divider>
                <GChart
                  class="ml-5"
                  :settings="{ packages: ['corechart'] }"
                  type="LineChart"                 
                  :data="lineData"
                  :options="lineOptions"
                />

            
                
              </v-card>
              <!-- CARD 3 -->
              <v-card 
                  min-width="400"
                  min-height="400"
                  class="ml-5 mt-5" 
                  @click='goDeeper' 
                  v-ripple="{ class: 'primary--text' }"
                  >
                  <v-card-title class="grey--text">
                      
                      <div class="display-1 secondary--text ml-5">Profit</div> 
                  </v-card-title>

                  <v-divider></v-divider>
                  <!-- Chart -->
                  <div class="ml-12">
                    <GChart
                      :settings="{ packages: ['corechart', 'geochart'] }"
                      type="GeoChart"
                      :data="geoData"
                      :options="geoOptions"
                    />
                  </div>
                  
                
              </v-card>
          
          </v-row>
          <v-row>
            <!-- CARD 4 -->
              <v-card class="ml-5 mt-5">
              
            <v-data-table
              :headers="headers"
              :items="projects"
              class="elevation-1"
            >
              <template v-slot:item.contribution="{ item }">
                <v-chip :color="getColor(item.contribution)" dark>{{ item.contribution }}</v-chip>
              </template>
            </v-data-table>
              </v-card>
      <!-- CARD 5 -->
                <v-card class="ml-5 mt-5"
                    max-width="530"
                    
                  >
                    <v-toolbar
                      color="grey"
                      dark
                    >
                      
                      <v-toolbar-title>Documents</v-toolbar-title>

                      <v-spacer></v-spacer>

                      <v-btn icon>
                        <v-icon>mdi-magnify</v-icon>
                      </v-btn>
                    </v-toolbar>

                    <v-list three-line>
                        <v-list-item three-line>
                            <v-list-item-content>
                              <v-list-item-title>Planning Instructions</v-list-item-title>
                              <v-list-item-subtitle>
                                Secondary line text Lorem ipsum dolor sit amet,
                              </v-list-item-subtitle>
                              <v-list-item-subtitle>
                                consectetur adipiscing elit.
                              </v-list-item-subtitle>
                            </v-list-item-content>
                            
                            <v-list-item-action>
                              <v-btn icon>
                                <v-icon color="msgRot">mdi-download</v-icon>
                              </v-btn>
                            </v-list-item-action>
                          </v-list-item>
                          <v-divider></v-divider>
                          <v-list-item three-line>
                            <v-list-item-content>
                              <v-list-item-title>Sales Report</v-list-item-title>
                              <v-list-item-subtitle>
                                Secondary line text Lorem ipsum dolor sit amet,
                              </v-list-item-subtitle>
                              <v-list-item-subtitle>
                                consectetur adipiscing elit.
                              </v-list-item-subtitle>
                            </v-list-item-content>
                            
                            <v-list-item-action>
                              <v-btn icon>
                                <v-icon color="msgRot">mdi-download</v-icon>
                              </v-btn>
                            </v-list-item-action>
                          </v-list-item>
                          <v-divider></v-divider>
                          <v-list-item three-line>
                            <v-list-item-content>
                              <v-list-item-title>Country Result 2020</v-list-item-title>
                              <v-list-item-subtitle>
                                Secondary line text Lorem ipsum dolor sit amet,
                              </v-list-item-subtitle>
                              <v-list-item-subtitle>
                                consectetur adipiscing elit.
                              </v-list-item-subtitle>
                            </v-list-item-content>
                            
                            <v-list-item-action>
                              <v-btn icon>
                                <v-icon color="msgRot">mdi-download</v-icon>
                              </v-btn>
                            </v-list-item-action>
                          </v-list-item>
                    </v-list>
                  </v-card>


              </v-row>
      
 
  </v-Container>
  
</template>
<script>
import { mapGetters } from 'vuex';
import { GChart } from 'vue-google-charts';


export default {
  name: 'Patienten',
  created(){
    /* this.handleGetPatients(); */
    
   
  },
  updated(){
    /* this.handleGetPatients(); */
  },
  data(){
    return {
            alert: true,
            itemsPerPageArray: [4, 8, 12],
            search: "",
            filter: {},
            sortDesc: false,
            page: 1,
            itemsPerPage: 4,
            /* Verbindung zu gql sortBy: und keys: anpassen */
            sortBy: "PatNR",
            keys: [ "Vorname", "Nachname", "GebDat", "Ort" ],
            /* leeres items Array zur Aufnahme der gql - Ergebnisse */
            items:[],
            itemsCount: 0,
            gaugeData: [
              ['Label', 'Value'],
              ['Utilization', 80],
            ],
            gaugeOptions: {
                width: 800, height: 300,
                redFrom: 0, redTo: 40,
                yellowFrom:40, yellowTo: 70,
                greenFrom: 70, greenTo: 100,
                minorTicks: 5
            },
             lineData: [
                ['Year', 'Project', 'License'],
                [new Date(2020, 0, 1),  1000,      400],
                [new Date(2020, 0, 15),  1170,      460],
                [new Date(2020, 2, 1),  660,       1120],
                [new Date(2020, 3, 1),  1030,      540]
                ],
            lineZiele: [
                { title: 'Cost Sankey', route: '/costSankey' },
                { title: 'Click Me', route: '/uc' }
            
              ],
            lineOptions: {
              title: 'Project and License Revenues',
              width: 550,
              height: 300,
              // Gives each series an axis that matches the vAxes number below.
              series: {
                0: {targetAxisIndex: 0},
               
              },
              vAxes: {
                // Adds titles to each axis.
                0: {title: 'in Tausend €'},
               
              },
              hAxis: {
                /* ticks: [new Date(2014, 0), new Date(2014, 1), new Date(2014, 2), new Date(2014, 3),
                        new Date(2014, 4),  new Date(2014, 5), new Date(2014, 6), new Date(2014, 7),
                        new Date(2014, 8), new Date(2014, 9), new Date(2014, 10), new Date(2014, 11)
                      ] */
              },
              vAxis: {
                /* viewWindow: {
                  max: 30
                } */
              }
            },
            geoData: [
              ['Country', 'Profit'],
              ['Germany', 800],
              ['United States', 300],
              ['Brazil', 400],
              ['Canada', 500],
              ['France', 600]
            ],
            geoZiele: [
                { title: 'Click Me', route: '/patienten' },
                { title: 'Click Me', route: '/mitarbeiter' }            
            ],
            geoOptions:{
              
            },
            trendlineData: [
                ['Diameter', 'Age'],
                [8, 37], [4, 19.5], [11, 52], [4, 22], [3, 16.5], [6.5, 32.8], [14, 72]
                ],
            trendlineOptions: {
                title: 'Age of sugar maples vs. trunk diameter, in inches',
                hAxis: {title: 'Diameter'},
                vAxis: {title: 'Age'},
                legend: 'none',
                trendlines: { 0: {} }    // Draw a trendline for data series 0.
            },
            chartData: [
                ['Bereich','%', { role: 'style'}],
                ['Patient', 90, 'color: #00ACC1'],
                ['Mitarbeiter', 88, 'color: #FFC107'],
                ['Material', 78, 'color: #FF5252'],
                ['Dokumentation', 89, 'color: #FFC107'],
            ],
            chartOptions: { 
                title: 'Richtige Antworten in % nach Bereich',                
                legend: { position: "none" },
                /* colors: [ '#00ACC1' ] */
                hAxis: {
                  minValue: 0,
                  ticks: [0, 50, 80, 90, 100]
                  }
              },
            headers: [
          {
            text: 'Project',
            align: 'start',
            sortable: false,
            value: 'name',
          },
          { text: 'Contribution (%)', value: 'contribution' },
          { text: 'Head Count (FTE)', value: 'hc' },
          { text: 'Revenue (€)', value: 'revenue' },
          { text: 'Salaries (€)', value: 'salaries' },
          { text: 'Travel Cost (€)', value: 'travel' },
        ],
        projects: [
          {
            name: 'Erste Bank Österreichs',
            contribution: 10,
            hc: 12.0,
            revenue: 300000,
            salaries: 105000,
            travel: 20341
          },
          {
            name: 'Allianz',
            contribution: -12,
            hc: 12.0,
            revenue: 18902,
            salaries: 40500,
            travel: 20341
          },
          {
            name: 'Deutsche Bank',
            contribution: 30,
            hc: 3.0,
            revenue: 30000,
            salaries: 5000,
            travel: 10002
          },
          {
            name: 'Otto Versand',
            contribution: 21,
            hc: 4.5,
            revenue: 300000,
            salaries: 105000,
            travel: 20341
          },
          {
            name: 'BW Fuhrpark',
            contribution: 25,
            hc: 23.0,
            revenue: 723412,
            salaries: 502340,
            travel: 20341
          }
        ]
      }
    
            
    
  },
  components: {
    GChart
  },
  computed: {
    ...mapGetters(['loading','patients']),
    
    numberOfPages() {
      return Math.ceil(this.itemsCount / this.itemsPerPage)
         },
    filteredKeys() {
      return this.keys.filter(key => key !== `Name`);
    }
  },
  methods: {
    nextPage() {
      if (this.page + 1 <= this.numberOfPages) this.page += 1;
    },
    formerPage() {
      if (this.page - 1 >= 1) this.page -= 1;
    },
    updateItemsPerPage(number) {
      this.itemsPerPage = number;
    },
    goDeeper(){
      this.$router.push('/uc');
    },
    goPlanning(){
      this.$router.push('/countryplan');
    },
    getColor (contribution) {
        if (contribution > 20) return 'green'
        else if (contribution > 5) return 'orange'
        else return 'red'
      },
  }
}

</script>

