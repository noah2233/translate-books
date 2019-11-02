import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SiteHeader1Component } from './site-header1.component';

describe('SiteHeader1Component', () => {
  let component: SiteHeader1Component;
  let fixture: ComponentFixture<SiteHeader1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SiteHeader1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SiteHeader1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
