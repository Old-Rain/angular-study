import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DHttpClientComponent } from './d-http-client.component';

describe('DHttpClientComponent', () => {
  let component: DHttpClientComponent;
  let fixture: ComponentFixture<DHttpClientComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DHttpClientComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DHttpClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
