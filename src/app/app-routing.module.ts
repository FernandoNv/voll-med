import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthenticationGuard } from './auth/authentication.guard';
import { SignInGuard } from './auth/sign-in.guard';
import { HomeComponent } from './pages/home/home.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { SignInComponent } from './pages/sign-in-and-sign-up/sign-in/sign-in.component';
import { SignUpComponent } from './pages/sign-in-and-sign-up/sign-up/sign-up.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'home',
      },
      {
        path: 'home',
        component: HomeComponent,
        title: 'Início',
      },
      {
        path: 'patients',
        loadChildren: () =>
          import('./pages/patients/patients.module').then(
            (m) => m.PatientsModule
          ),
      },
      {
        path: 'doctors',
        loadChildren: () =>
          import('./pages/doctors/doctors.module').then((m) => m.DoctorsModule),
      },
      {
        path: 'appointments',
        loadChildren: () =>
          import('./pages/appointments/appointments.module').then(
            (m) => m.AppointmentsModule
          ),
      },
      {
        path: 'person',
        loadChildren: () =>
          import('./pages/person/person.module').then((m) => m.PersonModule),
      },
    ],
    canActivateChild: [AuthenticationGuard],
  },
  {
    path: 'sign-in',
    component: SignInComponent,
    canMatch: [SignInGuard],
    title: 'Entrar',
  },
  {
    path: 'sign-up',
    component: SignUpComponent,
    canMatch: [SignInGuard],
    title: 'Cadastrar',
  },
  {
    path: '**',
    component: NotFoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
