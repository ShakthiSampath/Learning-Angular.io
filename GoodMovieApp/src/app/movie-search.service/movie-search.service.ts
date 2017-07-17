import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { NgModel,FormsModule } from '@angular/forms';


import { Movie } from '../movie/movie';
import { MovieSearchComponent } from '../movie-search.component/movie-search.component';


@Injectable()
export class MovieSearchService {

  constructor(private http: Http) {}

  search(term: string) {

     const URL = 'https://api.themoviedb.org/3/search/movie';
     const apikey = 'b16cd2a45be30dd789b5db50a0066757';

    return this.http
               .get(`${URL}?api_key=${apikey}&query=${term}`)
               

  }
  
  searchEveryDetail(id: number){

    const creditsURL = 'https://api.themoviedb.org/3/movie/';
    const apikey = 'b16cd2a45be30dd789b5db50a0066757';
    return this.http
                .get(`${creditsURL}${id}?api_key=${apikey}&append_to_response=credits`)
  }
}
