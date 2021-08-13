<template >
    <tr>        
        <td class="text-start  ppmDarkTextColor--text ppmTabsBGColor title">
           {{ ElementField }}
        </td>    
        <td class="text-center font-weight-light text-small ppmTabsBGColor ppmDarkTextColor--text" >{{ColumnText}}</td>
        <td class="text-center font-weight-light ppmTabsBGColor ppmDarkTextColor--text">{{ColumnText}}</td>  
        <td class="text-center font-weight-light ppmTabsBGColor ppmDarkTextColor--text">{{ColumnText}}</td>
        <td class="text-center font-weight-light ppmTabsBGColor ppmDarkTextColor--text">{{ColumnText}}</td>
        <td class="text-center font-weight-light ppmTabsBGColor ppmDarkTextColor--text">{{ColumnText}}</td>
        <td class="text-center font-weight-light ppmTabsBGColor ppmDarkTextColor--text">{{ColumnText}}</td>
        <td class="text-center font-weight-light ppmTabsBGColor ppmDarkTextColor--text">{{ColumnText}}</td>
        <td class="text-center font-weight-light ppmTabsBGColor ppmDarkTextColor--text">{{ColumnText}}</td>
        <td class="text-center font-weight-light ppmTabsBGColor ppmDarkTextColor--text">{{ColumnText}}</td>
        <td class="text-center font-weight-light ppmTabsBGColor ppmDarkTextColor--text">{{ColumnText}}</td>
        <td class="text-center font-weight-light ppmTabsBGColor ppmDarkTextColor--text">{{ColumnText}}</td>
        <td class="text-center font-weight-light ppmTabsBGColor ppmDarkTextColor--text">{{ColumnText}}</td>
                
        <td class="text-start font-weight-light ppmDarkTextColor--text ppmTabsBGColor">{{ EndTextField }}</td>
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


