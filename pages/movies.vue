<template>
  <v-layout>
    <v-flex>
      <movie
        v-for="(movie, index) in movies"
        :key="movie.imdbId"
        :item="movie"
        :color="color(index)"
      ></movie>
    </v-flex>
  </v-layout>
</template>

<script>
import Movie from '../components/Movie.vue'
import colors from '../colors'

export default {
  beforeDestroy() {
    this.$store.commit('setSearch', '')
  },
  components: {
    Movie,
  },
  computed: {
    movies() {
      return this.$store.getters.getMovies
    },
    color() {
      return (index) => colors[index % colors.length]
    },
  },
}
</script>
