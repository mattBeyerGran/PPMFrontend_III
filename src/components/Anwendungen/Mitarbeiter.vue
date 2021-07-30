<template>
<div>
   <v-card-text style="height: 12px; position: relative" class="mt-6">  
        
        <!-- Überschrift -->
    <!-- <v-container  >   -->
        <div align="left" >
            <p class="display-1 anwendung--text"><v-icon color="anwendung">mdi-doctor mdi-36px</v-icon>
            Mitarbeiter</p> 
       
      <!-- </v-container> -->
      <v-spacer></v-spacer>
      <!-- ADD BUTTON -->
      <v-btn
        class="mt-12" 
        absolute
        right
        dark
        fab
        top
        color="anwendung"
        to="/uc"
      >
        <v-icon>mdi-plus</v-icon>
      </v-btn>
       </div>
    </v-card-text>

    <!-- Data Iterator -->
      <!-- Verbindung zu gql :items="Employees" -->
      <v-data-iterator   
        class="mt-12" 
        :items="employees"  
        :items-per-page.sync="itemsPerPage"
        :page="page"
        :search="search"
        :sort-by="sortBy"
        :sort-desc="sortDesc"
        hide-default-footer
      >
        <template v-slot:header>
          <v-toolbar flat color="tableHeaderColor" class="mb-1">
            <v-text-field
              v-model="search"
              clearable
              flat
        
              hide-details
              color="secondary"
              prepend-inner-icon="mdi-magnify"
              label="Suche"
            ></v-text-field>
            <template v-if="$vuetify.breakpoint.mdAndUp">
              <v-spacer></v-spacer>
              <v-select
                v-model="sortBy"
                flat             
                hide-details
                color="secondary"
                :items="keys"
                prepend-inner-icon="mdi-sort-alphabetical"
                label="Sortierung"
              ></v-select>
              <v-spacer></v-spacer>
              <v-btn-toggle v-model="sortDesc" mandatory>
                <v-btn large depressed color="tableHeaderColor" :value="false">
                  <v-icon color="anwendung">mdi-arrow-up</v-icon>
                </v-btn>
                <v-btn large depressed color="tableHeaderColor" :value="true">
                  <v-icon color="anwendung">mdi-arrow-down</v-icon>
                </v-btn>
              </v-btn-toggle>
            </template>
          </v-toolbar>
        </template>

        <template v-slot:default="props">
          <v-row>
            <!-- Verbindung zu gql :key="item.id" -->
            <v-col
              v-for="item in props.items"
              :key="item.id"
              cols="12"
              sm="6"
              md="4"
              lg="3"
            >
              <v-card @click='gotoEmployee' v-ripple="{ class: 'secondary--text' }">
               
                <v-card-title
                  class="title font-weight-bold secondary white--text"
                  >
                  
                  {{ item.Vorname}} {{ item.Nachname }} </v-card-title
                >

                <v-divider></v-divider>
                

                <v-list>
         
                  <v-list-item
                    v-for="(key, index) in filteredKeys"
                    :key="index"
                  >
                    <v-list-item-content
                      class="font-weight-thin"
                      >{{ key }}:</v-list-item-content
                    >
       
                    <v-list-item-content
                      class="align-end"
                      :class="{
                        'anwendung--text font-weight-bold': sortBy === key
                      }"
                      >{{ item[key].slice(0,20) }}</v-list-item-content
                    >

                     
                    
                  </v-list-item>
                </v-list>
                
              </v-card>
            </v-col>
          </v-row>
        </template>

        <!-- footer -->
        <template v-slot:footer> 
          <v-row class="ma-2" align="center" justify="center">
            <span class="grey--text">Ergebnisse pro Seite</span>
            <v-menu offset-y>
              <template v-slot:activator="{ on }">
                <v-btn 
                  outlined 
                  small 
                  text 
                  color="anwendung" 
                  class="ml-2" 
                  v-on="on">
                  {{ itemsPerPage }}
                  <v-icon>mdi-chevron-down</v-icon>
                </v-btn>
              </template>
              <v-list>
                <v-list-item
                  v-for="(number, index) in itemsPerPageArray"
                  :key="index"
                  @click="updateItemsPerPage(number)"
                >
                  <v-list-item-title>{{ number }}</v-list-item-title>
                </v-list-item>
              </v-list>
            </v-menu>

            <v-spacer></v-spacer>

            <span
              class="mr-4
              grey--text header" 
            >
              Seite <span class="anwendung--text">{{ page }}</span>  von  <span class="anwendung--text">{{ numberOfPages }}</span> 
            </span>
            <v-btn
                outlined
                icon
                text
                color="anwendung"
                small
                class="mr-3"
                @click="formerPage"
            >
              <v-icon>mdi-chevron-left</v-icon>
            </v-btn>
            <v-btn
                outlined
                icon
                text
                color="anwendung"
                small
                class="mr-4"
                @click="nextPage"
            >
              <v-icon>mdi-chevron-right</v-icon>
            </v-btn>
          </v-row>
        </template>
      </v-data-iterator>
    </div> 
    

</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'Employees',
  created(){
    this.handleGetEmployees();
    
   
  },
  updated(){
    this.handleGetEmployees();
  },
  data(){
    return {
            itemsPerPageArray: [4, 8, 16, 32, 64],
            search: "",
            filter: {},
            sortDesc: false,
            page: 1,
            itemsPerPage: 8,
            /* Verbindung zu gql sortBy: und keys: anpassen */
            sortBy: "Nachname",
            keys: [ "Vorname", "Nachname", "GebDat", "Ort", "Ausbildung", "Position" ],
            /* leeres items Array zur Aufnahme der gql - Ergebnisse */
            items:[],
            itemsCount: 0,
            
    }
  },
  components: {
   
  },
  computed: {
    ...mapGetters(['loading','employees']),
    
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
    handleGetEmployees(){
      // reach out to Vuex store, fire action that gets patients 
      this.$store.dispatch("employees");
      this.itemsCount = this.employees.length;
      // eslint-disable-next-line no-console
      // console.log(this.itemsCount);
      // eslint-disable-next-line no-console
      // console.log(this.employees);
    },
    gotoEmployee(){
      this.$router.push('/uc');
    }
  }
}
</script>

<style>

</style>