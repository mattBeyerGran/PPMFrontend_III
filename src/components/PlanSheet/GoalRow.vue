<template >
 
    <tr v-if="isActive">
         
        <td class="text-start ppmTabsBGColor"><v-btn text><v-icon dark color="ppmPlanElementColor" @click="editItem(item)">mdi-head-question-outline</v-icon>
            </v-btn>{{PlanItemName}}</td>
            
        <td class="text-start white red--text subtitle-1">{{ PlanElement[0].Periode01 }}</td>
        <td class="text-start white red--text subtitle-1">{{ PlanElement[0].Periode02 }}</td>
        <td class="text-start white yellow--text subtitle-1">{{ PlanElement[0].Periode03 }}</td>
        <td class="text-start white yellow--text subtitle-1">{{ PlanElement[0].Periode04 }}</td>
        <td class="text-start white green--text subtitle-1">{{ PlanElement[0].Periode05 }}</td>
        <td class="text-start white red--text subtitle-1">{{ PlanElement[0].Periode06 }}</td>
        <td class="text-start white red--text subtitle-1">{{ PlanElement[0].Periode07 }}</td>
        <td class="text-start white red--text subtitle-1">{{ PlanElement[0].Periode08 }}</td>
        <td class="text-start white red--text subtitle-1">{{ PlanElement[0].Periode09 }}</td>
        <td class="text-start white red--text subtitle-1">{{ PlanElement[0].Periode10 }}</td>
        <td class="text-start white red--text subtitle-1">{{ PlanElement[0].Periode11 }}</td>
        <td class="text-start white red--text subtitle-1">{{ PlanElement[0].Periode12 }}</td>
        
        <td class="ppmTabsBGColor">
            
        </td>
    </tr>
</template>

<script>
export default {
  name: "GoalRow",
  props: {
      PlanItem: { type: Number, required: true },
      PlanItemName: { type: String, required: true },
  },
  data () {
      return {
          isActive: true,
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