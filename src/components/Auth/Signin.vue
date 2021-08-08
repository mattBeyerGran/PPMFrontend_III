<template>

<v-container > 
  <!-- Signin Form -->
  <v-card mb-12
   color="red">
 <v-container text-center class="form">
          <v-layout>
            <v-flex mt-2 xs12 sm6 offset-sm3>
              <v-card mp-6 color="white" width="400px" elevation="24">
                <v-container>
                  <v-form @submit.prevent="handleLoginUser"
                  >

                    <v-layout>
                      <v-flex xs12>
                        <v-text-field 
                          v-model="username" 
                          prepend-icon="mdi-face" 
                          label="Username" 
                          type="text" 
                          required
                        ></v-text-field>
                      </v-flex>
                    </v-layout>

                    <v-layout mb-2>
                      <v-flex xs12>
                        <v-text-field 
                          v-model="password"
                          prepend-icon="mdi-lock-open" 
                          label="Password" 
                          type="password" 
                          required
                          ></v-text-field>
                        
                      </v-flex>
                    </v-layout>

                    <v-layout mb-4 row>
                      <v-flex xs12>
                        <v-btn color="button" type="submit">Login</v-btn>
                      </v-flex>
                    </v-layout>

                  </v-form>
                </v-container>
              </v-card>
            </v-flex>
          </v-layout>
          </v-container>
  </v-card>
     
   
   </v-container>
   
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
        this.$router.push("/status");
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
.form {
  position: absolute;
  top: 300px;
}
// .img {
//   position: absolute;
//   left: 0px;
//   top: 0px;
//   z-index: -1;
// }


</style>