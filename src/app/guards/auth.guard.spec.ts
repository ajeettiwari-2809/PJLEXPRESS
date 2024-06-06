// import { TestBed } from '@angular/core/testing';
// import { CanActivateFn } from '@angular/router';

// import { authGuard } from './auth.guard';

// describe('authGuard', () => {
//   const executeGuard: CanActivateFn = (...guardParameters) => 
//       TestBed.runInInjectionContext(() => authGuard(...guardParameters));

//   beforeEach(() => {
//     TestBed.configureTestingModule({});
//   });

//   it('should be created', () => {
//     expect(executeGuard).toBeTruthy();
//   });
// });

import { TestBed } from '@angular/core/testing';
import { AuthService } from '../services/auth.service';

//import { AuthService } from '../auth.service';


// describe('AuthService', () => {

//   beforeEach(() => TestBed.configureTestingModule({}));

//   it('should be created', () => {
//     const service: AuthTokenService = TestBed.inject(AuthTokenService);
//     expect(service).toBeTruthy();
//   });
// });

describe('AuthTokenService', () => {
  let service: AuthService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
