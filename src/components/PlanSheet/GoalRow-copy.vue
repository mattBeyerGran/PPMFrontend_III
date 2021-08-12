<template >
 
    <tr v-if="isActive">
         
        <td class="text-start pl-12  ppmDarkTextColor--text ppmTabsBGColor">
          <v-icon dark color="ppmPlanElementColor" class="mr-2" @click="editItem(item)">mdi-flag-checkered</v-icon>
              {{ PlanElementText }}
        </td>    
          <slot name="jan" ></slot>
          <slot name="feb" ></slot>
          <slot name="mar" ></slot>
          <slot name="apr" ></slot>
          <slot name="mai" ></slot>
          <slot name="jun" ></slot>
          <slot name="jul" ></slot>
          <slot name="aug" ></slot>
          <slot name="sep" ></slot>
          <slot name="okt" ></slot>
          <slot name="nov" ></slot>
          <slot name="dez" ></slot> 
                
        <td class="ppmTabsBGColor">
            <!-- Item[{{PlanItem}}] -->
            <!-- <v-btn text><v-icon dark color="ppmPlanElementColor" @click="editItem(item)">mdi-information-outline</v-icon></v-btn> -->
            
        </td>
    </tr>

     
    
</template>

<script>

export default {
  name: "my-goal-row",
  props: {
      PlanItem: { type: String, required: false },
      PlanElementText: { type: String, required: false },
  },
  data () {
      return {
          isActive: true,
          isActive2: true,
          cols: [ 23, 45, 63],
          PlanElement: [
          {
            Periode01: 259,
            Periode02: 237,
            Periode03: 559,
            Periode04: 37,
            Periode05: 59,
            Periode06: 27,
            Periode07: 15,
            Periode08: 212,
            Periode09: 19,
            Periode10: 27,
            Periode11: 59,
            Periode12: 234
          }
        ],
        DefaultElement: [
          {
            Periode01: 159,
            Periode02: 237,
            Periode03: 159,
            Periode04: 237,
            Periode05: 159,
            Periode06: 237,
            Periode07: 159,
            Periode08: 237,
            Periode09: 159,
            Periode10: 237,
            Periode11: 159,
            Periode12: 237
          }
        ],
        GoalElement: [
          {
            Periode01: 159,
            Periode02: 237,
            Periode03: 159,
            Periode04: 237,
            Periode05: 159,
            Periode06: 237,
            Periode07: 159,
            Periode08: 237,
            Periode09: 159,
            Periode10: 237,
            Periode11: 159,
            Periode12: 237
          }
        ],
      }
  }
 
}

</script>
<style lang="scss" scoped>

#jan-red {
  color:brown;
  background: chartreuse;
}
</style>

