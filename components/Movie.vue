<template>
  <v-card raised elevation="24" class="ma-10">
    <v-card raised :color="color" dark>
      <div class="d-flex flex-no-wrap justify-space-between">
        <div class="col-6">
          <span
            class="d-inline-block text-truncate headline"
            style="max-width: 100%"
          >
            {{ item.Title }}
          </span>

          <v-card-subtitle>
            {{ item.Year }} - {{ item.imdbID }}
          </v-card-subtitle>
        </div>

        <v-avatar class="ma-3" size="125" tile>
          <v-img :src="item.Poster"></v-img>
        </v-avatar>
      </div>
    </v-card>
  </v-card>
</template>

<script>
export default {
  props: ['item', 'color'],
}
</script>
