import { TestBed } from '@angular/core/testing';

import { IeLibService } from './ie-lib.service';

describe('IeLibService', () => {
  let service: IeLibService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IeLibService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
