import { Component } from '@angular/core';
import { Http } from '@angular/http';
import { MdDialog } from '@angular/material';
import { MovieDetailsComponent } from '../movie-details.component/movie-details.component';
import { MovieSearchComponent } from '../movie-search.component/movie-search.component';


@Component({
  selector: 'movie-list-component',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})

export class MovieListComponent {
  constructor(public dialog: MdDialog) { }

  
  details() {
    this.dialog.open(MovieDetailsComponent);
  }
}