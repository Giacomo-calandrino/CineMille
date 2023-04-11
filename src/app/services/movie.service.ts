import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IMovie } from '../interfaces/imovie';
import { IPatchData } from '../interfaces/ipatch-data';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  baseApiUrl:string = 'http://localhost:3000/movies'

  constructor(private http: HttpClient) { }

  getMovies(){
    return this.http.get<IMovie[]>(this.baseApiUrl)
  }

  getMovie(id:number){
    return this.http.get<IMovie>(this.baseApiUrl + '/' + id)
  }

  createMovie(movie:IMovie){
    return this.http.post<IMovie>(this.baseApiUrl, movie)
  }

  patchMovie(id:number, patchData:IPatchData){
    return this.http.patch<IMovie>(this.baseApiUrl + '/' + id, patchData)
  }

  deleteMovie(id:number){
    return this.http.delete(this.baseApiUrl + '/' + id)
  }

}
