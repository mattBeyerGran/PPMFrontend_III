<template >
  <v-container class="bottommargin">
        <v-simple-table dense>
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
                <th class="text-start white--text subtitle-1">Aktionen</th>
              </tr>
            </thead>
            <tbody>      
              <TitleRow/> 
              <CalcRow CalcItem="32" v-bind:CalcItemName=TextCalc01 v-bind:CalcItemDesc=DescCalcs01 />
              <PlanRow PlanItem="33" v-bind:PlanItemName=PlanItems[0].PlanText goal=0 match=1 />
              <GoalRow v-show="isActive1" v-bind:MatchRow=PlanItems[0].ItemId />
              <GoalRow v-show="isActive1" v-bind:MatchRow=PlanItems[0].ItemId />
              <MatchRow v-show="isActive2" v-bind:MatchRow=PlanItems[0].ItemId />              
              <PlanRow PlanItem="34" v-bind:PlanItemName="TextItem02" goal=0 match=1 />
              <CalcRow CalcItem=1 v-bind:CalcItemName=TextCalc02 v-bind:CalcItemDesc=DescCalcs01 />   
              <DividerRow/>
              <TitleRow/> 
              <PlanRowExtern v-show="isActive2" v-bind:PlanItemExtern=PlanItems[0].ItemId v-bind:PlanItemExternName=PlanItems[0].PlanText />
              <GlobalRow v-show="isActive2" v-bind:PlanItemExtern=PlanItems[0].ItemId v-bind:PlanItemExternName=PlanItems[0].PlanText />
              <EmptyRow/>             
            </tbody>         
          </template>
        </v-simple-table>
           <div>
        <div class="testmargin white--text display-3">Action and Mutation Test</div>
        <div>
            <v-btn
            depressed
            color="primary"
            class="mt-6"
            @click="toggleGoal"
            >
            Toggle Goal
            </v-btn>
        </div>
        <div>
            <v-btn
            depressed
            color="primary"
            class="mt-6"
            @click="toggleMatch"
            >
            Toggle Match
            </v-btn>
        </div>
        
    </div>
  </v-container>
</template>

<script>
import { mapGetters } from 'vuex';
import { mapMutations } from 'vuex';
import { mapActions } from 'vuex';



import * as types from '../../../store/types';
import PlanRow from  '@/components/PlanSheet/PlanRow'
import MatchRow from  '@/components/PlanSheet/MatchRow'
import GoalRow from  '@/components/PlanSheet/GoalRow'
import PlanRowExtern from  '@/components/PlanSheet/PlanRowExtern'
import GlobalRow from  '@/components/PlanSheet/GlobalRow'
import CalcRow from  '@/components/PlanSheet/CalcRow'
import EmptyRow from  '@/components/PlanSheet/EmptyRow'
import TitleRow from  '@/components/PlanSheet/TitleRow'
import DividerRow from  '@/components/PlanSheet/DividerRow'
  export default {
     goal: Number,
     match: Number,
     components: {
      PlanRow,
      GoalRow,
      MatchRow,
      PlanRowExtern,
      GlobalRow,
      CalcRow,
      EmptyRow,
      TitleRow,
      DividerRow
    },
    computed: {
      ...mapGetters({
          isActive1: types.PL01PST01ROW04_ACTIVE,
          isActive2: types.PL01PST01ROW05_ACTIVE
    })
    },
    methods: {
      ...mapMutations([
          'toggleGoal',
          'toggleMatch'
      ]),
      ...mapActions({
          toggleGoal: types.PL01PST01ROW04_TOGGLE_ACTIVE,
          toggleMatch: types.PL01PST01ROW05_TOGGLE_ACTIVE
            })
    },
    data () {
      return {
        
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
            ItemId: "27",
            PlanText: "Zugang",
            GoalRowTypes: [ "CalcBasis", "Default", "Goal"],
            MatchItems: [ 42, 34]
          }
        ],
        PlanItemsExtern: [
          {
            ItemId: "42",
            PlanText: "Zugang",
            PlName: "Christop",
            PlRole: "BU-Manager"
          }
        ]
      }
    },
  }
</script>