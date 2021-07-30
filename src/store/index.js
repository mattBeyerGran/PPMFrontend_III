import Vue from 'vue';
import Vuex from 'vuex';
import router from '../router/index';


import { defaultClient as apolloClient } from '../main';

import { 
  GET_USERS, GET_ME, GET_PATIENTS, GET_EMPLOYEES, GET_QUESTIONS, GET_VISITS
} from './queries';

import { 
  LOGIN_USER, CREATE_USER, UPDATE_USER, DELETE_USER, 
  CREATE_QUESTION, UPDATE_QUESTION, DELETE_QUESTION
} from './mutations';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    users: [],
    diseases: [],
    user: null,
    sideNav: false,
    loading: false,
    patients: [],
    employees: [],
    createUser: [],
    updateUser: [],
    deleteUser: [],
    question: null,
    questions:[],
    createQuestion: [],
    updateQuestion: [],
    deleteQuestion: [],
    chartData: [
    ['Year', 'Sales', 'Expenses', 'Profit'],
    ['2014', 1000, 400, 200],
    ['2015', 1170, 460, 250],
    ['2016', 660, 1120, 300],
    ['2017', 1030, 540, 350]
    ],
    visits:[],
  },
  mutations: {
    setUsers: (state, payload) => {
      state.users = payload;
    },
    setUser: (state, payload) => {
      state.user = payload;
    },
    setSideNav: (state, payload) => {
      state.sideNav = payload;
    },
    setLoading: (state, payload) => {
      state.loading = payload;
    },
    setDiseases: (state, payload) => { 
      state.diseases = payload; 
    },
    setPatients: (state, payload) => { 
      state.patients = payload; 
    },
    setEmployees: (state, payload) => { 
      state.employees = payload; 
    },
    setCreateUser: (state, payload) => { 
      state.createUser = payload; 
    },
    setUpdateUser: (state, payload) => { 
      state.updateUser = payload; 
    },
    setDeleteUser: (state, payload) => { 
      state.deleteUser = payload; 
    },
    setQuestion: (state, payload) => { 
      state.question = payload; 
    },
    setQuestions: (state, payload) => { 
      state.questions = payload; 
    },
    setCreateQuestion: (state, payload) => { 
      state.createQuestion = payload; 
    },
    setUpdateQuestion: (state, payload) => { 
      state.updateQuestion = payload; 
    },
    setDeleteQuestion: (state, payload) => { 
      state.deleteQuestion = payload; 
    },
    clearUser: state => (state.user = null),
    setCountPatients: ( state, payload) => {
      state.countPatients = payload;
    },
    setVisits: (state, payload) => {
      state.visits = payload;
    }
    
   

  },
  actions: {

  /* queries */

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
    users: ({ commit }) => {
      commit('setLoading', true);
      // use ApolloClient to fire users query
      apolloClient
        .query({
          query: GET_USERS
        }).then(({ data }) => {
            // Get data from actions to state via mutations
            // Commit passes data from actions along to mutation functions
            commit('setUsers', data.users);
            commit('setLoading', false);
            // eslint-disable-next-line no-console
            // console.log(data.users);
        }).catch(err => {
            commit('setLoading', false);
            // eslint-disable-next-line no-console
            console.error(err);
        });
    },
    patients:({ commit }) => {
      apolloClient
        .query({
          query: GET_PATIENTS
        }).then(({ data }) => {
          commit('setLoading', false);
          commit('setPatients', data.patients); 
          // eslint-disable-next-line no-console
         // console.log(data.patients);
          // eslint-disable-next-line no-console
          //console.log(data.patients.length);
        }).catch(err => {
          commit('setLoading', false);
          // eslint-disable-next-line no-console
          console.log(err);
        })
    },  
    employees:({ commit }) => {
      apolloClient
        .query({
          query: GET_EMPLOYEES
        }).then(({ data }) => {
          commit('setLoading', false);
          commit('setEmployees', data.employees);
          // eslint-disable-next-line no-console
          console.log(data.employees);
        }).catch(err => {
          commit('setLoading', false);
          // eslint-disable-next-line no-console
          console.log(err);
        })
    },
    questions: ({ commit }) => {
      commit('setLoading', true);
      // use ApolloClient to fire fragen query
      apolloClient
        .query({
          query: GET_QUESTIONS
        }).then(({ data }) => {
            // Get data from actions to state via mutations
            // Commit passes data from actions along to mutation functions
            commit('setQuestions', data.questions);
            commit('setLoading', false);
            // eslint-disable-next-line no-console
            // console.log(data.questions);
        }).catch(err => {
            commit('setLoading', false);
            // eslint-disable-next-line no-console
            console.log(err);
        });
    },
    visits: ({ commit }) => {
      commit('setLoading', true);
      // use ApolloClient to fire visits query
      apolloClient
        .query({
          query: GET_VISITS
        }).then(({ data }) => {
            // Get data from actions to state via mutations
            // Commit passes data from actions along to mutation functions
            commit('setVisits', data.visits);
            commit('setLoading', false);
            // eslint-disable-next-line no-console
            console.log('hello: ' + data.visits.id);
        }).catch(err => {
            commit('setLoading', false);
            // eslint-disable-next-line no-console
            console.log(err);
        });
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
    },
    // eslint-disable-next-line no-unused-vars
    createUser: ({ commit }, payload ) => {
      apolloClient
        .mutate({
          mutation: CREATE_USER,
          variables: payload
        }).then(({ data }) => {
          // eslint-disable-next-line no-console
          console.log(data);
        }).catch(err => {
          // eslint-disable-next-line no-console
          console.log(err);
        })
    },
    // eslint-disable-next-line no-unused-vars
    updateUser: ({ commit }, payload ) => {
      apolloClient
        .mutate({
          mutation: UPDATE_USER,
          variables: payload
        }).then(({ data }) => {
          // eslint-disable-next-line no-console
          console.log(data);
        }).catch(err => {
          // eslint-disable-next-line no-console
          console.log(err);
        })
    },
    // eslint-disable-next-line no-unused-vars
    deleteUser: ({ commit }, payload ) => {
      apolloClient
        .mutate({
          mutation: DELETE_USER,
          variables: payload
        }).then(({ data }) => {
          // eslint-disable-next-line no-console
          console.log(data);
        }).catch(err => {
          // eslint-disable-next-line no-console
          console.log(err);
          // eslint-disable-next-line no-console
          console.log(payload);
        })
    },
    // eslint-disable-next-line no-unused-vars
    createQuestion: ({ commit }, payload ) => {
      apolloClient
        .mutate({
          mutation: CREATE_QUESTION,
          variables: payload
        }).then(({ data }) => {
          // eslint-disable-next-line no-console
          console.log('mutation "createQuestion"', data);
        }).catch(err => {
          // eslint-disable-next-line no-console
          console.log('mutation "createQuestion"', err);
        })
    },
    // eslint-disable-next-line no-unused-vars
    updateQuestion: ({ commit }, payload ) => {
      apolloClient
        .mutate({
       mutation: UPDATE_QUESTION,
          variables: payload
        }).then(({ data }) => {
          // eslint-disable-next-line no-console
          console.log(data);
        }).catch(err => {
          // eslint-disable-next-line no-console
          console.log(err);
        })
    },
    // eslint-disable-next-line no-unused-vars
    deleteQuestion: ({ commit }, payload ) => {
      apolloClient
        .mutate({
          mutation: DELETE_QUESTION,
          variables: payload
        }).then(({ data }) => {
          // eslint-disable-next-line no-console
          console.log('mutation "deleteQuestion"', data);
        }).catch(err => {
          // eslint-disable-next-line no-console
          console.log('mutation "deleteQuestion"', err);
          // eslint-disable-next-line no-console
          console.log(payload);
        })
    },
    sideNavToggle: (context) => {
      var sideNavToggle = context.state.sideNav
      sideNavToggle = !sideNavToggle
      context.commit('setSideNav', sideNavToggle);
    }


  },
  modules: {
  },
  getters: {
    users: state => state.users,
    user: state => state.user,
    loading: state => state.loading,
    sideNav: state => state.sideNav,
    diseases: state => state.diseases,
    patients: state => state.patients,
    employees: state => state.employees,
    createUser: state => state.createUser,
    updateUser: state => state.updateUser,
    deleteUser: state => state.deleteUser,
    questions: state => state.questions,
    question: state => state.question,
    createQuestion: state => state.createQuestion,
    updateQuestion: state => state.updateQuestion,
    deleteQuestion: state => state.deleteQuestion,
    visits: state => state.visits,
    chartData: state => state.chartData,
    
  }
})
