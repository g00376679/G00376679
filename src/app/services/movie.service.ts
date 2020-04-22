import { Injectable } from '@angular/core';
import { apikey } from './../../environments/environment';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private http: HttpClient) {
  }

  // get list of popular movies
  getPolularMovieLists() {
    let url = `https://api.themoviedb.org/3/movie/popular?api_key=${apikey}&language=en-US&page=1`;
    return this.http.get(url);
  }

  // get list of top rated movies
  getTopRatedMovieLists() {
    let url = `https://api.themoviedb.org/3/movie/top_rated?api_key=${apikey}&language=en-US&page=1`;
    return this.http.get(url);
  }

  // get list of upcoming movies
  getUpcomingMovieLists() {
    let url = `https://api.themoviedb.org/3/movie/upcoming?api_key=${apikey}&language=en-US&page=1`;
    return this.http.get(url);
  }

  // search movies by name
  searchMoviea(query) {
    let url = `https://api.themoviedb.org/3/search/movie?api_key=${apikey}&language=en-US&page=1&query=${query}`;
    return this.http.get(url);
  }

  // get list of genres
  getCategoriesList() {
    let url = `https://api.themoviedb.org/3/genre/movie/list?api_key=${apikey}&language=en-US`;
    return this.http.get(url);
  }

  // get list of movies by genres
  getMoviesByCategory(categoryId) {
    let url = `https://api.themoviedb.org/3/discover/movie?api_key=${apikey}&language=en-US&sort_by=popularity.desc&include_adult=false&with_genres=${categoryId}&page=1`;
    return this.http.get(url);
  }

  // get latest movie
  getLatestMovieLists() {
    let url = `https://api.themoviedb.org/3/movie/now_playing?api_key=${apikey}&language=en-US&page=1`;
    return this.http.get(url);
  }

  // get reviews of movie
  getReviewByMovie(movieid) {
    let url = `https://api.themoviedb.org/3/movie/${movieid}/reviews?api_key=${apikey}&language=en-US&page=1`;
    return this.http.get(url);
  }

  // get movie detail by movie ID
  getVideos(movieId) {
    let url = `https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=${apikey}&language=en-US`;
    return this.http.get(url);
  }

}
