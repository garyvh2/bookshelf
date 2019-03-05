import { Tag } from './Tag';
export class User {
  public id: number;
  public username: string;
  public status: string;
  public comments: Comment[];
  public preferences: Tag[];
}
