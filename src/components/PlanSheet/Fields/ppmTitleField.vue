<template>
  
    <td 
        v-bind:style="{
                color: textColor, 
                backgroundColor: BGColor, 
                borderColor: BGColor,
                fontSize: size,
                fontWeight: weight,
                textAlign: align
                }">
      {{text}}
  </td>
    
</template>
<script>
export default {
  name: "my-ppm-title-field",
  props: {
      text: { type: String, required: true },
      weight: { type: String, required: false, default: 'normal' }, // bold, normal
      size: { type: String, required: false, default: '14px'}, // 14px, 40px
      textColor: { type: String, required: false, default: '#182F6D' },
      BGColor: { type: String, required: false, default: '#E8F0F7' },
      align: { type: String, required: false, default: '#E8F0F7' }, //start, center, end
  }
}
</script>
