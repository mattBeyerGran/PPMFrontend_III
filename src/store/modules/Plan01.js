// **********************************************
// *  Plan01: Geschäftsplan                     *
// *  Module: "Plan01.js"                       *
// **********************************************
import * as types from '../types';

const state = {
    
    PL01_PST01Row4Active: true, 
    PL01_PST01Row5Active: true, 

};
const getters = {
    [types.PL01PST01ROW04_ACTIVE]: state => {
        // eslint-disable-next-line no-console
        console.log(state.PL01_PST01Row5Active);
        return state.PL01_PST01Row4Active;
    },
    [types.PL01PST01ROW05_ACTIVE]: state => {
        // eslint-disable-next-line no-console
        console.log(state.PL01_PST01Row5Active);
        return state.PL01_PST01Row5Active;
    }
};
const mutations = {
    [types.PL01PST01ROW04_MUTATE_ACTIVE]: ( state ) => {
        state.PL01_PST01Row4Active = !state.PL01_PST01Row4Active;
    },
    [types.PL01PST01ROW05_MUTATE_ACTIVE]: ( state ) => {
        state.PL01_PST01Row5Active = !state.PL01_PST01Row5Active;
    }
};
const actions = {
    [types.PL01PST01ROW04_TOGGLE_ACTIVE]: ({ commit }) => {
        commit(types.PL01PST01ROW04_MUTATE_ACTIVE);
    },
    [types.PL01PST01ROW05_TOGGLE_ACTIVE]: ({ commit }) => {
        commit(types.PL01PST01ROW05_MUTATE_ACTIVE);
    }

};
export default {
    state,
    getters,
    mutations,
    actions
    
}