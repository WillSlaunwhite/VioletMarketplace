import User from "./user";

export default class Collection {
  id: number;
  name: string;
  description: string;
  creator: User;
  releaseDate: string;

  constructor(
    id: number = 0,
    name: string = '',
    description: string = '',
    creator: User = new User(),
    releaseDate: string = ''
  ) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.creator = creator;
    this.releaseDate = releaseDate;
  }
}
