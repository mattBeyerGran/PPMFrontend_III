<template>
  <!-- <v-navigation-drawer v-if="this.user" temporary fixed app clipped v-model="sideNav" height="100vh"  color="ppmDrawerColor"> -->
    <v-navigation-drawer v-if="this.user" app clipped height="100vh" permanent color="ppmDrawerColor">
        <v-list shaped>
           <v-header v-if="this.user"><strong><span class="ppmDarkTextColor--text ml-4">Planungsthemen</span></strong></v-header>
           <v-list-item
            color="ppmPlanTitleColor"
            to="status"
           >
              <v-list-item-icon>
                  <v-icon>mdi-chart-sankey-variant</v-icon>
              </v-list-item-icon>
              <v-list-item-title>Status</v-list-item-title>
          </v-list-item>

          <v-list-group prepend-icon="mdi-handshake-outline">
              <template v-slot:activator>
                <v-list-item-title>Geschäft</v-list-item-title>
              </template>
          <v-list-item
            color="ppmPlanTitleColor"
            to="geschaeft"
           >
              <v-list-item-icon>
                   
              </v-list-item-icon>
              <v-list-item-title>Kredit allgemein</v-list-item-title>
              
          </v-list-item>
          </v-list-group>
          <v-list-item-group color="ppmPlanTitleColor">
           
            <v-list-item
              v-for="item in appItems"
              :key="item.title"
              :color="item.color"          
              link
              :to="item.route"
            >
              <v-list-item-icon>
                <v-icon >{{ item.icon }}</v-icon>
              </v-list-item-icon>

              <v-list-item-content >
                <v-list-item-title >{{ item.title }}</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list-item-group>
        </v-list>
    </v-navigation-drawer >
</template>

<script>
import { mapGetters } from 'vuex';

export default {
   name: "TheSideBar",
    data(){
      return {
      sideNav: false
      }
  },
   computed: {
    ...mapGetters(['user']),
        appItems(){
      let appItems = [];
      if (this.user){
        appItems = [
          
          { title: "Geschäftsplanung", icon: "mdi-handshake-outline", iconcolor: "ppmPlanTitleColor", color: "ppmPlanTitleColor", route: "geschaeft" },
          { title: "Ertragsplanung", icon: "mdi-currency-eur", iconcolor: "ppmPlanTitleColor", color: "ppmPlanTitleColor", route: "ertrag" },           
          { title: "Kostenplanung", icon: "mdi-cash-multiple", iconcolor: "ppmPlanTitleColor", color: "ppmPlanTitleColor", route: "kosten" },
         
          { title: "Topic-Page-Template", icon: "mdi-account-hard-hat", iconcolor: "ppmPlanTitleColor", color: "ppmPlanTitleColor", route: "topictemplate" }
        ]
      }
      return appItems;
    },
    
    userItems(){
      let userItems= [];
      if (this.user){
        userItems = [
          { title: "Nachrichten", icon: "mdi-mailbox", route: "uc" },      
          { title: "Profil", icon: "mdi-account-circle", route: "profile" }
          
        ]
      }
      return userItems;
    }
    
  },
  methods: {
    handleSignoutUser(){
      this.$store.dispatch('signoutUser');
    },
  }
}
</script>