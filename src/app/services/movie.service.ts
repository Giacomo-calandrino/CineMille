import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  baseApiUrl:string = 'http://localhost:3000/movies'

  constructor(private http: HttpClient) { }

  getMovies(){}

  getMovie(){}

  createMovie(){}

  updateMovie(){}

}
