import { apiBase } from './../app.settings';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Tag } from '../models/Tag';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TagService {
  subject: Subject<Tag[]> = new Subject<Tag[]>();
  constructor(private http: HttpClient) {}

  getTags(): Observable<Tag[]> {
    const url = `${apiBase}/tag`;
    this.http.get<Tag[]>(url).subscribe(data => this.subject.next(data));
    return this.subject.asObservable();
  }
}
