import { TestBed } from '@angular/core/testing';

import { CoronaVirusReportsService } from './corona-virus-reports.service';

describe('CoronaVirusReportsService', () => {
  let service: CoronaVirusReportsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CoronaVirusReportsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
