import { Tag } from './Tag';
import { User } from './User';
export class Post {
  public id: number;
  public title: string;
  public tags: Tag[] = [];
  public text = '';
  public status: string;
  public author: User = new User();
  public timestamp: number;
  public likes: User[];
  public comments: Comment[];
}
