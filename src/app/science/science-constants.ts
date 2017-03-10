export class ScienceConstants {
  private static prefix = '';
  public static LIST_FORMDEFINITIONS = ScienceConstants.prefix + '/formDefinitions';
  public static LIST_FORMS =  ScienceConstants.prefix + '/forms';
  public static LIST_FORMPESTS =  ScienceConstants.prefix + '/formPests';
  public static LIST_PESTS =  ScienceConstants.prefix + '/pests';

  // /formDefinitions/23
  public static objectFormDefinitionWithKey(key: number) {
    return ScienceConstants.LIST_FORMDEFINITIONS + '/' + key;
  }

  // /formDefinitions/23/pests
  public static listPestsForDefinitionWithKey(key: number) {
    return ScienceConstants.LIST_FORMDEFINITIONS + '/' + key + '/' + ScienceConstants.LIST_PESTS;
  }

  // /forms/4jadf89an310fanfa (uid)
  public static listFormsForUserWithUid(uid: string) {
    return ScienceConstants.LIST_FORMS + '/' + uid;
  }

  // /forms/4jadf89an310fanfa/-Ydf3ka46Foap6Ad
  public static objectFormForUserWithUidAndKey(uid: string, key: string) {
    return ScienceConstants.listFormsForUserWithUid(uid) + '/' + key;
  }

  // /pests/53
  public static objectPestWithKey(key: number) {
    return ScienceConstants.LIST_PESTS + '/' + key;
  }

}
