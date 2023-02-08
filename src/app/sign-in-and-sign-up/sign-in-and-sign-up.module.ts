import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignInComponent } from './sign-in/sign-in.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const matModules = [
  MatFormFieldModule,
  MatInputModule,
  MatIconModule,
  MatButtonModule,
];
const ngModules = [CommonModule, ReactiveFormsModule, FormsModule];

@NgModule({
  declarations: [SignInComponent],
  imports: [...ngModules, ...matModules],
  exports: [SignInComponent],
})
export class SignInAndSignUpModule {}
