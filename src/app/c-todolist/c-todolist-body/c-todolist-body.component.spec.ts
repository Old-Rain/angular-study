import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CTodolistBodyComponent } from './c-todolist-body.component';

describe('CTodolistBodyComponent', () => {
  let component: CTodolistBodyComponent;
  let fixture: ComponentFixture<CTodolistBodyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CTodolistBodyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CTodolistBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
