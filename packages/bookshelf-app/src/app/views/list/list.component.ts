import { Component, OnInit } from '@angular/core';
import { Post } from '../../models/Post';
import { PostService } from '../../services/post.service';
import { Router } from '@angular/router';
import { User } from '../../models/User';
import { getUser } from '../../shared/utils/getUser';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  user: User = getUser();
  posts: Post[];

  constructor(private postService: PostService, private router: Router) {}

  ngOnInit() {
    this.loadPosts();
  }

  loadPosts() {
    this.postService.getPosts().subscribe(posts => {
      this.posts = posts.sort((current, next) => {
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

  loadMyPosts() {
    this.postService.getMyPosts(getUser()).subscribe(posts => {
      this.posts = posts.sort((current, next) => {
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

  loadSuggested() {
    this.postService.getSuggested(getUser()).subscribe(posts => {
      this.posts = posts.sort((current, next) => {
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

  loadLiked() {
    this.postService.getLiked(getUser()).subscribe(posts => {
      this.posts = posts.sort((current, next) => {
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

  logout() {
    localStorage.clear();
    this.router.navigate(['login']);
  }
}
