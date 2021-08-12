<template >
    <tr>        
        <td class="text-start  ppmDarkTextColor--text ppmTabsBGColor subtitle-2">
           {{ ElementField }}
        </td>    
        <td class="ppmTabsBGColor ppmDarkTextColor--text">{{ColumnText}}</td>
        <td class="ppmTabsBGColor ppmDarkTextColor--text">{{ColumnText}}</td>  
        <td class="ppmTabsBGColor ppmDarkTextColor--text">{{ColumnText}}</td>
        <td class="ppmTabsBGColor ppmDarkTextColor--text">{{ColumnText}}</td>
        <td class="ppmTabsBGColor ppmDarkTextColor--text">{{ColumnText}}</td>
        <td class="ppmTabsBGColor ppmDarkTextColor--text">{{ColumnText}}</td>
        <td class="ppmTabsBGColor ppmDarkTextColor--text">{{ColumnText}}</td>
        <td class="ppmTabsBGColor ppmDarkTextColor--text">{{ColumnText}}</td>
        <td class="ppmTabsBGColor ppmDarkTextColor--text">{{ColumnText}}</td>
        <td class="ppmTabsBGColor ppmDarkTextColor--text">{{ColumnText}}</td>
        <td class="ppmTabsBGColor ppmDarkTextColor--text">{{ColumnText}}</td>
        <td class="ppmTabsBGColor ppmDarkTextColor--text">{{ColumnText}}</td>
                
        <td class="text-start ppmDarkTextColor--text ppmTabsBGColor">{{ EndTextField }}</td>
    </tr>    
</template>

<script>
export default {
  name: "my-title-row",
  props: {    
      ElementField: { type: String, required: true },
      ColumnText: { type: String, required: false },
      EndTextField: { type: String, required: false },
  }
}
</script>


