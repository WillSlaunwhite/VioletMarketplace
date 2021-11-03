export class User {
  id: number;
  email: string;
  username: string;
  password: string;
  enabled: boolean;
  role: string;
  biography: string;
  displayName: string;
  pictureUrl: string;
  wallet: string;

  constructor(
    id: number = 0,
    email: string = '',
    username: string = '',
    password: string = '',
    enabled: boolean = false,
    role: string = '',
    biography: string = '',
    displayName: string = '',
    pictureUrl: string = '',
    wallet: string = '',

  ) {
    this.id = id;
    this.email = email;
    this.username = username;
    this.password = password;
    this.enabled = enabled;
    this.role = role;
    this.biography = biography;
    this.displayName = displayName;
    this.pictureUrl = pictureUrl;
    this.wallet = wallet;

  }
}
