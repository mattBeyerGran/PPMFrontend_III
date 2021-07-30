<template>
  <!-- Fußzeile -->
      <v-footer app v-if="this.user" color="ppmFooterColor" height="40" fixed class="mt-1 ppmFooterTextColor--text">
        <p >
          &copy;{{ new Date().getFullYear() }} — msg global solutions</p>
        <v-spacer></v-spacer>

        <v-btn class="mb-2 ppmFooterTextColor--text" text x-small  to="/uc">About</v-btn
        >
        <v-btn text  x-small  class="mb-2 ppmFooterTextColor--text" to="/uc">Contact</v-btn>
        
        <v-spacer></v-spacer>
        
        
      </v-footer>
      
</template>
<script>
import { mapGetters } from 'vuex';
export default {
  name: "TheFootBar",
  data(){
    return {
        
    }
  },
  computed: {
    ...mapGetters(['user']),
    
    
  },
}
</script>

