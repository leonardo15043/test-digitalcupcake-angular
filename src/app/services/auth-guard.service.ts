import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  CanActivate
} from '@angular/router';

@Injectable()
export class AuthGuardService implements CanActivate{

  constructor() { }

  canActivate(next:ActivatedRouteSnapshot, state: RouterStateSnapshot){
    if(localStorage.getItem("username")){
      console.log("entro");
      return true;
    }else{
      console.error("bloqueado");
      return false;
    }
    
  }

}