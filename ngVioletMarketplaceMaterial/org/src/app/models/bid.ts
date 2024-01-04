import Token from "./token";
import  User from "./user";
import Transaction from "./transaction";

export class Bid {
  id:number;
  description: string;
  offerAmount: number;
  accepted: boolean;
  buyer: User;
  seller: User;
  bidDate: string;
  token: Token;
  transaction: Transaction;

  constructor(
    id: number = 0,
    description: string = '',
    offerAmount: number,
    accepted: boolean | false,
    buyer: User= new User(),
    seller: User = new User(),
    token: Token= new Token(),
    transaction: Transaction = new Transaction(),
    bidDate: string = '',
  ) {
    this.id = id;
    this.description = description;
    this.accepted = accepted;
    this.buyer = buyer;
    this.seller = seller;
    this.token = token;
    this.transaction = transaction;
    this.bidDate = bidDate;
    this.offerAmount = offerAmount;
  }
}
