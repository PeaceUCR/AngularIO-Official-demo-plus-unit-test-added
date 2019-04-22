import {AuthService} from '../../app/service/auth.service';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router} from '@angular/router';
import { TestBed } from '@angular/core/testing';
import {AuthGuard} from '../../app/service/auth.guard';


// https://angular.io/guide/testing#service-tests
describe('AuthGuard', () => {
  let authServiceMock: jasmine.SpyObj<AuthService>;
  let authGuardMock: AuthGuard;

  let nextMock: jasmine.SpyObj<ActivatedRouteSnapshot>;
  let stateMock: jasmine.SpyObj<RouterStateSnapshot>;

  beforeEach(() => {
    const spy = jasmine.createSpyObj('AuthService', ['isAuthorized']);
    // Provide both the service-to-test and its (spy) dependency
    TestBed.configureTestingModule({ providers: [ AuthGuard, { provide: AuthService, useValue: spy}]});
    authServiceMock = TestBed.get(AuthService);
    authGuardMock = TestBed.get(AuthGuard);
  });

  it('should CanActivate works', () => {
    authGuardMock.canActivate(nextMock, stateMock);
    expect(authServiceMock.isAuthorized).toHaveBeenCalledWith(nextMock);
  });
});

