<template>
  <v-container>
  
    <!-- ############### -->
    <v-toolbar 
              flat
              color="ppmTabsBGColor" 
              class="mb-4"
              rounded="lg"
            >
      <v-toolbar-title class="ppmLightTextColor--text">{{ToolBarTitle}}</v-toolbar-title>
      <v-spacer></v-spacer>


      <v-btn color="ppmTopBarTextColor" text dark @click="toggleDialog"  >
          <v-icon left dark color="ppmParameterColor" >mdi-wrench</v-icon>  
          Parameter
      </v-btn>
       
      <v-btn color="ppmTopBarTextColor" text dark @click="setAlert" >
          <v-icon left dark color="ppmPlanElementColor" >mdi-refresh-circle</v-icon>  
          Refresh          
      </v-btn>
    </v-toolbar> 
    <v-alert v-model="alert"
      dense
      text
      type="info"
      dismissible
    >
      Die Planungsdaten werden aktualisiert!
    </v-alert>
    <!-- ################# Dialog ################# -->
       <div class="text-center">
                <v-dialog
                  v-model="dialog"
                  width="300"
                  persistent
                  scrollable
                >
                  <v-card>
                    <v-card-title class="text-h5 ppmTabsBGColor">
                      <span class="text-h5 ppmTopBarTextColor--text"><v-icon left dark color="ppmParameterColor" >mdi-wrench</v-icon>Parameter</span>
                    </v-card-title>

                    <v-card-text style="height: 200px;">
                    <v-container>                       
                              <v-text-field
                                  v-model="LocalParameter.Vorjahresbestand"
                                  label="Endbestand Vorjahr in Euro"
                                ></v-text-field>
                                <v-text-field
                                  v-model="LocalParameter.Mehrwertsteuer"
                                  label="MwSt in %"
                                ></v-text-field>
                            
                              <v-text-field
                                  v-model="LocalParameter.Vorjahresbestand"
                                  label="Endbestand Vorjahr in Euro"
                                ></v-text-field>
                                <v-text-field
                                  v-model="LocalParameter.Mehrwertsteuer"
                                  label="MwSt in %"
                                ></v-text-field>
                      </v-container>
                    </v-card-text>

                    <v-divider></v-divider>

                    <v-card-actions>
                      <v-spacer></v-spacer>
                          <v-btn
                            color="ppmParameterColor"
                            text
                            @click="toggleDialog"
                          >
                            cancel
                          </v-btn>
                          <v-btn
                            color="ppmPlanElementColor"
                            text
                            @click="toggleDialog"
                          >
                            save
                          </v-btn>
                    </v-card-actions>
                  </v-card>
                </v-dialog>
        </div>
     
       

  </v-container>
        
</template>

<script>
export default {
    name: "PlanSheetToolBar",
    data () {
      return {
        alert: false,
        dialog: false,
        parameters: false,
        LocalParameter: [
          {
            Vorjahresbestand: 25000
          },
          {
            Mehrwertsteuer: 0.19
          }
          
        ]
      }
    },
  props: {
      ToolBarTitle: { type: String, required: true },
  },
  methods: {
    toggleParameters(){
      return this.parameters = !this.parameters;
      
    },
    toggleDialog() {
      return this.dialog = !this.dialog;
    },
    setAlert() {
      return this.alert = true;
    }
  }
    
}
</script>
