import { Component } from '@angular/core';
import { Http } from '@angular/http';
import { FormControl } from '@angular/forms';
import { MdDialog, MdDialogRef } from '@angular/material';

import 'rxjs/add/operator/startWith';
import 'rxjs/add/operator/map';

var title ;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  title = 'Good Movie App';

   
}

