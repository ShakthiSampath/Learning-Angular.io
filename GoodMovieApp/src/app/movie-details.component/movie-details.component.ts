import { Component, Input, OnInit } from '@angular/core';
import { MdTabsModule,MdTableModule, MdSelectModule } from '@angular/material';
import { FlexLayoutModule } from "@angular/flex-layout";
import { Http } from '@angular/http';
import { MovieSearchService } from "../movie-search.service/movie-search.service";
import { MovieListComponent } from '../movie-list.component/movie-list.component';

import { Movie } from '../movie/movie'; 

@Component({
  selector: 'movie-details-component',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css'],
  providers: [MovieSearchService, Movie],
  inputs: ['movieDetail']
})

export class MovieDetailsComponent implements OnInit{
constructor(public movieNewInfo: Movie){}

  selectedValue: string;
  countForRating:number;
  countForReview:number;
  countToSaveRate:number;
  countToSaveReview:number;

  moreDetails = [
    {value: 'Cast', viewValue: 'Cast'},
    {value: 'Crew', viewValue: 'Crew'},

  ];

  createRateInput(){
    let count = 0;
    count++;
   this.countForRating = count;
  //  this.movieNewInfo.rate = this.rate;
   return this.countForRating;
  }

  createReviewInput(){
    let count = 0;
    count++;
   this.countForReview = count;
  //  this.movieNewInfo.review = this.review;
   return this.countForReview;
  }

  saveRate(rate:number){
    let count = 0;
    count++;
    this.countToSaveRate = count;

    this.movieNewInfo.rate = rate;

    return this.countToSaveRate;
  }

  saveReview(review: string){

    let count = 0;
    count++;

    this.countToSaveReview = count;

    this.movieNewInfo.review = review;

    return this.countToSaveReview;
  }

  ngOnInit(){
  }
}
