import { apiBase } from './../app.settings';
import { Injectable } from '@angular/core';
import { User } from '../models/User';
import { Subject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  subject: Subject<User[]> = new Subject<User[]>();
  constructor(private http: HttpClient) {}

  getUsers(): Observable<User[]> {
    const url = `${apiBase}/user`;
    this.http.get<User[]>(url).subscribe(data => this.subject.next(data));
    return this.subject.asObservable();
  }

  login(user): Observable<User> {
    const url = `${apiBase}/user/login`;
    return this.http.post<User>(url, user);
  }

  addUser(user): Observable<User> {
    const url = `${apiBase}/user`;
    const addUser = new Subject<User>();
    this.http
      .post<User>(url, user)
      .subscribe(data => addUser.next(data), error => addUser.error(error));
    return addUser.asObservable();
  }
}
