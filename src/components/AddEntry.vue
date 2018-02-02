<template>
<div>
    <h2>Add Entry</h2>
    <div class="players-vs">
        <div class="player player-one">
            <select name="player-one"
                id="player-one"
                class="player-input"
                @change="changePlayerOne">
                <option value="">Player one...</option>
                <option v-for="player in playersOne"
                    :key="player.id"
                    :value="player.id">
                    {{ player.name }}
                </option>
            </select>
            <input type="number"
                class="score-input"
                min="0"
                @input="changeScoreOne"/>
        </div>
        <div class="player player-two">
            <select name="player-two"
                id="player-two"
                class="player-input"
                @change="changePlayerTwo">
                <option value="">Player two...</option>
                <option v-for="player in playersTwo"
                    :key="player.id"
                    :value="player.id">
                    {{ player.name }}
                </option>
            </select>
            <input type="number"
                class="score-input"
                min="0"
                @input="changeScoreTwo"/>
        </div>
    </div>
    <button :disabled="!isValidEntry"
        @click="addEntry">Add Entry</button>
</div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  computed: mapGetters([
      "playersOne",
      "playersTwo",
      "isValidEntry"
  ]),
  methods: {
      ...mapActions(["addEntry"]),
      changePlayerOne(e) {
          this.$store.dispatch("changePlayerOne", e.target.value);
      },
      changePlayerTwo(e) {
          this.$store.dispatch("changePlayerTwo", e.target.value);
      },
      changeScoreOne(e) {
          this.$store.dispatch("changeScoreOne", e.target.value);
      },
      changeScoreTwo(e) {
          this.$store.dispatch("changeScoreTwo", e.target.value);
      }
  }
}
</script>

<style lang="scss" scoped>
.players-vs {
    display: flex;

    .player {
        padding: 0.5rem 0;
        flex: 1;

        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .score-input {
        width: 50%;
        height: 100px;
        font-size: 3.0rem;
    }

    .player-input {
        width: 95%;
    }
}
</style>
