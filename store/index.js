import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const createStore = () => {
  return new Vuex.Store({
    state: () => ({
      movies: [
        {
          Title: 'Star Wars: Episode IV - A New Hope',
          Year: '1977',
          Rated: 'PG',
          Released: '25 May 1977',
          Runtime: '121 min',
          Genre: 'Action, Adventure, Fantasy',
          Director: 'George Lucas',
          Writer: 'George Lucas',
          Actors: 'Mark Hamill, Harrison Ford, Carrie Fisher, Peter Cushing',
          Plot:
            "Luke Skywalker joins forces with a Jedi Knight, a cocky pilot, a Wookiee and two droids to save the galaxy from the Empire's world-destroying battle-station while also attempting to rescue Princess Leia from the evil Darth Vader.",
          Language: 'English',
          Country: 'USA',
          Awards: 'Won 6 Oscars. Another 50 wins & 28 nominations.',
          Poster:
            'https://images-na.ssl-images-amazon.com/images/M/MV5BNzVlY2MwMjktM2E4OS00Y2Y3LWE3ZjctYzhkZGM3YzA1ZWM2XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg',
          Ratings: [
            { Source: 'Internet Movie Database', Value: '8.6/10' },
            { Source: 'Rotten Tomatoes', Value: '93%' },
            { Source: 'Metacritic', Value: '90/100' },
          ],
          Metascore: '90',
          imdbRating: '8.6',
          imdbVotes: '1,035,722',
          imdbID: 'tt0076759',
          Type: 'movie',
          DVD: '21 Sep 2004',
          BoxOffice: 'N/A',
          Production: '20th Century Fox',
          Website: 'http://www.starwars.com/episode-iv/',
          Response: 'True',
        },
      ],
      page: 1,
      search: '',
    }),
    mutations: {
      setMovies: (state, payload) => {
        state.movies = payload
      },
      setPage: (state, payload) => {
        state.page = payload.page
      },
      setSearch: (state, payload) => {
        state.search = payload.search
      },
    },
    actions: {
      async fetchMoviesAsync(context, search) {
        try {
          const response = await fetch(
            `https://www.omdbapi.com/?apikey=55c7fd4a&s=${search}&page=${context.state.page}`
          )
          const data = await response.json()
          console.log(data)
          context.commit('setMovies', data.Search)
        } catch (err) {
          alert(err)
        }
      },
    },
  })
}

export default createStore
