// **********************************************
// *  Plan01: Geschäftsplan                     *
// *  Module: "Plan01.js"                       *
// **********************************************
import * as types from '../types';

const state = {
    
 // Row Active Status
 PL01_PST01_Row4_Active: false, 
 PL01_PST01_Row5_Active: false, 
 PL01_PST01_Row6_Active: false, 
 PL01_PST01_Row8_Active: false, 
 PL01_PST01_Row9_Active: false,    

// Sheet01 - Allgemeine Kredite - Bestandsplanung
Pl01_PST01_RowTitles: [
    {
      id: "Row1",
      ElementText: "Default",
      EndText: "Controlling-Vorgabe"
    },
    {
      id: "Row2",
      ElementText: "Goal",
      EndText: "Board-Vorgabe"
    },
    {
      id: "Row3",
      ElementText: "Match (1:1)",
      EndText: "Bitte mit BU-Manager PaPM abstimmen"
    },
    {
      id: "Row4",
      ElementText: "Zugang",
      EndText: ""
    },
    {
      id: "Row5",
      ElementText: "Abgang",
      EndText: ""
    },
    {
      id: "Row6",
      ElementText: "Anfangbestand",
      EndText: ""
    },
    {
      id: "Row7",
      ElementText: "Endbestand",
      EndText: ""
    },
    {
      id: "Row8",
      ElementText: "Kundenzuwachs",
      EndText: ""
    },
    {
      id: "Row9",
      ElementText: "Forecast Allg.Kredite",
      EndText: "wird maschinell prognostiziert."
    }
  ],
    // Row-Master Data
    PL01_PST01: [ 
        { 
            RowID: '01_01_01', 
            RowType: 'TitleRow',
            PlanItem: '',
            Text: 'Bestandsveraenderung in Mio.',
            Unit: 'Euro',
            Edit: false,
            Goal: false,
            Match: false,
            Active: true
        },
        { 
            RowID: '01_01_02', 
            RowType: 'CalcRow',
            PlanItem: '',
            Text: 'Anfangsbestand',
            Unit: 'Euro',
            Edit: false,
            Goal: false,
            Match: false,
            Active: true
        },
        { 
            RowID: '01_01_03', 
            RowType: 'PlanRow',
            PlanItem: '',
            Text: 'Anfangsbestand',
            Unit: 'Euro',
            Edit: true,
            Goal: true,
            Match: true,
            Active: true
        }

       
    ],
    
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