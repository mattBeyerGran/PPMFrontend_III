// **********************************************
// *  Plan01: Geschäftsplan                     *
// *  Module: "Plan01.js"                       *
// **********************************************
import * as types from '../types';

const state = {
    PL01_PST01RowActive: [ false, true, true], // Array Elements 0,1,2 of PST01 od PL01
    PL01_PST02RowActive: [ true, true, true],
   

};
const getters = {
    [types.PL01PST01ROW04_ACTIVE]: state => {
        return state.PL01_PST01RowActive[0];
    },
    [types.PL01PST01ROW05_ACTIVE]: state => {
        return state.PL01_PST01RowActive[1];
    }
};
const mutations = {
    [types.PL01PST01ROW04_MUTATE_ACTIVE]: (state, payload) => {
        state.PL01_PST01RowActive[payload] = false;
    },
    [types.PL01PST01ROW05_MUTATE_ACTIVE]: (state, payload) => {
        state.PL01_PST01RowActive[payload] = !state.PL01_PST01RowActive[payload];
    },
    toggleGoal: state => {
        state.PL01_PST01RowActive[0] = false;
    },
    toggleMatch: state => {
        state.PL01_PST01RowActive[1] = false;
    }
};
const actions = {
    [types.PL01PST01ROW04_TOGGLE_ACTIVE]: ({ commit }, payload) => {
        commit(types.PL01PST01ROW04_MUTATE_ACTIVE, payload);
    },
    [types.PL01PST01ROW05_TOGGLE_ACTIVE]: ({ commit }, payload) => {
        commit(types.PL01PST01ROW05_MUTATE_ACTIVE, payload);
    }

};
export default {
    state,
    mutations,
    actions,
    getters
}