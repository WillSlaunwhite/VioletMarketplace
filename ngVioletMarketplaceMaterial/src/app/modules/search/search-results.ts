import Token from "src/app/models/token";
import User from "src/app/models/user";

export interface SearchResults {
  tokens: Token[];
  users: User[];
}
