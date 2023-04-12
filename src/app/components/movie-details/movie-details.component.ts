import { HttpStatusCode } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { IMovie } from 'src/app/interfaces/imovie';
import { IPatchData } from 'src/app/interfaces/ipatch-data';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss']
})
export class MovieDetailsComponent implements OnInit {

  movie:IMovie = {
    title: '',
    imgUrl: '',
    description: '',
    scheduleStart: '',
    scheduleEnd: '',
    hall: ''
  }
  
  patchData:IPatchData = {
    scheduleStart: '',
    scheduleEnd: '',
    hall: ''
  }
  
  id!:number
  
  // variabile per alert di avvenuta modifica del film
  patchMovieSuccess:boolean = false

  constructor(private movieService: MovieService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.getId();
    this.getMovie()
  }

  // metodo che controlla i parametri dell'url e assegna il valore numerico presente nella variabile locale "id"
  getId(){
    this.route.paramMap.subscribe((param:ParamMap) =>{
      this.id = +param.get('id')!
      // console.log(this.id)
    })
  }

  getMovie(){
    this.movieService.getMovie(this.id).subscribe((res:IMovie) =>{
      this.movie = res
      // console.log('res: ' + res.title)
      // console.log('movie: ' + this.movie.title)
      this.patchData.scheduleStart = res.scheduleStart
      this.patchData.scheduleEnd = res.scheduleEnd
      this.patchData.hall = res.hall
      // console.log(this.patchData)
    })
  }

  patchMovie(){
    this.movieService.patchMovie(this.id, this.patchData).subscribe((res:IMovie) =>{
      if(HttpStatusCode.Ok){
        this.patchMovieSuccess = true
        console.log(res)
      }
    })
  }

  deleteMovie(){
    this.movieService.deleteMovie(this.id)
    this.router.navigate([''])
  }

}
