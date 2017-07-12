import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MdButtonModule, MdCardModule, MdMenuModule, MdToolbarModule, MdIconModule, MdTabsModule, MdGridListModule, MdSlideToggleModule, MdAutocompleteModule, MdInputModule, MdDialogModule } from '@angular/material';

import { AppComponent } from './app.component';
import { DialogResult } from '../movie-details.component/movie-details.component';
import { MovieDetailsComponent} from '../movie-details.component/movie-details.component';
import { DashboardComponent } from '../dashboard.component/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    DialogResult,
    MovieDetailsComponent,
    DashboardComponent
  ],
  imports: [
    BrowserAnimationsModule,
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
  providers: [MdDialogModule],
  bootstrap: [AppComponent,DialogResult]
})


export class AppModule { }
