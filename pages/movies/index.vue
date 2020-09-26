<template>
  <v-layout>
    <v-flex>
      <movie
        v-for="(movie, index) in movies"
        :key="movie.imdbId"
        :item="movie"
        :color="color(index)"
      ></movie>
      <v-row justify="center" align="center">
        <v-btn :loading="isLoading" :disabled="isLoading" @click="loadMore"
          >Load more</v-btn
        >
      </v-row>
    </v-flex>
  </v-layout>
</template>

<script>
import Movie from '../../components/Movie.vue'
import colors from '../../colors'

export default {
  components: {
    Movie,
  },
  data() {
    return {
      isLoading: false,
    }
  },
  computed: {
    movies() {
      return this.$store.getters.getMovies
    },
    color() {
      return (index) => colors[index % colors.length]
    },
  },
  beforeDestroy() {
    this.$store.commit('setSearch', '')
  },
  methods: {
    async loadMore() {
      await this.$store.dispatch('loadMore')
    },
  },
}
</script>
