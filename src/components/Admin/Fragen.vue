<template>
  <v-container >
    <!-- Seiten Titel -->
    <div  align="left" class="mt-6">
      <p class="display-1 anwendung--text"><v-icon color="verzeichnis">mdi-comment-question mdi-36px</v-icon>
      Fragen</p>      
    </div>

    <!-- Progress circle/spinner -->
      <v-layout row>
        <v-dialog v-model="loading" persistent fullscreen>
          <v-container fill-height>
            <v-layout row  justify-center align-center>
              <v-progress-circular indeterminate :size="70" :width="10" color="anwendung"></v-progress-circular>
            </v-layout>
          </v-container>
        </v-dialog>
      </v-layout>

   <!-- TABELLE -->
    <div class=""> 
      <v-data-table
      :headers="headers"
      :items="questions"    
      :items-per-page.sync="itemsPerPage"
      :page="page"
      :search="search"
      hide-default-footer
      sort-by="Reihenfolge"
      class="elevation-1"
    >
        <!-- Datumsanzeige in der Tabelle angepasst -->
          <template v-slot:item.gueltigAb="{ item }">
            {{ item.gueltigAb.slice(0,10) }}
          </template>
          <template v-slot:item.gueltigBis="{ item }">
            {{ item.gueltigBis.slice(0,10) }}
          </template>

      <template v-slot:top>
        <!-- Tabellen Toolbar    -->
        <v-toolbar flat color="white">
          <v-toolbar-title class="grey--text header">Fragenkatalog</v-toolbar-title>
              <v-spacer></v-spacer>
                <!-- Filter -->
                    <v-text-field
                        class="grey--text"
                        v-model="search"
                        prepend-icon="mdi-magnify"
                        label="hier suchen..."
                        single-line
                        hide-details
                  ></v-text-field>
              <v-spacer></v-spacer>

          <v-dialog v-model="questionDialog" max-width="500px">
            <template v-slot:activator="{ on }">
              <v-btn color="anwendung" dark fab class="mb-8" v-on="on" ><v-icon>mdi-plus</v-icon></v-btn>
            </template>
        <!-- Zeilen    -->
            <v-card>
              <v-card-title class="title font-weight-bold secondary white--text">
                {{ formTitle }}
              </v-card-title>
  
              <v-card-text>
                <v-container>
                  <v-row>
                    <v-col cols="12" sm="6" md="6">
                      <v-text-field v-model="editedItem.Reihenfolge" label="Reihenfolge"></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="6" md="6">
                      <v-select v-model="editedItem.Kategorie" label="Kategorie" :items="Kategorien"></v-select>
                    </v-col>
                    </v-row>
                    <v-row>
                    <v-col cols="12" sm="12" md="12">
                      <v-textarea v-model="editedItem.Frage" auto-grow filled rows="3" label="Frage" ></v-textarea>
                    </v-col>
                    </v-row>
                    <v-row>
                      <!-- Calendar picker 1 -->
                    <v-col cols="12" sm="6" md="6">
                      <v-menu
                          v-model="datePicker1"
                          :close-on-content-click="true"
                         
                          transition="scale-transition"
                          offset-y
                          min-width="290px"
                        >
                          <template v-slot:activator="{ on }">
                            
                            <v-text-field
                              v-model="editedItem.gueltigAb"
                              label="Gültig Ab"
                              prepend-icon="mdi-calendar"
                              readonly
                              
                              v-on="on"
                            ></v-text-field>
                          </template>
                          <v-date-picker 
                            locale="de-De" 
                            v-model="editedItem.gueltigAb" 
                            first-day-of-week= "1"
                            @input="datePicker1 = false">
                          </v-date-picker>
                      </v-menu>
                    </v-col>
                                      <!-- Calendar picker 2 -->
                    <v-col cols="12" sm="6" md="6">
                      <v-menu
                          v-model="datePicker2"
                          :close-on-content-click="false"
                          :nudge-right="40"
                          transition="scale-transition"
                          offset-y
                          min-width="290px"
                        >
                          <template v-slot:activator="{ on }">
                            <v-text-field
                              v-model="editedItem.gueltigBis"
                              label="Gültig bis"
                              prepend-icon="mdi-calendar"
                              readonly                          
                              v-on="on"
                            ></v-text-field>
                          </template>
                          <v-date-picker 
                            locale="de-De" 
                            v-model="editedItem.gueltigBis"
                            first-day-of-week= "1"
                            @input="datePicker2 = false">
                          </v-date-picker>
                      </v-menu>
                    </v-col> 
                  </v-row>
                </v-container>
              </v-card-text>
              <v-divider></v-divider>
              <!-- Aktionen -->
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="warning" text @click="close">Abbrechen</v-btn>
                <v-btn color="primary" text @click="save">Sichern</v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
        </v-toolbar>
      </template>   

      <!-- Aktionen -->   
        <template v-slot:item.action="{ item }">           
          <v-icon dark color="edit" @click="editItem(item)">mdi-pencil</v-icon>
          <v-icon dark color="delete" @click="deleteItemDialog(item)">mdi-delete</v-icon>
        </template>

      <!-- v-data-footer -->
          <template v-slot:footer>
            <v-row class="mr-4 py-3 " align="center" justify="center">
              <v-spacer></v-spacer>
              <span class="grey--text ml-7 header">Zeilen pro Seite</span>
              <v-menu offset-y>
                <template v-slot:activator="{ on, attrs }">
                  <v-btn
                    outlined
                    small
                    text
                    color="anwendung"
                    class="ml-2 mr-2"
                    v-bind="attrs"
                    v-on="on"
                  >
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

              <span
                class="mr-3
                grey--text header"
              >
                Seite <span class="anwendung--text">{{ page }}</span>  von <span class="anwendung--text">{{ numberOfPages }}</span> 
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
                <v-icon>mdi-arrow-left</v-icon>
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
                <v-icon>mdi-arrow-right</v-icon>
              </v-btn>
            </v-row>
          </template>
          
    
    </v-data-table>
    </div>
    <!-- Löschen-Dialog -->
      <div class="text-center">
        <v-dialog
          v-model="deleteConfirmDialog"
          width="500"
        >
          <v-card>
            <v-card-title
              class="title font-weight-bold secondary white--text"
              primary-title
            >
              Soll diese Frage gelöscht werden?
            </v-card-title>

            <v-card-text>
              <v-container>
                  <v-row>           
                    <p class="font-weight-bold mt-3 ml-3 mr-6">{{editedItem.Reihenfolge}} </p>
                    <p class="font-weight-bold mt-3">{{editedItem.Kategorie}} </p>
                  </v-row>
                  <v-row>
                    <p class="headline ml-3">{{editedItem.Frage}} </p>
                  </v-row>
              </v-container>
            </v-card-text>
            <v-divider></v-divider>
            <v-card-actions>          
                    <v-spacer></v-spacer>
                    <v-btn color="warning" text @click="closeDeleteDialog">Abbrechen</v-btn>
                    <v-btn color="error" text @click="deleteItem(shouldDeleted)">löschen!</v-btn>            
            </v-card-actions>
          </v-card>
        </v-dialog>
      </div>
    

  </v-container>
  
</template>
<script>
import { mapGetters } from 'vuex';

export default {
  name: 'Fragen',

  data: () => ({
    search: '',
    page: 1,
    itemsPerPage: 8,
    itemsPerPageArray: [8, 16, 32, 64],
    datePicker1: false,
    datePicker2: false,
    Kategorien: ['Patientenbezogen', 'Mitarbeiterbezogen', 'Materialbezogen', 'Dokumentation'],
    questionDialog: false,
    deleteConfirmDialog: false,
    shouldDeleted: '',
    headers: [
      { text: 'Reihenfolge', align: 'left', value: 'Reihenfolge', sortable: true, },
      { text: 'Kategorie', value: 'Kategorie', sortable: true },
      { text: 'Frage', value: 'Frage', sortable: true},
      { text: 'Gültig ab', value: 'gueltigAb', sortable: true},
      { text: 'Gültig bis', value: 'gueltigBis', sortable: true},
      { text: 'Aktionen', value: 'action', sortable: false },
    ],
  
    items:[],
    editedIndex: -1,
    editedItem: {
      id: '',
      Reihenfolge: '',
      Kategorie: '',
      Frage: '',
      gueltigAb: new Date().toISOString().slice(0,10),
      gueltigBis: '',
      createdAt: '',
    },
    defaultItem: {
      id: '',
      Reihenfolge: '',
      Kategorie: '',
      Frage: '',
      gueltigAb: new Date().toISOString().slice(0,10),
      gueltigBis: '',
      createdAt: '',
    }
  }),

  computed: {
    formTitle () {
      return this.editedIndex === -1 ? 'Neue Frage' : 'Frage bearbeiten'
    },
    ...mapGetters(['loading','questions', 'createQuestion', 'updateQuestion', 'deleteQuestion']),

    numberOfPages () {  
        return Math.ceil(this.questions.length / this.itemsPerPage) 
    }
  },

  watch: {
    dialog (val) {
      val || this.close()
    },
  },

  created () {
    /* this.initialize(), */
    this.handleGetQuestions()    
  },

  methods: {

    updateItemsPerPage (number) { this.itemsPerPage = number},
    nextPage () {
        if (this.page + 1 <= this.numberOfPages) this.page += 1
      },
    formerPage () {
        if (this.page - 1 >= 1) this.page -= 1
      },

    handleGetQuestions(){
      // reach out to Vuex store, fire action that gets users 
      this.$store.dispatch("questions");
     
    },

    editItem (item) {
      this.editedIndex = this.questions.indexOf(item)
      this.editedItem = Object.assign({}, item)
      this.editedItem.gueltigAb = this.editedItem.gueltigAb.slice(0,10)
      this.editedItem.gueltigBis = this.editedItem.gueltigBis.slice(0,10)
      this.questionDialog = true
      },

    
    deleteItemDialog (item) {   
      this.shouldDeleted = item 
      this.editedIndex = this.questions.indexOf(item)  
      this.editedItem = Object.assign({}, item)
      this.editedItem.Reihenfolge = item.Reihenfolge;
      this.editedItem.Kategorie = item.Kategorie;
      this.editedItem.Frage = item.Frage;
      this.deleteConfirmDialog = true;
    },

    deleteItem (item) {
      const index = this.questions.indexOf(item);
      this.handleDeleteQuestion(item);
      this.questions.splice(index, 1);
      this.closeDeleteDialog();
      this.shouldDeleted = '';
    },


    closeDeleteDialog () {
      this.deleteConfirmDialog = false;
      this.editedItem = this.defaultItem
      this.editedIndex = -1
    },

    close () {
      this.questionDialog = false
      this.editedItem = Object.assign({}, this.defaultItem)
      this.editedIndex = -1
    },


    save () {
      if (this.editedIndex > -1) {
        this.handleUpdateQuestion();
        Object.assign(this.questions[this.editedIndex], this.editedItem);
        this.close();

      } else {
        this.handleCreateQuestion();   
        this.close();
      }
    },
    
    handleCreateQuestion(){     
      // Frage wird gespeichert
      // eslint-disable-next-line no-console
      console.log('handleCreateQuestion', this.editedItem)
      this.$store.dispatch('createQuestion', { 
        data:{
          Reihenfolge: this.editedItem.Reihenfolge,
          Kategorie: this.editedItem.Kategorie, 
          Frage: this.editedItem.Frage, 
          gueltigAb: this.editedItem.gueltigAb,
          gueltigBis:this.editedItem.gueltigBis,
          
        } 
      });
      // Anzeige wird ergänzt 
      this.questions.push(this.editedItem);
      
      
    },
     handleUpdateQuestion(){     
      // Frage wird gespeichert
      this.$store.dispatch('updateQuestion', { id: this.editedItem.id,
        data:{
          Reihenfolge: this.editedItem.Reihenfolge,
          Kategorie: this.editedItem.Kategorie, 
          Frage: this.editedItem.Frage, 
          gueltigAb:this.editedItem.gueltigAb,
          gueltigBis:this.editedItem.gueltigBis,
        } 
      });
    },
     handleDeleteQuestion(item){     
      // Frage wird gelöscht
      this.$store.dispatch('deleteQuestion', { id: item.id });
    }
  }
}
</script>

<style>

</style>