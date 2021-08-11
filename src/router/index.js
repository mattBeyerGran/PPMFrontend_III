import Vue from 'vue'
import VueRouter from 'vue-router'


/* ROOT */
import Status from '../AppPages/Analytics/PlanungsStatus.vue'

/* USER */
import Profil from '../components/Auth/Profile.vue'
import Signin from '../components/Auth/Signin.vue'

/* Plan Sheets */
import KreditAllgemein from '../AppPages/Plan01/PlanSheet01/01-01-KreditAllgemein.vue'
import Hypotheken from '../AppPages/Plan01/PlanSheet02/01-02-Hypotheken.vue'
import Spezial from '../AppPages/Plan01/PlanSheet03/01-03-SpezialKredit.vue'

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
  //  PLAENE 
  {
    path: '/kreditallgemein',
    name: 'kreditallgemein',
    component: KreditAllgemein
  },
  {
    path: '/hypotheken',
    name: 'hypotheken',
    component: Hypotheken
  },
  {
    path: '/spezial',
    name: 'spezial',
    component: Spezial
  },
  
  
  // USER
  {
    path: '/profile',
    name: 'profile',
    component: Profil
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
