import { Component,OnInit,Input } from '@angular/core';
import { MovieSearchService } from '../movie-search.service/movie-search.service';
import { MovieListComponent } from '../movie-list.component/movie-list.component';

@Component({
    selector: 'movie-search',
    templateUrl: './movie-search.component.html',
    styleUrls: ['./movie-search.component.css'],
    providers: [MovieSearchService]
    
})
    

export class MovieSearchComponent implements OnInit{

public movieobj = null;
public term: string;

 constructor(public movieSearch: MovieSearchService){}


 getMovieInfo(cb){

     this.movieSearch.search(this.term).subscribe( res => {
         this.movieobj = res.json();
         cb(null,this.movieobj);
        }); 
     
 }                                                       
 
 public detailsOfAllMovies(){

     this.getMovieInfo((err,result)=>{
         if(err) throw err;
         return result;
     });
     
 }

 ngOnInit(){
 }

}