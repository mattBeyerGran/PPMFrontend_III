 
<template>
  <v-container>
    <div align="left" class="mt-12 text-center">
        <TabMenue PlanTopic="Ertragsplanung" />  
      <img src="@/assets/under-construction.png"/>
    </div>
  </v-container>
</template>

<script>
export default {
  name: "PlanSheet",
  props: {
    title: {
      type: String,
      required: true
    }
  },
}
</script>

<style>

</style>

import SideBarLinks from  '@/components/TheSideBarLinks'
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
    SideBarLinks
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