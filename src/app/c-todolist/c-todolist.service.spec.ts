import { TestBed } from '@angular/core/testing';

import { CTodolistService } from './c-todolist.service';

describe('CTodolistService', () => {
  let service: CTodolistService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CTodolistService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
