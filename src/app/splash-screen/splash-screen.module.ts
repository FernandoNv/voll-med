import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { SplashScreenComponent } from './splash-screen.component';

@NgModule({
  declarations: [SplashScreenComponent],
  imports: [CommonModule, MatProgressSpinnerModule],
  exports: [SplashScreenComponent],
})
export class SplashScreenModule {}
