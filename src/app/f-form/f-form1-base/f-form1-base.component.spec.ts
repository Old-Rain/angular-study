import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FForm1BaseComponent } from './f-form1-base.component';

describe('FForm1BaseComponent', () => {
  let component: FForm1BaseComponent;
  let fixture: ComponentFixture<FForm1BaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FForm1BaseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FForm1BaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
