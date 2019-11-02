import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { TransferHttpCacheModule } from '@nguniversal/common';
import { HttpClientModule } from '@angular/common/http';
import { NgtUniversalModule } from '@ng-toolkit/universal';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SiteHeader1Component } from './common/site-header1/site-header1.component';
import { SiteFooter1Component } from './common/site-footer1/site-footer1.component';

@NgModule({
  declarations: [
    AppComponent,
    SiteHeader1Component,
    SiteFooter1Component
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    CommonModule,
    TransferHttpCacheModule,
    HttpClientModule,
    NgtUniversalModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [
    SiteHeader1Component,
    SiteFooter1Component
  ]
})
export class AppModule { }
