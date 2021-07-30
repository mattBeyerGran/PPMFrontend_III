<template>
  <v-navigation-drawer v-if="this.user" temporary fixed app clipped v-model="sideNav" height="100vh"  color="ppmDrawerColor">
    <!-- <v-navigation-drawer v-if="this.user" app clipped height="100vh" permanent color="ppmDrawerColor"> -->
        <v-list shaped>
          <v-list-item-group color="ppmPlanTitleColor">
            <v-subheader v-if="this.user"><strong><span class="ppmDarkTextColor--text">Planungsthemen</span></strong></v-subheader>
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
          { title: "Status", icon: "mdi-chart-sankey-variant", iconcolor: "ppmPlanTitleColor", color: "ppmPlanTitleColor", route: "status" },
          { title: "Geschäftsplanung", icon: "mdi-file-find", iconcolor: "ppmPlanTitleColor", color: "ppmPlanTitleColor", route: "geschaeft" },
          { title: "Ertragsplanung", icon: "mdi-certificate", iconcolor: "ppmPlanTitleColor", color: "ppmPlanTitleColor", route: "ertrag" },           
          { title: "Kostenplanung", icon: "mdi-hospital-box", iconcolor: "ppmPlanTitleColor", color: "ppmPlanTitleColor", route: "patienten" },
          { title: "RWA-Planung", icon: "mdi-doctor", iconcolor: "ppmPlanTitleColor", color: "ppmPlanTitleColor", route: "mitarbeiter" }
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