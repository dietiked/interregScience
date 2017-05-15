export class ScienceConstants {
  private static prefix = '';
  public static DEF_FORMS = ScienceConstants.prefix + '/definitions/forms';
  public static DEF_PESTS =  ScienceConstants.prefix + '/definitions/pests';
  public static DATA_FORMS =  ScienceConstants.prefix + '/data/forms';
  public static DATA_PESTS =  ScienceConstants.prefix + '/data/pests';

  // /formDefinitions/23
  public static objectFormDefinitionWithKey(key: number) {
    return ScienceConstants.DEF_FORMS + '/' + key;
  }

  // /formDefinitions/23/pests
  public static listPestsForDefinitionWithKey(key: number) {
    return ScienceConstants.DEF_FORMS + '/' + key + '/pests';
  }

  // /forms/4jadf89an310fanfa (uid)
  public static listFormsForUserWithUid(uid: string) {
    return ScienceConstants.DATA_FORMS + '/' + uid;
  }

  // /forms/4jadf89an310fanfa/-Ydf3ka46Foap6Ad
  public static objectFormForUserWithUidAndKey(uid: string, key: string) {
    return ScienceConstants.listFormsForUserWithUid(uid) + '/' + key;
  }

  // /pests/53
  public static objectPestWithKey(key: number) {
    return ScienceConstants.DEF_PESTS + '/' + key;
  }

  public static listPestsForUserWithUid(uid: string) {
    return ScienceConstants.DATA_PESTS + '/' + uid;
  }

}
