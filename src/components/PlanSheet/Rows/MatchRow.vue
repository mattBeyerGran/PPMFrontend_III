<template >
    <tr>        
        <td class="text-start pl-12  ppmDarkTextColor--text ppmTabsBGColor">
          <v-icon dark color="ppmPlanElementColor" class="mr-2" >mdi-account-multiple-check</v-icon>
              {{ ElementField }}
        </td>    
          <slot></slot> 
                
        <td class="text-start ppmDarkTextColor--text ppmTabsBGColor">{{ EndTextField }}</td>
    </tr>    
</template>

<script>
export default {
  name: "my-match-row",
  props: {    
      ElementField: { type: String, required: true },
      EndTextField: { type: String, required: false },
  }
}
</script>


