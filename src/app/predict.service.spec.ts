import { TestBed } from '@angular/core/testing';

import { PredictionService } from './predict.service';

describe('PredictService', () => {
  let service: PredictionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PredictionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
