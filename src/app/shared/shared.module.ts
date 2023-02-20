import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PhonePipe } from './pipe/phone.pipe';
import { CepPipe } from './pipe/cep.pipe';

const pipes = [PhonePipe, CepPipe];

@NgModule({
  declarations: [...pipes],
  imports: [CommonModule],
  exports: [...pipes],
})
export class SharedModule {}
