<template>
  <div id="app">
    <player-list v-bind:players="players"></player-list>
    <entry-list v-bind:entries="entries"></entry-list>
  </div>
</template>

<script>
import PlayerList from "./components/PlayerList.vue";
import EntryList from "./components/EntryList.vue";

export default {
  components: {
    "player-list": PlayerList,
    "entry-list": EntryList
  },
  name: 'app',
  data () {
    return {
      players: [
        {id: 1, name: "Nikita"},
        {id: 2, name: "Opponent"}
      ],
      entries: [
        {id: 1, winner: 1, looser: 2, won: 3, lost: 1},
        {id: 2, winner: 2, looser: 1, won: 3, lost: 2},
        {id: 3, winner: 1, looser: 2, won: 3, lost: 2},
        {id: 4, winner: 1, looser: 2, won: 3, lost: 2},
      ]
    }
  }
}
</script>

<style>
</style>
