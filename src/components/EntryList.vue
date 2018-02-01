<template>
  <div id="entry-list">
    <h2>Entries</h2>
    <ul>
        <li v-for="entry in entries" :key="entry.id">
          {{entry}}
        </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: ["entries"],
  data () {
    return {
    }
  }
}
</script>

<style scoped>
  ul {
    background: pink;
  }
</style>
