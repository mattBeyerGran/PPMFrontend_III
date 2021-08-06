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
              <tr  class="ppmDarkTextColor">
                <th class="text-start white--text subtitle-1">Plan-Elemente</th>
                <th class="text-center white--text subtitle-1">Jan</th>
                <th class="text-center white--text subtitle-1">Feb</th>
                <th class="text-center white--text subtitle-1">Mar</th>
                <th class="text-center white--text subtitle-1">Apr</th>
                <th class="text-center white--text subtitle-1">Mai</th>
                <th class="text-center white--text subtitle-1">Jun</th>
                <th class="text-center white--text subtitle-1">Jul</th>
                <th class="text-center white--text subtitle-1">Aug</th>
                <th class="text-center white--text subtitle-1">Sep</th>
                <th class="text-center white--text subtitle-1">Okt</th>
                <th class="text-center white--text subtitle-1">Nov</th>
                <th class="text-center white--text subtitle-1">Dez</th>
                <th class="text-start white--text subtitle-1">Zusatzinformationen</th>
              </tr>
            </thead>
            <tbody>      
              <!-- <EmptyRow/>      -->
              <CalcRow CalcItem=32 v-bind:CalcItemName=TextCalc01 v-bind:CalcItemDesc=DescCalcs01 />
              <PlanRow v-if="isActive" v-bind:PlanItem=PlanItems[0].ItemId v-bind:PlanItemName=PlanItems[0].PlanText />
              <PlanRow v-show="isActive2" v-bind:PlanItem=PlanItems[0].ItemId v-bind:PlanItemName=PlanItems[0].PlanText />
              <PlanRow PlanItem=34 v-bind:PlanItemName=TextItem02 />
              <CalcRow CalcItem=1 v-bind:CalcItemName=TextCalc02 v-bind:CalcItemDesc=DescCalcs01 />   
              <EmptyRow/>             
            </tbody>
            
          </template>
        </v-simple-table>

      </template>
  </v-container>
</template>

<script>
import PlanRow from  '@/components/PlanSheet/PlanRow'
import CalcRow from  '@/components/PlanSheet/CalcRow'
import EmptyRow from  '@/components/PlanSheet/EmptyRow'


  export default {
    components: {
      PlanRow,
      CalcRow,
      EmptyRow
    },

    data () {
      return {
        isActive: true,
        isActive2: true,
        dialog: false,
        TextItem01: "Zugang",
        TextItem02: "Abgang",
        TextCalc01: "Anfangsbestand",
        DescCalcs01: "Anfangsbestand + Zugang - Endbestand",
        TextCalc02: "Endbestand",
        DescCalcs02: "Vormonats-Endbestand",
        // wert11: 25,
        LocalParameter: [
          {
            Vorjahresbestand: 25000
          },
          {
            Mehrwertsteuer: 0.19
          }
          
        ],
        PlanItems: [
          {
            ItemId: 27,
            PlanText: "Zugang"
          }
        ]
      }
    }

  }
</script>