import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpModule } from '@angular/http';
import { FormsModule , NgModel } from '@angular/forms';
import { MdButtonModule, MdCardModule, MdMenuModule, MdToolbarModule, MdIconModule, MdTabsModule, MdGridListModule, MdSlideToggleModule, MdAutocompleteModule, MdInputModule, MdDialogModule } from '@angular/material';

import { AppComponent } from './app.component';
import { MovieDetailsComponent } from '../movie-details.component/movie-details.component';
import { DashboardComponent } from '../dashboard.component/dashboard.component';
import { MovieListComponent } from '../movie-list.component/movie-list.component';
import { MovieSearchComponent } from '../movie-search.component/movie-search.component';
import { MoviesComponent } from '../movies.components/movies.components';
import { MovieSearchService } from '../movie-search.service/movie-search.service';

@NgModule({

  declarations: [
    AppComponent,
    DashboardComponent,
    MoviesComponent,
    MovieDetailsComponent,
    MovieListComponent,
    MovieSearchComponent,
    // MovieSearchService  
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpModule,
    FormsModule,
    // NgModel,
    MdButtonModule,
    MdCardModule,
    MdToolbarModule,
    MdMenuModule,
    MdIconModule,
    MdTabsModule,
    MdGridListModule,
    MdSlideToggleModule,
    MdAutocompleteModule,
    MdInputModule,
    MdDialogModule
  ],
  entryComponents: [MovieDetailsComponent],
  providers: [MdDialogModule, MovieSearchService],
  bootstrap: [AppComponent ]
})


export class AppModule { }