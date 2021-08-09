<template >
     <tr class="ppmTabsBGColor" >
         
        <td class="text-start ppmDarkTextColor--text subtitle-1 ppmTabsBGColor">
          <v-icon dark color="ppmParameterColor" class="mr-2" @click="editItem(item)">mdi-calculator-variant</v-icon>
            {{CalcItemName}}
        </td>
            
        <td class="ppmTabsBGColor ppmDarkTextColor--text subtitle-1">{{ PlanElement[0].Periode01 }}</td>
        <td class="ppmTabsBGColor ppmDarkTextColor--text subtitle-1">{{ PlanElement[0].Periode02 }}</td>
        <td class="ppmTabsBGColor ppmDarkTextColor--text subtitle-1">{{ PlanElement[0].Periode03 }}</td>
        <td class="ppmTabsBGColor ppmDarkTextColor--text subtitle-1">{{ PlanElement[0].Periode04 }}</td>
        <td class="ppmTabsBGColor ppmDarkTextColor--text subtitle-1">{{ PlanElement[0].Periode05 }}</td>
        <td class="ppmTabsBGColor ppmDarkTextColor--text subtitle-1">{{ PlanElement[0].Periode06 }}</td>
        <td class="ppmTabsBGColor ppmDarkTextColor--text subtitle-1">{{ PlanElement[0].Periode07 }}</td>
        <td class="ppmTabsBGColor ppmDarkTextColor--text subtitle-1">{{ PlanElement[0].Periode08 }}</td>
        <td class="ppmTabsBGColor ppmDarkTextColor--text subtitle-1">{{ PlanElement[0].Periode09 }}</td>
        <td class="ppmTabsBGColor ppmDarkTextColor--text subtitle-1">{{ PlanElement[0].Periode10 }}</td>
        <td class="ppmTabsBGColor ppmDarkTextColor--text subtitle-1">{{ PlanElement[0].Periode11 }}</td>
        <td class="ppmTabsBGColor ppmDarkTextColor--text subtitle-1">{{ PlanElement[0].Periode12 }}</td>
        
        <td class="ppmTabsBGColor">
            <!-- Calculation[{{CalcItem}}]: -->
            <!-- {{CalcItemName}} = {{CalcItemDesc}}  -->
        </td>     
    </tr>    
</template>

<script>


export default {
  name: "CalsRow",
  props: {
      CalcItem: { type: String, required: false },
      CalcItemName: { type: String, required: false },
      CalcItemDesc: { type: String, required: false },
  },
  data () {
      return {
          PlanElement: [
          {
            element: 'Anfangsbestand',
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