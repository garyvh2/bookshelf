import { Component, OnInit, Input } from '@angular/core';
import { Post } from 'src/app/models/Post';
import { getUser } from '../../utils/getUser';
import { User } from '../../../models/User';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.scss']
})
export class PostDetailComponent implements OnInit {
  @Input()
  post: Post;
  user: User = getUser();

  constructor() {}

  ngOnInit() {}

  isPrefered(tag) {
    return this.user.preferences.some(pref => pref.name === tag.name);
  }

  getColor(tag) {
    const isPrefered = this.isPrefered(tag);
    return isPrefered ? 'primary' : 'accent';
  }
}
