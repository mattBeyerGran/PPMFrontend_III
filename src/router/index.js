import Vue from 'vue'
import VueRouter from 'vue-router'


/* ROOT */
import Status from '../AppPages/Analytics/PlanungsStatus.vue'

/* USER */
import Profil from '../components/Auth/Profile.vue'
import Signin from '../components/Auth/Signin.vue'

/* Plan Sheets */
import KreditAllgemein from '../AppPages/PlanSheetPages/PL01_PS01_KreditAllgemein.vue'
import Hypotheken from '../AppPages/PlanSheetPages/PL01_PS02_Hypotheken.vue'
import Spezial from '../AppPages/PlanSheetPages/PL01_PS03_Spezial.vue'

// Test Pages
import StoreTest from '../AppPages/TestPages/StoreTest.vue'

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
  },
  
   // Test Pages
   {
    path: '/storetest',
    name: 'storetest',
    component: StoreTest
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
