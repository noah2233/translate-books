import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SignInComponent } from '@registration/sign-in/sign-in.component';
import { SignUpComponent } from '@registration/sign-up/sign-up.component';

@NgModule({
  declarations: [
    SignInComponent,
    SignUpComponent
  ],
  imports: [
    CommonModule
  ]
})
export class RegistrationModule { }
