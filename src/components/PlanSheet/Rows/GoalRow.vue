<template >
    <tr>        
        <td class="text-start pl-12  ppmDarkTextColor--text ppmTabsBGColor">
          <v-icon dark color="ppmPlanElementColor" class="mr-2" >mdi-flag-checkered</v-icon>
              {{ ElementField }}
        </td>    
          <slot></slot> 
                
        <td class="text-start font-weight-light ppmDarkTextColor--text ppmTabsBGColor">
          <v-icon v-show="isUpload" dark color="ppmPlanElementColor" class="mr-4" >
            mdi-upload-outline</v-icon>{{ EndTextField }}
        </td>
    </tr>    
</template>

<script>
export default {
  name: "my-goal-row",
  props: {    
      ElementField: { type: String, required: true },
      isUpload: { type: Boolean, required: false},
      EndTextField: { type: String, required: false },
  }
}
</script>


