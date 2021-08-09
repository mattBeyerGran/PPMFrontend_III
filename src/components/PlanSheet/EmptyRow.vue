<template >
     <tr  v-show=isActive  >     
        <td class="ppmTabsBGColor"></td>   
        <td class="ppmTabsBGColor"></td>
        <td class="ppmTabsBGColor"></td>  
        <td class="ppmTabsBGColor"></td>
        <td class="ppmTabsBGColor"></td>
        <td class="ppmTabsBGColor"></td>
        <td class="ppmTabsBGColor"></td>
        <td class="ppmTabsBGColor"></td>
        <td class="ppmTabsBGColor"></td>
        <td class="ppmTabsBGColor"></td>
        <td class="ppmTabsBGColor"></td>
        <td class="ppmTabsBGColor"></td>
        <td class="ppmTabsBGColor"></td>
        <td class="ppmTabsBGColor"></td>
    </tr>    
</template>

<script>
export default {
  name: "EmptyRow",
  data () {
    return{
      isActive: true
    }
  }
}
</script>