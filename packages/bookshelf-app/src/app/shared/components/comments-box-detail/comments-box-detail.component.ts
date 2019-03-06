import { Component, OnInit, Input } from '@angular/core';
import { Comment } from '../../../models/Comment';
import { User } from 'src/app/models/User';
import { getUser } from '../../utils/getUser';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { editorConfig } from '../../../app.settings';
import { AppError } from '../../../models/Error';
import { CommentService } from '../../../services/comment.service';

@Component({
  selector: 'app-comments-box-detail',
  templateUrl: './comments-box-detail.component.html',
  styleUrls: ['./comments-box-detail.component.scss']
})
export class CommentsBoxDetailComponent implements OnInit {
  @Input()
  comment: Comment = new Comment();
  user: User = getUser();
  public Editor = ClassicEditor;
  EditorConfig = editorConfig;
  message = '';
  error: AppError = new AppError();
  editMode = false;

  constructor(private commentService: CommentService) {}

  ngOnInit() {}

  edit() {
    this.editMode = true;
  }

  updateComment() {
    this.comment.timestamp = Date.now();
    this.commentService
      .updateComment(this.comment)
      .subscribe(
        () => (
          (this.message = 'Comment Updated Successfully'),
          (this.editMode = false)
        ),
        ({ error }) => (this.error = error)
      );
  }
}
