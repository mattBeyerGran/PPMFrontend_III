// **********************************************
// *  Plan01: Hypotheken                        *
// *  Module: "Plan02.js"                       *
// **********************************************
import * as types from '../types';

const state = {
    
 // Row Active Status
 PL01_PST01_Row4_Active: false, 
 PL01_PST01_Row5_Active: false, 
 PL01_PST01_Row6_Active: false, 
 PL01_PST01_Row8_Active: false, 
 PL01_PST01_Row9_Active: false,    

// Plan02 Sheet01 - Hypotheken - Bestandsplanung
Data_0201: [],

// Plan02 Parameter - Hypotheken - Bestandsplanung (Parameter sind uebergreifend fuer alle Sheets)
    Parameter_02: [
        ['ParameterID', 'Value', 'Unit', 'Name', 'Description'],
        ['PL01_Par01', 210, 'Mio. Euro', 'Vorjahresmonat', 'Startwert fuer die Bestandsberechnung']
    ] 
};
// getters
const getters = {
    [types.Get_01_01_ROW04_ACTIVE]: state => {
        return state.PL01_PST01_Row4_Active;
    },
    [types.Get_01_01_ROW05_ACTIVE]: state => {
        return state.PL01_PST01_Row5_Active;
    },
    [types.Get_01_01_ROW06_ACTIVE]: state => {
        return state.PL01_PST01_Row6_Active;
    },
    [types.Get_01_01_ROW08_ACTIVE]: state => {
        return state.PL01_PST01_Row8_Active;
    },
    [types.Get_01_01_ROW09_ACTIVE]: state => {
        return state.PL01_PST01_Row9_Active;
    }
};
// actions
const actions = {
    [types.PL01PST01ROW04_TOGGLE_ACTIVE]: ({ commit } ) => {
        commit(types.PL01PST01ROW04_MUTATE_ACTIVE);
    },
    [types.PL01PST01ROW05_TOGGLE_ACTIVE]: ({ commit }) => {
        commit(types.PL01PST01ROW05_MUTATE_ACTIVE);
    }

};
// mutations
const mutations = {
    [types.PL01PST01ROW04_MUTATE_ACTIVE]: ( state ) => {
        state.PL01_PST01_Row4_Active = !state.PL01_PST01_Row4_Active;
        state.PL01_PST01_Row5_Active = !state.PL01_PST01_Row5_Active;
       
    },
    [types.PL01PST01ROW05_MUTATE_ACTIVE]: ( state ) => {
        state.PL01_PST01_Row6_Active = !state.PL01_PST01_Row6_Active;
       
    },
    [types.PL01PST01ROW06_MUTATE_ACTIVE]: ( state ) => {
        state.PL01_PST01_Row8_Active = !state.PL01_PST01_Row8_Active;
        state.PL01_PST01_Row9_Active = !state.PL01_PST01_Row9_Active;   
    }
};
export default {
    state,
    getters,
    mutations,
    actions    
}