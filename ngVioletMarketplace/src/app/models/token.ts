import { User } from "./user";

export class Token {
  id: number;
  name: string;
  description: string;
  rarity: string;
  price: number;
  releaseDate: string;
  tokenLocation: string;
  offered: boolean;
  owner: User;
  creator: User;


  constructor(
    id: number = 0,
    name: string = '',
    description: string = '',
    rarity: string = '',
    price: number = 0,
    releaseDate: string = '',
    tokenLocation: string = '',
    offered: boolean = false,
    owner: User = new User(),
    creator: User = new User()
  ) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.rarity = rarity;
    this.price = price;
    this.releaseDate = releaseDate;
    this.tokenLocation = tokenLocation;
    this.offered = offered;
    this.owner = owner;
    this.creator = creator;
  }
}
