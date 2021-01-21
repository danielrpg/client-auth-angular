import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpTestingController, HttpClientTestingModule } from '@angular/common/http/testing';
import { AppComponent } from './app.component';
import { HttpClient } from '@angular/common/http';

describe('AppComponent', () => {
  
  let httpMock: HttpTestingController;
  let httpClient: HttpClient;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        RouterTestingModule
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
    httpMock = TestBed.inject(HttpTestingController);
    httpClient = TestBed.inject(HttpClient);
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'authentication'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('authentication');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    // const compiled = fixture.nativeElement;
    // expect(compiled.querySelector('.content span').textContent).toContain('authentication app is running!');
  });
});
