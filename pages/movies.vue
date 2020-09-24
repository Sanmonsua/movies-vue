<template>
  <v-layout>
    <v-flex class="text-center">
      <img src="/v.png" alt="Vuetify.js" class="mb-5" />
      <p v-for="movie in movies" :key="movie">{{ movie.Title }}</p>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  computed: {
    movies() {
      return this.$store.state.movies
    },
  },
}
</script>
