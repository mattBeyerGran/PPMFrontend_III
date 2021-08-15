<template >
    <tr>        
        <td class="text-start pl-12  ppmDarkTextColor--text ppmTabsBGColor">
          <v-icon dark color="ppmPlanElementColor" class="mr-2" >mdi-account-multiple-check</v-icon>
              {{ ElementField }}
        </td>    
          <slot></slot> 
                
        <td class="text-start font-weight-light ppmDarkTextColor--text ppmTabsBGColor">
          <v-icon v-show="isUpload" dark color="ppmPlanElementColor" class="mr-4" >
            mdi-arrow-up-thin-circle-outline</v-icon>{{ EndTextField }}
        </td>
    </tr>    
</template>

<script>
export default {
  name: "my-match-row",
  props: {    
      ElementField: { type: String, required: true },
      isUpload: { type: Boolean, required: false},
      EndTextField: { type: String, required: false },
  }
}
</script>


