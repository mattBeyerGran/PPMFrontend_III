<template>
    <td id="valueField" class="ppmTabsBGColor pr-12"      
            v-bind:style="{
                color: textColor,  
                fontSize: size,
                fontWeight: weight,
                textAlign: align
                }" type='Number'>
                <div class="my-2 " style="width:100px">{{displayValue}}</div>
    
    </td>
</template>
<script>
export default {
  name: "my-ppm-value-field",
  methods: {
    round(wert, dez){
      wert = parseFloat(wert);
        if (!wert) return 0;
        dez = parseInt(dez);
        if (!dez) dez=0;

        var umrechnungsfaktor = Math.pow(10,dez);

        return Math.round(wert * umrechnungsfaktor) / umrechnungsfaktor;
    }
  },
  props: {
      value: { type: Number, required: false },
      dezi: { type: Number, required: false, default: 2 }, // round to dezi
      textColor: { type: String, required: false, default: '#182F6D' },
      BGColor: { type: String, required: false, default: '#E8F0F7' },
      weight: { type: String, required: false, default: 'normal' }, // bold, normal
      size: { type: String, required: false, default: '14px'}, // 14px, 40px
      align: { type: String, required: false, default: 'end' }, //start, center, end
  },
  computed: {
    displayValue(){
      return Number(this.round(this.value, this.dezi)).toFixed(this.dezi)
    }
  },
  data(){
    return {
        
    }
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
