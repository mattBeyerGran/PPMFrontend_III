<template>
<v-app  id="Hintergrund">
        <Navigation title="BayernPS - Integrierte Planung" />                          
        <!-- <SideBar /> -->
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
// import SideBar from  '@/components/Navigation/TheSideBar'

export default {
  name: "App",
  data(){
    return {
     
    }
  },
  components: {
    Navigation,
    FootBar,
    // SideBar
  },
  
}
</script>

<style lang="scss">

.topmargin{
  margin-top: 35px;
}
.bottommargin{
  margin-bottom: 35px;
}
.leftmargin{
  margin-left: 200px;
  
}
.rightmargin{
  margin-right: 150px;
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