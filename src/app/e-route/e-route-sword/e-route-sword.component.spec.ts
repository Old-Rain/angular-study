import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ERouteSwordComponent } from './e-route-sword.component';

describe('ERouteSwordComponent', () => {
  let component: ERouteSwordComponent;
  let fixture: ComponentFixture<ERouteSwordComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ERouteSwordComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ERouteSwordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
