import { TestBed, inject } from '@angular/core/testing';
import { HttpMethodService } from './http-method.service';
import { Http, ConnectionBackend, RequestOptions, BaseRequestOptions } from '@angular/http';
import {MockBackend, MockConnection} from '@angular/http/testing';
describe('HttpMethodService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HttpMethodService]
    });
  });
  let subject: HttpMethodService;
  beforeEach(() => {
      TestBed.configureTestingModule({
          providers: [           
              HttpMethodService,
              {provide: ConnectionBackend, useClass: MockBackend},
              {provide: RequestOptions, useClass: BaseRequestOptions},
              Http
          ]
      });
  });
  beforeEach(inject([HttpMethodService], (httpMethodService: HttpMethodService) => {
      subject = httpMethodService;
  }));
  it('should be created',() => {
    expect(subject).toBeTruthy();
  });
  
});
