<template >
 
    <tr>
         
        <td class="text-start ppmDarkTextColor--text subtitle-1 ppmTabsBGColor">
          <v-icon dark color="ppmPlanElementColor" class="mr-2" @click="editItem(item)">mdi-head-question-outline</v-icon>
            {{PlanItemName}}
        </td>
            
        <td class="text-start white ppmElementRed ppmNumberRed--text subtitle-1">{{ PlanElement[0].Periode01 }}</td>
        <td class="text-start white ppmElementRed ppmNumberRed--text subtitle-1">{{ PlanElement[0].Periode02 }}</td>
        <td class="text-start white ppmElementYellow ppmNumberYellow--text subtitle-1">{{ PlanElement[0].Periode03 }}</td>
        <td class="text-start white ppmElementYellow ppmNumberYellow--text subtitle-1">{{ PlanElement[0].Periode04 }}</td>
        <td class="text-start white ppmElementGreen ppmNumberGreen--text subtitle-1">{{ PlanElement[0].Periode05 }}</td>
        <td class="text-start white ppmElementGreen ppmNumberGreen--text subtitle-1">{{ PlanElement[0].Periode06 }}</td>
        <td class="text-start white ppmDarkTextColor--text subtitle-1">{{ PlanElement[0].Periode07 }}</td>
        <td class="text-start white ppmElementRed red ppmNumberRed--text subtitle-1">{{ PlanElement[0].Periode08 }}</td>
        <td class="text-start white ppmElementRed ppmNumberRed--text subtitle-1">{{ PlanElement[0].Periode09 }}</td>
        <td class="text-start white ppmElementYellow ppmNumberYellow--text subtitle-1">{{ PlanElement[0].Periode10 }}</td>
        <td class="text-start white ppmElementRed red ppmNumberRed--text subtitle-1">{{ PlanElement[0].Periode11 }}</td>
        <td class="text-start white ppmElementRed red ppmNumberRed--text subtitle-1">{{ PlanElement[0].Periode12 }}</td>
        
        <td class="ppmTabsBGColor">
            <!-- Item[{{PlanItem}}] -->
            <v-icon dark color="ppmPlanElementColor" class="mr-4" @click="editItem(item)">mdi-pencil</v-icon>
            <v-icon dark color="ppmPlanElementColor" class="mr-4" @click="activateGoal(0)">mdi-flag-checkered</v-icon>
            <v-icon dark color="ppmPlanElementColor" class="mr-4" @click="activateMatch(1)">mdi-account-multiple-check</v-icon> 
        </td>
    </tr>

     
    
</template>

<script>
import { mapActions } from 'vuex';
import * as types from '../../store/types';

export default {
  name: "PlanRow",
  props: {
      PlanItem: { type: String, required: false },
      PlanItemName: { type: String, required: false },
      goal: { type: String, required: true},
      match: { type: String, required: true},
  },
  methods: {
      ...mapActions({
            activateGoal: types.PL01PST01ROW04_TOGGLE_ACTIVE,
            activateMatch: types.PL01PST01ROW05_TOGGLE_ACTIVE
      })
  },
  data () {
      return {
          PlanElement: [
          {
            Periode01: 159,
            Periode02: 237,
            Periode03: 159,
            Periode04: 237,
            Periode05: 159,
            Periode06: 237,
            Periode07: 159,
            Periode08: 237,
            Periode09: 159,
            Periode10: 237,
            Periode11: 159,
            Periode12: 237
          }
        ],
        DefaultElement: [
          {
            Periode01: 159,
            Periode02: 237,
            Periode03: 159,
            Periode04: 237,
            Periode05: 159,
            Periode06: 237,
            Periode07: 159,
            Periode08: 237,
            Periode09: 159,
            Periode10: 237,
            Periode11: 159,
            Periode12: 237
          }
        ],
        GoalElement: [
          {
            Periode01: 159,
            Periode02: 237,
            Periode03: 159,
            Periode04: 237,
            Periode05: 159,
            Periode06: 237,
            Periode07: 159,
            Periode08: 237,
            Periode09: 159,
            Periode10: 237,
            Periode11: 159,
            Periode12: 237
          }
        ],
      }
  }
 
}

</script>