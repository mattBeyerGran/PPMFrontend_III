<template>


        <v-toolbar 
            flat
            color="ppmTabsBGColor" 
            class="mb-4"
            rounded="lg"
          >
            <v-toolbar-title class="ppmLightTextColor--text">{{ToolBarTitle}}</v-toolbar-title>
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
          
</template>

<script>
export default {
     name: "PlanSheetToolBar",
  props: {
      ToolBarTitle: { type: String, required: true },
  },
    
}
</script>
