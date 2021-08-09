<template >
 
    <tr>
        
        <td class="text-start pl-12  ppmDarkTextColor--text ppmTabsBGColor">
          <v-icon dark color="ppmPlanElementColor" class="mr-2" @click="editItem(item)">mdi-account-multiple-check</v-icon>
           (1:1)
        </td>
            
        <td class="text-start white ppmNumberRed--text  ppmTabsBGColor">{{ PlanElement[0].Periode01 }}</td>
        <td class="text-start white ppmNumberRed--text ppmTabsBGColor">{{ PlanElement[0].Periode02 }}</td>
        <td class="text-start white ppmNumberYellow--text ppmTabsBGColor">{{ PlanElement[0].Periode03 }}</td>
        <td class="text-start white ppmNumberYellow--text ppmTabsBGColor">{{ PlanElement[0].Periode04 }}</td>
        <td class="text-start white ppmNumberGreen--text ppmTabsBGColor">{{ PlanElement[0].Periode05 }}</td>
        <td class="text-start white ppmNumberRed--text ppmTabsBGColor">{{ PlanElement[0].Periode06 }}</td>
        <td class="text-start white ppmNumberRed--text ppmTabsBGColor">{{ PlanElement[0].Periode07 }}</td>
        <td class="text-start white ppmNumberRed--text ppmTabsBGColor">{{ PlanElement[0].Periode08 }}</td>
        <td class="text-start white ppmNumberRed--text ppmTabsBGColor">{{ PlanElement[0].Periode09 }}</td>
        <td class="text-start white ppmNumberRed--text ppmTabsBGColor">{{ PlanElement[0].Periode10 }}</td>
        <td class="text-start white ppmNumberRed--text ppmTabsBGColor">{{ PlanElement[0].Periode11 }}</td>
        <td class="text-start white ppmNumberRed--text ppmTabsBGColor">{{ PlanElement[0].Periode12 }}</td>
        
        <td class="ppmTabsBGColor">
           
        </td>
    </tr>

     
    
</template>

<script>

export default {
  name: "PlanRow",
  props: {
      PlanItem: { type: String, required: false },
      PlanItemName: { type: String, required: false },
  },
  data () {
      return {
          PlanElement: [
          {
            Periode01: 259,
            Periode02: 237,
            Periode03: 559,
            Periode04: 37,
            Periode05: 59,
            Periode06: 27,
            Periode07: 15,
            Periode08: 212,
            Periode09: 19,
            Periode10: 27,
            Periode11: 59,
            Periode12: 234
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