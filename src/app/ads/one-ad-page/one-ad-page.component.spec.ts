import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OneAdPageComponent } from './one-ad-page.component';

describe('OneAdPageComponent', () => {
  let component: OneAdPageComponent;
  let fixture: ComponentFixture<OneAdPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OneAdPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OneAdPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
