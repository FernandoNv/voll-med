import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DoctorsRoutingModule } from './doctors-routing.module';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { DoctorsComponent } from './doctors.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';
import { PhonePipe } from 'src/app/shared/pipes/phone.pipe';
import { CepPipe } from 'src/app/shared/pipes/cep.pipe';
import { RegistrationFormModule } from 'src/app/shared/components/registration-form/registration-form.module';
import { ListExpansionPanelModule } from 'src/app/shared/components/list-expansion-panel/list-expansion-panel.module';
import { DeactivateAccountPopupModule } from 'src/app/shared/components/deactivate-account-popup/deactivate-account-popup.module';
import { EditDoctorComponent } from './edit-doctor/edit-doctor.component';
import { NewDoctorComponent } from './new-doctor/new-doctor.component';

const matModules = [
  MatProgressSpinnerModule,
  MatFormFieldModule,
  MatButtonModule,
  MatInputModule,
  MatSelectModule,
];
const ngModules = [CommonModule, DoctorsRoutingModule, ReactiveFormsModule];
const appModules = [
  ListExpansionPanelModule,
  SharedModule,
  RegistrationFormModule,
  DeactivateAccountPopupModule,
];
const appComponents = [
  DoctorsComponent,
  EditDoctorComponent,
  NewDoctorComponent,
];
@NgModule({
  declarations: [...appComponents],
  imports: [...ngModules, ...matModules, ...appModules],
  providers: [PhonePipe, CepPipe],
})
export class DoctorsModule {}
