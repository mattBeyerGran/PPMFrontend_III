// **********************************************
// *  Plan01: Geschaeftsplan                    *
// *  Module: "Plan01.js"                       *
// **********************************************
// import * as types from '../types';

const state = {
    
// Plan02 Parameter - Hypotheken - Bestandsplanung (Parameter sind uebergreifend fuer alle Sheets)
    Parameter_02: [
        { ParId: "01", ParName: "MWST", ParValue: 0.0, ParUnit: "%"  },
        { ParId: "02", ParName: "VWK-Zuschlag", ParValue: 5.0, ParUnit: "%"  }
    ],
    

// Plan02 Sheet01 - Hypotheken - Bestandsplanung
Data_0201: [
    
        {
            id: 'Row01',
            isActive: true,
            RowType: "TitleRow",
            areChildsOpen: false,
            ElementText: "Bestandsveränderung",           
            Value01: null, Unit01: "Euro", Color01: '#182F6D', BGColor01: '#E8F0F7',
            Value02: null, Unit02: "Euro", Color02: '#182F6D', BGColor02: '#E8F0F7',
            Value03: null, Unit03: "Euro", Color03: '#182F6D', BGColor03: '#E8F0F7',
            Value04: null, Unit04: "Euro", Color04: '#182F6D', BGColor04: '#E8F0F7',  
            EndText: "in Mio."         
        },
        {
            id: 'Row02',
            isActive: true,
            RowType: "CalcRow",
            areChildsOpen: false,
            ElementText: "Anfangsbestand",
            Value01: 100.00, Unit01: "Euro", Color01: '#182F6D', BGColor01: '#E8F0F7',
            Value02: 10.00, Unit02: "Euro", Color02: '#182F6D', BGColor02: '#E8F0F7',
            Value03: 0.00, Unit03: "Euro", Color03: '#182F6D', BGColor03: '#E8F0F7',
            Value04: 75.28, Unit04: "Euro", Color04: '#182F6D', BGColor04: '#E8F0F7',
            EndText: ""         
        },
        {
            id: 'Row03',
            isActive: true,
            RowType: "PlanRow",
            areChildsOpen: false,
            ElementText: "Zugang",
            Value01: 10.00, Unit01: "Euro", Color01: '#182F6D', BGColor01: '#FFFFFF',
            Value02: 25.00, Unit02: "Euro", Color02: '#3CB283', BGColor02: '#B9F6CA',
            Value03: 22.00, Unit03: "Euro", Color03: '#F44336', BGColor03: '#FFCDD2',
            Value04: 10.00, Unit04: "Euro", Color04: '#D08B01', BGColor04: '#FFF9C4',
            EndText: ""         
        },
        {
                id: 'Row0301',
                isActive: false,
                RowType: "GoalRow",
                areChildsOpen: false,
                ElementText: "Default",
                Value01: 0.00, Unit01: "Euro", Color01: '#182F6D', BGColor01: '#E8F0F7',
                Value02: 0.00, Unit02: "Euro", Color02: '#3CB283', BGColor02: '#E8F0F7',
                Value03: 0.00, Unit03: "Euro", Color03: '#F44336', BGColor03: '#E8F0F7',
                Value04: 0.00, Unit04: "Euro", Color04: '#D08B01', BGColor04: '#E8F0F7',
                EndText: "Controlling-Vorgabe"         
        },
        {
                id: 'Row0302',
                isActive: false,
                RowType: "GoalRow",
                areChildsOpen: false,
                ElementText: "Goal",
                Value01: 0.00, Unit01: "Euro", Color01: '#182F6D', BGColor01: '#E8F0F7',
                Value02: 0.00, Unit02: "Euro", Color02: '#3CB283', BGColor02: '#E8F0F7',
                Value03: 0.00, Unit03: "Euro", Color03: '#F44336', BGColor03: '#E8F0F7',
                Value04: 0.00, Unit04: "Euro", Color04: '#D08B01', BGColor04: '#E8F0F7',
                EndText: "Board-Vorgabe"         
        },
        {
                id: 'Row0303',
                isActive: false,
                RowType: "MatchRow",
                areChildsOpen: false,
                ElementText: "MatchRow (1:1)",
                Value01: 0.00, Unit01: "Euro", Color01: '#182F6D', BGColor01: '#E8F0F7',
                Value02: 0.00, Unit02: "Euro", Color02: '#3CB283', BGColor02: '#E8F0F7',
                Value03: 0.00, Unit03: "Euro", Color03: '#F44336', BGColor03: '#E8F0F7',
                Value04: 0.00, Unit04: "Euro", Color04: '#D08B01', BGColor04: '#E8F0F7',
                EndText: "mit Christoph abstimmen"         
        },
        {
            id: 'Row04',
            isActive: true,
            RowType: "PlanRow",
            areChildsOpen: false,
            ElementText: "Abgang",
            Value01: 13.00, Unit01: "Euro", Color01: '#182F6D', BGColor01: '#FFFFFF',
            Value02: 15.00, Unit02: "Euro", Color02: '#3CB283', BGColor02: '#B9F6CA',
            Value03: 5.00, Unit03: "Euro", Color03: '#F44336', BGColor03: '#FFCDD2',
            Value04: 12.00, Unit04: "Euro", Color04: '#D08B01', BGColor04: '#FFF9C4',
            EndText: ""         
        },
        {
                id: 'Row0401',
                isActive: false,
                RowType: "GoalRow",
                areChildsOpen: false,
                ElementText: "Default",
                Value01: 0.00, Unit01: "Euro", Color01: '#182F6D', BGColor01: '#E8F0F7',
                Value02: 0.00, Unit02: "Euro", Color02: '#3CB283', BGColor02: '#E8F0F7',
                Value03: 0.00, Unit03: "Euro", Color03: '#F44336', BGColor03: '#E8F0F7',
                Value04: 0.00, Unit04: "Euro", Color04: '#D08B01', BGColor04: '#E8F0F7',
                EndText: "Controlling-Vorgabe"         
        },
        {
                id: 'Row0402',
                isActive: false,
                RowType: "GoalRow",
                areChildsOpen: false,
                ElementText: "Goal",
                Value01: 0.00, Unit01: "Euro", Color01: '#182F6D', BGColor01: '#E8F0F7',
                Value02: 0.00, Unit02: "Euro", Color02: '#3CB283', BGColor02: '#E8F0F7',
                Value03: 0.00, Unit03: "Euro", Color03: '#F44336', BGColor03: '#E8F0F7',
                Value04: 0.00, Unit04: "Euro", Color04: '#D08B01', BGColor04: '#E8F0F7',
                EndText: "Board-Vorgabe"         
        },
        {
            id: 'Row05',
            isActive: true,
            RowType: "CalcRow",
            areChildsOpen: false,
            ElementText: "Endbestand",
            Value01: 0.00, Unit01: "Euro", Color01: '#182F6D', BGColor01: '#E8F0F7',
            Value02: 0.00, Unit02: "Euro", Color02: '#182F6D', BGColor02: '#E8F0F7',
            Value03: 0.00, Unit03: "Euro", Color03: '#182F6D', BGColor03: '#E8F0F7',
            Value04: 0.00, Unit04: "Euro", Color04: '#182F6D', BGColor04: '#E8F0F7',
            EndText: ""         
        }
    
]
};
// getters
const getters = {
    getRow01: (state) =>  {
        return state.Data_0201.find(row => row.id === "Row01")
    },
    getRow02: (state) =>  {
        return state.Data_0201.find(row => row.id === "Row02")
    },
    getRow03: (state) =>  {
        return state.Data_0201.find(row => row.id === "Row03")
    },
    getRow0301: (state) =>  {
        return state.Data_0201.find(row => row.id === "Row0301")
    },
    getRow0302: (state) =>  {
        return state.Data_0201.find(row => row.id === "Row0302")
    },
    getRow0303: (state) =>  {
        return state.Data_0201.find(row => row.id === "Row0303")
    },
    getRow04: (state) =>  {
        return state.Data_0201.find(row => row.id === "Row04")
    },
    getRow0401: (state) =>  {
        return state.Data_0201.find(row => row.id === "Row0401")
    },
    getRow0402: (state) =>  {
        return state.Data_0201.find(row => row.id === "Row0402")
    },
    getRow05: (state) =>  {
        return state.Data_0201.find(row => row.id === "Row05")
    }
    
};
// mutations
const mutations = {
    
    showCildsRow03: ( state ) => {
        state.Data_0201[3].isActive = !state.Data_0201[3].isActive;
        state.Data_0201[4].isActive = !state.Data_0201[4].isActive;
        state.Data_0201[5].isActive = !state.Data_0201[5].isActive;      
    },
    showCildsRow04: ( state ) => {
        state.Data_0201[7].isActive = !state.Data_0201[7].isActive;
        state.Data_0201[8].isActive = !state.Data_0201[8].isActive;
    },
    setResults: ( state ) => {
        state.Data_0201[9].Value01 = state.Data_0201[1].Value01 + state.Data_0201[2].Value01 - state.Data_0201[6].Value01;
        state.Data_0201[1].Value02 = state.Data_0201[9].Value01;
        state.Data_0201[9].Value02 = state.Data_0201[1].Value02 + state.Data_0201[2].Value02 - state.Data_0201[6].Value02;
        state.Data_0201[1].Value03 = state.Data_0201[9].Value02;
        state.Data_0201[9].Value03 = state.Data_0201[1].Value03 + state.Data_0201[2].Value03 - state.Data_0201[6].Value03;
        state.Data_0201[1].Value04 = state.Data_0201[9].Value03;
        state.Data_0201[9].Value04 = state.Data_0201[1].Value04 + state.Data_0201[2].Value04 - state.Data_0201[6].Value04;  
    }
};
// actions
const actions = {
    
    ResultAction: ({ commit }) => {
        commit('setResults')
    }
};
export default {
    state,
    getters,
    mutations,
    actions    
}