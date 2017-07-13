import { Component } from '@angular/core';
import { MovieSearchService } from '../movie-search.service/movie-search.service';

@Component({
    selector: 'movie-search',
    templateUrl: './movie-search.component.html',
    styleUrls: ['./movie-search.component.css'],
    providers: [MovieSearchService]
})


export class MovieSearchComponent {
    public movieobj: any;
    public term: string;
 constructor(public movieSearch: MovieSearchService){}



 getMovieInfo(cb){
     this.movieSearch.search(this.term).subscribe( res => {
         this.movieobj = res.json();
         cb(null,this.movieobj.results);
        }); 
     
 }                                                       
 
 public detailsOfAllMovies(){

     this.getMovieInfo((err,result)=>{
         if(err) throw err;
         console.log(result);
         return result;
     });
     
 }

}