import Vue from 'vue';
import Vuex from 'vuex';
import router from '../router/index';
import Plan01 from './modules/Plan01';
import Plan02 from './modules/Plan02';


import { defaultClient as apolloClient } from '../main';

import { 
  GET_ME
} from './queries';

import { 
  LOGIN_USER
} from './mutations';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: null,
    plannerName01: "Bernd von Staa",
    plannerRole01: "Country Manager",
    
    
   },

  getters: {
    user: state => state.user,
    loading: state => state.loading,
    sideNav: state => state.sideNav,
    plannerName: state => {
      return state.plannerName01;
    },
    plannerRole: state => {
      return state.plannerRole01;
    }
  },
  mutations: {
   
    setUser: (state, payload) => {
      state.user = payload;
    },
    setSideNav: (state, payload) => {
      state.sideNav = payload;
    },
    setLoading: (state, payload) => {
      state.loading = payload;
    }
  },
  actions: {
    me: ({ commit }) => {
      commit('setLoading', true);
      apolloClient.query({
        query: GET_ME
      }).then(({data}) => {
        commit('setLoading', false);
        // add user data to state
        commit('setUser', data.me)
        // eslint-disable-next-line no-console
        // console.log(data.me);
      }).catch(err => {
        commit('setLoading', false);
        // eslint-disable-next-line no-console
        console.error(err);
      })
    },

  /* mutations */

    // eslint-disable-next-line no-unused-vars
    loginUser: ({ commit }, payload ) => {
      apolloClient
        .mutate({
          mutation: LOGIN_USER,
          variables: payload
        }).then(({ data }) => {
            localStorage.setItem("token", data.login.token);
            router.go();
        }).catch(err => {
          // eslint-disable-next-line no-console
          console.log(err);
        })
    },
    signoutUser: async ({ commit }) => {
      // clear the user in state
      commit('clearUser');
      // remove the token in local storage
      localStorage.setItem('token', '');
      // end session
      await apolloClient.resetStore();
      // redirect user
      router.push('/');
    }
   
  },
  modules: {
    Plan01,
    Plan02
  }
});
