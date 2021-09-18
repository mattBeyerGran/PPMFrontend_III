// **********************************************
// *  Plan Data fuer alle Plan Sheets           *
// **********************************************


const state = {


PlanData: [
    { //Dummy 
    },
    {   id: 'PS0103Row02',
        RowType: 'CalcRow',
        isActive: true,
        InfoTitle: "Anfangsbestand",
        InfoText: "Der Anfangsbestand eines Jahres entspricht dem Endbestand des vorherigen Jahres.", 
        ElementColor: '#182F6D',
        ElementBGColor: '#E8F0F7',
        Value01: 43, Initial01: 0, Color01: '#182F6D', BGColor01: '#FFFFFF',
        Value02: 16, Initial02: 0, Color02: '#182F6D', BGColor02: '#FFFFFF',
        Value03: 25, Initial03: 0, Color03: '#182F6D', BGColor03: '#FFFFFF',
        Value04: 20, Initial04: 0, Color04: '#182F6D', BGColor04: '#FFFFFF',
        Value05: 20, Initial05: 0, Color05: '#182F6D', BGColor05: '#FFFFFF',
        ActionData:     ['07', '', '', '#182F6D', '#E8F0F7'],
    },
    {   id: 'PS0103Row03',
        RowType: 'PlanRow',
        isActive: true,
        InfoTitle: "Zugang",
        InfoText: "Bitte den Hypotheken-Zugang in Mio. Euro je Quartal planen.",
        ElementColor: '#182F6D',
        ElementBGColor: '#E8F0F7',
        Value01: 11, Initial01: 11, Color01: '#182F6D', BGColor01: '#FFFFFF',
        Value02: 12, Initial02: 12, Color02: '#182F6D', BGColor02: '#FFFFFF',
        Value03: 25, Initial03: 25, Color03: '#182F6D', BGColor03: '#FFFFFF',
        Value04: 20, Initial04: 20, Color04: '#182F6D', BGColor04: '#FFFFFF',
        Value05: 23, Initial05: 23, Color05: '#182F6D', BGColor05: '#FFFFFF',
        ActionData:     ['07', '', '', '#182F6D', '#E8F0F7'],
    },
    {   id: 'PS0103Row0301',
        RowType: "GoalRow",
        isActive: false,
        InfoTitle: "Default",
        InfoText: "Vorgabe durch das Controlling. Das Controlling plant auf höheren Aggregaten, die dann verteilt werden. Die Verteilung erfolgt auf Verteilungsgewichten, die PaPM auf der Basis von Vorjahreswerten berechnet hat. Solltest Du diesen Wert nicht planen, wird dieser Defaultwert angesetzt.",
        ElementColor: '#182F6D',
        ElementBGColor: '#E8F0F7',
        Value01: 5.00, Initial01: 0, Color01: '#182F6D', BGColor01: '#FFFFFF',
        Value02: 5.00, Initial02: 0, Color02: '#182F6D', BGColor02: '#FFFFFF',
        Value03: 6.00, Initial03: 0, Color03: '#182F6D', BGColor03: '#FFFFFF',
        Value04: 7.00, Initial04: 0, Color04: '#182F6D', BGColor04: '#FFFFFF',
        Value05: 5.00, Initial05: 0, Color05: '#182F6D', BGColor05: '#FFFFFF',  
        ActionData:     ['07', 'referenz', 'Controlling-Vorgabe', '#182F6D', '#E8F0F7'],     
    },
    {   id: 'PS0103Row0302',
        RowType: "GoalRow",
        isActive: false,
        InfoTitle: "Goal",
        InfoText: "Um Deinen Bonus zu erhalten, solltes Du den Vorgabewert des Vorstands mit Ist-Werten übertreffen. Der Planwert zeigt nur Dein Commitment.",
        ElementColor: '#182F6D',
        ElementBGColor: '#E8F0F7',
        Value01: 17.00, Initial01: 0, Color01: '#182F6D', BGColor01: '#FFFFFF',
        Value02: 18.50, Initial02: 0, Color02: '#182F6D', BGColor02: '#FFFFFF',
        Value03: 18.00, Initial03: 0, Color03: '#182F6D', BGColor03: '#FFFFFF',
        Value04: 17.00, Initial04: 0, Color04: '#182F6D', BGColor04: '#FFFFFF',
        Value05: 16.25, Initial05: 0, Color05: '#182F6D', BGColor05: '#FFFFFF',
        ActionData:     ['07', 'referenz', 'Controlling-Vorgabe', '#182F6D', '#E8F0F7'],     
    },
    {   id: 'PS0103Row0303',
        RowType: "GoalRow",
        isActive: false,
        InfoTitle: "Match",
        InfoText: "Diesen Wert planst Du gemeinsam mit einem Kollegen. Ihr müsst Euch abstimmen und am Ende den gleichen Wert planen.",
        ElementColor: '#182F6D',
        ElementBGColor: '#E8F0F7',
        Value01: 11.00, Initial01: 0, Color01: '#182F6D', BGColor01: '#FFFFFF',
        Value02: 12.00, Initial02: 0, Color02: '#182F6D', BGColor02: '#FFFFFF',
        Value03: 4.50, Initial03: 0, Color03: '#182F6D', BGColor03: '#FFFFFF',
        Value04: 12.00, Initial04: 0, Color04: '#182F6D', BGColor04: '#FFFFFF',
        Value05: 12.50, Initial05: 0, Color05: '#182F6D', BGColor05: '#FFFFFF',
        ActionData:     ['07', 'referenz', 'Controlling-Vorgabe', '#182F6D', '#E8F0F7'],     
    },
    {   id: 'PS0103Row04',
        RowType: "PlanRow",
        isActive: true,
        InfoTitle: "Abgang",
        InfoText: "Der Abgang der Hypotheken sollte nicht hoeher als der Zugang sein.",
        ElementColor: '#182F6D',
        ElementBGColor: '#E8F0F7',
        Value01: 4.00, Initial01: 4, Color01: '#182F6D', BGColor01: '#FFFFFF',
        Value02: 4.50, Initial02: 4.5, Color02: '#182F6D', BGColor02: '#FFFFFF',
        Value03: 5.50, Initial03: 5.5, Color03: '#182F6D', BGColor03: '#FFFFFF',
        Value04: 3.00, Initial04: 3.0, Color04: '#182F6D', BGColor04: '#FFFFFF',
        Value05: 2.00, Initial05: 2.0, Color05: '#182F6D', BGColor05: '#FFFFFF',
        ActionData:     ['07', 'referenz', 'Controlling-Vorgabe', '#182F6D', '#E8F0F7'],     
    },
    {   id: 'PS0103Row0401',
        RowType: "GoalRow",
        isActive: false,
        InfoTitle: "Minimum",
        InfoText: "Dieser Wert darf nicht unterschritten werden, sonst werden übergeordnete Ziele gefährdet!",
        ElementColor: '#182F6D',
        ElementBGColor: '#E8F0F7',
        Value01: 2.00, Initial01: 0, Color01: '#182F6D', BGColor01: '#FFFFFF',
        Value02: 1.70, Initial02: 0, Color02: '#182F6D', BGColor02: '#FFFFFF',
        Value03: 1.55, Initial03: 0, Color03: '#182F6D', BGColor03: '#FFFFFF',
        Value04: 2.00, Initial04: 0, Color04: '#182F6D', BGColor04: '#FFFFFF',
        Value05: 1.77, Initial05: 0, Color05: '#182F6D', BGColor05: '#FFFFFF',
        ActionData:     ['07', 'referenz', 'Controlling-Vorgabe', '#182F6D', '#E8F0F7'],     
    },
    {   id: 'PS0103Row0402',
        RowType: "GoalRow",
        isActive: false,
        InfoTitle: "Maximum",
        InfoText: "Dieser Wert darf nicht überschritten werden, sonst werden übergeordnete Ziele gefährdet!",
        ElementColor: '#182F6D',
        ElementBGColor: '#E8F0F7',
        Value01: 6.00, Initial01: 0, Color01: '#182F6D', BGColor01: '#FFFFFF',
        Value02: 6.50, Initial02: 0, Color02: '#182F6D', BGColor02: '#FFFFFF',
        Value03: 7.00, Initial03: 0, Color03: '#182F6D', BGColor03: '#FFFFFF',
        Value04: 6.00, Initial04: 0, Color04: '#182F6D', BGColor04: '#FFFFFF',
        Value05: 5.30, Initial05: 0, Color05: '#182F6D', BGColor05: '#FFFFFF',
        ActionData:     ['07', 'referenz', 'Controlling-Vorgabe', '#182F6D', '#E8F0F7'],     
    },
    {   id: 'PS0103Row05',
        RowType: "GoalRow",
        isActive: true,
        InfoTitle: "Endbestand",
        InfoText: "Der Endbestand berechnet sich aus Anfangsbestand + Zugang - Abgang.",
        ElementColor: '#182F6D',
        ElementBGColor: '#E8F0F7',
        Value01: 6.00, Initial01: 0, Color01: '#182F6D', BGColor01: '#FFFFFF',
        Value02: 7.50, Initial02: 0, Color02: '#182F6D', BGColor02: '#FFFFFF',
        Value03: 8.50, Initial03: 0, Color03: '#182F6D', BGColor03: '#FFFFFF',
        Value04: 11.00, Initial04: 0, Color04: '#182F6D', BGColor04: '#FFFFFF',
        Value05: 3.77, Initial05: 0, Color05: '#182F6D', BGColor05: '#FFFFFF',
        ActionData:     ['07', 'referenz', 'Controlling-Vorgabe', '#182F6D', '#E8F0F7'],     
    }
    
    ],
ppmCharts: [
    {
        id: 'Chart03',
        isActive: true,
        chartData: [
            ['Quartal', 'Default', 'Plan', 'Goal', 'Match'],
            ['Q 1', 820, 400, 800, 400],
            ['Q 2', 400, 600, 1750, 600],
            ['Q 3', 400, 1120, 1600, 700],
            ['Q 4', 300, 540, 1800, 350]
            ] ,
        chartOptions: {
        height: 250,
        backgroundColor: '#FFFFFF',
        animation:{
        duration: 1000,
        easing: 'out',
        startup: true,
        },
        chartArea: { width: '80%', height: '60%', },
        legend: {position: 'top'},
        
        series: {
            0:{color: '#F44336', visibleInLegend: true, lineWidth: 3, lineDashStyle: [10,2]},
            1:{color: '#15C0D6', visibleInLegend: true, lineWidth: 12},
            2:{color: '#3CB283', visibleInLegend: true, lineWidth: 3, lineDashStyle: [10,2]},
            3:{color: '#F2B82B', visibleInLegend: true, lineWidth: 5, }
        }
        },      
}
],
    
};

// getters
const getters = {
    getRow: (state) =>  (id) => {
        return state.PlanData.find(row => row.id === id)
    },
    getResultPS0103Row02Col01: (state, getters) => {
       const Anfangsbestand= getters.getParameter("03").Value
        return Anfangsbestand
    },
    getResultPS0103Row05Col01: (state, getters) => {
        const Endbestand = getters.getResultPS0103Row02Col01 
                                    + getters.getRow("PS0103Row03").Value01 
                                    - getters.getRow("PS0103Row04").Value01
        return Endbestand
    },
    getResultPS0103Row02Col02: (state, getters) => {
        const Anfangsbestand= getters.getResultPS0103Row05Col01
         return Anfangsbestand
     },
     getResultPS0103Row05Col02: (state, getters) => {
        const Endbestand = getters.getResultPS0103Row02Col02 
                                    + getters.getRow("PS0103Row03").Value02 
                                    - getters.getRow("PS0103Row04").Value02
        return Endbestand
    },
     getResultPS0103Row02Col03: (state, getters) => {
        const Anfangsbestand= getters.getResultPS0103Row05Col02
         return Anfangsbestand
     },
     getResultPS0103Row05Col03: (state, getters) => {
        const Endbestand = getters.getResultPS0103Row02Col03 
                                    + getters.getRow("PS0103Row03").Value03 
                                    - getters.getRow("PS0103Row04").Value03
        return Endbestand
    },
     getResultPS0103Row02Col04: (state, getters) => {
        const Anfangsbestand= getters.getResultPS0103Row05Col03
         return Anfangsbestand
     },
     getResultPS0103Row05Col04: (state, getters) => {
        const Endbestand = getters.getResultPS0103Row02Col04 
                                    + getters.getRow("PS0103Row03").Value04 
                                    - getters.getRow("PS0103Row04").Value04
        return Endbestand
    },
     getResultPS0103Row02Col05: (state, getters) => {
        const Anfangsbestand= getters.getResultPS0103Row05Col04
         return Anfangsbestand
     },    
    getResultPS0103Row05Col05: (state, getters) => {
        const Endbestand = getters.getResultPS0103Row02Col05 
                                    + getters.getRow("PS0103Row03").Value05 
                                    - getters.getRow("PS0103Row04").Value05
        return Endbestand
    },
    
   
    
};
// mutations
const mutations = {
    // Row03
    updateFieldPS0103Row03Value01(state, payload){
        const row = state.PlanData.find(row => row.id === 'PS0103Row03');
        row.Value01 = payload;
    },
    updateFieldPS0103Row03Value02(state, payload){
        const row = state.PlanData.find(row => row.id === 'PS0103Row03');
        row.Value02 = payload;
    },
    updateFieldPS0103Row03Value03(state, payload){
        const row = state.PlanData.find(row => row.id === 'PS0103Row03');
        row.Value03 = payload;
    },
    updateFieldPS0103Row03Value04(state, payload){
        const row = state.PlanData.find(row => row.id === 'PS0103Row03');
        row.Value04 = payload;
    },
    updateFieldPS0103Row03Value05(state, payload){
        const row = state.PlanData.find(row => row.id === 'PS0103Row03');
        row.Value05 = payload;
    },
    // Row04
    updateFieldPS0103Row04Value01(state, payload){
        const row = state.PlanData.find(row => row.id === 'PS0103Row04');
        row.Value01 = payload;
    },
    updateFieldPS0103Row04Value02(state, payload){
        const row = state.PlanData.find(row => row.id === 'PS0103Row04');
        row.Value02 = payload;
    },
    updateFieldPS0103Row04Value03(state, payload){
        const row = state.PlanData.find(row => row.id === 'PS0103Row04');
        row.Value03 = payload;
    },
    updateFieldPS0103Row04Value04(state, payload){
        const row = state.PlanData.find(row => row.id === 'PS0103Row04');
        row.Value04 = payload;
    },
    updateFieldPS0103Row04Value05(state, payload){
        const row = state.PlanData.find(row => row.id === 'PS0103Row04');
        row.Value05 = payload;
    },
    copyRowToRow(state, payload){
        const origin = state.PlanData.find(row => row.id === payload.origin)
        const destination = state.PlanData.find(row => row.id === payload.destination)

        destination.Value01=origin.Value01
        destination.Value02=origin.Value02
        destination.Value03=origin.Value03
        destination.Value04=origin.Value04
        destination.Value05=origin.Value05
        destination.Value06=origin.Value06
        destination.Value07=origin.Value07
        destination.Value08=origin.Value08
        destination.Value09=origin.Value09
        destination.Value10=origin.Value10
        destination.Value11=origin.Value11
        destination.Value12=origin.Value12
        destination.Value13=origin.Value13
        destination.Value14=origin.Value14
        destination.Value15=origin.Value15   
    },
    resetRow(state, payload){
        const rowToReset = state.PlanData.find(row => row.id === payload.fieldRow)

        rowToReset.Value01=rowToReset.Initial01
        rowToReset.Value02=rowToReset.Initial02
        rowToReset.Value03=rowToReset.Initial03
        rowToReset.Value04=rowToReset.Initial04
        rowToReset.Value05=rowToReset.Initial05
        rowToReset.Value06=rowToReset.Initial06
        rowToReset.Value07=rowToReset.Initial07
        rowToReset.Value08=rowToReset.Initial08
        rowToReset.Value09=rowToReset.Initial09
        rowToReset.Value10=rowToReset.Initial10
        rowToReset.Value11=rowToReset.Initial11
        rowToReset.Value12=rowToReset.Initial12
        rowToReset.Value13=rowToReset.Initial13
        rowToReset.Value14=rowToReset.Initial14
        rowToReset.Value15=rowToReset.Initial15
    },   
    showChildsRow03(state){
        const child01 = state.PlanData.find(row => row.id === 'PS0103Row0301');
        const child02 = state.PlanData.find(row => row.id === 'PS0103Row0302');
        const child03 = state.PlanData.find(row => row.id === 'PS0103Row0303');
       

        child01.isActive=!child01.isActive;
        child02.isActive=!child02.isActive;
        child03.isActive=!child03.isActive;
        
    },
    showChildsRow04(state){
        const child01 = state.PlanData.find(row => row.id === 'PS0103Row0401');
        const child02 = state.PlanData.find(row => row.id === 'PS0103Row0402');      

        child01.isActive=!child01.isActive;
        child02.isActive=!child02.isActive;
    },
    PS0103Row03Field01ColorRule: (state ) => {
            // Goal Colors
        if (state.PlanData[2].Value01 < state.PlanData[3].Value01 ) 
            {    
                state.PlanData[2].Color01 = '#F44336'; state.PlanData[2].BGColor01 = '#FFCDD2'; // rot
                state.PlanData[3].Color01 = '#F44336'; // rot
                state.PlanData[4].Color01 = '#F44336'; // rot
            } 
        else if ((state.PlanData[2].Value01 >= state.PlanData[3].Value01) & (state.PlanData[2].Value01 < state.PlanData[4].Value01) ) 
            {   
                state.PlanData[2].Color01 = '#D08B01'; state.PlanData[2].BGColor01 = '#FFF9C4'; // gelb
                state.PlanData[3].Color01 = '#3CB283'; // gruen
                state.PlanData[4].Color01 = '#F44336'; // rot
            } 
        else {  
                state.PlanData[2].Color01 = '#3CB283'; state.PlanData[2].BGColor01 = '#B9F6CA'; // gruen
                state.PlanData[3].Color01 = '#3CB283'; // gruen
                state.PlanData[4].Color01 = '#3CB283'; // gruen
            } 
          // Match Colors
        if (state.PlanData[2].Value01 === state.PlanData[5].Value01) 
              {state.PlanData[5].Color01 = '#3CB283'} // gruen
        else  {state.PlanData[5].Color01 = '#F44336'} // rot
    },
    PS0103Row03Field02ColorRule: (state ) => {
            // Goal Colors
        if (state.PlanData[2].Value02 < state.PlanData[3].Value02 ) 
            {    
                state.PlanData[2].Color02 = '#F44336'; state.PlanData[2].BGColor02 = '#FFCDD2'; // rot
                state.PlanData[3].Color02 = '#F44336'; // rot
                state.PlanData[4].Color02 = '#F44336'; // rot
            } 
        else if ((state.PlanData[2].Value02 >= state.PlanData[3].Value02) & (state.PlanData[2].Value02 < state.PlanData[4].Value02) ) 
            {   
                state.PlanData[2].Color02 = '#D08B01'; state.PlanData[2].BGColor02 = '#FFF9C4'; // gelb
                state.PlanData[3].Color02 = '#3CB283'; // gruen
                state.PlanData[4].Color02 = '#F44336'; // rot
            } 
        else {  
                state.PlanData[2].Color02 = '#3CB283'; state.PlanData[2].BGColor02 = '#B9F6CA'; // gruen
                state.PlanData[3].Color02 = '#3CB283'; // gruen
                state.PlanData[4].Color02 = '#3CB283'; // gruen
            } 
          // Match Colors
        if (state.PlanData[2].Value02 === state.PlanData[5].Value02) 
              {state.PlanData[5].Color02 = '#3CB283'} // gruen
        else  {state.PlanData[5].Color02 = '#F44336'} // rot
    },
    PS0103Row03Field03ColorRule: (state ) => {
            // Goal Colors
        if (state.PlanData[2].Value03 < state.PlanData[3].Value03 ) 
            {    
                state.PlanData[2].Color03 = '#F44336'; state.PlanData[2].BGColor03 = '#FFCDD2'; // rot
                state.PlanData[3].Color03 = '#F44336'; // rot
                state.PlanData[4].Color03 = '#F44336'; // rot
            } 
        else if ((state.PlanData[2].Value03 >= state.PlanData[3].Value03) & (state.PlanData[2].Value03 < state.PlanData[4].Value03) ) 
            {   
                state.PlanData[2].Color03 = '#D08B01'; state.PlanData[2].BGColor03 = '#FFF9C4'; // gelb
                state.PlanData[3].Color03 = '#3CB283'; // gruen
                state.PlanData[4].Color03 = '#F44336'; // rot
            } 
        else {  
                state.PlanData[2].Color03 = '#3CB283'; state.PlanData[2].BGColor03 = '#B9F6CA'; // gruen
                state.PlanData[3].Color03 = '#3CB283'; // gruen
                state.PlanData[4].Color03 = '#3CB283'; // gruen
            } 
          // Match Colors
        if (state.PlanData[2].Value03 === state.PlanData[5].Value03) 
              {state.PlanData[5].Color03 = '#3CB283'} // gruen
        else  {state.PlanData[5].Color03 = '#F44336'} // rot
    },
    PS0103Row03Field04ColorRule: (state ) => {
            // Goal Colors
        if (state.PlanData[2].Value04 < state.PlanData[3].Value04 ) 
            {    
                state.PlanData[2].Color04 = '#F44336'; state.PlanData[2].BGColor04 = '#FFCDD2'; // rot
                state.PlanData[3].Color04 = '#F44336'; // rot
                state.PlanData[4].Color04 = '#F44336'; // rot
            } 
        else if ((state.PlanData[2].Value04 >= state.PlanData[3].Value04) & (state.PlanData[2].Value04 < state.PlanData[4].Value04) ) 
            {   
                state.PlanData[2].Color04 = '#D08B01'; state.PlanData[2].BGColor04 = '#FFF9C4'; // gelb
                state.PlanData[3].Color04 = '#3CB283'; // gruen
                state.PlanData[4].Color04 = '#F44336'; // rot
            } 
        else {  
                state.PlanData[2].Color04 = '#3CB283'; state.PlanData[2].BGColor04 = '#B9F6CA'; // gruen
                state.PlanData[3].Color04 = '#3CB283'; // gruen
                state.PlanData[4].Color04 = '#3CB283'; // gruen
            } 
          // Match Colors
        if (state.PlanData[2].Value04 === state.PlanData[5].Value04) 
              {state.PlanData[5].Color04 = '#3CB283'} // gruen
        else  {state.PlanData[5].Color04 = '#F44336'} // rot
    },
    PS0103Row03Field05ColorRule: (state ) => {
            // Goal Colors
        if (state.PlanData[2].Value05 < state.PlanData[3].Value05 ) 
            {    
                state.PlanData[2].Color05 = '#F44336'; state.PlanData[2].BGColor05 = '#FFCDD2'; // rot
                state.PlanData[3].Color05 = '#F44336'; // rot
                state.PlanData[4].Color05 = '#F44336'; // rot
            } 
        else if ((state.PlanData[2].Value05 >= state.PlanData[3].Value05) & (state.PlanData[2].Value05 < state.PlanData[4].Value05) ) 
            {   
                state.PlanData[2].Color05 = '#D08B01'; state.PlanData[2].BGColor05 = '#FFF9C4'; // gelb
                state.PlanData[3].Color05 = '#3CB283'; // gruen
                state.PlanData[4].Color05 = '#F44336'; // rot
            } 
        else {  
                state.PlanData[2].Color05 = '#3CB283'; state.PlanData[2].BGColor05 = '#B9F6CA'; // gruen
                state.PlanData[3].Color05 = '#3CB283'; // gruen
                state.PlanData[4].Color05 = '#3CB283'; // gruen
            } 
          // Match Colors
        if (state.PlanData[2].Value05 === state.PlanData[5].Value05) 
              {state.PlanData[5].Color05 = '#3CB283'} // gruen
        else  {state.PlanData[5].Color05 = '#F44336'} // rot
    },
    PS0103Row04Field01ColorRule: (state ) => {
        // Goal Colors
    if ((state.PlanData[6].Value01 < state.PlanData[7].Value01 ) || (state.PlanData[6].Value01 > state.PlanData[8].Value01 ))
        {    
            state.PlanData[6].Color01 = '#F44336'; state.PlanData[6].BGColor01 = '#FFCDD2'; // rot
            state.PlanData[7].Color01 = '#F44336'; // rot
            state.PlanData[8].Color01 = '#F44336'; // rot
        } 
    else if (state.PlanData[6].Value01 === state.PlanData[7].Value01)
        {   
            state.PlanData[6].Color01 = '#D08B01'; state.PlanData[6].BGColor01 = '#FFF9C4'; // gelb
            state.PlanData[7].Color01 = '#D08B01'; // gelb
            state.PlanData[8].Color01 = '#3CB283'; // gruen
        } 
    else if (state.PlanData[6].Value01 === state.PlanData[8].Value01) 
        {   
            state.PlanData[6].Color01 = '#D08B01'; state.PlanData[6].BGColor01 = '#FFF9C4'; // gelb
            state.PlanData[7].Color01 = '#3CB283'; // gruen
            state.PlanData[8].Color01 = '#D08B01'; // gelb
        } 
    else {  
            state.PlanData[6].Color01 = '#3CB283'; state.PlanData[6].BGColor01 = '#B9F6CA'; // gruen
            state.PlanData[7].Color01 = '#3CB283'; // gruen
            state.PlanData[8].Color01 = '#3CB283'; // gruen
        } 
    },
    PS0103Row04Field02ColorRule: (state ) => {
        // Goal Colors
        if ((state.PlanData[6].Value02 < state.PlanData[7].Value02 ) || (state.PlanData[6].Value02 > state.PlanData[8].Value02 ))
        {    
            state.PlanData[6].Color02 = '#F44336'; state.PlanData[6].BGColor02 = '#FFCDD2'; // rot
            state.PlanData[7].Color02 = '#F44336'; // rot
            state.PlanData[8].Color02 = '#F44336'; // rot
        } 
    else if (state.PlanData[6].Value02 === state.PlanData[7].Value02)
        {   
            state.PlanData[6].Color02 = '#D08B01'; state.PlanData[6].BGColor02 = '#FFF9C4'; // gelb
            state.PlanData[7].Color02 = '#D08B01'; // gelb
            state.PlanData[8].Color02 = '#3CB283'; // gruen
        } 
    else if (state.PlanData[6].Value02 === state.PlanData[8].Value02) 
        {   
            state.PlanData[6].Color02 = '#D08B01'; state.PlanData[6].BGColor02 = '#FFF9C4'; // gelb
            state.PlanData[7].Color02 = '#3CB283'; // gruen
            state.PlanData[8].Color02 = '#D08B01'; // gelb
        } 
    else {  
            state.PlanData[6].Color02 = '#3CB283'; state.PlanData[6].BGColor02 = '#B9F6CA'; // gruen
            state.PlanData[7].Color02 = '#3CB283'; // gruen
            state.PlanData[8].Color02 = '#3CB283'; // gruen
        }     
        },
    PS0103Row04Field03ColorRule: (state ) => {
        // Goal Colors
        if ((state.PlanData[6].Value03 < state.PlanData[7].Value03 ) || (state.PlanData[6].Value03 > state.PlanData[8].Value03 ))
        {    
            state.PlanData[6].Color03 = '#F44336'; state.PlanData[6].BGColor03 = '#FFCDD2'; // rot
            state.PlanData[7].Color03 = '#F44336'; // rot
            state.PlanData[8].Color03 = '#F44336'; // rot
        } 
    else if (state.PlanData[6].Value03 === state.PlanData[7].Value03)
        {   
            state.PlanData[6].Color03 = '#D08B01'; state.PlanData[6].BGColor03 = '#FFF9C4'; // gelb
            state.PlanData[7].Color03 = '#D08B01'; // gelb
            state.PlanData[8].Color03 = '#3CB283'; // gruen
        } 
    else if (state.PlanData[6].Value03 === state.PlanData[8].Value03) 
        {   
            state.PlanData[6].Color03 = '#D08B01'; state.PlanData[6].BGColor03 = '#FFF9C4'; // gelb
            state.PlanData[7].Color03 = '#3CB283'; // gruen
            state.PlanData[8].Color03 = '#D08B01'; // gelb
        } 
    else {  
            state.PlanData[6].Color03 = '#3CB283'; state.PlanData[6].BGColor03 = '#B9F6CA'; // gruen
            state.PlanData[7].Color03 = '#3CB283'; // gruen
            state.PlanData[8].Color03 = '#3CB283'; // gruen
        } 
    },
    PS0103Row04Field04ColorRule: (state ) => {
        // Goal Colors
        if ((state.PlanData[6].Value04 < state.PlanData[7].Value04 ) || (state.PlanData[6].Value04 > state.PlanData[8].Value04 ))
        {    
            state.PlanData[6].Color04 = '#F44336'; state.PlanData[6].BGColor04 = '#FFCDD2'; // rot
            state.PlanData[7].Color04 = '#F44336'; // rot
            state.PlanData[8].Color04 = '#F44336'; // rot
        } 
    else if (state.PlanData[6].Value04 === state.PlanData[7].Value04)
        {   
            state.PlanData[6].Color04 = '#D08B01'; state.PlanData[6].BGColor04 = '#FFF9C4'; // gelb
            state.PlanData[7].Color04 = '#D08B01'; // gelb
            state.PlanData[8].Color04 = '#3CB283'; // gruen
        } 
    else if (state.PlanData[6].Value04 === state.PlanData[8].Value04) 
        {   
            state.PlanData[6].Color04 = '#D08B01'; state.PlanData[6].BGColor04 = '#FFF9C4'; // gelb
            state.PlanData[7].Color04 = '#3CB283'; // gruen
            state.PlanData[8].Color04 = '#D08B01'; // gelb
        } 
    else {  
            state.PlanData[6].Color04 = '#3CB283'; state.PlanData[6].BGColor04 = '#B9F6CA'; // gruen
            state.PlanData[7].Color04 = '#3CB283'; // gruen
            state.PlanData[8].Color04 = '#3CB283'; // gruen
        } 
    },
    PS0103Row04Field05ColorRule: (state ) => {
        // Goal Colors
        if ((state.PlanData[6].Value05 < state.PlanData[7].Value05 ) || (state.PlanData[6].Value05 > state.PlanData[8].Value05 ))
        {    
            state.PlanData[6].Color05 = '#F44336'; state.PlanData[6].BGColor05 = '#FFCDD2'; // rot
            state.PlanData[7].Color05 = '#F44336'; // rot
            state.PlanData[8].Color05 = '#F44336'; // rot
        } 
    else if (state.PlanData[6].Value05 === state.PlanData[7].Value05)
        {   
            state.PlanData[6].Color05 = '#D08B01'; state.PlanData[6].BGColor05 = '#FFF9C4'; // gelb
            state.PlanData[7].Color05 = '#D08B01'; // gelb
            state.PlanData[8].Color05 = '#3CB283'; // gruen
        } 
    else if (state.PlanData[6].Value05 === state.PlanData[8].Value05) 
        {   
            state.PlanData[6].Color05 = '#D08B01'; state.PlanData[6].BGColor05 = '#FFF9C4'; // gelb
            state.PlanData[7].Color05 = '#3CB283'; // gruen
            state.PlanData[8].Color05 = '#D08B01'; // gelb
        } 
    else {  
            state.PlanData[6].Color05 = '#3CB283'; state.PlanData[6].BGColor05 = '#B9F6CA'; // gruen
            state.PlanData[7].Color05 = '#3CB283'; // gruen
            state.PlanData[8].Color05 = '#3CB283'; // gruen
        } 
    }
   
};

// actions
const actions = {
    copyRowToRow(context, payload) {
        context.commit('copyRowToRow', payload)
    },
    // postPlanValue(context, payload) {
    //     context.commit('postPlanValue', payload)
    // },
    resetRow(context, payload) {
        context.commit('resetRow', payload)
    },
    showChildsRow03(context, payload) {
        context.commit('showChildsRow03', payload)
    },
    showChildsRow04(context, payload) {
        context.commit('showChildsRow04', payload)
    },
    // Row03
    updateFieldPS0103Row03Value01(context, payload) {
        context.commit('updateFieldPS0103Row03Value01', payload)
    },
    updateFieldPS0103Row03Value02(context, payload) {
        context.commit('updateFieldPS0103Row03Value02', payload)
    },
    updateFieldPS0103Row03Value03(context, payload) {
        context.commit('updateFieldPS0103Row03Value03', payload)
    },
    updateFieldPS0103Row03Value04(context, payload) {
        context.commit('updateFieldPS0103Row03Value04', payload)
    },
    updateFieldPS0103Row03Value05(context, payload) {
        context.commit('updateFieldPS0103Row03Value05', payload)
    },
    // Row04
    updateFieldPS0103Row04Value01(context, payload) {
        context.commit('updateFieldPS0103Row04Value01', payload)
    },
    updateFieldPS0103Row04Value02(context, payload) {
        context.commit('updateFieldPS0103Row04Value02', payload)
    },
    updateFieldPS0103Row04Value03(context, payload) {
        context.commit('updateFieldPS0103Row04Value03', payload)
    },
    updateFieldPS0103Row04Value04(context, payload) {
        context.commit('updateFieldPS0103Row04Value04', payload)
    },
    updateFieldPS0103Row04Value05(context, payload) {
        context.commit('updateFieldPS0103Row04Value05', payload)
    },

    ColorTrigger: ({ commit }) => { 
        commit('PS0103Row03Field01ColorRule'), 
        commit('PS0103Row03Field02ColorRule'),
        commit('PS0103Row03Field03ColorRule'),
        commit('PS0103Row03Field04ColorRule'),
        commit('PS0103Row03Field05ColorRule'),
        commit('PS0103Row04Field01ColorRule'),
        commit('PS0103Row04Field02ColorRule'),
        commit('PS0103Row04Field03ColorRule'),
        commit('PS0103Row04Field04ColorRule'),
        commit('PS0103Row04Field05ColorRule')
    }
};
export default {
    state,
    getters,
    mutations,
    actions    
}