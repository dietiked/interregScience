export class AuthConstants {
  private static prefix = '';
  public static USERS =  AuthConstants.prefix + '/users';

  // /users/1fckS2LULZem7hR6oYfLXi1ETls1
  public static userWithUID(uid: string) {
    return AuthConstants.USERS + '/' + uid;
  }

}
