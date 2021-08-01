import Vue from 'vue'
import VueRouter from 'vue-router'


/* ROOT */
import Status from '../AppPages/Analytics/PlanungsStatus.vue'
import TopicPageTemplate from '../components/TopicPages/TopicPageTemplate.vue'

/* USER */
import Profil from '../components/Auth/Profile.vue'
import Signin from '../components/Auth/Signin.vue'

/* TEILPLAN */

import Geschaeft from '../components/TopicPages/Geschaeftsplanung.vue'
import KreditAllgemein from '../components/TopicPages/PlanSheets/KreditAllgemein.vue'
import Ertrag from '../components/TopicPages/Ertragsplanung.vue'
import Kosten from '../components/TopicPages/Kostenplanung.vue'
import RWA from '../components/TopicPages/RWAplanung.vue'







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
    path: '/topictemplate',
    name: 'topictemplate',
    component: TopicPageTemplate
  },
  //  PLAENE 
  {
    path: '/geschaeft',
    name: 'geschaeft',
    component: KreditAllgemein
  },
  {
    path: '/kreditallgemein',
    name: 'kreditallgemein',
    component: Geschaeft
  },
  {
    path: '/ertrag',
    name: 'ertrag',
    component: Ertrag
  },
  {
    path: '/kosten',
    name: 'kosten',
    component: Kosten
  },
  {
    path: '/rwa',
    name: 'rwa',
    component: RWA
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
