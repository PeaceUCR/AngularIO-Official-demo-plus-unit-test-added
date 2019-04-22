import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot} from '@angular/router';


@Injectable({
  providedIn: 'root',
})
export class AuthService {
    isAuthorized( next: ActivatedRouteSnapshot ) {
      // return true only when url query param is true like http://localhost:4200/heroes/detail/11?isAuth=true
      if (next.queryParamMap.get('isAuth')) {
        return true;
      }
      return false;
    }
}
