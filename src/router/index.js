import Vue from 'vue'
import VueRouter from 'vue-router'


/* ROOT */
// import Home from '../components/Home.vue'
import UnderConstruction from '../components/UnderConstruction.vue'
import Dashboard from '../components/Analytics/Dashboard.vue'
import Status from '../components/Analytics/Status.vue'
import TopicPageTemplate from '../components/TopicPage/TopicPageTemplate.vue'

/* USER */
import Profil from '../components/Auth/Profile.vue'
import Signin from '../components/Auth/Signin.vue'

/* TEILPLAN */
import Patienten from '../components/Anwendungen/Patienten.vue'
import Mitarbeiter from '../components/Anwendungen/Mitarbeiter.vue'
import Visiten from '../components/Anwendungen/Visiten.vue'
import Ertrag from '../components/Anwendungen/Ertragsplanung.vue'
import NeueVisite from '../components/Anwendungen/NeueVisite.vue'
import Geschaeft from '../components/Anwendungen/Geschaeftsplanung.vue'





Vue.use(VueRouter)


const routes = [
  // ROOT
  {
    path: '/',
    name: 'login',
    component: Signin
  },{
    path: '/status',
    name: 'status',
    component: Status
  },
  {
    path: '/Dashboard',
    name: 'Dashboard',
    component: Dashboard
  },
  {
    path: '/uc',
    name: 'uc',
    component: UnderConstruction
  },
  {
    path: '/topictemplate',
    name: 'topictemplate',
    component: TopicPageTemplate
  },
  //  PLAENE 
  {
    path: '/visiten',
    name: 'visiten',
    component: Visiten
  },
  {
    path: '/neueVisite',
    name: 'neueVisite',
    component: NeueVisite
  },
  {
    path: '/geschaeft',
    name: 'geschaeft',
    component: Geschaeft
  },
  {
    path: '/ertrag',
    name: 'ertrag',
    component: Ertrag
  },
  {
    path: '/patienten',
    name: 'patienten',
    component: Patienten,
    beforeEnter: (to, from, next) => {
      // eslint-disable-next-line no-console
      console.log('inside Patienten route');  
      next();
    }
  },
  {
    path: '/mitarbeiter',
    name: 'mitarbeiter',
    component: Mitarbeiter
  },
  
  
  // USER
  {
    path: '/profile',
    name: 'profile',
    component: Profil
  },
  {
    path: '/login',
    name: 'login',
    component: Signin
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
