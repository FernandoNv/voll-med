import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PatientsRoutingModule } from './patients-routing.module';
import { PatientsComponent } from './patients.component';
import { CepPipe } from 'src/app/shared/pipes/cep.pipe';
import { PhonePipe } from 'src/app/shared/pipes/phone.pipe';
import { ListExpansionPanelModule } from 'src/app/shared/components/list-expansion-panel/list-expansion-panel.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { RegistrationFormModule } from 'src/app/shared/components/registration-form/registration-form.module';
import { DeactivateAccountPopupModule } from 'src/app/shared/components/deactivate-account-popup/deactivate-account-popup.module';
import { ReactiveFormsModule } from '@angular/forms';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';

const matModules = [
  MatProgressSpinnerModule,
  MatFormFieldModule,
  MatButtonModule,
  MatInputModule,
  MatSelectModule,
];
const ngModules = [CommonModule, PatientsRoutingModule, ReactiveFormsModule];
const appModules = [
  ListExpansionPanelModule,
  SharedModule,
  RegistrationFormModule,
  DeactivateAccountPopupModule,
];
const appComponents = [PatientsComponent];

@NgModule({
  declarations: [...appComponents],
  imports: [...ngModules, ...matModules, ...appModules],
  providers: [PhonePipe, CepPipe],
})
export class PatientsModule {}
