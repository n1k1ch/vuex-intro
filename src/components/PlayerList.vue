<template>
  <div id="player-list">
    <h2>Players</h2>
    <ul>
        <li v-for="player in players" :key="player.id">
            {{ player }}
        </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: ["players"],
  data () {
    return {
    }
  }
}
</script>

<style scoped>
li {
    display: block;
}
</style>
