// **********************************************
// *  Plan0103: Geschaeftsplan -Spezialkredite  *
// **********************************************
// import * as types from '../types';

const state = {

// Plan01 Sheet03 - Spezial - Bestandsplanung
PS0103: [
        {
            id: 'Row00'
            // damit die erste Reihe mit '1' beginnt.
        },
    
        // Row
        {   
            id: 'Row01',
            isActive: true,
            ChildsOpen: false,
            InfoTitle: "",
            InfoText: "",   
            ElementData:    ['01', 'Bestandsveränderung', '', '#182F6D', '#E8F0F7'],     
            RowData: [
                            ['Col', 'Value', 'Initial', 'Color', 'BGColor'],            
                            ['02', 'Euro', '', '#182F6D', '#E8F0F7'],
                            ['03', 'Euro', '', '#182F6D', '#E8F0F7'],
                            ['04', 'Euro', '', '#182F6D', '#E8F0F7'],
                            ['05', 'Euro', '', '#182F6D', '#E8F0F7'],
                            ['06', 'Euro', '', '#182F6D', '#E8F0F7'],                      
            ],
            ActionData:     ['07', 'in Mio.', '', '#182F6D', '#E8F0F7'], 
        },
        {   
            id: 'Row02',
            isActive: true,
            ChildsOpen: false,
            InfoTitle: "Anfangsbestand",
            InfoText: "Der Anfangsbestand eines Quartals entspricht dem Endbestand des vorherigen Quartals.", 
            ElementData:    ['01', 'Anfangsbestand', '', '#182F6D', '#E8F0F7'],
            RowData: [
                            ['Col', 'Value', 'Initial', 'Color', 'BGColor'],               
                            ['02', 44.00, 100.00, '#182F6D', '#FFFFFF'],
                            ['03', 18.00, 18.00, '#182F6D', '#E8F0F7'],
                            ['04', 25.00, 25.00, '#182F6D', '#E8F0F7'],
                            ['05', 20.00, 20.00, '#182F6D', '#E8F0F7'],
                            ['06', 20.00, 20.00, '#182F6D', '#E8F0F7'],   
            ],
            ActionData:     ['07', '', '', '#182F6D', '#E8F0F7'],
        },
        {   
            id: 'Row03',
            isActive: true,
            ChildsOpen: false,
            InfoTitle: "Zugang",
            InfoText: "Bitte den Hypotheken-Zugang in Mio. Euro je Quartal planen.",
            ElementData:    ['01', 'Zugang', '', '#182F6D', '#E8F0F7'],
            RowData: [
                            ['Col', 'Value', 'Initial', 'Color', 'BGColor'],
                            ['02', 11.00, 11.00, '#182F6D', '#FFFFFF'],
                            ['03', 18.00, 18.00, '#182F6D', '#FFFFFF'],
                            ['04', 25.00, 25.00, '#182F6D', '#FFFFFF'],
                            ['05', 20.00, 20.00, '#182F6D', '#FFFFFF'],
                            ['06', 23.00, 20.00, '#182F6D', '#FFFFFF'],     
            ],
            ActionData:     ['07', '', '', '#182F6D', '#E8F0F7'],
        },
    ]
};

// getters
const getters = {
    getRowPS0103: (state) =>  (id) => {
        return state.PS0103.find(row => row.id === id)
    }
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