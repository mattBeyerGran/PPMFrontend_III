<template>
  <v-container>
    <PlanSheetHead title="Geschäftsplanung - Kredit Allgemein" subtitle="Planjahr: 2022, Planversion: 3, Planungslauf: 1"/>
     <v-row no-gutters  >
        <v-col cols="1">
        <!-- fuer den linken Abstand -->
      </v-col>
      <v-col cols="11" class="leftmargin">
       <Geschaeftsplan/>  
       </v-col>
    </v-row> 
    

        <!-- Tabelle -->

               <v-simple-table class="elevation-24">
                <template v-slot:default>
                  <thead>
                    <tr>
                      <th class="text-left ppmTableTextColor--text">
                        Plan-Element
                      </th>
                      <th class="text-center ppmTableTextColor--text">
                        Januar
                      </th>
                          <th class="text-center ppmTableTextColor--text">
                        Februar
                      </th>
                          <th class="text-center ppmTableTextColor--text">
                        Maerz
                      </th>
                          <th class="text-center ppmTableTextColor--text">
                        April
                      </th>
                          <th class="text-center ppmTableTextColor--text">
                        Mai
                      </th>
                          <th class="text-center ppmTableTextColor--text">
                        Juni
                      </th>
                          <th class="text-center ppmTableTextColor--text">
                        Juli
                      </th>
                          <th class="text-center ppmTableTextColor--text">
                        August
                      </th>
                          <th class="text-center ppmTableTextColor--text">
                        September
                      </th>
                          <th class="text-center ppmTableTextColor--text">
                        Oktober
                      </th>
                          <th class="text-center ppmTableTextColor--text">
                        November
                      </th>
                          <th class="text-center ppmTableTextColor--text">
                        Dezember
                      </th>
                    
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="item in kreditAllgemein" :key="item.name" >
                      <td>{{ item.name }}</td>
                      <td>{{ item.Jan }} <input v-model="input" placeholder="edit me"></td>
                      <td>{{ item.Feb }}</td>
                      <td>{{ item.Mar }}</td>
                      <td>{{ item.Apr }}</td>
                      <td>{{ item.Mai }}</td>
                      <td>{{ item.Jun }}</td>
                      <td>{{ item.Jul }}</td>
                      <td>{{ item.Aug }}</td>
                      <td>{{ item.Sep }}</td>
                      <td>{{ item.Okt }}</td>
                      <td>{{ item.Nov }}</td>
                      <td>{{ item.Dez }}</td>
                       <td> <v-icon dark color="edit" @click="editItem(item)">mdi-flag-checkered</v-icon></td>
                       <td> <v-icon dark color="edit" @click="editItem(item)">mdi-account-multiple-check</v-icon></td>
                      
                           <td> <v-icon dark color="edit" @click="editItem(item)">mdi-head-question-outline</v-icon></td>
                        
                        <td> <v-icon dark color="delete" @click="editItem(item)">mdi-calculator-variant</v-icon></td>
                       
                        <td> <v-icon dark color="delete" @click="editItem(item)">mdi-earth</v-icon></td>
                        <td> <v-icon dark color="delete" @click="editItem(item)">mdi-wrench</v-icon></td>
                       
                      
                    </tr>
                    
                  </tbody>
                </template>  
      </v-simple-table>
     
<!--    
 </v-col>
        
    </v-row> -->
  </v-container>
</template>

<script>
import PlanSheetHead from  '@/components/TopicPages/PlanSheets/PlanSheetHead'
export default {
  name: "KreditAllgemein",
  components: {
    PlanSheetHead
  },
  data(){
      return{
      tab: "eins",
      kreditAllgemein: [
          {
            name: 'Anfangsbestand',
            Jan: 159,
            Feb: 159,
            Mar: 159,
            Apr: 159,
            Mai: 159,
            Jun: 159,
            Jul: 159,
            Aug: 159,
            Sep: 159,
            Okt: 159,
            Nov: 159,
            Dez: 159
          },
          {
            name: 'Zugang',
            Jan: 237,
            Feb: 159,
            Mar: 159,
            Apr: 159,
            Mai: 159,
            Jun: 159,
            Jul: 159,
            Aug: 159,
            Sep: 159,
            Okt: 159,
            Nov: 159,
            Dez: 159
          },
          {
            name: 'Abgang',
            Jan: 262,
            Feb: 159,
            Mar: 159,
            Apr: 159,
            Mai: 159,
            Jun: 159,
            Jul: 159,
            Aug: 159,
            Sep: 159,
            Okt: 159,
            Nov: 159,
            Dez: 159
          },
          {
            name: 'Endbestand',
            Jan: 305,
            Feb: 159,
            Mar: 159,
            Apr: 159,
            Mai: 159,
            Jun: 159,
            Jul: 159,
            Aug: 159,
            Sep: 159,
            Okt: 159,
            Nov: 159,
            Dez: 159
          }
      ],
      }
  },
  props: {
    
  },

}
</script>

<style>

</style>