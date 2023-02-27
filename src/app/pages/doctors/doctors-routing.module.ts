import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DoctorsComponent } from './doctors.component';
import { EditDoctorComponent } from './edit-doctor/edit-doctor.component';
import { NewDoctorComponent } from './new-doctor/new-doctor.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: DoctorsComponent,
    title: 'Médicos',
  },
  {
    path: 'edit/:id',
    component: EditDoctorComponent,
    title: 'Editar',
  },
  {
    path: 'new',
    component: NewDoctorComponent,
    title: 'Novo Perfil',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DoctorsRoutingModule {}
