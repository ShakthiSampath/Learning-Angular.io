import { Component } from '@angular/core';
import { FlexLayoutModule } from "@angular/flex-layout";

@Component({
  selector: 'formCard',
  templateUrl: './formCard.component.html',
  styleUrls: ['./formCard.component.css']
})

export class FormCardComponent {
  gender: string;

  genders = [
    'Male',
    'Female'
  ];
}