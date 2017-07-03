// DDAuthenticationMessage
// A simple class that send a message to a subscriber.
// A message has a result (boolean) and a message (string)

export class DDAuthenticationMessage {
  result: string;
  message = '';

  private LOGIN = 'login';
  private LOGOUT = 'logout';
  private ERROR = 'error';

  loginMessage(message?: string) {
    this.result = this.LOGIN;
    this.message = message;
  }
  logoutMessage(message?: string) {
    this.result = this.LOGOUT;
    this.message = message;
  }
  errorMessage(message: string) {
    this.result = this.ERROR;
    this.message = message;
  }

  isLogin() {
    return this.result == this.LOGIN ? true : false;
  }
  isLogout() {
    return this.result == this.LOGOUT ? true : false;
  }
  isError() {
    return this.result == this.ERROR ? true : false;
  }

}
