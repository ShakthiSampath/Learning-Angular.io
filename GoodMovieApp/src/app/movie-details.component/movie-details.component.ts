import { Component, Input } from '@angular/core';
import { Http } from '@angular/http';
import { MdDialog } from '@angular/material';

import { AppComponent } from '../app.component/app.component'
import { Movie } from '../movie/movie';

@Component({
  selector: 'app-root',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})

export class MovieDetailsComponent{
  constructor(public dialog: MdDialog) {}
  details() {
    this.dialog.open(DialogResult);
  }
}

export class DialogResult {
  
}