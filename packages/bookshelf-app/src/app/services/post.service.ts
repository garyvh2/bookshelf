import { apiBase } from './../app.settings';
import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Post } from '../models/Post';
import { User } from '../models/User';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  subject: Subject<Post[]> = new Subject<Post[]>();
  currentPost: Subject<Post> = new Subject<Post>();
  constructor(private http: HttpClient) {}

  getPost(id): Observable<Post> {
    const url = `${apiBase}/post/${id}`;
    this.http.get<Post>(url).subscribe(data => this.currentPost.next(data));
    return this.currentPost.asObservable();
  }

  getPosts(): Observable<Post[]> {
    const url = `${apiBase}/post`;
    this.http.get<Post[]>(url).subscribe(data => this.subject.next(data));
    return this.subject.asObservable();
  }

  getLiked(user: User): Observable<Post[]> {
    const url = `${apiBase}/user/${user.id}/liked`;
    this.http.get<Post[]>(url).subscribe(data => this.subject.next(data));
    return this.subject.asObservable();
  }

  getMyPosts(user: User): Observable<Post[]> {
    const url = `${apiBase}/user/${user.id}/posts`;
    this.http.get<Post[]>(url).subscribe(data => this.subject.next(data));
    return this.subject.asObservable();
  }

  getSuggested(user: User): Observable<Post[]> {
    const url = `${apiBase}/user/${user.id}/suggested`;
    this.http.get<Post[]>(url).subscribe(data => this.subject.next(data));
    return this.subject.asObservable();
  }

  addPost(post): Observable<Post> {
    const url = `${apiBase}/post`;
    const addPost = new Subject<Post>();
    this.http
      .post<Post>(url, post)
      .subscribe(
        data => (addPost.next(data), this.getPosts()),
        error => addPost.error(error)
      );
    return addPost.asObservable();
  }
}
