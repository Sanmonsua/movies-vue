<template>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="8" md="6">
      <v-card class="pa-5">
        <v-card-title class="headline">
          Discover tons of movies and series
        </v-card-title>
        <v-col cols="12">
          <v-text-field
            label="Search by title/imdb/year"
            v-model="search"
          ></v-text-field>
        </v-col>

        <v-card-actions>
          <v-btn
            color="primary"
            elevation="10"
            block
            tile
            to="/movies"
            @click="fetchMovies"
            :disabled="search.length ? false : true"
          >
            Search
          </v-btn>
        </v-card-actions>
        <v-spacer />
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
  data() {
    return {
      search: '',
    }
  },
  computed: {
    state() {
      return this.$store.state
    },
  },
  methods: {
    fetchMovies() {
      this.$store.dispatch('fetchMoviesAsync', this.search)
    },
  },
}
</script>
