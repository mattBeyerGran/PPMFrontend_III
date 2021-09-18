// **********************************************
// *  Parameter                                 *
// **********************************************
// import * as types from '../types';

const state = {
    
// Plan02 Parameter - Spezial - Bestandsplanung (Parameter sind planuebergreifend fuer alle Sheets)
    Parameter: [
        { id: "01", ParName: "MWST", ParValue: 0.0, ParUnit: "%"  },
        { id: "02", ParName: "VWK-Zuschlag", ParValue: 5.0, ParUnit: "%"  },
        { id: "03", ParName: "Anfangsbestand 2022", Value: 90.0, ParUnit: "Mio. Euro"}
    ],
};

// getters
const getters = {
    getParameter: (state) => (id) => {
        return state.Parameter.find(par => par.id === id);
    },
};
// mutations
const mutations = {
    
   
};
// actions
const actions = {
    
};
export default {
    state,
    getters,
    mutations,
    actions    
}