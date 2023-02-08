import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SplashScreenModule } from './splash-screen/splash-screen.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SignInAndSignUpModule } from './sign-in-and-sign-up/sign-in-and-sign-up.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SplashScreenModule,
    SignInAndSignUpModule,
    FontAwesomeModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
