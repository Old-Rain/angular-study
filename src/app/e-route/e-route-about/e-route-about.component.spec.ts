import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ERouteAboutComponent } from './e-route-about.component';

describe('ERouteAboutComponent', () => {
  let component: ERouteAboutComponent;
  let fixture: ComponentFixture<ERouteAboutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ERouteAboutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ERouteAboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
