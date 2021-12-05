import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarAdsComponent } from './navbar-ads.component';

describe('NavbarAdsComponent', () => {
  let component: NavbarAdsComponent;
  let fixture: ComponentFixture<NavbarAdsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavbarAdsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarAdsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
