import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DeactivateAccountPopupComponent } from './deactivate-account-popup.component';
import { MatDialogModule } from '@angular/material/dialog';
import {
  FaIconLibrary,
  FontAwesomeModule,
} from '@fortawesome/angular-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { MatButtonModule } from '@angular/material/button';
import { InformationModule } from '../information/information.module';

const matModules = [MatDialogModule, MatButtonModule];
const ngModules = [CommonModule];
const ngxModules = [FontAwesomeModule];
const appModules = [InformationModule];

@NgModule({
  declarations: [DeactivateAccountPopupComponent],
  imports: [...ngModules, ...matModules, ...ngxModules, ...appModules],
  exports: [DeactivateAccountPopupComponent],
})
export class DeactivateAccountPopupModule {
  constructor(library: FaIconLibrary) {
    library.addIcons(faUser);
  }
}
