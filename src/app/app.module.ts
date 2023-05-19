import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SplashScreenModule } from './pages/splash-screen/splash-screen.module';
import { SignInAndSignUpModule } from './pages/sign-in-and-sign-up/sign-in-and-sign-up.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HomeModule } from './pages/home/home.module';
import { LayoutModule } from './shared/components/layout/layout.module';
import { AuthenticationInterceptor } from './auth/authentication.interceptor';
import {
  MatDialogModule,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
import { DeactivateAccountPopupService } from './shared/components/deactivate-account-popup/deactivate-account-popup.service';
import { PhonePipe } from './shared/pipes/phone.pipe';
import { MAT_DATE_LOCALE } from '@angular/material/core';

const ngModules = [
  BrowserModule,
  AppRoutingModule,
  BrowserAnimationsModule,
  HttpClientModule,
];
const appModules = [
  SplashScreenModule,
  SignInAndSignUpModule,
  HomeModule,
  LayoutModule,
];
const matModules = [MatDialogModule];
const providers = [
  {
    provide: HTTP_INTERCEPTORS,
    useClass: AuthenticationInterceptor,
    multi: true,
  },
  {
    provide: MAT_DIALOG_DATA,
    useValue: {},
  },
  {
    provide: MatDialogRef,
    useValue: {},
  },
  { provide: MAT_DATE_LOCALE, useValue: 'pt-BR' },
  DeactivateAccountPopupService,
  PhonePipe,
];

@NgModule({
  declarations: [AppComponent],
  imports: [...ngModules, appModules, matModules],
  providers: [...providers],
  bootstrap: [AppComponent],
})
export class AppModule {}
