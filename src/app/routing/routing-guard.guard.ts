import { Injectable } from '@angular/core';
import { CanActivateChild,CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router} from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { LocalStorageService } from '../service/local-storage.service';
/**
     ** @Injectable
     */
@Injectable()
/**
     * A class representing a RoutingGuardGuard
     * @class  RoutingGuardGuard
     */
export class RoutingGuardGuard implements CanActivate,CanActivateChild {
  /**
       ** @param  {LocalStorageService} localStorageService - next which accept the LocalStorageService
       ** @param  {Router} router - state which accept the Router
       */
  constructor(private localStorageService:LocalStorageService, private router: Router) {}
   /**
       ** canActivate is method which is use to check which route is
       ** @param  {boolean} next - next which accept the boolean
       ** @param  {boolean} state - state which accept the boolean
       ** @returns boolean : true/false
       */
  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
      console.log('ActivatedRouteSnapshot', next);
      console.log('RouterStateSnapshot', state);

      /**if (this.localStorageService.getLocalStorageData('logdinUser') == null) {
        alert('Activation blocked');
      this.router.navigate(['./login']);
        return false; /** It means not open next url move to only login page AND  route can NOT be navigated
  }*/
   if (this.localStorageService.getLocalStorageData('isToken') == null) {
      alert('Activation blocked');
	  this.router.navigate(['./login']);
      return false; /** It means not open next url move to only login page AND  route can NOT be navigated*/
    }
    return true;  /** It means move to next URL AND route can be navigated */
  }
/**
 * CanActivateChild is an Angular interface to guard child routes. 
 * Suppose a user has been authenticated but not authorized to visit the child routes, 
 * so child routes can be guarded using CanActivateChild.
 * @param next 
 * @param state 
 */
  canActivateChild(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    return false;
  }
}

/**
 * If canActivate() method from RoutingGuardGuard returns true only when route can be navigated. 
 * In case of false value, navigation can be redirected to login page.
 */