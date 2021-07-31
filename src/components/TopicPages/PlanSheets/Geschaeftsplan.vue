<template>
  <v-container>
     <!-- Plan-Tab-Menu -->
        <v-tabs
            v-model="tab"
            color="ppmLightTextColor" 
            background-color="ppmTabsBGColor"
            show-arrows
            class="elevation-24"
        >
            <v-tabs-slider color="ppmSlider"></v-tabs-slider>

            <v-tab href="#eins">Kredit allgemein</v-tab>
            <v-tab href="#zwei">Hypotheken</v-tab>
            <v-tab href="#drei">Spezial</v-tab>
        </v-tabs>

        <!-- Tabelle -->
        <v-tabs-items v-model="tab" class="mt-4">
            <v-tab-item value="eins">
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
                      <td> <v-icon dark color="delete" @click="editItem(item)">mdi-head-question</v-icon></td>
                           <td> <v-icon dark color="edit" @click="editItem(item)">mdi-head-question-outline</v-icon></td>
                        <td> <v-icon dark color="delete" @click="editItem(item)">mdi-calculator</v-icon></td>
                        <td> <v-icon dark color="delete" @click="editItem(item)">mdi-calculator-variant</v-icon></td>
                        <td> <v-icon dark color="delete" @click="editItem(item)">mdi-calculator-variant-outline</v-icon></td>
                        <td> <v-icon dark color="delete" @click="editItem(item)">mdi-earth</v-icon></td>
                        <td> <v-icon dark color="delete" @click="editItem(item)">mdi-view-dashboard</v-icon></td>
                    </tr>
                    
                  </tbody>
                </template>  
      </v-simple-table>
            </v-tab-item>
            <v-tab-item value="zwei">
                <v-card flat>
                    <v-card-text>B</v-card-text>
                </v-card>
            </v-tab-item>
             <v-tab-item value="drei">
                <v-card flat>
                    <v-card-text>C</v-card-text>
                </v-card>
            </v-tab-item>
        </v-tabs-items>
<!--    
 </v-col>
        
    </v-row> -->
  </v-container>
</template>

<script>
export default {
  name: "Geschaeftsplan",
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