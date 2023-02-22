import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';

import { LayoutComponent } from './layout.component';
import {
  FaIconLibrary,
  FontAwesomeModule,
} from '@fortawesome/angular-fontawesome';

const matModules = [
  MatToolbarModule,
  MatIconModule,
  MatMenuModule,
  FontAwesomeModule,
];
const ngModules = [CommonModule, RouterModule];

@NgModule({
  declarations: [LayoutComponent],
  imports: [...ngModules, ...matModules],
  exports: [LayoutComponent],
})
export class LayoutModule {
  constructor(library: FaIconLibrary) {
    library.addIcons(faChevronLeft);
  }
}
