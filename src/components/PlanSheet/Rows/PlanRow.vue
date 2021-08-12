<template >
    <tr>        
        <td class="text-start ppmDarkTextColor--text ppmTabsBGColor subtitle-1">
          <v-icon dark color="ppmPlanElementColor" class="mr-2" >mdi-head-question-outline</v-icon>
              {{ ElementField }}
        </td>    
          <slot></slot> 
                
        <td class="ppmTabsBGColor">
            
            <v-icon dark color="ppmPlanElementColor" class="mr-4" >mdi-pencil</v-icon>
            <v-icon dark color="ppmPlanElementColor" class="mr-4" >mdi-flag-checkered</v-icon>
            <v-icon dark color="ppmPlanElementColor" class="mr-4" >mdi-account-multiple-check</v-icon> 
        </td>
    </tr>    
</template>

<script>
export default {
  name: "my-plan-row",
  props: {    
      ElementField: { type: String, required: false }
      
  }
}
</script>


