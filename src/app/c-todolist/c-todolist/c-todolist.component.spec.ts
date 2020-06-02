import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CTodolistComponent } from './c-todolist.component';

describe('CTodolistComponent', () => {
  let component: CTodolistComponent;
  let fixture: ComponentFixture<CTodolistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CTodolistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CTodolistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
