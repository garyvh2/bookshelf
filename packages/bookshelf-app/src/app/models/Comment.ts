import { User } from './User';
import { Post } from './Post';
export class Comment {
  public id: number;
  public comment = '';
  public author: User;
  public post: Post;
  public timestamp: number;
}
