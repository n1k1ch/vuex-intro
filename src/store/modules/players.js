import api from "../../api/players-api"
import * as types from "../mutation-types"

const state = {
    players: []
}

const getters = {
    allPlayers: state => state.players
}

const actions = {
    getAllPlayers(context) {
        api.getAll(res => {
            context.commit(types.PLAYERS_LOADED, res);
        });
    }
};

const mutations = {
    [types.PLAYERS_LOADED] (state, payload) {
        state.players = payload;
    }
}

export default {
    state,
    getters,
    actions,
    mutations
}