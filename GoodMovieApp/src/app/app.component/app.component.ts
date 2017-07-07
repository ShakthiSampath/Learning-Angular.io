import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Good Movie App';
  movie = 'Baby Driver';
}

export class Movie {
  name:string;
  rating: number;
  review:string;
}