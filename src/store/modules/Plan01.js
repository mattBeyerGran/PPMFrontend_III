// **********************************************
// *  Plan01: Geschaeftsplan                    *
// *  Module: "Plan01.js"                       *
// **********************************************
// import * as types from '../types';

const state = {
    
// Plan02 Parameter - Hypotheken - Bestandsplanung (Parameter sind planuebergreifend fuer alle Sheets)
    Parameter_02: [
        { ParId: "01", ParName: "MWST", ParValue: 0.0, ParUnit: "%"  },
        { ParId: "02", ParName: "VWK-Zuschlag", ParValue: 5.0, ParUnit: "%"  }
    ],
    


// Plan02 Sheet01 - Hypotheken - Bestandsplanung
Data_0201: [
    
        {
            id: 'Row00'
            // damit die erste Reihe mit '1' beginnt.
        },
        {
            id: 'Row01',
            isActive: true,
            RowType: "TitleRow",
            isInputOpen: false,
            areChildsOpen: false,
            ElementTitle: "",
            ElementColor: '#182F6D', ElementBGColor: '#E8F0F7',
            ElementText: "Bestandsveränderung",           
            Value01: 0, Unit01: "Euro", Color01: '#182F6D', BGColor01: '#E8F0F7',
            Value02: 0, Unit02: "Euro", Color02: '#182F6D', BGColor02: '#E8F0F7',
            Value03: 0, Unit03: "Euro", Color03: '#182F6D', BGColor03: '#E8F0F7',
            Value04: 0, Unit04: "Euro", Color04: '#182F6D', BGColor04: '#E8F0F7',
            ActionBGColor: '#E8F0F7',
            TextColor: '#182F6D',
            TextBGColor: '#E8F0F7',  
            EndText: "in Mio."         
        },
        {
            id: 'Row02',
            isActive: true,
            RowType: "CalcRow",
            isInputOpen: false,
            areChildsOpen: false,
            ElementTitle: "Anfangsbestand",
            ElementColor: '#182F6D', ElementBGColor: '#E8F0F7',
            ElementText: "Der Anfangsbestand eines Quartals entspricht dem Endbestand des vorherigen Quartals.",
            Value01: 100.00, Unit01: "Euro", Color01: '#182F6D', BGColor01: '#E8F0F7',
            Value02: 10.00, Unit02: "Euro", Color02: '#182F6D', BGColor02: '#E8F0F7',
            Value03: 0.00, Unit03: "Euro", Color03: '#182F6D', BGColor03: '#E8F0F7',
            Value04: 75.28, Unit04: "Euro", Color04: '#182F6D', BGColor04: '#E8F0F7',
            ActionBGColor: '#E8F0F7',
            TextColor: '#182F6D',
            TextBGColor: '#E8F0F7',
            EndText: ""         
        },
        {
            id: 'Row03',
            isActive: true,
            RowType: "PlanRow",
            isInputOpen: false,
            areChildsOpen: false,
            ElementTitle: "Zugang", 
            ElementColor: '#182F6D', ElementBGColor: '#E8F0F7',
            ElementText: "Bitte den Hypotheken-Zugang in Mio. Euro je Quartal planen.",
            Value01: 11.00, Initial01: 11.00, Unit01: "Euro", Color01: '#182F6D', BGColor01: '#FFFFFF',
            Value02: 25.00, Initial02: 25.00, Unit02: "Euro", Color02: '#3CB283', BGColor02: '#B9F6CA',
            Value03: 22.00, Initial03: 22.00, Unit03: "Euro", Color03: '#F44336', BGColor03: '#FFCDD2',
            Value04: 10.00, Initial04: 10.00, Unit04: "Euro", Color04: '#D08B01', BGColor04: '#FFF9C4',
            rowElement: [
                ['Column', 'Value', 'Initial', 'Unit', 'Color', 'BGColor'],
                ['Q 1', 11.00, 11.00, "Euro", '#182F6D', '#FFFFFF'],
                ['Q 2', 25.00, 25.00, "Euro", '#3CB283', '#B9F6CA'],
                ['Q 3', 22.00, 22.00, "Euro", '#F44336', '#FFCDD2'],
                ['Q 4', 10.50, 10.50, "Euro", '#D08B01', '#FFF9C4']
            ],     
            ActionBGColor: '#E8F0F7',
            TextColor: '#182F6D',
            TextBGColor: '#E8F0F7',
            EndText: ""         
        },
        {
                id: 'Row0301',
                isActive: false,
                RowType: "GoalRow",
                isInputOpen: false,
                areChildsOpen: false,
                ElementTitle: "Default",
                ElementColor: '#182F6D', ElementBGColor: '#E8F0F7',
                ElementText: "Vorgabe durch das Controlling. Das Controlling plant auf hoeheren Aggregaten, die dann verteilt werden. Die Verteilung erfolgt auf Verteilungsgewichten, die auf der Basis von Vorjahreswerten berechnet wurden. Solltest Du diesen Wert nicht planen, wird dieser Defaultwert angesetzt.",
                Value01: 5.00, Unit01: "Euro", Color01: '#182F6D', BGColor01: '#E8F0F7',
                Value02: 5.00, Unit02: "Euro", Color02: '#3CB283', BGColor02: '#E8F0F7',
                Value03: 5.00, Unit03: "Euro", Color03: '#F44336', BGColor03: '#E8F0F7',
                Value04: 5.00, Unit04: "Euro", Color04: '#D08B01', BGColor04: '#E8F0F7',
                ActionBGColor: '#E8F0F7',
                TextColor: '#182F6D',
                TextBGColor: '#E8F0F7',
                EndText: "Controlling-Vorgabe"         
        },
        {
                id: 'Row0302',
                isActive: false,
                RowType: "GoalRow",
                isInputOpen: false,
                areChildsOpen: false,
                ElementTitle: "Goal",
                ElementColor: '#182F6D', ElementBGColor: '#E8F0F7',
                ElementText: "Um Deinen Bonus zu erhalten, solltes Du den Vorgabewert des Vorstands mit Ist-Werten uebertreffen. Der Planwert zeigt nur Dein Commitment.",
                Value01: 7.00, Unit01: "Euro", Color01: '#182F6D', BGColor01: '#E8F0F7',
                Value02: 8.00, Unit02: "Euro", Color02: '#3CB283', BGColor02: '#E8F0F7',
                Value03: 8.00, Unit03: "Euro", Color03: '#F44336', BGColor03: '#E8F0F7',
                Value04: 7.00, Unit04: "Euro", Color04: '#D08B01', BGColor04: '#E8F0F7',
                ActionBGColor: '#E8F0F7',
                TextColor: '#182F6D',
                TextBGColor: '#E8F0F7',
                EndText: "Board-Vorgabe"         
        },
        {
                id: 'Row0303',
                isActive: false,
                RowType: "MatchRow",
                isInputOpen: false,
                areChildsOpen: false,
                ElementTitle: "(1:1) Match",
                ElementColor: '#182F6D', ElementBGColor: '#E8F0F7',
                ElementText: "Diesen Wert planst Du gemeinsam mit einem Kollegen. Ihr muesst Euch abstimmen und am Ende den gleichen Wert planen.",
                Value01: 4.00, Unit01: "Euro", Color01: '#182F6D', BGColor01: '#E8F0F7',
                Value02: 5.50, Unit02: "Euro", Color02: '#3CB283', BGColor02: '#E8F0F7',
                Value03: 4.50, Unit03: "Euro", Color03: '#F44336', BGColor03: '#E8F0F7',
                Value04: 12.00, Unit04: "Euro", Color04: '#D08B01', BGColor04: '#E8F0F7',
                ActionBGColor: '#E8F0F7',
                TextColor: '#182F6D',
                TextBGColor: '#E8F0F7',
                EndText: "mit Christoph abstimmen"         
        },
        {
            id: 'Row04',
            isActive: true,
            RowType: "PlanRow",
            isInputOpen: false,
            areChildsOpen: false,
            ElementTitle: "Abgang",
            ElementColor: '#182F6D', ElementBGColor: '#E8F0F7',
            ElementText: "Der Abgang der Hypotheken sollte nicht hoeher als der Zugang sein.",
            Value01: 13.00, Initial01: 13.00, Unit01: "Euro", Color01: '#182F6D', BGColor01: '#FFFFFF',
            Value02: 15.00, Initial02: 15.00, Unit02: "Euro", Color02: '#3CB283', BGColor02: '#B9F6CA',
            Value03: 5.00, Initial03: 5.00, Unit03: "Euro", Color03: '#F44336', BGColor03: '#FFCDD2',
            Value04: 12.00, Initial04: 12.00, Unit04: "Euro", Color04: '#D08B01', BGColor04: '#FFF9C4',
            rowElement: [
                ['Column', 'Value', 'Initial', 'Unit', 'Color', 'BGColor'],
                ['Q 1', 9.00, 11.00, "Euro", '#182F6D', '#FFFFFF'],
                ['Q 2', 15.00, 25.00, "Euro", '#3CB283', '#B9F6CA'],
                ['Q 3', 20.00, 22.00, "Euro", '#F44336', '#FFCDD2'],
                ['Q 4', 80.50, 10.50, "Euro", '#D08B01', '#FFF9C4']
            ], 
            ActionBGColor: '#E8F0F7',
            TextColor: '#182F6D',
            TextBGColor: '#E8F0F7',
            EndText: ""         
        },
        {
                id: 'Row0401',
                isActive: false,
                RowType: "GoalRow",
                isInputOpen: false,
                areChildsOpen: false,
                ElementTitle: "Default",
                ElementColor: '#182F6D', ElementBGColor: '#E8F0F7',
                ElementText: "Vorgabe durch das Controlling. Das Controlling plant auf hoeheren Aggregaten, die dann verteilt werden. Die Verteilung erfolgt auf Verteilungsgewichten, die auf der Basis von Vorjahreswerten berechnet wurden. Solltest Du diesen Wert nicht planen, wird dieser Defaultwert angesetzt.",
                Value01: 2.00, Unit01: "Euro", Color01: '#182F6D', BGColor01: '#E8F0F7',
                Value02: 3.00, Unit02: "Euro", Color02: '#3CB283', BGColor02: '#E8F0F7',
                Value03: 3.00, Unit03: "Euro", Color03: '#F44336', BGColor03: '#E8F0F7',
                Value04: 4.00, Unit04: "Euro", Color04: '#D08B01', BGColor04: '#E8F0F7',
                ActionBGColor: '#E8F0F7',
                TextColor: '#182F6D',
                TextBGColor: '#E8F0F7',
                EndText: "Controlling-Vorgabe"         
        },
        {
                id: 'Row0402',
                isActive: false,
                RowType: "GoalRow",
                isInputOpen: false,
                areChildsOpen: false,
                ElementTitle: "Goal",
                ElementColor: '#182F6D', ElementBGColor: '#E8F0F7',
                ElementText: "Um Deinen Bonus zu erhalten, solltes Du den Vorgabewert des Vorstands mit Ist-Werten uebertreffen. Der Planwert zeigt nur Dein Commitment.",
                Value01: 4.00, Unit01: "Euro", Color01: '#182F6D', BGColor01: '#E8F0F7',
                Value02: 4.00, Unit02: "Euro", Color02: '#3CB283', BGColor02: '#E8F0F7',
                Value03: 4.00, Unit03: "Euro", Color03: '#F44336', BGColor03: '#E8F0F7',
                Value04: 4.00, Unit04: "Euro", Color04: '#D08B01', BGColor04: '#E8F0F7',
                ActionBGColor: '#E8F0F7',
                TextColor: '#182F6D',
                TextBGColor: '#E8F0F7',
                EndText: "Board-Vorgabe"         
        },
        {
            id: 'Row05',
            isActive: true,
            RowType: "CalcRow",
            isInputOpen: false,
            areChildsOpen: false,
            ElementTitle: "Endbestand",
            ElementColor: '#182F6D', ElementBGColor: '#E8F0F7',
            ElementText: "Der Endbestand eines Quartals errechnet sich aus dem Anfangsbestand + Zugang - Abgang.",
            Value01: 0.00, Unit01: "Euro", Color01: '#182F6D', BGColor01: '#E8F0F7',
            Value02: 0.00, Unit02: "Euro", Color02: '#182F6D', BGColor02: '#E8F0F7',
            Value03: 0.00, Unit03: "Euro", Color03: '#182F6D', BGColor03: '#E8F0F7',
            Value04: 0.00, Unit04: "Euro", Color04: '#182F6D', BGColor04: '#E8F0F7',
            ActionBGColor: '#E8F0F7',
            TextColor: '#182F6D',
            TextBGColor: '#E8F0F7',
            EndText: ""         
        }
    
],
// Charts
Charts_0201: [
        {
                id: 'Chart03',
                isActive: false,
                RowType: "ChartRow",
                ElementTitle: "Zeitreihen-Grafik",
                ElementColor: '#182F6D', ElementBGColor: '#E8F0F7',
                ElementText: "Deine Planung beeinflusst nur die blaue 'Plan' - Zeitreihe. Die anderen Zeitreihen dienen nur zur Orientierung.",
                TextColor: '#182F6D',
                TextBGColor: '#E8F0F7',
                EndText: `Die Zeitreihen 'Plan' und 'Match' müssen übereinstimmen und mindestens die 'Default'- Werte erreichen. Ideal wäre es, wenn die 'Goal'- Werte erreicht oder übertroffen werden. `,
                // chartDataHeader: ['Quartal', 'Default', 'Plan', 'Goal', 'Match'],
                // chartDataRows: [
                //     ['Q 1', 100, 11, 7, 4],
                //     ['Q 2', 5, 25, 8, 5.5],
                //     ['Q 3', 5, 22, 8, 4.5],
                //     ['Q 4', 5, 10, 7, 12]
                // ],
               
                
                  chartData: [
                    ['Quartal', 'Default', 'Plan', 'Goal', 'Match'],
                    ['Q 1', 820, 400, 800, 400],
                    ['Q 2', 400, 600, 1750, 600],
                    ['Q 3', 400, 1120, 1600, 700],
                    ['Q 4', 300, 540, 1800, 350]
                  ]       
        }

],
};

// getters
const getters = {
    getRow: (state, payload) =>  {
        return state.Data_0201.find(row => row.id === payload)
    },getRow01: (state) =>  {
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
    },
    getChart03: (state) =>  {
        
        return state.Charts_0201.find(row => row.id === "Chart03");
         
    },
    
};
// mutations
const mutations = {
    
    // showDialogRow2: ( state ) => { state.Dialogs_02[0].isActive = true },

    showCildsRow03: ( state ) => {
        state.Data_0201[4].isActive = !state.Data_0201[4].isActive;
        state.Data_0201[5].isActive = !state.Data_0201[5].isActive;
        state.Data_0201[6].isActive = !state.Data_0201[6].isActive;   
        state.Charts_0201[0].isActive = !state.Charts_0201[0].isActive;   
    },

    showCildsRow04: ( state ) => {
        state.Data_0201[8].isActive = !state.Data_0201[8].isActive;
        state.Data_0201[9].isActive = !state.Data_0201[9].isActive;
    },
    resetRow03: ( state ) => {
        state.Data_0201[3].Value01 = state.Data_0201[3].Initial01;
        state.Data_0201[3].Value02 = state.Data_0201[3].Initial02;
        state.Data_0201[3].Value03 = state.Data_0201[3].Initial03;
        state.Data_0201[3].Value04 = state.Data_0201[3].Initial04;
        state.Charts_0201[0].chartData[1][2] = Number(state.Data_0201[3].Initial01);
        state.Charts_0201[0].chartData[2][2] = Number(state.Data_0201[3].Initial02);
        state.Charts_0201[0].chartData[3][2] = Number(state.Data_0201[3].Initial03);
        state.Charts_0201[0].chartData[4][2] = Number(state.Data_0201[3].Initial04);
    },
    resetRow04: ( state ) => {
        state.Data_0201[7].Value01 = state.Data_0201[7].Initial01;
        state.Data_0201[7].Value02 = state.Data_0201[7].Initial02;
        state.Data_0201[7].Value03 = state.Data_0201[7].Initial03;
        state.Data_0201[7].Value04 = state.Data_0201[7].Initial04;
    },
    setResults: ( state ) => {
        state.Data_0201[10].Value01 = Number(state.Data_0201[2].Value01) + Number(state.Data_0201[3].Value01) - Number(state.Data_0201[7].Value01);
        state.Data_0201[2].Value02 = Number(state.Data_0201[10].Value01);
        state.Data_0201[10].Value02 = Number(state.Data_0201[2].Value02) + Number(state.Data_0201[3].Value02) - Number(state.Data_0201[7].Value02);
        state.Data_0201[2].Value03 = Number(state.Data_0201[10].Value02);
        state.Data_0201[10].Value03 = Number(state.Data_0201[2].Value03) + Number(state.Data_0201[3].Value03) - Number(state.Data_0201[7].Value03);
        state.Data_0201[2].Value04 = Number(state.Data_0201[10].Value03);
        state.Data_0201[10].Value04 = Number(state.Data_0201[2].Value04) + Number(state.Data_0201[3].Value04) - Number(state.Data_0201[7].Value04);  
    },
    
    copyRow301onRow03: (state) => {
        state.Data_0201[3].Value01 = state.Data_0201[4].Value01;
        state.Data_0201[3].Value02 = state.Data_0201[4].Value02;
        state.Data_0201[3].Value03 = state.Data_0201[4].Value03;
        state.Data_0201[3].Value04 = state.Data_0201[4].Value04;
    },
    copyRow302onRow03: (state) => {
        state.Data_0201[3].Value01 = state.Data_0201[5].Value01;
        state.Data_0201[3].Value02 = state.Data_0201[5].Value02;
        state.Data_0201[3].Value03 = state.Data_0201[5].Value03;
        state.Data_0201[3].Value04 = state.Data_0201[5].Value04;
    },
    copyRow303onRow03: (state) => {
        state.Data_0201[3].Value01 = state.Data_0201[6].Value01;
        state.Data_0201[3].Value02 = state.Data_0201[6].Value02;
        state.Data_0201[3].Value03 = state.Data_0201[6].Value03;
        state.Data_0201[3].Value04 = state.Data_0201[6].Value04;
    },
    copyRow401onRow04: (state) => {
        state.Data_0201[7].Value01 = state.Data_0201[8].Value01;
        state.Data_0201[7].Value02 = state.Data_0201[8].Value02;
        state.Data_0201[7].Value03 = state.Data_0201[8].Value03;
        state.Data_0201[7].Value04 = state.Data_0201[8].Value04;
    },
    copyRow402onRow04: (state) => {
        state.Data_0201[7].Value01 = state.Data_0201[9].Value01;
        state.Data_0201[7].Value02 = state.Data_0201[9].Value02;
        state.Data_0201[7].Value03 = state.Data_0201[9].Value03;
        state.Data_0201[7].Value04 = state.Data_0201[9].Value04;
    },

    // Plan Row 03
    Row03Field01GoalColor: (state ) => {

        if (state.Data_0201[3].Value01 < state.Data_0201[4].Value01 ) 
            {    
                state.Data_0201[3].Color01 = '#F44336'; state.Data_0201[3].BGColor01 = '#FFCDD2'; // rot
                state.Data_0201[4].Color01 = '#F44336'; // rot
                state.Data_0201[5].Color01 = '#F44336'; // rot
            } 
        else if ((state.Data_0201[3].Value01 >= state.Data_0201[4].Value01) & (state.Data_0201[3].Value01 < state.Data_0201[5].Value01) ) 
            {   
                state.Data_0201[3].Color01 = '#D08B01'; state.Data_0201[3].BGColor01 = '#FFF9C4'; // gelb
                state.Data_0201[4].Color01 = '#3CB283'; // gruen
                state.Data_0201[5].Color01 = '#F44336'; // rot
            } 
        else {  
                state.Data_0201[3].Color01 = '#3CB283'; state.Data_0201[3].BGColor01 = '#B9F6CA'; // gruen
                state.Data_0201[4].Color01 = '#3CB283'; // gruen
                state.Data_0201[5].Color01 = '#3CB283'; // gruen
            } 
    },
    Row03Field02GoalColor: (state) => {

        if (state.Data_0201[3].Value02 < state.Data_0201[4].Value02 ) 
            {    
                state.Data_0201[3].Color02 = '#F44336'; state.Data_0201[3].BGColor02 = '#FFCDD2'; // rot
                state.Data_0201[4].Color02 = '#F44336'; // rot
                state.Data_0201[5].Color02 = '#F44336'; // rot
            } 
        else if ((state.Data_0201[3].Value02 >= state.Data_0201[4].Value02) & (state.Data_0201[3].Value02 < state.Data_0201[5].Value02) ) 
            {   
                state.Data_0201[3].Color02 = '#D08B01'; state.Data_0201[3].BGColor02 = '#FFF9C4'; // gelb
                state.Data_0201[4].Color02 = '#3CB283'; // gruen
                state.Data_0201[5].Color02 = '#F44336'; // rot
            } 
        else {  
                state.Data_0201[3].Color02 = '#3CB283'; state.Data_0201[3].BGColor02 = '#B9F6CA'; // gruen
                state.Data_0201[4].Color02 = '#3CB283'; // gruen
                state.Data_0201[5].Color02 = '#3CB283'; // gruen
            } 
    },
    Row03Field03GoalColor: (state) => {

        if (state.Data_0201[3].Value03 < state.Data_0201[4].Value03 ) 
            {    
                state.Data_0201[3].Color03 = '#F44336'; state.Data_0201[3].BGColor03 = '#FFCDD2'; // rot
                state.Data_0201[4].Color03 = '#F44336'; // rot
                state.Data_0201[5].Color03 = '#F44336'; // rot
            } 
        else if ((state.Data_0201[3].Value03 >= state.Data_0201[4].Value03) & (state.Data_0201[3].Value03 < state.Data_0201[5].Value03) ) 
            {   
                state.Data_0201[3].Color03 = '#D08B01'; state.Data_0201[3].BGColor03 = '#FFF9C4'; // gelb
                state.Data_0201[4].Color03 = '#3CB283'; // gruen
                state.Data_0201[5].Color03 = '#F44336'; // rot
            } 
        else {  
                state.Data_0201[3].Color03 = '#3CB283'; state.Data_0201[3].BGColor03 = '#B9F6CA'; // gruen
                state.Data_0201[4].Color03= '#3CB283'; // gruen
                state.Data_0201[5].Color03 = '#3CB283'; // gruen
            } 
    },
    Row03Field04GoalColor: (state) => {

        if (state.Data_0201[3].Value04 < state.Data_0201[4].Value04 ) 
            {    
                state.Data_0201[3].Color04 = '#F44336'; state.Data_0201[3].BGColor04 = '#FFCDD2'; // rot
                state.Data_0201[4].Color04 = '#F44336'; // rot
                state.Data_0201[5].Color04 = '#F44336'; // rot
            } 
        else if ((state.Data_0201[3].Value04 >= state.Data_0201[4].Value04) & (state.Data_0201[3].Value04 < state.Data_0201[5].Value04) ) 
            {   
                state.Data_0201[3].Color04 = '#D08B01'; state.Data_0201[3].BGColor04 = '#FFF9C4'; // gelb
                state.Data_0201[4].Color04 = '#3CB283'; // gruen
                state.Data_0201[5].Color04 = '#F44336'; // rot
            } 
        else {  
                state.Data_0201[3].Color04 = '#3CB283'; state.Data_0201[3].BGColor04 = '#B9F6CA'; // gruen
                state.Data_0201[4].Color04 = '#3CB283'; // gruen
                state.Data_0201[5].Color04 = '#3CB283'; // gruen
            } 
    },
    Row03Field01MatchColor: (state) => {
        if (state.Data_0201[3].Value01 === state.Data_0201[6].Value01) 
            {state.Data_0201[6].Color01 = '#3CB283'} // gruen
        else  {state.Data_0201[6].Color01 = '#F44336'} // rot
    },
    Row03Field02MatchColor: (state) => {
        if (state.Data_0201[3].Value02 === state.Data_0201[6].Value02) 
            {state.Data_0201[6].Color02 = '#3CB283'} // gruen
        else {state.Data_0201[6].Color02 = '#F44336'} // rot
    },
    Row03Field03MatchColor: (state) => {
        if (state.Data_0201[3].Value03 === state.Data_0201[6].Value03) 
            {state.Data_0201[6].Color03 = '#3CB283'} // gruen
        else {state.Data_0201[6].Color03 = '#F44336'} // rot
    },
    Row03Field04MatchColor: (state) => {
        if (state.Data_0201[3].Value04 === state.Data_0201[6].Value04) 
            {state.Data_0201[6].Color04 = '#3CB283'} // gruen
        else {state.Data_0201[6].Color04 = '#F44336'} // rot
    },

    setRow03Value01: ( state, payload ) => {
        state.Charts_0201[0].chartData[1][2] = Number(payload.value);
        state.Data_0201[payload.row].Value01 = Number(payload.value);
    
        
    },

    setRowValue: ( state, payload ) => {
        state.Charts_0201[0].chartData[1][2] = Number(payload.value);
        state.Data_0201[payload.row].rowElement[payload.column][1] = Number(payload.value);
    
        
    },

    // Plan Row 06
    Row06Field01GoalColor: (state) => {

        if (state.Data_0201[7].Value01 < state.Data_0201[8].Value01 ) 
            {    
                state.Data_0201[7].Color01 = '#F44336'; state.Data_0201[7].BGColor01 = '#FFCDD2'; // rot
                state.Data_0201[8].Color01 = '#F44336'; // rot
                state.Data_0201[9].Color01 = '#F44336'; // rot
            } 
        else if ((state.Data_0201[7].Value01 >= state.Data_0201[8].Value01) & (state.Data_0201[7].Value01 < state.Data_0201[9].Value01) ) 
            {   
                state.Data_0201[7].Color01 = '#D08B01'; state.Data_0201[7].BGColor01 = '#FFF9C4'; // gelb
                state.Data_0201[8].Color01 = '#3CB283'; // gruen
                state.Data_0201[9].Color01 = '#F44336'; // rot
            } 
        else {  
                state.Data_0201[7].Color01 = '#3CB283'; state.Data_0201[7].BGColor01 = '#B9F6CA'; // gruen
                state.Data_0201[8].Color01 = '#3CB283'; // gruen
                state.Data_0201[9].Color01 = '#3CB283'; // gruen
            } 
    },
    Row06Field02GoalColor: (state) => {

        if (state.Data_0201[7].Value02 < state.Data_0201[8].Value02 ) 
            {    
                state.Data_0201[7].Color02 = '#F44336'; state.Data_0201[7].BGColor02 = '#FFCDD2'; // rot
                state.Data_0201[8].Color02 = '#F44336'; // rot
                state.Data_0201[9].Color02 = '#F44336'; // rot
            } 
        else if ((state.Data_0201[6].Value02 >= state.Data_0201[7].Value02) & (state.Data_0201[6].Value02 < state.Data_0201[8].Value02) ) 
            {   
                state.Data_0201[7].Color02 = '#D08B01'; state.Data_0201[7].BGColor02 = '#FFF9C4'; // gelb
                state.Data_0201[8].Color02 = '#3CB283'; // gruen
                state.Data_0201[9].Color02 = '#F44336'; // rot
            } 
        else {  
                state.Data_0201[7].Color02 = '#3CB283'; state.Data_0201[7].BGColor02 = '#B9F6CA'; // gruen
                state.Data_0201[8].Color02 = '#3CB283'; // gruen
                state.Data_0201[9].Color02 = '#3CB283'; // gruen
            } 
    },
    Row06Field03GoalColor: (state) => {

        if (state.Data_0201[7].Value03 < state.Data_0201[8].Value03 ) 
            {    
                state.Data_0201[7].Color03 = '#F44336'; state.Data_0201[7].BGColor03 = '#FFCDD2'; // rot
                state.Data_0201[8].Color03 = '#F44336'; // rot
                state.Data_0201[9].Color03 = '#F44336'; // rot
            } 
        else if ((state.Data_0201[7].Value03 >= state.Data_0201[8].Value03) & (state.Data_0201[7].Value03 < state.Data_0201[9].Value03) ) 
            {   
                state.Data_0201[7].Color03 = '#D08B01'; state.Data_0201[7].BGColor03 = '#FFF9C4'; // gelb
                state.Data_0201[8].Color03 = '#3CB283'; // gruen
                state.Data_0201[9].Color03 = '#F44336'; // rot
            } 
        else {  
                state.Data_0201[7].Color03 = '#3CB283'; state.Data_0201[7].BGColor03 = '#B9F6CA'; // gruen
                state.Data_0201[8].Color03= '#3CB283'; // gruen
                state.Data_0201[9].Color03 = '#3CB283'; // gruen
            } 
    }, 
    Row06Field04GoalColor: (state) => {

        if (state.Data_0201[7].Value04 < state.Data_0201[8].Value04 ) 
            {    
                state.Data_0201[7].Color04 = '#F44336'; state.Data_0201[7].BGColor04 = '#FFCDD2'; // rot
                state.Data_0201[8].Color04 = '#F44336'; // rot
                state.Data_0201[9].Color04 = '#F44336'; // rot
            } 
        else if ((state.Data_0201[7].Value04 >= state.Data_0201[8].Value04) & (state.Data_0201[7].Value04 < state.Data_0201[9].Value04) ) 
            {   
                state.Data_0201[7].Color04 = '#D08B01'; state.Data_0201[7].BGColor04 = '#FFF9C4'; // gelb
                state.Data_0201[8].Color04 = '#3CB283'; // gruen
                state.Data_0201[9].Color04 = '#F44336'; // rot
            } 
        else {  
                state.Data_0201[7].Color04 = '#3CB283'; state.Data_0201[7].BGColor04 = '#B9F6CA'; // gruen
                state.Data_0201[8].Color04 = '#3CB283'; // gruen
                state.Data_0201[9].Color04 = '#3CB283'; // gruen
            } 
    }
};
// actions
const actions = {
    
    ResultAction: ({ commit }) => {
        commit('setResults')
    },

    setValue0301: ( {commit}, payload ) => {
        commit('setRow03Value01', payload)
    },

    setRowValue: ( {commit}, payload ) => {
        commit('setRowValue', payload)
    },



    Row03Field01ColorTrigger: ({ commit }) => { commit('Row03Field01GoalColor'); commit('Row03Field01MatchColor') },
    Row03Field02ColorTrigger: ({ commit }) => { commit('Row03Field02GoalColor'); commit('Row03Field02MatchColor')  },
    Row03Field03ColorTrigger: ({ commit }) => { commit('Row03Field03GoalColor'); commit('Row03Field03MatchColor')  },
    Row03Field04ColorTrigger: ({ commit }) => { commit('Row03Field04GoalColor'); commit('Row03Field04MatchColor')  },

    Row06Field01ColorTrigger: ({ commit }) => { commit('Row06Field01GoalColor') },
    Row06Field02ColorTrigger: ({ commit }) => { commit('Row06Field02GoalColor') },
    Row06Field03ColorTrigger: ({ commit }) => { commit('Row06Field03GoalColor') },
    Row06Field04ColorTrigger: ({ commit }) => { commit('Row06Field04GoalColor') },
     
   
    
};
export default {
    state,
    getters,
    mutations,
    actions    
}