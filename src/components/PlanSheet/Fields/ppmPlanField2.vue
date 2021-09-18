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
                }">{{value}}</div>
    
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
  name: "my-ppm-plan-field2",
  props: {
      value: { type: Number, required: false },
      action: { type: String, required: false },
      textColor: { type: String, required: false, default: '#182F6D' },
      BGColor: { type: String, required: false, default: '#E8F0F7' }, 
      weight: { type: String, required: false, default: 'normal' }, // bold, normal
      size: { type: String, required: false, default: '14px'}, // 14px, 40px
      align: { type: String, required: false, default: 'end' }, //start, center, end
  },
  methods: {
    toggleReadOnly(){
      this.readonly=!this.readonly; 
    },
    put2store(){
      this.readonly=!this.readonly;
      this.$store.commit(this.action, Number(this.value2));  
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
