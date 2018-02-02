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
  ]),
  created() {
    this.$store.dispatch("getAllPlayers");
  }
}
</script>

<style lang="scss" scoped>
ul {
  list-style-type: none;
}
li {
    display: block;
}
</style>
