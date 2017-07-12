import { Component } from '@angular/core';
import { Http } from '@angular/http';
import { AppComponent } from '../app.component/app.component';

@Component({
  selector: 'dashboard-component',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent {
     title = 'Good Movie App';
}