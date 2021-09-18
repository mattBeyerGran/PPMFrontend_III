<template>
  
    <td v-if="small"
    class="text-start" 
    v-bind:style="{
          color: textColor, 
          backgroundColor: BGColor, 
          borderColor: BGColor,
          fontSize: size,
          fontWeight: weight,
          textAlign: align
          }"
    >
       <v-icon v-if="copyIcon"
          small
          dark 
          color="ppmPlanElementColor" 
          class="mr-4"  
          @click="copyRow" 
        >
          mdi-arrow-up-thin-circle-outline
        </v-icon>
           
        <v-icon v-if="parallelIcon"
          small
          dark 
          color="ppmPlanElementColor" 
          class="mr-4"  
          @click="showChildRows" 
        >
          mdi-chart-timeline-variant-shimmer
        </v-icon>
        <v-icon v-if="chartIcon"
          small
          dark 
          color="ppmPlanElementColor" 
          class="mr-4"  
          @click="showGraphic"
        >
          mdi-chart-areaspline
        </v-icon> 
        <v-icon v-if="resetIcon"
          small
          dark 
          color="ppmCancel" 
          class="mr-4"  
          @click="resetRow" 
        >
          mdi-reload
        </v-icon>    
        <v-icon v-if="okIcon"
          small
          dark 
          color="ppmOK" 
          class="mr-4"  
          @click="okRow"
        >
          mdi-check
        </v-icon>    
            
          {{ text }}      
  </td>
    <td v-else
    class="text-start" 
    v-bind:style="{
          color: textColor, 
          backgroundColor: BGColor, 
          borderColor: BGColor,
          fontSize: size,
          fontWeight: weight
          }"
    >
       <v-icon v-if="copyIcon"
          dark 
          color="ppmPlanElementColor" 
          class="mr-4"  
          @click="copyRow" 
        >
          mdi-arrow-up-thin-circle-outline
        </v-icon> 
        
        <v-icon v-if="parallelIcon"
          dark 
          color="ppmPlanElementColor" 
          class="mr-4"  
          @click="showChildRows" 
        >
          mdi-chart-timeline-variant-shimmer
        </v-icon>

        <v-icon v-if="chartIcon"
          dark 
          color="ppmPlanElementColor" 
          class="mr-4"  
          @click="showGraphic"
        >
          mdi-chart-areaspline
        </v-icon>
                <v-icon v-if="resetIcon"
          dark 
          color="ppmCancel" 
          class="mr-4"  
          @click="resetRow" 
        >
         mdi-reload
        </v-icon> 
        <v-icon v-if="okIcon"
          dark 
          color="ppmOK" 
          class="mr-4"  
          @click="okRow"
        >
          mdi-check
        </v-icon>
 
          {{ text }}      
  </td>     
  
      
      
      
</template>
<script>
import { mapGetters } from 'vuex';
export default {
  name: "my-ppm-action-field",
  props: {
      copyIcon: { type: Boolean, required: false },
      parallelIcon: { type: Boolean, required: false },
      resetIcon: { type: Boolean, required: false },
      okIcon: { type: Boolean, required: false },
      chartIcon: { type: Boolean, required: false },
      small: { type: Boolean, required: false },
      text: { type: String, required: false },
      origin: { type: String, required: false }, // Row that shall be copied
      destination: { type: String, required: false }, // Row to that shall be copied
      fieldRow: { type: String, required: false },
      weight: { type: String, required: false, default: 'normal' }, // bold, normal
      size: { type: String, required: false, default: '14px'}, // 14px, 40px
      align: { type: String, required: false, default: 'start'}, // start, center, end
      textColor: { type: String, required: false, default: '#182F6D' },
      BGColor: { type: String, required: false, default: '#E8F0F7' },
      showChilds: { type: String, required: false }, // 
      graphic: { type: String, required: false }, // 
  },
  computed: {
  
    ...mapGetters([
        'getRow'
    ])
  },
  methods: {
    copyRow() {
          this.$store.dispatch('copyRowToRow', {origin: this.origin, destination: this.destination}); 
          this.$store.dispatch('ColorTrigger'); 
                  
    },
    resetRow() {
        
          this.$store.dispatch('resetRow', {fieldRow: this.fieldRow});
          this.$store.dispatch('ColorTrigger');
          
    },
    showChildRows(){
          this.$store.dispatch(this.showChilds);
          
         
    },
    okRow(){
          
          this.$store.dispatch('ColorTrigger');
         
    },
    showGraphic(){
          this.$store.dispatch(this.graphic);
         
    },
  }
}
</script>
