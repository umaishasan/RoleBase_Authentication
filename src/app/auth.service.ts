import { Injectable } from '@angular/core';

export interface User{
  name: string;
  role: number;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  currentUser: User;

  constructor() { }

  login(name:string,pw:string):Promise<boolean>{
    return new Promise((resolve,reject)=>{
      if(name === 'admin' && pw === 'admin'){
        this.currentUser = {
          name: name,
          role: 0
        };
        resolve(true);
      }
      else if(name === 'user' && pw === 'user'){
        this.currentUser = {
          name: name,
          role: 1
        };
        resolve(true);
      }
      else{
        reject(false);
      }
    });
  }

  isLoggedIn(){
    return this.currentUser != null;
  }

  logout(){
    this.currentUser = null;
  }

  isAdmin(){
    return this.currentUser.role === 0;
  }

  isUser(){
    return this.currentUser.role === 1;
  }
  
}
