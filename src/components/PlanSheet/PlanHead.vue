<template >
  <v-container class="topmargin">
    <!-- Überschrift -->
    <table>
      <tr>
        <td >
            <div align="left"  class="topmargin display-1 ppmPlanTitleColor--text mt-8 pl-3">      
                {{title}}
            </div>
            <div align="left"  class="ppmPlanTitleColor--text pl-4">
                {{subtitle}}
            </div>
        </td>
        
        <td >
            <div align="left"  class="topmargin leftmargin headline ppmPlanTitleColor--text mt-8">      
                Planer: {{plannerName}}, {{plannerRole}}
            </div>     
        </td>
      </tr>
    </table>
        
      
  </v-container>
</template>

<script>


export default {
  name: "PlanHead",
  props: {
    title: {
      type: String,
      required: true
    },
    subtitle: {
      type: String,
      required: true
    },
    plannerName: {
      type: String,
      required: true
    },
    plannerRole: {
      type: String,
      required: true
    }
  }
}
</script>