<template>
  <div class="">
    <!-- Seiten Titel -->
      <div align="left" class="mt-6">
        <p class="display-1 anwendung--text"><v-icon color="verzeichnis">mdi-account-multiple mdi-36px</v-icon>
        User</p>     
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
          :items="users"
          :items-per-page.sync="itemsPerPage"
          :page="page"    
          :search="search"
          hide-default-footer
          sort-by="name"
          class="elevation-1"
      >
        <!-- Datumsanzeige in der Tabelle angepasst -->
          <template v-slot:item.createdAt="{ item }">
            {{ item.createdAt = new Date().toISOString().slice(0,10) }}
          </template>

        <template v-slot:top>
      <!-- Tabellen Toolbar    -->
          <v-toolbar flat color="white">
            <v-toolbar-title class="grey--text header">User-Rechte</v-toolbar-title>
                <v-spacer></v-spacer>
                <!-- Filter -->
                    <v-text-field
                        v-model="search"
                        prepend-icon="mdi-magnify"
                        label="hier suchen..."
                        single-line
                        hide-details
                  ></v-text-field>
                <v-spacer></v-spacer>
            <!-- Aufruf User-Dialog -->
            <v-btn @click="userDialog" color="anwendung" dark fab class="mb-8" ><v-icon>mdi-plus</v-icon></v-btn>

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
    <!-- User-Dialog -->
      <div class="text-center">
            <v-dialog 
                v-model="dialog" 
                max-width="500px"
                >     
              <v-card>
                <v-card-title 
                    class="title font-weight-thin secondary white--text"  
                    primary-title
                    >
                    {{ formTitle }}
                   
                </v-card-title>
                <v-card-text>
                  <v-container>
                    <v-row>
                      <v-col cols="12" sm="6" md="6">
                        <v-text-field v-model="editedItem.name" label="User-Name"></v-text-field>
                      </v-col>
                      <v-col cols="12" sm="6" md="6">
                        <v-select v-model="editedItem.rolle" label="Rolle" :items="rolles"></v-select>
                      </v-col>
                  
                      <v-col cols="12" sm="6" md="6">
                        <v-text-field v-model="editedItem.email" label="Email"></v-text-field>
                      </v-col>
                      
                      <v-col cols="12" sm="6" md="6">
                        <v-text-field v-model="editedItem.password" label="Passwort" type="password"></v-text-field>
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
      </div>
    <!-- Löschen-Dialog -->
      <div class="text-center">
        <v-dialog
          v-model="deleteConfirmDialog"
          width="400"
        >
          <v-card>
            <v-card-title
              class="title font-weight-thin secondary white--text"
              primary-title
            >
              Soll dieser User gelöscht werden?
            </v-card-title>

            <v-card-text>
              <v-container>
                  <v-row>           
                    <p class="font-weight-bold mt-3 ml-3 mr-6">{{editedItem.rolle}} </p>
                    <p class="font-weight-bold mt-3">{{editedItem.email}} </p>
                  </v-row>
                  <v-row>
                    <p class="headline ml-3">{{editedItem.name}} </p>
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
  </div>
  
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'Users',

  data: () => ({
    search: '',
    page: 1,
    itemsPerPage: 8,
    itemsPerPageArray: [8, 16, 32, 64],
    rolles: ['ADMIN','PDL','ASSITANT','NURSE'],
    dialog: false,
    deleteConfirmDialog: false,
    shouldDeleted: '',
    headers: [
      { text: 'User-Name', align: 'left', value: 'name', sortable: true, },
      { text: 'Rolle', value: 'rolle', sortable: true },
      { text: 'Email', value: 'email', sortable: true},
      { text: 'Erstellt', value: 'createdAt', sortable: true},
      { text: 'Aktionen', value: 'action', sortable: false },
    ],
   
    items:[],
    editedIndex: -1,
    editedItem: {
      name: '',
      rolle: '',
      email: '',
      password: '',
      createdAt: '',
    },
    defaultItem: {
      name: '',
      rolle: 'NURSE',
      email: '',
      password: '',
      createdAt: '',
    },
  }),

  computed: {
    formTitle () {
      return this.editedIndex === -1 ? 'Neuer User' : 'User bearbeiten'
    },
    ...mapGetters(['loading','users', 'createUser', 'updateUser', 'deleteUser']),

    numberOfPages () {  
        return Math.ceil(this.users.length / this.itemsPerPage) 
    }
  },

  watch: {
    dialog (val) {
      val || this.close()
    },
  },

  created () {
    /* this.initialize(), */
    this.handleGetUsers()
  },

  methods: {
    updateItemsPerPage (number) { this.itemsPerPage = number},
    nextPage () {
        if (this.page + 1 <= this.numberOfPages) this.page += 1
      },
    formerPage () {
        if (this.page - 1 >= 1) this.page -= 1
      },

    handleGetUsers(){
      // reach out to Vuex store, fire action that gets users 
      this.$store.dispatch("users");
    },

    editItem (item) {
      this.editedIndex = this.users.indexOf(item)
      this.editedItem = Object.assign({}, item)
      this.dialog = true
    },

    userDialog(item) {
      this.editedIndex = this.users.indexOf(item) 
      this.dialog = true
    },

    deleteItemDialog (item) {   
      this.shouldDeleted = item 
      this.editedIndex = this.users.indexOf(item)  
      this.editedItem = Object.assign({}, item)
      this.editedItem.name = item.name;
      this.editedItem.email = item.email;
      this.editedItem.rolle = item.rolle;
      this.deleteConfirmDialog = true;
    },
    deleteItem (item) {
      const index = this.users.indexOf(item);
      this.handleDeleteUser(item);
      this.users.splice(index, 1);
      this.closeDeleteDialog();
      this.shouldDeleted = '';
    },

    closeDeleteDialog () {
      this.deleteConfirmDialog = false;
      this.editedItem = this.defaultItem
      this.editedIndex = -1
    },

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
    
    handleCreateUser(){     
      // User wird gespeichert
      this.$store.dispatch('createUser', { 
        data:{
          name: this.editedItem.name,
          email: this.editedItem.email, 
          rolle: this.editedItem.rolle, 
          password: this.editedItem.password,
        } 
      });
      // Anzeige wird ergänzt
      this.editedItem.password = '';
      this.editedItem.createdAt = Date.now();
      this.users.push(this.editedItem);
      
    },
     handleUpdateUser(){     
      // User wird gespeichert
      this.$store.dispatch('updateUser', { id: this.editedItem.id,
        data:{
          name: this.editedItem.name,
          email: this.editedItem.email, 
          rolle: this.editedItem.rolle, 
          password:this.editedItem.password,
          
        } 
      });
    },
     handleDeleteUser(item){     
      // User wird gelöscht
      this.$store.dispatch('deleteUser', { id: item.id });
    }
  }
}
</script>

<style>

</style>