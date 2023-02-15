import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PatientsComponent } from './patients.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: PatientsComponent,
    title: 'Pacientes',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PatientsRoutingModule {}
