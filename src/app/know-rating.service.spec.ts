import { TestBed } from '@angular/core/testing';

import { KnowRatingService } from './know-rating.service';

describe('KnowRatingService', () => {
  let service: KnowRatingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(KnowRatingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
