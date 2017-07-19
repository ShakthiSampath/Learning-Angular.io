 import { Component } from '@angular/core';
 import { Http } from '@angular/http';
 import { FormControl } from '@angular/forms';
 
  import 'rxjs/add/operator/startWith';
  import 'rxjs/add/operator/map';
  
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Good Movie App';
}
