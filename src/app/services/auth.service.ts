// permet de récuperer , verifier si un user existe deja en bdd 

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isAuth = false;

  constructor() { }

  // simuler une request asynchrone, creation d'une promise
  signIn(){
    return new Promise((resolve, reject) => {
      setTimeout(() =>{
        this.isAuth = true;
        resolve(true);
      },2000)
    })
  }
  signOut(){
    this.isAuth = false;
  }
}
