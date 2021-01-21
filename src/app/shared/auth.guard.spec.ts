import { TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpTestingController, HttpClientTestingModule } from '@angular/common/http/testing';

import { AuthGuard } from './auth.guard';
import { HttpClient } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';

describe('AuthGuard', () => {
  let guard: AuthGuard;
  let httpMock: HttpTestingController;
  let httpClient: HttpClient;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        FormsModule, 
        ReactiveFormsModule,
        HttpClientTestingModule,
        RouterTestingModule 
      ]
    });
    guard = TestBed.inject(AuthGuard);
    httpMock = TestBed.inject(HttpTestingController);
    httpClient = TestBed.inject(HttpClient);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
