<template>
    <v-app  id="Hintergrund">
      <div class="main-content " >
          <Navigation title="BayernPS - Integrierte Planung" />
        
        <main id="Main">
          <v-container  >
            <router-view/>     
          </v-container>
        </main>
      </div>
      

      <FootBar/>
    </v-app>
    
</template>

<script>
import Navigation from  '@/components/TheNavigation'
import FootBar from  '@/components/TheFootBar'


export default {
  name: "App",
  data(){
    return {
     
    }
  },
  components: {
    Navigation,
    FootBar
  },
  
}
</script>

<style lang="scss">

.topmargin{
  margin: 40px;
}
.main-content{
  background-color: #354A5F


;
  flex-grow: 1;
}




</style>