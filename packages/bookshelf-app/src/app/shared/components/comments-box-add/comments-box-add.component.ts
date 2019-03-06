import { Component, OnInit, Input } from '@angular/core';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { Comment } from '../../../models/Comment';
import { CommentService } from '../../../services/comment.service';
import { getUser } from '../../utils/getUser';
import { Post } from 'src/app/models/Post';
import { AppError } from '../../../models/Error';
import { editorConfig } from '../../../app.settings';

@Component({
  selector: 'app-comments-box-add',
  templateUrl: './comments-box-add.component.html',
  styleUrls: ['./comments-box-add.component.scss']
})
export class CommentsBoxAddComponent implements OnInit {
  @Input()
  post: Post;
  comment: Comment = new Comment();
  public Editor = ClassicEditor;
  EditorConfig = editorConfig;
  message = '';
  error: AppError = new AppError();

  constructor(private commentService: CommentService) {}

  ngOnInit() {}

  saveComment() {
    this.comment.author = getUser();
    this.comment.post = this.post;
    this.comment.timestamp = Date.now();
    this.commentService
      .addComment(this.comment)
      .subscribe(
        () => (
          (this.comment = new Comment()),
          (this.message = 'Comment Saved Successfully')
        ),
        ({ error }) => (this.error = error)
      );
  }
}
