export class ScienceConstants {
  private static prefix = '';
  public static DEF_FORMS = ScienceConstants.prefix + '/definitions/forms';
  public static DEF_PESTS =  ScienceConstants.prefix + '/definitions/pests';
  public static DATA_FORMS =  ScienceConstants.prefix + '/data/forms';
  public static DATA_PESTS =  ScienceConstants.prefix + '/data/pests';

  // /definitions/forms/23
  public static objectFormDefinitionWithKey(key: string) {
    return ScienceConstants.DEF_FORMS + '/' + key;
  }

  // /definitions/forms/23/pests
  public static listPestsForDefinitionWithKey(key: string) {
    return ScienceConstants.DEF_FORMS + '/' + key + '/pests';
  }

  // data/forms/:uid
  public static listFormsForUserWithUid(uid: string) {
    return ScienceConstants.DATA_FORMS + '/' + uid;
  }

  // data/forms/:uid/:formId
  public static objectFormForUserWithUidAndKey(uid: string, key: string) {
    return ScienceConstants.listFormsForUserWithUid(uid) + '/' + key;
  }

  // definitions/pests/:pestId
  public static objectPestWithKey(key: string) {
    return ScienceConstants.DEF_PESTS + '/' + key;
  }

  // data/pests/:formId
  public static listPestsForFormWithKey(formId: string) {
    return ScienceConstants.DATA_PESTS + '/' + formId;
  }

  // data/pests/:formId/:pestId
  public static objectPestValuesForFormAndPest(pestId: string, formId: string) {
    return ScienceConstants.DATA_PESTS + '/' + formId + '/' + pestId;
  }

}
