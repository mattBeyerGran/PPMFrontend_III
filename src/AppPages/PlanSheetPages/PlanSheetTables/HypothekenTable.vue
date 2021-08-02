<template >
  <v-container class="bottommargin">
   
        <template>
  <v-data-table 
    :headers="headers"
    :items="PlanElements"
   
    
    class="elevation-1"
  >
    <template v-slot:top>
      <v-toolbar
        flat
        color="ppmTabsBGColor"
      >
        <v-toolbar-title class="ppmLightTextColor--text"><strong>Hypotheken-Bestandsveränderung</strong></v-toolbar-title>
        <v-divider
          class="mx-4"
          inset
          vertical
        ></v-divider>
        <v-spacer></v-spacer>
        <v-dialog
          v-model="dialog"
          max-width="300px"
        >
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              color="ppmTopBarTextColor"
              text
              dark
              class="mb-2"
              v-bind="attrs"
              v-on="on"
            >
            <v-icon left dark color="ppmParameterColor" >mdi-wrench</v-icon>  Parameter
            </v-btn>
          </template>
          <v-card >
            <v-card-title>
              <span class="text-h5 ppmTopBarTextColor--text"><v-icon left dark color="ppmParameterColor" >mdi-wrench</v-icon>Parameter</span>
            </v-card-title>

            <v-card-text>
              <v-container>
                <v-row>
                  <v-col>   
                   <v-text-field
                      v-model="editedItem.name"
                      label="Endbestand Vorjahr in Euro"
                    ></v-text-field>
                  </v-col>
                  
                </v-row>
              </v-container>
            </v-card-text>

            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn
                color="ppmchartRed"
                text
                @click="close"
              >
                abbrechen
              </v-btn>
              <v-btn
                color="ppmchartGreen"
                text
                @click="save"
              >
                speichern
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
        <v-dialog v-model="dialogDelete" max-width="500px">
          <v-card>
            <v-card-title class="text-h5">Are you sure you want to delete this item?</v-card-title>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="blue darken-1" text @click="closeDelete">abbrechen</v-btn>
              <v-btn color="blue darken-1" text @click="deleteItemConfirm">speichern</v-btn>
              <v-spacer></v-spacer>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-toolbar>
    </template>
    <template v-slot:item.actions="{ item }">
      <v-icon
        
        class="mr-2"
        @click="editItem(item)"
      >
        mdi-pencil
      </v-icon>
      <v-icon
        small
        @click="deleteItem(item)"
      >
        mdi-delete
      </v-icon>
    </template>
    <template v-slot:no-data>
      <v-btn
        color="primary"
        @click="initialize"
      >
        Reset
      </v-btn>
    </template>
  </v-data-table>
</template>
      
  </v-container>
</template>

<script>


export default {
  name: "HypothekenTable",
 
    data: () => ({
      dialog: false,
      dialogDelete: false,
      headers: [
        {
          text: 'Plan-Element',
          align: 'start',
          sortable: false,
          value: 'name'
        },
        { text: 'Januar', value: 'Januar', sortable: false  },
        { text: 'Februar', value: 'Februar', sortable: false  },
        { text: 'Maerz', value: 'Maerz', sortable: false  },
        { text: 'April', value: 'April', sortable: false  },
        { text: 'Mai', value: 'Mai', sortable: false },
        { text: 'Juni', value: 'Juni', sortable: false  },
        { text: 'Juli', value: 'Juli', sortable: false  },
        { text: 'August', value: 'August', sortable: false  },
        { text: 'September', value: 'September', sortable: false },
        { text: 'Oktober', value: 'Oktober', sortable: false  },
        { text: 'November', value: 'Novenber', sortable: false  },
        { text: 'Dezember', value: 'Dezember', sortable: false  },
        { text: 'Vergleichswerte', value: 'Vergleichswerte', sortable: false  }
      ],
      PlanElements: [],
      editedIndex: -1,
      editedItem: {
        name: '',
        calories: 0,
        fat: 0,
        carbs: 0,
        protein: 0,
      },
      defaultItem: {
        name: '',
        calories: 0,
        fat: 0,
        carbs: 0,
        protein: 0,
      },
    }),

    computed: {
      formTitle () {
        return this.editedIndex === -1 ? 'New Item' : 'Edit Item'
      },
    },

    watch: {
      dialog (val) {
        val || this.close()
      },
      dialogDelete (val) {
        val || this.closeDelete()
      },
    },

    created () {
      this.initialize()
    },

    methods: {
      initialize () {
        this.PlanElements = [
          {
            name: 'Anfangsbestand',
            Januar: 159,
            Februar: 6.0,
            Maerz: 24,
            April: 4.0,
            Mai: 159,
            Juni: 6.0,
            Juli: 24,
            August: 4.0,
            September: 159,
            Oktober: 6.0,
            November: 24,
            Dezember: 4.0,
          },
          {
            name: 'Zugang',
            Januar: 159,
            Februar: 6.0,
            Maerz: 24,
            April: 4.0,
            Mai: 159,
            Juni: 6.0,
            Juli: 24,
            August: 4.0,
            September: 159,
            Oktober: 6.0,
            November: 24,
            Dezember: 4.0,
          },
          {
            name: 'Abgang',
            Januar: 159,
            Februar: 6.0,
            Maerz: 24,
            April: 4.0,
            Mai: 159,
            Juni: 6.0,
            Juli: 24,
            August: 4.0,
            September: 159,
            Oktober: 6.0,
            November: 24,
            Dezember: 4.0,
          },
          {
            name: 'Endbestand',
            Januar: 159,
            Februar: 6.0,
            Maerz: 24,
            April: 4.0,
            Mai: 159,
            Juni: 6.0,
            Juli: 24,
            August: 4.0,
            September: 159,
            Oktober: 6.0,
            November: 24,
            Dezember: 4.0,
          }
        ]
      },

      editItem (item) {
        this.editedIndex = this.PlanElements.indexOf(item)
        this.editedItem = Object.assign({}, item)
        this.dialog = true
      },

      deleteItem (item) {
        this.editedIndex = this.PlanElements.indexOf(item)
        this.editedItem = Object.assign({}, item)
        this.dialogDelete = true
      },

      deleteItemConfirm () {
        this.PlanElements.splice(this.editedIndex, 1)
        this.closeDelete()
      },

      close () {
        this.dialog = false
        this.$nextTick(() => {
          this.editedItem = Object.assign({}, this.defaultItem)
          this.editedIndex = -1
        })
      },

      closeDelete () {
        this.dialogDelete = false
        this.$nextTick(() => {
          this.editedItem = Object.assign({}, this.defaultItem)
          this.editedIndex = -1
        })
      },

      save () {
        if (this.editedIndex > -1) {
          Object.assign(this.PlanElements[this.editedIndex], this.editedItem)
        } else {
          this.PlanElements.push(this.editedItem)
        }
        this.close()
      },
    },
  }

  

</script>