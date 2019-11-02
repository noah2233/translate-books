import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SiteHeader1Component } from './site-header1/site-header1.component';
import { SiteFooter1Component } from './site-footer1/site-footer1.component';

@NgModule({
  declarations: [
    SiteFooter1Component,
    SiteHeader1Component
  ],
  imports: [
    CommonModule
  ],
  exports: [
    SiteHeader1Component,
    SiteFooter1Component
  ]
})
export class SharedModule { }
