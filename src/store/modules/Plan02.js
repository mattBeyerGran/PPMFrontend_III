// **********************************************
// *  Plan01: Geschäftsplan                     *
// *  Module: "Plan01.js"                       *
// **********************************************
import * as types from '../types';

const state = {
    
    

// Sheet01 - Allgemeine Kredite - Bestandsplanung
    // Row-Master Data
    PL01_PST01: [
        ['RowID', 'Type', 'PlanItem', 'Text', 'Unit', 'Edit', 'Goal', 'Match', 'Active'],
        ['01_01_01', 'TitleRow', '', 'Bestandsveraenderung in Mio.', 'Euro', '', '', '', true ],
        ['01_01_02', 'CalcRow', '', 'Anfangsbestand', 'Euro', '', '', '', true ],
        ['01_01_03', 'PlanRow', '27', 'Zugang', 'Euro', '', '', '', true ],
        ['01_01_04', 'GoalRow', '', 'Vorgabe', 'Euro', '', '', '', false],
        ['01_01_05', 'GoalRow', '', 'Ziel', 'Euro', '', '', '', true ],
        ['01_01_06', 'MatchRow', '42', '(1:1) Match', 'Euro', '', '', '', false],
        ['01_01_07', 'PlanRow', '34', 'Abgang', 'Euro', '', '', '', true ],
        ['01_01_08', 'GoalRow', '', 'Vorgabe', 'Euro', '', '', '', false ],
        ['01_01_09', 'GoalRow', '', 'Ziel', 'Euro', '', '', '', false ],
        ['01_01_10', 'CalcRow', '', 'Endbestand', 'Euro', '', '', '', true ],
        ['01_01_11', 'DividerRow', '', '', '', '', '', '', true ],
        ['01_01_12', 'TitleRow', '', 'Weitere Informationen', '', '', '', '', true ],
        ['01_01_13', 'PlanRowExtern', '', 'Kundenzuwachs', '%', '', '', '', true ],
        ['01_01_14', 'GlobalRow', '', 'Bestands-Forecast', 'Euro', '', '', '', true ],
        ['01_01_15', 'EmptyRow', '', '', '', '', '', '', true ],
    ],
    // Row Active Status
        PL01_PST01_Row4_Active: false, 
        PL01_PST01_Row5_Active: false, 
        PL01_PST01_Row6_Active: false, 
        PL01_PST01_Row8_Active: false, 
        PL01_PST01_Row9_Active: false, 
    // Row-Daten
    PL01_PST01_Data: [
        ['RowID', 'Per01', 'Per02', 'Per03', 'Per04', 'Per05', 'Per06', 'Per07', 'Per08', 'Per09', 'Per10', 'Per11', 'Per12'],
        ['01_01_01', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
        ['01_01_02', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
        ['01_01_03', 12, 15, 25, 24, 0, 0, 0, 0, 0, 0, 0, 0 ],
        ['01_01_04', 14, 14, 16, 16, 16, 15, 14, 12, 12, 13, 14, 12 ],
        ['01_01_05', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
        ['01_01_06', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
        ['01_01_07', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
        ['01_01_08', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
        ['01_01_09', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
        ['01_01_10', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
        ['01_01_11', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
        ['01_01_12', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
        ['01_01_13', 4.5, 5, 5, 3, 2, 2.5, 3, 3.75, 4, 5, 5, 4 ],
        ['01_01_14', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
        ['01_01_15', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ]     
    ],
    // Parameter
    PL01_Parameter: [
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