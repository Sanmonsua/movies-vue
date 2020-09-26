<template>
  <div>
    <v-row justify="center" align="center">
      <v-col cols="12" sm="8" md="6">
        <v-card class="pa-5">
          <v-card-title class="headline">
            Discover tons of movies and series
          </v-card-title>
          <v-col cols="12">
            <v-text-field
              v-model="search"
              label="Search by title/imdb/year"
            ></v-text-field>
          </v-col>

          <v-card-actions>
            <v-btn
              color="primary"
              elevation="10"
              block
              tile
              :loading="loading"
              :disabled="search.length ? false : true"
              @click="fetchMovies"
            >
              Search
            </v-btn>
          </v-card-actions>
          <v-spacer />
        </v-card>
        <v-alert v-if="err" dense outlined class="ma-10" type="error">{{
          err
        }}</v-alert>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      search: '',
      err: '',
      loading: false,
    }
  },
  computed: {
    state() {
      return this.$store.state
    },
  },
  methods: {
    async fetchMovies() {
      this.loading = true
      await this.$store.dispatch('fetchMoviesAsync', this.search)
      if (this.$store.state.movies) {
        this.$router.push({
          path: '/movies',
        })
      } else {
        setTimeout(() => (this.err = ''), 1500)
        this.err = 'Not Found :('
      }
      this.loading = false
    },
  },
}
</script>
