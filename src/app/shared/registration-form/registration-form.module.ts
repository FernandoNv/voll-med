import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegistrationFormComponent } from './registration-form.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { ReactiveFormsModule } from '@angular/forms';
import { CepPipe } from '../pipe/cep.pipe';
import { PhonePipe } from '../pipe/phone.pipe';
import { SharedModule } from '../shared.module';

const matModules = [
  MatFormFieldModule,
  MatButtonModule,
  MatInputModule,
  MatSelectModule,
];

const ngModules = [CommonModule, ReactiveFormsModule];
const appModules = [SharedModule];

@NgModule({
  declarations: [RegistrationFormComponent],
  imports: [...ngModules, ...matModules, ...appModules],
  exports: [RegistrationFormComponent],
  providers: [PhonePipe, CepPipe],
})
export class RegistrationFormModule {}
