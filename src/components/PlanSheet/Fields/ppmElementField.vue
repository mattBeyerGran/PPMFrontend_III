<template>
    <td class="subtitle-1 text-start" 
        v-bind:style="{
                color: this.getRow(fieldRow).ElementData[3], 
                backgroundColor: this.getRow(fieldRow).ElementData[4], 
                borderColor: this.getRow(fieldRow).ElementData[4]
                    }">
      <v-dialog
      v-model="dialog"
      width="500"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-icon v-if="RowType === 'PlanRow'" color="ppmPlanElementColor" class="mr-2" v-bind="attrs" v-on="on">mdi-head-question-outline</v-icon>
        <v-icon v-else-if="RowType === 'CalcRow'" color="ppmParameterColor" class="mr-2" v-bind="attrs" v-on="on">mdi-calculator-variant</v-icon>
        <v-icon v-else-if="RowType === 'GoalRow'" color="ppmPlanElementColor" class="mr-2" v-bind="attrs" v-on="on">mdi-flag-checkered</v-icon>
        <v-icon v-else-if="RowType === 'MatchRow'" color="ppmPlanElementColor" class="mr-2" v-bind="attrs" v-on="on">mdi-account-multiple-check</v-icon>
        <v-icon v-else-if="RowType === 'ExternRow'" color="ppmParameterColor" class="mr-2" v-bind="attrs" v-on="on">mdi-head-question-outline</v-icon>
        <v-icon v-else-if="RowType === 'GlobalRow'" color="ppmParameterColor" class="mr-2" v-bind="attrs" v-on="on">mdi-earth</v-icon>
      </template>

      <v-card>
        <v-card-title class="text-h5 ppmTabsBGColor ppmTopBarTextColor--text">
            <v-icon v-if="RowType === 'PlanRow'" color="ppmPlanElementColor" class="mr-2" v-bind="attrs" v-on="on">mdi-head-question-outline</v-icon>
            <v-icon v-else-if="RowType === 'CalcRow'" color="ppmParameterColor" class="mr-2" v-bind="attrs" v-on="on">mdi-calculator-variant</v-icon>
            <v-icon v-else-if="RowType === 'GoalRow'" color="ppmPlanElementColor" class="mr-2" v-bind="attrs" v-on="on">mdi-flag-checkered</v-icon>
            <v-icon v-else-if="RowType === 'MatchRow'" color="ppmPlanElementColor" class="mr-2" v-bind="attrs" v-on="on">mdi-account-multiple-check</v-icon>
            <v-icon v-else-if="RowType === 'ExternRow'" color="ppmParameterColor" class="mr-2" v-bind="attrs" v-on="on">mdi-head-question-outline</v-icon>
            <v-icon v-else-if="RowType === 'GlobalRow'" color="ppmParameterColor" class="mr-2" v-bind="attrs" v-on="on">mdi-earth</v-icon>
            
            {{this.getRow(fieldRow).ElementData[1]}}
        </v-card-title>

        <v-card-text class="mt-2">
          {{this.getRow(fieldRow).InfoText}}
        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="primary"
            text
            @click="dialog = false"
          >
            schliessen
          </v-btn>
        </v-card-actions>
      </v-card>
     
      </v-dialog>
       {{this.getRow(fieldRow).InfoTitle}}
    </td>
    
</template>
<script>
import { mapGetters } from 'vuex';
export default {
  name: "my-ppm-element-field",
  props: {
      fieldRow: { type: String, required: true },
      RowType: { type: String, required: true },
  },
  computed: {
    ...mapGetters([
        'getRow'
    ]),
  },
  data () {
      return {
        dialog: false,
      }
    },
}
</script>
