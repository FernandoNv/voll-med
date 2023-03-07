import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegistrationFormComponent } from './registration-form.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { ReactiveFormsModule } from '@angular/forms';
import { CepPipe } from '../../pipes/cep.pipe';
import { PhonePipe } from '../../pipes/phone.pipe';
import { SharedModule } from '../../shared.module';
import { CpfPipe } from '../../pipes/cpf.pipe';

const matModules = [
  MatFormFieldModule,
  MatButtonModule,
  MatInputModule,
  MatSelectModule,
];

const ngModules = [CommonModule, ReactiveFormsModule];
const appModules = [SharedModule];
const appPipes = [PhonePipe, CepPipe, CpfPipe];
@NgModule({
  declarations: [RegistrationFormComponent],
  imports: [...ngModules, ...matModules, ...appModules],
  exports: [RegistrationFormComponent],
  providers: [...appPipes],
})
export class RegistrationFormModule {}
