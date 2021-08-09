<template >
  <v-container class="bottommargin">
        <!-- <v-simple-table >
          <template v-slot:default >
            <thead>
              <tr  class="ppmDarkTextColor">
                <th class="text-start white--text subtitle-1">Plan-Elemente</th>
                <th class="text-center white--text subtitle-1">Jan</th>
                <th class="text-center white--text subtitle-1">Feb</th>
                <th class="text-center white--text subtitle-1">Mar</th>
                <th class="text-center white--text subtitle-1">Apr</th>
                <th class="text-center white--text subtitle-1">Mai</th>
                <th class="text-center white--text subtitle-1">Jun</th>
                <th class="text-center white--text subtitle-1">Jul</th>
                <th class="text-center white--text subtitle-1">Aug</th>
                <th class="text-center white--text subtitle-1">Sep</th>
                <th class="text-center white--text subtitle-1">Okt</th>
                <th class="text-center white--text subtitle-1">Nov</th>
                <th class="text-center white--text subtitle-1">Dez</th>
                <th class="text-start white--text subtitle-1">Zusatzinformationen</th>
              </tr>
            </thead>
            <tbody>      
              <PlanRow PlanItem="12" v-bind:PlanItemName=PlanItems[0].PlanText />
              <CalcRow CalcItem="1" v-bind:CalcItemName=TextCalc01 v-bind:CalcItemDesc=DescCalcs01 />   
              <EmptyRow/>             
            </tbody>
            
          </template>
        </v-simple-table> -->
  </v-container>
</template>

<script>
// import PlanRow from  '@/components/PlanSheet/PlanRow'
// import CalcRow from  '@/components/PlanSheet/CalcRow'
// import EmptyRow from  '@/components/PlanSheet/EmptyRow'


//   export default {
//     components: {
//       PlanRow,
//       CalcRow,
//       EmptyRow
//     },

//     data () {
//       return {
//         isActive: true,
        
//         dialog: false,
        
        
//         TextCalc01: "Test CalcText",
//         DescCalcs01: "Test Calculation",
       
        
//         // wert11: 25,
//         LocalParameter: [
//           {
//             Vorjahresbestand: 25000
//           },
//           {
//             Mehrwertsteuer: 0.19
//           }
          
//         ],
//         PlanItems: [
//           {
//             ItemId: "27",
//             PlanText: "Test PlanText"
//           }
//         ]
//       }
//     }

//   }
</script>