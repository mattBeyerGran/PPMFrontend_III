<template>
   <div>
     <!-- Horizotal Navbar -->
      <v-app-bar clipped-left v-if="this.user" app fixed color="ppmTopBarColor">
        <!-- App Title -->
        <v-app-bar-nav-icon v-if="this.user" @click="toggleSideNav" color="ppmTopBarTextColor"></v-app-bar-nav-icon>
        <v-toolbar-title class="hidden-xs-only">
          <router-link v-if="this.user" to="/status" tag="span" style="cursor: pointer">
              <img class="mt-3 ml-3" src="../../assets/img/bayern-logo.png" alt="" width="120">
          </router-link>
          <router-link v-else to="/login" tag="span" style="cursor: pointer">
              <img class="mt-3 ml-3" src="../../assets/img/bayern-logo.png" alt="" width="120">
          </router-link>
        </v-toolbar-title>
        <v-spacer></v-spacer>
        <!-- Title -->
        <div class="d-none d-lg-block display-1 font-weight-thin hidden-xs-only ppmTopBarTextColor--text" >{{ title }}</div>
        <v-spacer></v-spacer>
        <!-- navBarItems -->
         <v-btn v-if="this.user" text to="/status" color="ppmTopBarTextColor" >
          <v-icon left>mdi-view-dashboard</v-icon>
        </v-btn>
         <v-btn v-if="this.user" text to="/profile" color="ppmTopBarTextColor" >
          <v-icon left>mdi-account-circle</v-icon>
        </v-btn>

      
        <v-btn v-if="this.user" @click="handleSignoutUser" text color="ppmTopBarTextColor" >
          <v-icon left>mdi-logout</v-icon>
          Logout
        </v-btn>
        
      </v-app-bar>
     
   </div>   
</template>

<script>
// import SideBarLinks from  '@/components/TheSideBarLinks'
import { mapGetters } from 'vuex';
// import TheSideBar from './TheSideBar.vue';


export default {
  name: "TheNavigation",
  props: {
    title: {
      type: String,
      required: true
    }
  },
  data(){
    return {
      sideNav: false  
       }
  },
  components: {
    // TheSideBar,
    // SideBarLinks
  },
  computed: {
    ...mapGetters(['user']),
    
    
  },
  methods: {
    handleSignoutUser(){
      this.$store.dispatch('signoutUser');
    },
    toggleSideNav(){
      this.sideNav = !this.sideNav;
    }
  }
}
</script>