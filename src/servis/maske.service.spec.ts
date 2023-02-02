import { TestBed } from '@angular/core/testing';

import { MaskeService } from './maske.service';

describe('MaskeService', () => {
  let service: MaskeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MaskeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
