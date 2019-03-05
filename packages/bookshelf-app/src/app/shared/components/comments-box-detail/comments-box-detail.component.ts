import { Component, OnInit, Input } from '@angular/core';
import { Comment } from '../../../models/Comment';

@Component({
  selector: 'app-comments-box-detail',
  templateUrl: './comments-box-detail.component.html',
  styleUrls: ['./comments-box-detail.component.scss']
})
export class CommentsBoxDetailComponent implements OnInit {
  @Input()
  comment: Comment = new Comment();

  constructor() {}

  ngOnInit() {}
}
