<template >
  <v-container class="bottommargin">
   
        <template>
          <v-toolbar 
            flat
            color="ppmTabsBGColor" 
            class="mb-4"
            rounded="lg"
          >
            <v-toolbar-title class="ppmLightTextColor--text">Spezial-Bestandsveränderung</v-toolbar-title>
             <v-spacer></v-spacer>
                 <div class="text-center">
                <v-dialog
                  v-model="dialog"
                  width="300"
                >
                  <template v-slot:activator="{ on, attrs }">
                    <v-btn
                      color="ppmTopBarTextColor"
                          text
                          dark
                          v-bind="attrs"
                          v-on="on"
                    >
                      <v-icon left dark color="ppmParameterColor" >mdi-wrench</v-icon>  
                      Parameter
                    </v-btn>
                  </template>

                  <v-card>
                    <v-card-title class="text-h5 ppmTabsBGColor">
                      <span class="text-h5 ppmTopBarTextColor--text"><v-icon left dark color="ppmParameterColor" >mdi-wrench</v-icon>Parameter</span>
                    </v-card-title>

                    <v-card-text>
                    <v-container>
                            <v-row>
                              <v-col>   
                              <v-text-field
                                  v-model="LocalParameter.Vorjahresbestand"
                                  label="Endbestand Vorjahr in Euro"
                                ></v-text-field>
                                <v-text-field
                                  v-model="LocalParameter.Mehrwertsteuer"
                                  label="MwSt in %"
                                ></v-text-field>
                              </v-col>
                              
                            </v-row>
                      </v-container>
                    </v-card-text>

                    <v-divider></v-divider>

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
              </div>
          </v-toolbar>
            
        <v-simple-table >
          <template v-slot:default >
            <thead>
              <tr>
                <th class="ml-8 text-start ppmDarkTextColor--text subtitle-1">
                    Plan-Element
                  </th>
                  <th class="text-center ppmDarkTextColor--text subtitle-1">
                    Jan
                  </th>
                      <th class="text-center ppmDarkTextColor--text subtitle-1">
                    Feb
                  </th>
                      <th class="text-center ppmDarkTextColor--text subtitle-1">
                    Mar
                  </th>
                      <th class="text-center ppmDarkTextColor--text subtitle-1">
                    Apr
                  </th>
                      <th class="text-center ppmDarkTextColor--text subtitle-1">
                    Mai
                  </th>
                      <th class="text-center ppmDarkTextColor--text subtitle-1">
                    Jun
                  </th>
                      <th class="text-center ppmDarkTextColor--text subtitle-1">
                    Jul
                  </th>
                      <th class="text-center ppmDarkTextColor--text subtitle-1">
                    Aug
                  </th>
                      <th class="text-center ppmDarkTextColor--text subtitle-1">
                    Sep
                  </th>
                      <th class="text-center ppmDarkTextColor--text subtitle-1">
                    Okt
                  </th>
                      <th class="text-center ppmDarkTextColor--text subtitle-1">
                    Nov
                  </th>
                      <th class="text-center ppmDarkTextColor--text subtitle-1">
                    Dez
                  </th>
                  <th class="text-center ppmDarkTextColor--text subtitle-1">
                    Vergleich
                  </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><v-btn text><v-icon dark color="delete" @click="editItem(item)">mdi-calculator-variant</v-icon></v-btn>Anfangsbestand</td>
                <td>{{ PlanElement[0].jan }}</td>
                <td>{{ PlanElement[0].feb }}</td>
                <td>{{ PlanElement[0].mar }}</td>
                <td>{{ PlanElement[0].apr }}</td>
                <td>{{ PlanElement[0].mai }}</td>
                <td>{{ PlanElement[0].jun }}</td>
                <td>{{ PlanElement[0].jul }}</td>
                <td>{{ PlanElement[0].aug }}</td>
                <td>{{ PlanElement[0].sep }}</td>
                <td>{{ PlanElement[0].okt }}</td>
                <td>{{ PlanElement[0].nov }}</td>
                <td>{{ PlanElement[0].dez }}</td>
                <td></td>
              </tr>
              <tr>
                <td><v-btn text><v-icon dark color="edit" @click="editItem(item)">mdi-head-question-outline</v-icon></v-btn>Zugang</td>
                <td>{{ PlanElement[1].jan }}</td>
                <td>{{ PlanElement[1].feb }}</td>
                <td>{{ PlanElement[1].mar }}</td>
                <td>{{ PlanElement[1].apr }}</td>
                <td>{{ PlanElement[1].mai }}</td>
                <td>{{ PlanElement[1].jun }}</td>
                <td>{{ PlanElement[1].jul }}</td>
                <td>{{ PlanElement[1].aug }}</td>
                <td>{{ PlanElement[1].sep }}</td>
                <td>{{ PlanElement[1].okt }}</td>
                <td>{{ PlanElement[1].nov }}</td>
                <td>{{ PlanElement[1].dez }}</td>
                <td><v-btn text><v-icon dark color="edit" @click="editItem(item)">mdi-flag-checkered</v-icon></v-btn>
                     <v-btn text><v-icon dark color="edit" @click="editItem(item)">mdi-account-multiple-check</v-icon></v-btn></td>
              </tr>
              <tr>
                <td><v-btn text><v-icon dark color="edit" @click="editItem(item)">mdi-head-question-outline</v-icon></v-btn>Abgang</td>
                <td>{{ PlanElement[1].jan }}</td>
                <td>{{ PlanElement[1].feb }}</td>
                <td>{{ PlanElement[1].mar }}</td>
                <td>{{ PlanElement[1].apr }}</td>
                <td>{{ PlanElement[1].mai }}</td>
                <td>{{ PlanElement[1].jun }}</td>
                <td>{{ PlanElement[1].jul }}</td>
                <td>{{ PlanElement[1].aug }}</td>
                <td>{{ PlanElement[1].sep }}</td>
                <td>{{ PlanElement[1].okt }}</td>
                <td>{{ PlanElement[1].nov }}</td>
                <td>{{ PlanElement[1].dez }}</td>
                <td><v-btn text><v-icon dark color="edit" @click="editItem(item)">mdi-flag-checkered</v-icon></v-btn>
                     <v-btn text><v-icon dark color="edit" @click="editItem(item)">mdi-account-multiple-check</v-icon></v-btn></td>
              </tr>
              <tr>
                <td><v-btn text><v-icon dark color="delete" @click="editItem(item)">mdi-calculator-variant</v-icon></v-btn>Endbestand</td>
                <td>{{ PlanElement[1].jan }}</td>
                <td>{{ PlanElement[1].feb }}</td>
                <td>{{ PlanElement[1].mar }}</td>
                <td>{{ PlanElement[1].apr }}</td>
                <td>{{ PlanElement[1].mai }}</td>
                <td>{{ PlanElement[1].jun }}</td>
                <td>{{ PlanElement[1].jul }}</td>
                <td>{{ PlanElement[1].aug }}</td>
                <td>{{ PlanElement[1].sep }}</td>
                <td>{{ PlanElement[1].okt }}</td>
                <td>{{ PlanElement[1].nov }}</td>
                <td>{{ PlanElement[1].dez }}</td>
                <td></td>
              </tr>
              <tr>
                <td><v-btn text><v-icon dark color="delete" @click="editItem(item)">mdi-earth</v-icon></v-btn>Endbestand inklusive Steuer</td>
                <td>{{ PlanElement[1].jan }}</td>
                <td>{{ PlanElement[1].feb }}</td>
                <td>{{ PlanElement[1].mar }}</td>
                <td>{{ PlanElement[1].apr }}</td>
                <td>{{ PlanElement[1].mai }}</td>
                <td>{{ PlanElement[1].jun }}</td>
                <td>{{ PlanElement[1].jul }}</td>
                <td>{{ PlanElement[1].aug }}</td>
                <td>{{ PlanElement[1].sep }}</td>
                <td>{{ PlanElement[1].okt }}</td>
                <td>{{ PlanElement[1].nov }}</td>
                <td>{{ PlanElement[1].dez }}</td>
                <td></td>
              </tr>

              
            </tbody>
            <thead><th></th><th></th><th></th><th></th><th></th><th></th><th></th><th></th><th></th><th></th><th></th><th></th><th></th>
                <th class="text-center">
                      <v-btn
                        color="ppmTopBarTextColor"
                            text
                            dark
                            v-bind="attrs"
                            v-on="on"
                      >
                        <v-icon left dark color="edit" >mdi-restart</v-icon>  
                        New
                      </v-btn>
                      <v-btn
                        color="ppmTopBarTextColor"
                            text
                            dark
                            v-bind="attrs"
                            v-on="on"
                      >
                        <v-icon left dark color="green" >mdi-check</v-icon>  
                        ok
                      </v-btn>
                 </th>
              </thead>
          </template>
        </v-simple-table>

      </template>
  </v-container>
</template>

<script>
  export default {
    data () {
      return {
        dialog: false,
        LocalParameter: [
          {
            Vorjahresbestand: 25000
          },
          {
            Mehrwertsteuer: 0.19
          }
          
        ],
        PlanElement: [
          {
            element: 'Anfangsbestand',
            jan: 159,
            feb: 237,
            mar: 159,
            apr: 237,
            mai: 159,
            jun: 237,
            jul: 159,
            aug: 237,
            sep: 159,
            okt: 237,
            nov: 159,
            dez: 237,
            ref1: '',
            ref2: ''
          },
          {
            element: 'Anfangsbestand',
            jan: 159,
            feb: 237,
            mar: 159,
            apr: 237,
            mai: 159,
            jun: 237,
            jul: 159,
            aug: 237,
            sep: 159,
            okt: 237,
            nov: 159,
            dez: 237,
            ref1: '',
            ref2: ''
          }
        ],
      }
    },
  }
</script>