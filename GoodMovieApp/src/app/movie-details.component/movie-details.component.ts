import { Component, Input } from '@angular/core';
import { Http } from '@angular/http';
import { MdDialog, MdDialogRef } from '@angular/material';


import { Movie } from '../movie/movie'; 

@Component({
  selector: 'movie-details-component',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})

export class MovieDetailsComponent{
  constructor(public dialogRef: MdDialogRef<MovieDetailsComponent>) {
    
  }
}
