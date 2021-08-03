<template>
        <v-list shaped >
           <v-header v-if="this.user"><strong><span class="ppmDarkTextColor--text ml-4">Planungsthemen</span></strong></v-header>
           <v-list-group prepend-icon="mdi-handshake-outline">
              <template v-slot:activator>
                <v-list-item-title>Geschäft</v-list-item-title>
              </template>
                  <v-list-item color="ppmPlanTitleColor" to="kreditallgemein">
                      <v-list-item-icon></v-list-item-icon>
                      <v-list-item-title>Kredit allgemein</v-list-item-title>
                  </v-list-item>
                  <v-list-item color="ppmPlanTitleColor" to="hypotheken">
                      <v-list-item-icon></v-list-item-icon>
                      <v-list-item-title>Hypotheken</v-list-item-title>
                  </v-list-item>
                   <v-list-item color="ppmPlanTitleColor" to="spezial">
                      <v-list-item-icon></v-list-item-icon>
                      <v-list-item-title>Spezial</v-list-item-title>
                  </v-list-item>
          </v-list-group>
          
           <v-list-group prepend-icon="mdi-currency-eur">
              <template v-slot:activator>
                <v-list-item-title>Ertrag</v-list-item-title>
              </template>
                  <v-list-item color="ppmPlanTitleColor" to="??????????????">
                      <v-list-item-icon></v-list-item-icon>
                      <v-list-item-title>Kredit allgemein</v-list-item-title>
                  </v-list-item>
                  <v-list-item color="ppmPlanTitleColor" to="???????????????">
                      <v-list-item-icon></v-list-item-icon>
                      <v-list-item-title>Kredit allgemein</v-list-item-title>
                  </v-list-item>
            </v-list-group>

            <v-list-group prepend-icon="mdi-cash-multiple">
              <template v-slot:activator>
                <v-list-item-title>Kosten</v-list-item-title>
              </template>
                  <v-list-item color="ppmPlanTitleColor" to="?????????">
                      <v-list-item-icon></v-list-item-icon>
                      <v-list-item-title>Kredit allgemein</v-list-item-title>
                  </v-list-item>
                  <v-list-item color="ppmPlanTitleColor" to="????????????">
                      <v-list-item-icon></v-list-item-icon>
                      <v-list-item-title>Kredit allgemein</v-list-item-title>
                  </v-list-item>
            </v-list-group>

            <v-list-item
            color="ppmPlanTitleColor"
            to="topictemplate"
           >
              <v-list-item-icon>
                  <v-icon>mdi-account-hard-hat</v-icon>
              </v-list-item-icon>
              <v-list-item-title>Topic-Page-Template</v-list-item-title>
          </v-list-item>
          
        </v-list>
    
</template>

<script>
import { mapGetters } from 'vuex';

export default {
   name: "SideBarLinks",
    data(){
      return {
     
      }
  },
   computed: {
    ...mapGetters(['user']),
        
    
    // userItems(){
    //   let userItems= [];
    //   if (this.user){
    //     userItems = [
    //       { title: "Nachrichten", icon: "mdi-mailbox", route: "uc" },      
    //       { title: "Profil", icon: "mdi-account-circle", route: "profile" }
          
    //     ]
    //   }
    //   return userItems;
    // }
    
  },
  methods: {
    handleSignoutUser(){
      this.$store.dispatch('signoutUser');
    }
  }
}
</script>