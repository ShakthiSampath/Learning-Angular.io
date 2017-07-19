import { Component,Input } from '@angular/core';
import { Http } from '@angular/http';
import { MdDialog, MdPaginator } from '@angular/material';
import { FlexLayoutModule } from "@angular/flex-layout";
import { MovieDetailsComponent } from '../movie-details.component/movie-details.component';
import { MovieSearchComponent } from '../movie-search.component/movie-search.component';
import { MovieSearchService } from '../movie-search.service/movie-search.service';
import { Movie } from "../movie/movie";

@Component({
  selector: 'movie-list-component',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css'],
  providers: [MovieSearchComponent ],
  inputs: ['listarray']
})

export class MovieListComponent {
 
  movieobj: null;
  id = null;

  constructor(public moviedetail: MovieSearchService){}
   
  getMovieDetail(cb){
    
     this.moviedetail.searchEveryDetail(this.id).subscribe( res => {
         this.movieobj = res.json(); 
         cb(null,this.movieobj);
        }); 
 }                                                       
 
 public details(id:number){
    this.id = id;
     this.getMovieDetail((err,result)=>{
         if(err) throw err;
         console.log(result)
         return result;        
     });
     
 }

}
