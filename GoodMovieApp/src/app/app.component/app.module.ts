import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MdButtonModule, MdCardModule, MdMenuModule, MdToolbarModule, MdIconModule, MdTabsModule, MdGridListModule, MdSlideToggleModule, MdAutocompleteModule, MdInputModule } from '@angular/material';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
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
    MdInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})


export class AppModule { }
