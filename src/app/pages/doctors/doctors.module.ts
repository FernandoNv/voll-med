import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DoctorsRoutingModule } from './doctors-routing.module';
import { ListExpansionPanelModule } from 'src/app/shared/list-expansion-panel/list-expansion-panel.module';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { DoctorsComponent } from './doctors.component';
import { DoctorEditComponent } from './doctor-edit/doctor-edit.component';

const matModules = [MatProgressSpinnerModule];
const ngModules = [CommonModule, DoctorsRoutingModule];
const appModules = [ListExpansionPanelModule];
@NgModule({
  declarations: [DoctorsComponent, DoctorEditComponent],
  imports: [...ngModules, ...matModules, ...appModules],
})
export class DoctorsModule {}
