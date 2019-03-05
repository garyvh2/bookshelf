import { Component, OnInit } from '@angular/core';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { Post } from '../../models/Post';
import { PostService } from '../../services/post.service';
import { AppError } from '../../models/Error';
import { User } from '../../models/User';
import { Router } from '@angular/router';
import { getUser } from '../../shared/utils/getUser';

@Component({
  selector: 'app-post-add',
  templateUrl: './post-add.component.html',
  styleUrls: ['./post-add.component.scss']
})
export class PostAddComponent implements OnInit {
  public Editor = ClassicEditor;
  post: Post = new Post();
  message = '';
  error: AppError = new AppError();
  user: User = getUser();

  constructor(private postService: PostService, private router: Router) {}

  ngOnInit() {}

  savePost() {
    this.post.author = getUser();
    this.post.status = 'active';
    this.post.timestamp = Date.now();
    this.postService
      .addPost(this.post)
      .subscribe(
        () => (
          (this.message = 'Post Saved Successfully'),
          this.router.navigate(['list'])
        ),
        ({ error }) => (this.error = error)
      );
  }

  logout() {
    localStorage.clear();
    this.router.navigate(['login']);
  }
}
