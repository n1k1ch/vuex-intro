<template>
  <div id="app">
    <player-list></player-list>
    <entry-list></entry-list>
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
  name: 'app'
}
</script>

<style>
* {
  box-sizing: border-box;
}

body {
  color: #eee;
  background: #333;
  margin: 0;
}

#app {
  margin: 0.25rem;
}
</style>
