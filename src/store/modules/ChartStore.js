// **********************************************
// *  Charts                                    *
// **********************************************

const state = {
    ppmCharts: [
        {
            id: 'Chart03',
            isActive: false,
            chartData: [
                ['Quartal', 'Plan', 'Match', 'Default', 'Goal'],
                ['2022', 2, 3, 5, 4],
                ['2023', 2, 3, 5, 4],
                ['2024', 2, 3, 5, 4],
                ['2025', 2, 3, 5, 4],
                ['2026', 2, 3, 5, 4]
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
                    0:{color: '#15C0D6', visibleInLegend: true, lineWidth: 12},
                    1:{color: '#F2B82B', visibleInLegend: true, lineWidth: 7},
                    2:{color: '#F44336', visibleInLegend: true, lineWidth: 3, lineDashStyle: [10,2]}, 
                    3:{color: '#3CB283', visibleInLegend: true, lineWidth: 3, lineDashStyle: [10,2]}                
                }
            },      
    },
    {
        id: 'Chart04',
        isActive: false,
        chartData: [
            ['Quartal', 'Plan', 'Min', 'Max'],
            ['2022', 4, 3, 5],
            ['2023', 2, 3.25, 5.25],
            ['2024', 4, 3.5, 5.5],
            ['2025', 5, 3.75, 5.75],
            ['2026', 5, 4, 6]
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
                0:{color: '#15C0D6', visibleInLegend: true, lineWidth: 12},
                1:{color: '#F44336', visibleInLegend: true, lineWidth: 3, lineDashStyle: [4,4]},
                2:{color: '#F44336', visibleInLegend: true, lineWidth: 3, lineDashStyle: [4,4]}             
            }
        },      
}
    ],
    



};

// getters
const getters = {
    getChart: (state) => (id) => {
        const chart = state.ppmCharts.find(row => row.id === id);
       
        return chart
         
    },
};
// mutations
const mutations = {
    PS0103Row03Chart03(state, payload) {
        // Chart Data
        // const origin = this.$store.state.PlanData.find(row => row.id === payload.origin)
            // Plan
            state.ppmCharts[0].chartData[1][1] = payload.Column01.Value01;
            state.ppmCharts[0].chartData[2][1] = payload.Column01.Value02;
            state.ppmCharts[0].chartData[3][1] = payload.Column01.Value03;
            state.ppmCharts[0].chartData[4][1] = payload.Column01.Value04;
            state.ppmCharts[0].chartData[5][1] = payload.Column01.Value05;
            // Match
            state.ppmCharts[0].chartData[1][2] = payload.Column02.Value01;
            state.ppmCharts[0].chartData[2][2] = payload.Column02.Value02;
            state.ppmCharts[0].chartData[3][2] = payload.Column02.Value03;
            state.ppmCharts[0].chartData[4][2] = payload.Column02.Value04;
            state.ppmCharts[0].chartData[5][2] = payload.Column02.Value05;
            // Default
            state.ppmCharts[0].chartData[1][3] = payload.Column03.Value01;
            state.ppmCharts[0].chartData[2][3] = payload.Column03.Value02;
            state.ppmCharts[0].chartData[3][3] = payload.Column03.Value03;
            state.ppmCharts[0].chartData[4][3] = payload.Column03.Value04;
            state.ppmCharts[0].chartData[5][3] = payload.Column03.Value05;
            // Goal
            state.ppmCharts[0].chartData[1][4] = payload.Column04.Value01;
            state.ppmCharts[0].chartData[2][4] = payload.Column04.Value02;
            state.ppmCharts[0].chartData[3][4] = payload.Column04.Value03;
            state.ppmCharts[0].chartData[4][4] = payload.Column04.Value04;
            state.ppmCharts[0].chartData[5][4] = payload.Column04.Value05;
          
},
showChart03(state){
    state.ppmCharts[0].isActive=! state.ppmCharts[0].isActive
},
PS0103Row04Chart04(state, payload) {
    // Chart Data
    // const origin = this.$store.state.PlanData.find(row => row.id === payload.origin)
        // Plan
        state.ppmCharts[1].chartData[1][1] = payload.Column01.Value01;
        state.ppmCharts[1].chartData[2][1] = payload.Column01.Value02;
        state.ppmCharts[1].chartData[3][1] = payload.Column01.Value03;
        state.ppmCharts[1].chartData[4][1] = payload.Column01.Value04;
        state.ppmCharts[1].chartData[5][1] = payload.Column01.Value05;
        // Default
        state.ppmCharts[1].chartData[1][2] = payload.Column02.Value01;
        state.ppmCharts[1].chartData[2][2] = payload.Column02.Value02;
        state.ppmCharts[1].chartData[3][2] = payload.Column02.Value03;
        state.ppmCharts[1].chartData[4][2] = payload.Column02.Value04;
        state.ppmCharts[1].chartData[5][2] = payload.Column02.Value05;
        // Goal
        state.ppmCharts[1].chartData[1][3] = payload.Column03.Value01;
        state.ppmCharts[1].chartData[2][3] = payload.Column03.Value02;
        state.ppmCharts[1].chartData[3][3] = payload.Column03.Value03;
        state.ppmCharts[1].chartData[4][3] = payload.Column03.Value04;
        state.ppmCharts[1].chartData[5][3] = payload.Column03.Value05;
      
},
showChart04(state){
    state.ppmCharts[1].isActive=! state.ppmCharts[1].isActive
},
   
};
// actions
const actions = {
    Chart03Trigger: (context, payload ) => { context.commit('PS0103Row03Chart03', payload)},
    showChart03( context ) {context.commit('showChart03')},

    Chart04Trigger: (context, payload ) => { context.commit('PS0103Row04Chart04', payload)},
    showChart04( context ) {context.commit('showChart04')},
  
}
export default {
    state,
    getters,
    mutations,
    actions    
}