import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CTodolistHeaderComponent } from './c-todolist-header.component';

describe('CTodolistHeaderComponent', () => {
  let component: CTodolistHeaderComponent;
  let fixture: ComponentFixture<CTodolistHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CTodolistHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CTodolistHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
