import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { MdCardModule,MdInputModule,MdRadioModule,MdToolbarModule,MdButtonModule,MdIconModule } from '@angular/material';
import {FormControl, Validators, NgModel} from '@angular/forms';
import { FlexLayoutModule } from "@angular/flex-layout";

import { AppComponent } from './app.component';
import {FormCardComponent} from '../formCard/formCard.component';

@NgModule({
  declarations: [
    AppComponent,
    FormCardComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpModule,
    MdCardModule,
    MdRadioModule,
    MdIconModule,
    MdButtonModule,
    MdToolbarModule,
    FlexLayoutModule,
    MdInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
