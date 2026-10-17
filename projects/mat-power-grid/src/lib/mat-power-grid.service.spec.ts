import { TestBed } from '@angular/core/testing';
import { MatPowerGridService } from './mat-power-grid.service';

describe('MatPowerGridService', () => {
  let service: MatPowerGridService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MatPowerGridService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
