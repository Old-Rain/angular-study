import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BaseCComponent } from './base-c.component';

describe('BaseCComponent', () => {
  let component: BaseCComponent;
  let fixture: ComponentFixture<BaseCComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BaseCComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BaseCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
