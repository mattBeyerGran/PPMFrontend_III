<template>
    <td v-if="readonly" class=" ppmTabsBGColor"      
            v-bind:style="{
                color: textColor, 
                backgroundColor: BGColor,
                borderColor: BGColor, 
                fontSize: size,
                fontWeight: weight,
                textAlign: align
                }"
                type='Number'
                v-on:click="toggleReadOnly" 
                >
                <div class="mt-4 " style="width:100px"
                  v-bind:style="{
                color: textColor, 
                backgroundColor: BGColor,
                borderColor: BGColor, 
                fontSize: size,
                fontWeight: weight,
                textAlign: align
                }">{{displayValue}}</div>
    
    </td>

    <td v-else class="pt-7 ppmTabsBGColor"   v-bind:style="{
                color: textColor,  
                fontSize: size,
                fontWeight: weight,
                textAlign: align
                }"      
            >
            <div class="" style="width:100px">
                <v-text-field id="planfield"
                
                dense
                type="Number"
                color="#182F6D"    
                background-color="#FFFFFF"
                :placeholder="value.toString()"
                v-model="value2"
                v-on:keyup.enter="put2store"
                
                ></v-text-field>
            </div>
              
    </td>
    
    
</template>
<script>
export default {
  name: "my-ppm-plan-field",
  props: {
      value: { type: Number, required: false },
      dezi: { type: Number, required: false, default: 2 }, // round to dezi
      action: { type: String, required: false },
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
  methods: {
    toggleReadOnly(){
      this.readonly=!this.readonly; 
    },
    put2store(){
      this.readonly=!this.readonly;
      this.$store.commit(this.action, Number(this.value2));  
    },
    round(wert, dez){
      wert = parseFloat(wert);
        if (!wert) return 0;
        dez = parseInt(dez);
        if (!dez) dez=0;

        var umrechnungsfaktor = Math.pow(10,dez);

        return Math.round(wert * umrechnungsfaktor) / umrechnungsfaktor;
    }
  },
  
  data(){
    return {
        readonly: true,
        value2: this.value
      }
  }
}
</script>
<style>
  #planfield {
  
    /* font-size: 18px; */
    text-align: right; 
  } 
</style>
