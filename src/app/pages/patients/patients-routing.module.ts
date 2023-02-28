import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewPatientComponent } from './new-patient/new-patient.component';
import { PatientsComponent } from './patients.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: PatientsComponent,
    title: 'Pacientes',
  },
  {
    path: 'new',
    component: NewPatientComponent,
    title: 'Cadastrar Paciente',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PatientsRoutingModule {}
