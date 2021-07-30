<template>


<!-- <v-img src="@/assets/img/KOPERNIKUS.png" 
  
  alt=""
     > -->


  <!-- Signin Form -->
  <div align="center" class="pos">
 <!-- <v-container text-center  class="form" > -->
       
              <v-card 
                color="white"
                elevation="24"
                width="400"
                
                >
                <v-container>
                  <v-form @submit.prevent="handleLoginUser"
                  >

                        <v-text-field 
                          v-model="username" 
                          prepend-icon="mdi-face" 
                          label="Username" 
                          type="text" 
                          required
                        ></v-text-field>
                     
                        <v-text-field 
                          v-model="password"
                          prepend-icon="mdi-lock-open" 
                          label="Password" 
                          type="password" 
                          required
                          ></v-text-field>
                    
                        <v-btn color="button" type="submit">Login</v-btn>
                   
                  </v-form>
                </v-container>
              </v-card>
          
      <!-- </v-container> -->

  </div>

<!-- </v-img> -->

 
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: "Signin",
  data(){
    return {
      username: '',
      password: '',
      
    }
  },
  computed:{
    ...mapGetters(['user'])
  },
  watch:{
    user(value){
      // if user value changes, redirect to home page
      if (value) {
        this.$router.push("/dashboard");
      }
    }
  },
  methods: {
    handleLoginUser(){
      this.$store.dispatch('loginUser', {
        data:{
          email: this.username, 
          password:this.password
        } 
      })
    }
    
    
  }
}

</script>
  

<style lang="scss">

.pos{
  position: relative;
  top: 500px;
  
}



</style>