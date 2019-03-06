import { apiBase } from './../app.settings';
import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Comment } from '../models/Comment';

@Injectable({
  providedIn: 'root'
})
export class CommentService {
  subject: Subject<Comment[]> = new Subject<Comment[]>();
  constructor(private http: HttpClient) {}

  addComment(comment): Observable<Comment> {
    const url = `${apiBase}/comment`;
    const addComment = new Subject<Comment>();
    this.http
      .post<Comment>(url, comment)
      .subscribe(
        data => (this.getPostComments(comment.post.id), addComment.next(data))
      );
    return addComment.asObservable();
  }

  updateComment(comment): Observable<Comment> {
    const url = `${apiBase}/comment`;
    const addComment = new Subject<Comment>();
    this.http
      .put<Comment>(url, comment)
      .subscribe(
        data => (this.getPostComments(comment.post.id), addComment.next(data))
      );
    return addComment.asObservable();
  }

  getPostComments(postId): Observable<Comment[]> {
    const url = `${apiBase}/post/${postId}/comments`;
    this.http.get<Comment[]>(url).subscribe(data => this.subject.next(data));
    return this.subject.asObservable();
  }
}
