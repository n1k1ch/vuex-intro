import * as types from "../mutation-types"

const state = {
    playerOne: undefined,
    playerTwo: undefined,
    scoreOne: undefined,
    scoreTwo: undefined
};

const getters = {
    playersOne: (state, getters, rootState) => {
        var result = rootState.players.players.filter(p => p.id !== state.playerTwo);

        return result;
    },
    playersTwo: (state, getters, rootState) => {
        var result = rootState.players.players.filter(p => p.id !== state.playerOne);

        return result;
    },
    canAddEntry: (state, getters, rootState) => {
        return rootState.players.players.length > 1;
    },
    isValidEntry: (state) => {
        return state.playerOne != undefined
        && state.playerTwo != undefined
        && (state.scoreOne != undefined && state.scoreOne !== "")
        && (state.scoreTwo != undefined && state.scoreTwo !== "");
    }
};

const actions = {
    changePlayerOne (context, payload) {
        context.commit(types.CHANGE_PLAYER_ONE, payload);
    },

    changeScoreOne(context, payload) {
        context.commit(types.CHANGE_SCORE_ONE, payload);
    },

    changePlayerTwo (context, payload) {
        context.commit(types.CHANGE_PLAYER_TWO, payload);
    },

    changeScoreTwo(context, payload) {
        context.commit(types.CHANGE_SCORE_TWO, payload);
    },

    addEntry(context, payload) {
        context.commit(types.ADD_ENTRY, {...state});
    }
};

const mutations = {
    [types.CHANGE_PLAYER_ONE] (state, payload) {
        state.playerOne = payload;
    },

    [types.CHANGE_PLAYER_TWO] (state, payload) {
        state.playerTwo = payload;
    },

    [types.CHANGE_SCORE_ONE] (state, payload) {
        state.scoreOne = payload;
    },

    [types.CHANGE_SCORE_TWO] (state, payload) {
        state.scoreTwo = payload;
    }
};

export default {
    state,
    getters,
    actions,
    mutations
}