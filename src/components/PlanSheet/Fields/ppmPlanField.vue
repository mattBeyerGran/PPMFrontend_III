<template>
    <td class="pt-2"   v-bind:style="{
                color: textColor,  
                backgroundColor: FieldBGColor,
                borderColor: FieldBGColor,
                fontSize: size,
                fontWeight: weight,
                textAlign: align
                }" 
            >
                <v-text-field id="planfield"
                dense
                clearable
                type="Number"
                :color="textColor"
                
                :background-color="BGColor"
                :placeholder="planValue.toString()"
                v-model="storedValue"
                v-on:keyup.enter="updateValue"
                
          ></v-text-field>

    <!-- {{value}} -->
    </td>
    
</template>
<script>
// import { mapGetters } from 'vuex';
export default {
  name: "my-ppm-plan-field",
  props: {
      planValue: { type: Number, required: true },
      textColor: { type: String, required: false, default: '#182F6D' },
      BGColor: { type: String, required: false, default: '#E8F0F7' },
      FieldBGColor: { type: String, required: false, default: '#E8F0F7' },
      weight: { type: String, required: false, default: 'normal' }, // bold, normal
      size: { type: String, required: false, default: '14px'}, // 14px, 40px
      align: { type: String, required: false, default: 'end' }, //start, center, end
      fieldRow: { type: String, required: false },
      fieldColumn: { type: String, required: false }
      
  },
  methods: {
    updateValue() {
          this.$store.dispatch('updateField', {planRow: this.fieldRow, planColumn: this.fieldColumn, planValue: this.storedValue});
          // eslint-disable-next-line no-console
          console.log(this.storedValue)

          this.$store.dispatch('ColorTrigger'); 
    }
  },

  data () {
      return {
        col: 0,
        storedValue: this.planValue,
        isActive: false,
      }
    },
}
</script>
<style>
  #planfield {
    margin-right: 0%;
    margin-left: 0%;
    font-size: 18px;
    text-align: right;
  }
</style>