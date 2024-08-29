export class LoginRequest {
  constructor(username = "", password = "") {
    this.username = username;
    this.password = password;
  }

  username: string;
  password: string;
}
