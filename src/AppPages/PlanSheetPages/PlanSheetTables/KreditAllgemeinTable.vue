<template >
  <v-container class="bottommargin">
        <v-simple-table >
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
              <!-- <EmptyRow/>      -->
              <CalcRow CalcItem=32 v-bind:CalcItemName=TextCalc01 v-bind:CalcItemDesc=DescCalcs01 />
              <PlanRow v-if="isActive" v-bind:PlanItem=PlanItems[0].ItemId v-bind:PlanItemName=PlanItems[0].PlanText />
              <PlanRow v-show="isActive2" v-bind:PlanItem=PlanItems[0].ItemId v-bind:PlanItemName=PlanItems[0].PlanText />
              <PlanRow PlanItem=34 v-bind:PlanItemName=TextItem02 />
              <CalcRow CalcItem=1 v-bind:CalcItemName=TextCalc02 v-bind:CalcItemDesc=DescCalcs01 />   
              <PlanRowExtern v-show="isActive2" v-bind:PlanItemExtern=PlanItems[0].ItemId v-bind:PlanItemExternName=PlanItems[0].PlanText />
              <EmptyRow/>             
            </tbody>         
          </template>
        </v-simple-table>
  </v-container>
</template>

<script>
import PlanRow from  '@/components/PlanSheet/PlanRow'
import PlanRowExtern from  '@/components/PlanSheet/PlanRowExtern'
import CalcRow from  '@/components/PlanSheet/CalcRow'
import EmptyRow from  '@/components/PlanSheet/EmptyRow'
  export default {
     components: {
      PlanRow,
      PlanRowExtern,
      CalcRow,
      EmptyRow
    },
    data () {
      return {
        isActive: true,
        isActive2: true,
        dialog: false,
        TextItem01: "Zugang",
        TextItem02: "Abgang",
        TextCalc01: "Anfangsbestand",
        DescCalcs01: "Anfangsbestand + Zugang - Endbestand",
        TextCalc02: "Endbestand",
        DescCalcs02: "Vormonats-Endbestand",
        LocalParameter: [
          {
            Vorjahresbestand: 25000
          },
          {
            Mehrwertsteuer: 0.19
          }
          
        ],
        PlanItems: [
          {
            ItemId: 27,
            PlanText: "Zugang"
          }
        ],
        PlanItemsExtern: [
          {
            ItemId: 42,
            PlanText: "Zugang",
            PlName: "Christop",
            PlRole: "BU-Manager"
          }
        ]
      }
    },
  }
</script>