import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';

const API_KEY = '8b49236e6b82eb62c6f5cab7126e8684';

export function getTrending() {
  return axios
    .get(`/trending/movie/day?api_key=${API_KEY}`)
    .then(response => response.data.results);
}

export function getMovieById(id) {
  return axios
    .get(`/movie/${id}?api_key=${API_KEY}`)
    .then(response => response.data);
}

export function getMoviesByQuery(query, page = 1) {
  return axios
    .get(
      `/search/movie?api_key=${API_KEY}&query=${query}&page=${page}&include_adult=false&language=en-US`,
    )
    .then(response => response.data);
}

export function getMovieCredits(id) {
  return axios
    .get(`movie/${id}/credits?api_key=${API_KEY}`)
    .then(response => response.data);
}

export function getMovieReviews(id) {
  return axios
    .get(`movie/${id}/reviews?api_key=${API_KEY}`)
    .then(response => response.data.results);
}
