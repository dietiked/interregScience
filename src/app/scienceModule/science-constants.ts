export class ScienceConstants {
  private static prefix = '';
  public static DEF_FORMS = ScienceConstants.prefix + '/definitions/forms';
  public static DEF_PESTS =  ScienceConstants.prefix + '/shared/pests';
  public static DEF_FORMPESTS = ScienceConstants.prefix + '/definitions/pests';
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
  public static formsForUserWithUid(uid: string) {
    return ScienceConstants.DATA_FORMS + '/' + uid;
  }

  // data/forms/:uid/:formId
  public static formWithKeyForUserWithUid(key: string, uid: string) {
    return ScienceConstants.formsForUserWithUid(uid) + '/' + key;
  }

  // definitions/pests/:pestId
  public static pestWithKey(key: string) {
    return ScienceConstants.DEF_PESTS + '/' + key;
  }

  // definitions/pestForms/:formId
  public static pestsForFormDefinitionWithKey(formDefinitionId: string) {
    return ScienceConstants.DEF_FORMPESTS + '/' + formDefinitionId;
  }
    // data/pests/:formId
  public static pestsForFormWithKey(formId: string) {
    return ScienceConstants.DATA_PESTS + '/' + formId;
  }

  // data/pests/:formId/:pestId
  public static pestWithKeyForFormWithKey(pestId: string, formId: string) {
    return ScienceConstants.DATA_PESTS + '/' + formId + '/' + pestId;
  }

}
