<template>
  
    <td v-if="small" 
        v-bind:style="{
                color: this.getRow(fieldRow).ElementColor, 
                backgroundColor: this.getRow(fieldRow).ElementBGColor, 
                borderColor: this.getRow(fieldRow).ElementBGColor,
                paddingLeft: 20
                    }">
      <v-dialog
      v-model="dialog"
      width="500"
    >
      <template v-slot:activator="{ on }">   
        <v-icon v-if="iconType === 'PlanRow'" small color="ppmPlanElementColor" class="ml-8 mr-2"  v-on="on">mdi-head-question-outline</v-icon>
        <v-icon v-else-if="iconType === 'CalcRow'" small color="ppmParameterColor" class="ml-8 mr-2"  v-on="on">mdi-calculator-variant</v-icon>
        <v-icon v-else-if="iconType === 'GoalRow'" small color="ppmPlanElementColor" class="ml-8 mr-2"  v-on="on">mdi-flag-checkered</v-icon>
        <v-icon v-else-if="iconType === 'MatchRow'" small color="ppmPlanElementColor" class="ml-8 mr-2"  v-on="on">mdi-account-multiple-check</v-icon>
        <v-icon v-else-if="iconType === 'ExternRow'" small color="ppmParameterColor" class="ml-8 mr-2"  v-on="on">mdi-head-question-outline</v-icon>
        <v-icon v-else-if="iconType === 'GlobalRow'" small color="ppmParameterColor" class="ml-8 mr-2"  v-on="on">mdi-earth</v-icon>
      </template>

      <v-card>
        <v-card-title class="text-h5 ppmTabsBGColor ppmTopBarTextColor--text">
            <v-icon v-if="iconType === 'PlanRow'" color="ppmPlanElementColor" class="mr-2"  >mdi-head-question-outline</v-icon>
            <v-icon v-else-if="iconType === 'CalcRow'" color="ppmParameterColor" class="mr-2"  >mdi-calculator-variant</v-icon>
            <v-icon v-else-if="iconType === 'GoalRow'" color="ppmPlanElementColor" class="mr-2"  >mdi-flag-checkered</v-icon>
            <v-icon v-else-if="iconType === 'MatchRow'" color="ppmPlanElementColor" class="mr-2"  >mdi-account-multiple-check</v-icon>
            <v-icon v-else-if="iconType === 'ExternRow'" color="ppmParameterColor" class="mr-2"  >mdi-head-question-outline</v-icon>
            <v-icon v-else-if="iconType === 'GlobalRow'" color="ppmParameterColor" class="mr-2"  >mdi-earth</v-icon>
            
            {{this.getRow(fieldRow).InfoTitle}}
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
    <td v-else class="subtitle-1 text-start" 
      v-bind:style="{
              color: this.getRow(fieldRow).ElementColor, 
              backgroundColor: this.getRow(fieldRow).ElementBGColor, 
              borderColor: this.getRow(fieldRow).ElementBGColor,
                  }">
    <v-dialog
    v-model="dialog"
    width="500"
  >
    <template v-slot:activator="{ on }">   
      <v-icon v-if="iconType === 'PlanRow'" color="ppmPlanElementColor" class="mr-2"  v-on="on">mdi-head-question-outline</v-icon>
      <v-icon v-else-if="iconType === 'CalcRow'" color="ppmParameterColor" class="mr-2"  v-on="on">mdi-calculator-variant</v-icon>
      <v-icon v-else-if="iconType === 'GoalRow'" color="ppmPlanElementColor" class="mr-2"  v-on="on">mdi-flag-checkered</v-icon>
      <v-icon v-else-if="iconType === 'MatchRow'" color="ppmPlanElementColor" class="mr-2"  v-on="on">mdi-account-multiple-check</v-icon>
      <v-icon v-else-if="iconType === 'ExternRow'" color="ppmParameterColor" class="mr-2"  v-on="on">mdi-head-question-outline</v-icon>
      <v-icon v-else-if="iconType === 'GlobalRow'" color="ppmParameterColor" class="mr-2"  v-on="on">mdi-earth</v-icon>
    </template>

    <v-card>
      <v-card-title class="text-h5 ppmTabsBGColor ppmTopBarTextColor--text">
          <v-icon v-if="iconType === 'PlanRow'" color="ppmPlanElementColor" class="mr-2"  >mdi-head-question-outline</v-icon>
          <v-icon v-else-if="iconType === 'CalcRow'" color="ppmParameterColor" class="mr-2"  >mdi-calculator-variant</v-icon>
          <v-icon v-else-if="iconType === 'GoalRow'" color="ppmPlanElementColor" class="mr-2"  >mdi-flag-checkered</v-icon>
          <v-icon v-else-if="iconType === 'MatchRow'" color="ppmPlanElementColor" class="mr-2"  >mdi-account-multiple-check</v-icon>
          <v-icon v-else-if="iconType === 'ExternRow'" color="ppmParameterColor" class="mr-2"  >mdi-head-question-outline</v-icon>
          <v-icon v-else-if="iconType === 'GlobalRow'" color="ppmParameterColor" class="mr-2"  >mdi-earth</v-icon>
          
          {{this.getRow(fieldRow).InfoTitle}}
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
      iconType: { type: String, required: true },
      small: { type: Boolean, required: false, default: false },
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
