import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ABaseComponent } from './a-base.component';

describe('ABaseComponent', () => {
  let component: ABaseComponent;
  let fixture: ComponentFixture<ABaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ABaseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ABaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
