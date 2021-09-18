<template>
    <td id="valueField" class="ppmTabsBGColor pr-12"      
            v-bind:style="{
                color: textColor,  
                fontSize: size,
                fontWeight: weight,
                textAlign: align
                }" type='Number'>
                <div class="my-2 " style="width:100px">{{value}}</div>
    
    </td>
</template>
<script>
export default {
  name: "my-ppm-value-field",
  props: {
      value: { type: Number, required: false },
      textColor: { type: String, required: false, default: '#182F6D' },
      BGColor: { type: String, required: false, default: '#E8F0F7' },
      weight: { type: String, required: false, default: 'normal' }, // bold, normal
      size: { type: String, required: false, default: '14px'}, // 14px, 40px
      align: { type: String, required: false, default: 'end' }, //start, center, end
  }
}
</script>
<style>
  #valuefield {
    margin-right: 0%;
    margin-left: 0%;
    font-size: 18px;
    text-align: right;
  }
</style>
