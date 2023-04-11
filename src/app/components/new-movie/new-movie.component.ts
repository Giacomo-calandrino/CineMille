import { Component, OnInit } from '@angular/core';
import { IMovie } from 'src/app/interfaces/imovie';
import { MovieService } from 'src/app/services/movie.service';
import { HttpStatusCode } from '@angular/common/http';

@Component({
  selector: 'app-new-movie',
  templateUrl: './new-movie.component.html',
  styleUrls: ['./new-movie.component.scss'],
})
export class NewMovieComponent implements OnInit {
  
  movie: IMovie = {
    title: '',
    imgUrl: '',
    description: '',
    scheduleStart: '',
    scheduleEnd: '',
    hall: '',
  };

  // variabile per alert di avvenuta registrazione del film
  newMovieSuccess: boolean = false;

  constructor(private movieService: MovieService) {}

  ngOnInit(): void {}

  newMovie() {
    this.movieService.createMovie(this.movie).subscribe((res: IMovie) => {
      if (HttpStatusCode.Created) {
        this.newMovieSuccess = true;
        console.log(res);
      }
    });
  }

  // metodo di reset che rimuove l'alert e svuota il form
  resetForm() {
    this.newMovieSuccess = false;
    this.movie = {
      title: '',
      imgUrl: '',
      description: '',
      scheduleStart: '',
      scheduleEnd: '',
      hall: '',
    };
  }
}
