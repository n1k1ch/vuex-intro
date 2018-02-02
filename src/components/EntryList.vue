<template>
  <div id="entry-list">
    <h2>Entries</h2>
    <div>
        <div v-for="entry in entries" :key="entry.id" class="entry">
          <div class="name-one">{{entry.nameOne}}</div>
          <div class="score">{{entry.score}}</div>
          <div class="name-two">{{entry.nameTwo}}</div>
        </div>
    </div>
    <div>
      <add-entry v-if="canAddEntry"></add-entry>
      <div v-else>Cannot add entries - at least two players needed to play a game</div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import AddEntry from "./AddEntry.vue"

export default {
  components: {
    "add-entry": AddEntry
  },
  computed: mapGetters([
      "entries",
      "canAddEntry"
  ])
}
</script>

<style scoped>
  ul {
    background: rgb(110, 73, 4);
  }

  .entry {
    display: flex;
    text-align: center;
  }

  .score, .name-one, .name-two {
    flex: 1;
  }
</style>
