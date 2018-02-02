import * as types from "../mutation-types";

const state = {
    entries: [
        {id: "1", playerOne: "1", playerTwo: "2", scoreOne: 3, scoreTwo: 1}
    ]
};

const getters = {
    entries: (state, getters, rootState) => {
        const result = state.entries.map(e => {
            return {
                score: `${e.scoreOne} : ${e.scoreTwo}`,
                nameOne: rootState.players.players.find(p => p.id === e.playerOne).name,
                nameTwo: rootState.players.players.find(p => p.id === e.playerTwo).name
            };
        });
        return result;
    }
};

const mutations = {
    [types.ADD_ENTRY] (state, payload) {
        state.entries.push(payload);
    },
}

export default {
    state,
    getters,
    mutations
}