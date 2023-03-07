import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PhonePipe } from './pipes/phone.pipe';
import { CepPipe } from './pipes/cep.pipe';
import { CpfPipe } from './pipes/cpf.pipe';

const pipes = [PhonePipe, CepPipe, CpfPipe];

@NgModule({
  declarations: [...pipes, CpfPipe],
  imports: [CommonModule],
  exports: [...pipes],
})
export class SharedModule {}
