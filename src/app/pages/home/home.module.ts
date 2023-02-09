import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeComponent } from './home.component';
import {
  FontAwesomeModule,
  FaIconLibrary,
} from '@fortawesome/angular-fontawesome';
import { faUserDoctor } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faCalendarDays } from '@fortawesome/free-solid-svg-icons';
@NgModule({
  declarations: [HomeComponent],
  imports: [CommonModule, FontAwesomeModule],
  exports: [HomeComponent],
})
export class HomeModule {
  constructor(library: FaIconLibrary) {
    library.addIcons(faUserDoctor);
    library.addIcons(faUser);
    library.addIcons(faCalendarDays);
  }
}
