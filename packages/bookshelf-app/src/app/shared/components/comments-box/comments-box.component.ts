import { CommentService } from './../../../services/comment.service';
import { Component, OnInit, Input } from '@angular/core';
import { Post } from '../../../models/Post';
import { Comment } from '../../../models/Comment';

@Component({
  selector: 'app-comments-box',
  templateUrl: './comments-box.component.html',
  styleUrls: ['./comments-box.component.scss']
})
export class CommentsBoxComponent implements OnInit {
  @Input()
  post: Post;
  comments: Comment[];

  constructor(private commmentService: CommentService) {}

  ngOnInit() {
    this.loadComments();
  }

  loadComments() {
    this.commmentService.getPostComments(this.post.id).subscribe(comments => {
      this.comments = comments.sort((current, next) => {
        const currentDate = new Date(current.timestamp);
        const nextDate = new Date(next.timestamp);
        if (currentDate > nextDate) {
          return -1;
        }
        if (currentDate < nextDate) {
          return 1;
        }
        if (currentDate === nextDate) {
          return 0;
        }
      });
    });
  }
}
