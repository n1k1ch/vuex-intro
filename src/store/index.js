import Vue from 'vue'
import Vuex from 'vuex'
import players from './modules/players'
import entries from './modules/entries'
import addEntry from './modules/addEntry'

Vue.use(Vuex);

export default new Vuex.Store({
    strict: true,
    modules: {
        players,
        entries,
        addEntry
    }
});;