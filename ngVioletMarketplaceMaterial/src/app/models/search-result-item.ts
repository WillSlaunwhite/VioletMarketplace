import  User from 'src/app/models/user';
import  Token  from 'src/app/models/token';

export type SearchResultItem = {
  item: User | Token;
  type: 'user' | 'token';
};
