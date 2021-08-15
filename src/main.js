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
import mbgMatchRow from './components/PlanSheet/Rows/MatchRow.vue'
import mbgPlanRow from './components/PlanSheet/Rows/PlanRow.vue'
import mbgPlanRowExtern from './components/PlanSheet/Rows/PlanRowExtern.vue'
import mbgGlobalRow from './components/PlanSheet/Rows/GlobalRow.vue'
import mbgCalcRow from './components/PlanSheet/Rows/CalcRow.vue'
import mbgDivider from './components/PlanSheet/Rows/DividerRow.vue'
import mbgEmptyRow from './components/PlanSheet/Rows/EmptyRow.vue'
import mbgEmptyRow4 from './components/PlanSheet/Rows/EmptyRow4.vue'
import mbgTitleRow from './components/PlanSheet/Rows/TitleRow.vue'
import mbgTitleRow4 from './components/PlanSheet/Rows/TitleRow4.vue'
import mbgValueField from './components/PlanSheet/Fields/ValueField.vue'
import mbgPlanField from './components/PlanSheet/Fields/PlanField.vue'
import mbgResultField from './components/PlanSheet/Fields/ResultField.vue'


Vue.component('my-plan-head', mbgPlanHead);
Vue.component('my-plan-sheet-tool-bar', mbgPlanSheetToolBar);
Vue.component('my-table-header-monate', mbgTableHeaderMonate);
Vue.component('my-table-header-quartale', mbgTableHeaderQuartale);
Vue.component('my-table-header-5jahre', mbgTableHeader5Jahre);
Vue.component('my-basis-row', mbgBasisRow);
Vue.component('my-goal-row', mbgGoalRow);
Vue.component('my-match-row', mbgMatchRow);
Vue.component('my-plan-row', mbgPlanRow);
Vue.component('my-plan-row-extern', mbgPlanRowExtern);
Vue.component('my-global-row', mbgGlobalRow);
Vue.component('my-calc-row', mbgCalcRow);
Vue.component('my-divider', mbgDivider);
Vue.component('my-empty-row', mbgEmptyRow);
Vue.component('my-empty-row4', mbgEmptyRow4);
Vue.component('my-title-row', mbgTitleRow);
Vue.component('my-title-row4', mbgTitleRow4);
Vue.component('my-value-field', mbgValueField);
Vue.component('my-plan-field', mbgPlanField);
Vue.component('my-result-field', mbgResultField);



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
