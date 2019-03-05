import { apiBase } from './../app.settings';
import { Injectable } from '@angular/core';
import { User } from '../models/User';
import { Subject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { PostService } from './post.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  subject: Subject<User[]> = new Subject<User[]>();
  constructor(private http: HttpClient, private postService: PostService) {}

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

  likePost(postId: number, userId: number): Observable<User> {
    const url = `${apiBase}/user/${userId}/like/${postId}`;
    const likePost = new Subject<User>();
    this.http
      .get<User>(url)
      .subscribe(
        data => (likePost.next(data), this.postService.getPost(postId)),
        error => likePost.error(error)
      );
    return likePost.asObservable();
  }

  unlikePost(postId: number, userId: number): Observable<User> {
    const url = `${apiBase}/user/${userId}/unlike/${postId}`;
    const likePost = new Subject<User>();
    this.http
      .get<User>(url)
      .subscribe(
        data => (likePost.next(data), this.postService.getPost(postId)),
        error => likePost.error(error)
      );
    return likePost.asObservable();
  }
}
