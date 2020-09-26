<template>
  <div>
    <v-row v-if="isLoading" justify="center" align="center">
      <v-progress-circular indeterminate size="64"></v-progress-circular>
    </v-row>
    <v-card v-else class="mx-auto">
      <div class="d-flex flex-no-wrap justify-space-between">
        <div class="col-6">
          <v-card-title> {{ movie.Title }} </v-card-title>
          <v-card-subtitle
            >by {{ movie.Director }} - {{ movie.Released }}</v-card-subtitle
          >
          <v-card-text>
            <div class="my-3">
              <h4>Overview</h4>
              {{ movie.Plot }}
            </div>
            <div class="my-3">
              <h4>Languages</h4>
              {{ movie.Language }}
            </div>
            <div class="my-3">
              <h4>Genre</h4>
              {{ movie.Genre }}
            </div>
            <div class="my-3">
              <h4>Actors</h4>
              {{ movie.Actors }}
            </div>
            <div class="my-3">
              <h4>Runtime</h4>
              {{ movie.Runtime }}
            </div>
            <div class="my-3">
              <h4>Awards</h4>
              {{ movie.Awards }}
            </div>
          </v-card-text>
        </div>

        <v-avatar class="ma-3" size="125" tile>
          <v-img :src="movie.Poster"></v-img>
        </v-avatar>
      </div>
    </v-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isLoading: true,
      movie: {},
    }
  },
  async beforeMount() {
    const response = await fetch(
      `https://www.omdbapi.com/?apikey=55c7fd4a&i=${this.$route.params.id}`
    )
    const data = await response.json()
    this.movie = data
    this.isLoading = false
  },
}
</script>
