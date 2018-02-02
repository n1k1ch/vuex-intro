import * as types from "../mutation-types";
import entriesApi from '../../api/entries-api';

const state = {
    entries: []
};

const getters = {
    entries: (state, getters, rootState) => {
        const result = state.entries.map(e => {
            const p1 = rootState.players.players.find(p => p.id === e.playerOne);
            const p2 = rootState.players.players.find(p => p.id === e.playerTwo);

            return {
                score: `${e.scoreOne} : ${e.scoreTwo}`,
                nameOne: p1 != undefined ? p1.name : "?",
                nameTwo: p2 != undefined ? p2.name : "?"
            };
        });
        return result;
    }
};

const actions = {
    getAllEntries(context) {
        entriesApi.getAll(res => {
            context.commit(types.ENTRIES_LOADED, res);
        });
    }
}

const mutations = {
    [types.ENTRIES_LOADED] (state, payload) {
        state.entries = payload.slice();
    },

    [types.ADD_ENTRY] (state, payload) {
        state.entries.push(payload);
    },
}

export default {
    state,
    getters,
    actions,
    mutations
}