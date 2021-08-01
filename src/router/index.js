import Vue from 'vue'
import VueRouter from 'vue-router'


/* ROOT */
import Status from '../AppPages/Analytics/PlanungsStatus.vue'
import TopicPageTemplate from '../components/TopicPages/TopicPageTemplate.vue'

/* USER */
import Profil from '../components/Auth/Profile.vue'
import Signin from '../components/Auth/Signin.vue'

/* Plan Sheets */
import KreditAllgemein from '../AppPages/PlanSheetPages/KreditAllgemein.vue'










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
    path: '/kreditallgemein',
    name: 'kreditallgemein',
    component: KreditAllgemein
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
