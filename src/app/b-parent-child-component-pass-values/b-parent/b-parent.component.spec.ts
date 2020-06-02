import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BParentComponent } from './b-parent.component';

describe('BParentComponent', () => {
  let component: BParentComponent;
  let fixture: ComponentFixture<BParentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BParentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
