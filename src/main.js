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
import mbgRow from './components/PlanSheet/Rows/Row.vue'

import mbgDivider from './components/PlanSheet/Rows/DividerRow.vue'

import ppmPlanField from './components/PlanSheet/Fields/ppmPlanField.vue'
import ppmPlanField2 from './components/PlanSheet/Fields/ppmPlanField2.vue'
import mbgPS1030ResultField from './components/PlanSheet/Fields/PS0103ResultField.vue'
import ppmElementField from './components/PlanSheet/Fields/ppmElementField.vue'
import ppmTitleField from './components/PlanSheet/Fields/ppmTitleField.vue'
import ppmValueField from './components/PlanSheet/Fields/ppmValueField.vue'
import ppmCopyField from './components/PlanSheet/Fields/ppmCopyField.vue'
import ppmActionField from './components/PlanSheet/Fields/ppmActionField.vue'
import ppmChart from './components/PlanSheet/Fields/ppmChart.vue'

Vue.component('my-plan-head', mbgPlanHead);
Vue.component('my-plan-sheet-tool-bar', mbgPlanSheetToolBar);
Vue.component('my-row', mbgRow);

Vue.component('my-divider', mbgDivider);

Vue.component('my-ppm-plan-field', ppmPlanField); 
Vue.component('my-ppm-plan-field2', ppmPlanField2);
Vue.component('my-ps0103-result-field', mbgPS1030ResultField);
Vue.component('my-ppm-element-field', ppmElementField);
Vue.component('my-ppm-title-field', ppmTitleField);
Vue.component('my-ppm-value-field', ppmValueField);
Vue.component('my-ppm-copy-field', ppmCopyField);
Vue.component('my-ppm-action-field', ppmActionField);
Vue.component('my-ppm-chart', ppmChart);

import VueGoogleCharts from 'vue-google-charts'

Vue.use(VueApollo, DatetimePicker, VueGoogleCharts);

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
    // eslint-disable-next-line no-console
    console.log('created');
  }
}).$mount('#app')
