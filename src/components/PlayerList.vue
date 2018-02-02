<template>
  <div id="player-list">
    <h2>Players</h2>
    <ul>
        <li v-for="player in allPlayers" :key="player.id">
            {{ player.name }}
        </li>
    </ul>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  computed: mapGetters([
    "allPlayers"
  ])
}
</script>

<style scoped>
li {
    display: block;
}
</style>
