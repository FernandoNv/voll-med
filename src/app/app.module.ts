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

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    SplashScreenModule,
    SignInAndSignUpModule,
    HomeModule,
    LayoutModule,
    MatDialogModule,
  ],
  providers: [
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
    DeactivateAccountPopupService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
