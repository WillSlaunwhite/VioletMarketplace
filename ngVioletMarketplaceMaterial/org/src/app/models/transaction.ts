import Token from "./token";
import  User  from "./user";

export default class Transaction {
  id:number;
  description:string;
  buyer: User;
  seller: User;
  token: Token;
  constructor(
    id: number = 0,
    description: string = '',
    buyer: User= new User(),
    seller: User = new User(),
    token: Token= new Token()
  ) {
    this.id = id;
    this.description = description;
    this.buyer = buyer;
    this.seller = seller;
    this.token = token;
  }
}
