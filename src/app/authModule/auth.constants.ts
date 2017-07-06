export class AuthConstants {
  private static prefix = '';
  public static USERS =  AuthConstants.prefix + '/users';

  // /definitions/forms/23
  public static userWithUID(uid: string) {
    return AuthConstants.USERS + '/' + uid;
  }

}
