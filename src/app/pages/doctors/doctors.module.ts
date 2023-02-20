import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DoctorsRoutingModule } from './doctors-routing.module';
import { ListExpansionPanelModule } from 'src/app/shared/list-expansion-panel/list-expansion-panel.module';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { DoctorsComponent } from './doctors.component';
import { DoctorEditComponent } from './doctor-edit/doctor-edit.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';
import { PhonePipe } from 'src/app/shared/pipe/phone.pipe';
import { CepPipe } from 'src/app/shared/pipe/cep.pipe';

const matModules = [
  MatProgressSpinnerModule,
  MatFormFieldModule,
  MatButtonModule,
  MatInputModule,
  MatSelectModule,
];
const ngModules = [CommonModule, DoctorsRoutingModule, ReactiveFormsModule];
const appModules = [ListExpansionPanelModule, SharedModule];
@NgModule({
  declarations: [DoctorsComponent, DoctorEditComponent],
  imports: [...ngModules, ...matModules, ...appModules],
  providers: [PhonePipe, CepPipe],
})
export class DoctorsModule {}
