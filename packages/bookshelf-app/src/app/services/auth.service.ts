import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {
  constructor() {}
  // ...
  public isAuthenticated(): boolean {
    const user = localStorage.getItem('user');
    return !!user;
  }
}
