<template>
    <div>
        <div class="testmargin white--text display-3">Action and Mutation Test</div>
        <div>
            <v-btn
            depressed
            color="primary"
            class="mt-6"
            @click="toggleGoal"          
            >
            Toggle Goal
            </v-btn>
        </div>
        <div class="white--text display-1">{{ isActive1 }}</div>
        <div>
            <v-btn
            depressed
            color="primary"
            class="mt-6"
            @click="toggleMatch"
            >
            Toggle Match
            </v-btn>
        </div>
        <div class="white--text display-1">{{ isActive2 }}</div>
    </div>
</template>

<script>
    import { mapGetters } from 'vuex';
    // import { mapState } from 'vuex';
    import { mapActions } from 'vuex';
    import * as types from '../../store/types';

    
    export default {
        name: "StoreTest",
        methods: {
            ...mapActions({
                toggleGoal: types.PL01PST01ROW04_TOGGLE_ACTIVE,             
                toggleMatch: types.PL01PST01ROW05_TOGGLE_ACTIVE
            })
            
        },
        computed: {
        ...mapGetters({
            isActive1: types.Get_01_01_ROW04_ACTIVE,
            isActive2: types.Get_01_01_ROW05_ACTIVE
        })
        },
    }
</script>

