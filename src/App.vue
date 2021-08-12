<template>
<v-app  id="Hintergrund">
        <Navigation title="BayernPS - Integrierte Planung" />                          
        <main  >
          <v-container  >
            <router-view/>     
          </v-container>
        </main>
        <FootBar/>     
    </v-app>   
</template>

<script>
import Navigation from  '@/components/Navigation/TheNavigation'
import FootBar from  '@/components/Navigation/TheFootBar'


export default {
  name: "App",
  data(){
    return {
      activeColor: '',
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
  margin-top: 35px;
}

.testmargin{
  margin-top: 100px;
}
.bottommargin{
  margin-bottom: 35px;
}
.leftmargin{
  margin-left: 200px;
  
}
.rightmargin{
  margin-right: 0px;
}
.main-content{
  background-color: #EAEAEA;
  flex-grow: 1;
}
#Hintergrund{
  background-image: url("./assets/img/Kopernikus.jpg");
  background-repeat: no-repeat;
  background-size: cover;
}

</style>