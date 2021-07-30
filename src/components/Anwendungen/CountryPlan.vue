<template>
  <div>
    <v-container>
      <!-- Seiten Titel -->
      <div align="left" class="mt-12">
        <p class="display-1 msgRot--text"><v-icon color="msgRot">mdi-flag mdi-36px</v-icon>
        Cost Planning</p>     
      </div>
    </v-container>
    
                
    <!-- CARD 1 -->
      <v-card class="mt-12">
               
                <v-card-title class="subheading secondary--text" > Germany - Profit Center - PaPM</v-card-title> 
        <v-form class="mx-5">
                <v-container>
                   <v-col xl="2" sm="6" md="3">
                      <p>Salaries</p>
                    </v-col>
                    <v-row align="center">

                   
                    <v-col xl="1" sm="6" md="3">
                      <v-text-field
                        dense=true
                        label="January"
                        placeholder="12,000"
                        color='msgBlau'
                        disabled
                        
                        
                      ></v-text-field>
                    </v-col>
                    <v-col xl="1" sm="6" md="3">
                      <v-text-field
                        dense=true
                        label="February"
                        placeholder="11,000"
                        color='msgBlau'
                        hint="prefilled with placeholder"
                        type="number"
                      ></v-text-field>
                    </v-col>
                    <v-col xl="1" sm="6" md="3">
                      <v-text-field
                        dense=true
                        label="March"
                        outlined="true"
                        color='msgBlau'
                        hint="prefilled with data"
                        value="15000"
                        type="number"
                        
                      ></v-text-field>
                    </v-col>
                    <v-col xl="1" sm="6" md="3">
                      <v-text-field
                        dense=true
                        label="April"
                        placeholder="12,000"
                        color='msgBlau'
                      ></v-text-field>
                    </v-col>
                    <v-col xl="1" sm="6" md="3">
                      <v-text-field
                        dense=true
                        label="May"
                        placeholder="12.000"
                        color='msgBlau'
                      ></v-text-field>
                    </v-col>
                    <v-col xl="1" sm="6" md="3">
                      <v-text-field
                        dense=true
                        label="June"
                        placeholder="12.000"
                        color='msgBlau'
                      ></v-text-field>
                    </v-col>
                    <v-col xl="1" sm="6" md="3">
                      <v-text-field
                        dense=true
                        label="July"
                        placeholder="12.000"
                        color='msgBlau'
                      ></v-text-field>
                    </v-col>
                    <v-col xl="1" sm="6" md="3">
                      <v-text-field
                        dense=true
                        label="August"
                        placeholder="12.000"
                        color='msgBlau'
                      ></v-text-field>
                    </v-col>
                    <v-col xl="1" sm="6" md="3">
                      <v-text-field
                        dense=true
                        label="September"
                        placeholder="12.000"
                        color='msgBlau'
                      ></v-text-field>
                    </v-col>
                    <v-col xl="1" sm="6" md="3">
                      <v-text-field
                        dense=true
                        label="October"
                        placeholder="12.000"
                        color='msgBlau'
                      ></v-text-field>
                    </v-col>
                    <v-col xl="1" sm="6" md="3" >
                      <v-text-field
                        dense=true
                        label="November"
                        placeholder="12.000"
                        color='msgBlau'
                      ></v-text-field>
                    </v-col>
                    <v-col xl="1" sm="6" md="3">
                      <v-text-field
                        dense=true
                        label="December"
                        placeholder="12.000"
                        color='msgBlau'
                      ></v-text-field>
                    </v-col>
                    
                  

                  </v-row>
                </v-container>
                  
               
        </v-form>
    </v-card>

     
     <!-- CARD 3 -->
   
    

        <GChart
          class="py-5 px-5"
          :settings="{ packages: ['corechart', 'table'] }"
          type="Table"                 
          :data="tableData"
          :options="tableOptions"
          ref="gChart"  
        />         
    <!-- Stepper -->
    <v-stepper v-model="e6" vertical>
    <v-stepper-step :complete="e6 > 1" step="1">
      Plan Your Head Count
      <small>Add additional Colleagues</small>
    </v-stepper-step>

    <v-stepper-content step="1">
      <v-card color="light-blue lighten-5" class="mb-12" height="100px">
               <v-form class="mx-5">
                <v-container>
                   
                    <v-row align="center">

                   
                    <v-col xl="1" sm="6" md="3">
                      <v-text-field
                        dense=true
                        label="January"
                        placeholder="12,000"
                        color='msgBlau'
                        disabled
                        
                        
                      ></v-text-field>
                    </v-col>
                    <v-col xl="1" sm="6" md="3">
                      <v-text-field
                        dense=true
                        label="February"
                        placeholder="11,000"
                        color='msgBlau'
                        hint="prefilled with placeholder"
                        type="number"
                      ></v-text-field>
                    </v-col>
                    <v-col xl="1" sm="6" md="3">
                      <v-text-field
                        dense=true
                        label="March"
                        color='msgBlau'
                        hint="prefilled with data"
                        value="15000"
                        type="number"
                        
                      ></v-text-field>
                    </v-col>
                    <v-col xl="1" sm="6" md="3">
                      <v-text-field
                        dense=true
                        label="April"
                        placeholder="12,000"
                        color='msgBlau'
                      ></v-text-field>
                    </v-col>
                    <v-col xl="1" sm="6" md="3">
                      <v-text-field
                        dense=true
                        label="May"
                        placeholder="12.000"
                        color='msgBlau'
                      ></v-text-field>
                    </v-col>
                    <v-col xl="1" sm="6" md="3">
                      <v-text-field
                        dense=true
                        label="June"
                        placeholder="12.000"
                        color='msgBlau'
                      ></v-text-field>
                    </v-col>
                    <v-col xl="1" sm="6" md="3">
                      <v-text-field
                        dense=true
                        label="July"
                        placeholder="12.000"
                        color='msgBlau'
                      ></v-text-field>
                    </v-col>
                    <v-col xl="1" sm="6" md="3">
                      <v-text-field
                        dense=true
                        label="August"
                        placeholder="12.000"
                        color='msgBlau'
                      ></v-text-field>
                    </v-col>
                    <v-col xl="1" sm="6" md="3">
                      <v-text-field
                        dense=true
                        label="September"
                        placeholder="12.000"
                        color='msgBlau'
                      ></v-text-field>
                    </v-col>
                    <v-col xl="1" sm="6" md="3">
                      <v-text-field
                        dense=true
                        label="October"
                        placeholder="12.000"
                        color='msgBlau'
                      ></v-text-field>
                    </v-col>
                    <v-col xl="1" sm="6" md="3" >
                      <v-text-field
                        dense=true
                        label="November"
                        placeholder="12.000"
                        color='msgBlau'
                      ></v-text-field>
                    </v-col>
                    <v-col xl="1" sm="6" md="3">
                      <v-text-field
                        dense=true
                        label="December"
                        placeholder="12.000"
                        color='msgBlau'
                      ></v-text-field>
                    </v-col>
                    
                  

                  </v-row>
                </v-container>
                  
               
        </v-form>
      </v-card>
      <v-btn color="primary" @click="e6 = 2">Continue</v-btn>
      <v-btn text>Cancel</v-btn>
    </v-stepper-content>

    <v-stepper-step :complete="e6 > 2" step="2">Plan Your IT-Costs</v-stepper-step>

    <v-stepper-content step="2">
      <v-card color="deep-orange lighten-5" class="mb-12" height="100px">
         <v-form class="mx-5">
                <v-container>
                 
                    <v-row align="center">

                   
                    <v-col xl="1" sm="6" md="3">
                      <v-text-field
                        dense=true
                        label="January"
                        placeholder="12,000"
                        color='msgBlau'
                        disabled
                        
                        
                      ></v-text-field>
                    </v-col>
                    <v-col xl="1" sm="6" md="3">
                      <v-text-field
                        dense=true
                        label="February"
                        placeholder="11,000"
                        color='msgBlau'
                        hint="prefilled with placeholder"
                        type="number"
                      ></v-text-field>
                    </v-col>
                    <v-col xl="1" sm="6" md="3">
                      <v-text-field
                        dense=true
                        label="March"
                        color='msgBlau'
                        hint="prefilled with data"
                        value="15000"
                        type="number"
                        
                      ></v-text-field>
                    </v-col>
                    <v-col xl="1" sm="6" md="3">
                      <v-text-field
                        dense=true
                        label="April"
                        placeholder="12,000"
                        color='msgBlau'
                      ></v-text-field>
                    </v-col>
                    <v-col xl="1" sm="6" md="3">
                      <v-text-field
                        dense=true
                        label="May"
                        placeholder="12.000"
                        color='msgBlau'
                      ></v-text-field>
                    </v-col>
                    <v-col xl="1" sm="6" md="3">
                      <v-text-field
                        dense=true
                        label="June"
                        placeholder="12.000"
                        color='msgBlau'
                      ></v-text-field>
                    </v-col>
                    <v-col xl="1" sm="6" md="3">
                      <v-text-field
                        dense=true
                        label="July"
                        placeholder="12.000"
                        color='msgBlau'
                      ></v-text-field>
                    </v-col>
                    <v-col xl="1" sm="6" md="3">
                      <v-text-field
                        dense=true
                        label="August"
                        placeholder="12.000"
                        color='msgBlau'
                      ></v-text-field>
                    </v-col>
                    <v-col xl="1" sm="6" md="3">
                      <v-text-field
                        dense=true
                        label="September"
                        placeholder="12.000"
                        color='msgBlau'
                      ></v-text-field>
                    </v-col>
                    <v-col xl="1" sm="6" md="3">
                      <v-text-field
                        dense=true
                        label="October"
                        placeholder="12.000"
                        color='msgBlau'
                      ></v-text-field>
                    </v-col>
                    <v-col xl="1" sm="6" md="3" >
                      <v-text-field
                        dense=true
                        label="November"
                        placeholder="12.000"
                        color='msgBlau'
                      ></v-text-field>
                    </v-col>
                    <v-col xl="1" sm="6" md="3">
                      <v-text-field
                        dense=true
                        label="December"
                        placeholder="12.000"
                        color='msgBlau'
                      ></v-text-field>
                    </v-col>
                    
                  

                  </v-row>
                </v-container>
                  
               
        </v-form>
      </v-card>
      <v-btn color="primary" @click="e6 = 3">Continue</v-btn>
      <v-btn text>Cancel</v-btn>
    </v-stepper-content>

    <v-stepper-step :complete="e6 > 3" step="3">Plan Your Revenue</v-stepper-step>

    <v-stepper-content step="3">
      <v-card color="green accent-1" class="mb-12" height="100px"></v-card>
      <v-btn color="primary" @click="e6 = 4">Continue</v-btn>
      <v-btn text>Cancel</v-btn>
    </v-stepper-content>

    <v-stepper-step step="4">All Good?</v-stepper-step>
    <v-stepper-content step="4">
      <v-card color="grey lighten-5" class="mb-12" height="400px">
        Result Page
      </v-card>
      <v-btn color="primary" @click="e6 = 1">Send plan to Controlling</v-btn>
      <v-btn text>Cancel</v-btn>
    </v-stepper-content>
  </v-stepper>
  </div>
</template>
<script >
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
           e6: 1,
            tableData: [
              ['Cost Element', 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
              ['Saleries', 1000000, 1170000, 1170000, 1170000, 1170000, 1170000, 1170000, 1170000, 1170000, 1170000, 1170000, 1170000],
              ['Travel Costs', 50000, 46000, 12000, 37000, 45000, 50000,48780, 49000, 47500, 45000, 33000, 34000]
             
            ],
            tableOptions: {
              
              showRowNumber: true,
              allowHtml: true,
              
              headerRow: 'beige-background',

             
            }
    }
  },
  components: {
    GChart
  },
  computed: {
    formTitle () {
      return this.editedIndex === -1 ? 'New Project' : 'Edit Project'
    },
    ...mapGetters(['loading','patients'])
    
   
  },
  watch: {
    dialog (val) {
      val || this.close()
    },
  },
  methods: {
    
    close () {
      this.dialog = false
      setTimeout(() => {
        this.editedItem = Object.assign({}, this.defaultItem)
        this.editedIndex = -1
      }, 300)
    },

    save () {
      if (this.editedIndex > -1) {
        this.handleUpdateUser();
        Object.assign(this.users[this.editedIndex], this.editedItem);
        this.close();

      } else {
        this.handleCreateUser();   
        this.close();
      }
    },
  }
}

</script>


<style>
.bold-green-font {
    font-weight: bold;
    color: green;
  }

  .bold-font {
    font-weight: bold;
  }

  .right-text {
    text-align: right;
  }

  .large-font {
    font-size: 15px;
  }

  .italic-darkblue-font {
    font-style: italic;
    color: darkblue;
  }

  .italic-purple-font {
    font-style: italic;
    color: purple;
  }

  .underline-blue-font {
    text-decoration: underline;
    color: blue;
  }

  .gold-border {
    border: 3px solid gold;
  }

  .deeppink-border {
    border: 3px solid deeppink;
  }

  .orange-background {
    background-color: orange;
  }

  .orchid-background {
    background-color: orchid;
  }

  .beige-background {
    background-color: beige;
  }


</style>