import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SiteFooter1Component } from './site-footer1.component';

describe('SiteFooterComponent', () => {
  let component: SiteFooter1Component;
  let fixture: ComponentFixture<SiteFooter1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SiteFooter1Component]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SiteFooter1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
