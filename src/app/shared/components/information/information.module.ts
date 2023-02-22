import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InformationComponent } from './information.component';

@NgModule({
  declarations: [InformationComponent],
  imports: [CommonModule],
  exports: [InformationComponent],
})
export class InformationModule {}
