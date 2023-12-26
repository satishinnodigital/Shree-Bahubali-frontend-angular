import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { SignUpComponent } from './components/forms/sign-up/sign-up.component';
import { SignInComponent } from './components/forms/sign-in/sign-in.component';
import { PanDetailsComponent } from './components/forms/pan-details/pan-details.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { HomeComponent } from './components/home/home.component';
import { KycMainComponent } from './kyc/kyc-main/kyc-main.component';
import { KRAComponent } from './kyc/k-r-a/k-r-a.component';
import { DigiLockerComponent } from './kyc/digi-locker/digi-locker.component';
import { MannualEntryComponent } from './kyc/mannual-entry/mannual-entry.component';
import { AddressComponent } from './kyc/address/address.component';
import { BankComponent } from './kyc/bank/bank.component';
import { ProfileComponent } from './kyc/profile/profile.component';
import { ExchangeComponent } from './kyc/exchange/exchange.component';
import { IPVComponent } from './kyc/i-p-v/i-p-v.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    SignUpComponent,
    SignInComponent,
    PanDetailsComponent,
    HomeComponent,
    KycMainComponent,
    KRAComponent,
    DigiLockerComponent,
    MannualEntryComponent,
    AddressComponent,
    BankComponent,
    ProfileComponent,
    ExchangeComponent,
    IPVComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot(),

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
 