import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { GridService } from './grid.service';

describe('GridService', () => {
  let service: GridService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [GridService]
    });
    service = TestBed.inject(GridService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should execute GET request on getAny', () => {
    const dummyResponse = { statusCode: 200, message: 'Success', data: [] };
    const testUrl = '/api/data';

    service.getAny(testUrl).subscribe(res => {
      expect(res).toEqual(dummyResponse);
    });

    const req = httpMock.expectOne(testUrl);
    expect(req.request.method).toBe('GET');
    req.flush(dummyResponse);
  });

  it('should execute POST request on getAnyPost', () => {
    const dummyResponse = { statusCode: 200, message: 'Success', data: [] };
    const testUrl = '/api/data';
    const testBody = { page: 1 };

    service.getAnyPost(testUrl, testBody).subscribe(res => {
      expect(res).toEqual(dummyResponse);
    });

    const req = httpMock.expectOne(testUrl);
    expect(req.request.method).toBe('POST');
    expect(req.request.body).toEqual(testBody);
    req.flush(dummyResponse);
  });
});
