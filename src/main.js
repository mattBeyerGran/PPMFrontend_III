import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/store'
import vuetify from './plugins/vuetify';
import DatetimePicker from 'vuetify-datetime-picker'

import ApolloClient from 'apollo-boost';
import VueApollo from 'vue-apollo';


import mbgPlanHead from './components/PlanSheet/PlanHead.vue'
import mbgPlanSheetToolBar from './components/PlanSheet/PlanSheetToolBar.vue'
import mbgTableHeaderMonate from './components/PlanSheet/TableHeaderMonate.vue'
import mbgTableHeaderQuartale from './components/PlanSheet/TableHeaderQuartale.vue'
import mbgTableHeader5Jahre from './components/PlanSheet/TableHeader5Jahre.vue'
import mbgBasisRow from './components/PlanSheet/Rows/BasisRow.vue'
import mbgGoalRow from './components/PlanSheet/Rows/GoalRow.vue'
import mbgDivider from './components/PlanSheet/Rows/DividerRow.vue'
import mbgValueField from './components/PlanSheet/Fields/ValueField.vue'


Vue.component('my-plan-head', mbgPlanHead);
Vue.component('my-plan-sheet-tool-bar', mbgPlanSheetToolBar);
Vue.component('my-table-header-monate', mbgTableHeaderMonate);
Vue.component('my-table-header-quartale', mbgTableHeaderQuartale);
Vue.component('my-table-header-5jahre', mbgTableHeader5Jahre);
Vue.component('my-basis-row', mbgBasisRow);
Vue.component('my-goal-row', mbgGoalRow);
Vue.component('my-divider', mbgDivider);
Vue.component('my-value-field', mbgValueField);



/* import VueGoogleCharts from 'vue-google-charts' */

Vue.use(VueApollo, DatetimePicker, /* VueGoogleCharts */);

// Setup ApolloClient
export const defaultClient = new ApolloClient({
  
   uri: 'https://carecon-node-api.herokuapp.com/' ,
  // uri: 'http://localhost:4000',
  // include auth token with requests made to backend
  fetchOptions: {
    credentials: 'include'
  },
  request: operation => {
    // if no token with key of 'token' in localStorage, add it
    if (!localStorage.token){
      localStorage.setItem('token','');
    }

    // operation adds the token to an authorization header, which is sent to backend
    operation.setContext({
      headers: {
        authorization: localStorage.getItem('token')
      }
    })
  },
  onError: ({ graphQLErrors, networkError}) => {
    if(networkError){
      // eslint-disable-next-line no-console
      console.log("[networkError]", networkError);
    }
    if(graphQLErrors){
      for(let err of graphQLErrors){
        // eslint-disable-next-line no-console
        console.dir(err);
      }
    }
  }
});

const apolloProvider = new VueApollo({defaultClient});

Vue.config.productionTip = false

new Vue({
  apolloProvider,
  router,
  store,
  vuetify,
  render: h => h(App),
  created(){
    // execute me query
    this.$store.dispatch('me');
  }
}).$mount('#app')
