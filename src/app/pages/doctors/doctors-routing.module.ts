import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DoctorEditComponent } from './doctor-edit/doctor-edit.component';
import { DoctorsComponent } from './doctors.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: DoctorsComponent,
  },
  {
    path: ':id',
    component: DoctorEditComponent,
    title: 'Editar',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DoctorsRoutingModule {}
