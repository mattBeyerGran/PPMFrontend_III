<template >
     <tr  v-show=isActive  >     
        <td class="ppmTabsBGColor ppmDarkTextColor--text subtitle-2">Bestandsveränderungen in Mio.</td>   
        <td class="ppmTabsBGColor ppmDarkTextColor--text">Euro</td>
        <td class="ppmTabsBGColor ppmDarkTextColor--text">Euro</td>  
        <td class="ppmTabsBGColor ppmDarkTextColor--text">Euro</td>
        <td class="ppmTabsBGColor ppmDarkTextColor--text">Euro</td>
        <td class="ppmTabsBGColor ppmDarkTextColor--text">Euro</td>
        <td class="ppmTabsBGColor ppmDarkTextColor--text">Euro</td>
        <td class="ppmTabsBGColor ppmDarkTextColor--text">Euro</td>
        <td class="ppmTabsBGColor ppmDarkTextColor--text">Euro</td>
        <td class="ppmTabsBGColor ppmDarkTextColor--text">Euro</td>
        <td class="ppmTabsBGColor ppmDarkTextColor--text">Euro</td>
        <td class="ppmTabsBGColor ppmDarkTextColor--text">Euro</td>
        <td class="ppmTabsBGColor ppmDarkTextColor--text">Euro</td>
        <td class="ppmTabsBGColor"></td>
    </tr>    
</template>

<script>
export default {
  name: "TitleRow",
  data () {
    return{
      isActive: true
    }
  }
}
</script>