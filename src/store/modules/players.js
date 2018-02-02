const state = {
    players: [
        {id: "1", name: "Nikita"},
        {id: "2", name: "Opponent"}
      ]
}

const getters = {
    allPlayers: state => state.players
}

export default {
    state,
    getters
}