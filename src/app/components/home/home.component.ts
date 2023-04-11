import { Component, OnInit } from '@angular/core';
import { IMovie } from 'src/app/interfaces/imovie';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  movies!:IMovie[]

  // variabile per visualizzare a schermo un'icona di caricamento
  isLoading:boolean = false

  constructor(private movieService: MovieService) { }

  ngOnInit(): void {
    this.getMovies()
  }

  getMovies(){
    this.isLoading = true
    this.movieService.getMovies().subscribe((res:IMovie[]) => {
      // ordino l'array per visualizzare prima i film con la data d'inizio più vicina
      res.sort((a, b) => new Date(a.scheduleStart).getTime() - new Date(b.scheduleStart).getTime())
      this.movies = res
      this.isLoading = false
    })
  }

}
