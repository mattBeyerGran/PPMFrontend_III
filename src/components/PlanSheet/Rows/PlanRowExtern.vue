<template >
    <tr>        
        <td class="text-start  ppmDarkTextColor--text ppmTabsBGColor subtitle-1">
          <v-icon dark color="ppmParameterColor" class="mr-2" >mdi-head-question-outline</v-icon>
              {{ ElementField }}
        </td>    
          <slot></slot> 
                
        <td class="text-start font-weight-light ppmDarkTextColor--text ppmTabsBGColor">{{ EndTextField }}</td>
    </tr>    
</template>

<script>
export default {
  name: "my-plan-row-extern",
  props: {    
      ElementField: { type: String, required: true },
      EndTextField: { type: String, required: false },
  }
}
</script>


