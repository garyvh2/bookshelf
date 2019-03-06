import { Component, OnInit } from '@angular/core';
import { PostService } from '../../services/post.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Post } from '../../models/Post';
import { getUser } from '../../shared/utils/getUser';
import { UserService } from '../../services/user.service';
import { User } from '../../models/User';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {
  id: string;
  post: Post;
  liked: boolean;
  user: User = getUser();

  constructor(
    private route: ActivatedRoute,
    private postService: PostService,
    private userService: UserService,
    private router: Router
  ) {}

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    this.postService.getPost(this.id).subscribe(post => {
      this.post = post;
      this.liked = post.likes.some(
        user => getUser().username === user.username
      );
    });
  }

  like() {
    this.userService
      .likePost(this.post.id, getUser().id)
      .subscribe(() => (this.liked = true));
  }

  unlike() {
    this.userService
      .unlikePost(this.post.id, getUser().id)
      .subscribe(() => (this.liked = false));
  }

  logout() {
    localStorage.clear();
    this.router.navigate(['login']);
  }

  isPrefered(tag) {
    return this.user.preferences.some(pref => pref.name === tag.name);
  }

  getColor(tag) {
    const isPrefered = this.isPrefered(tag);
    return isPrefered ? 'primary' : 'accent';
  }
}
