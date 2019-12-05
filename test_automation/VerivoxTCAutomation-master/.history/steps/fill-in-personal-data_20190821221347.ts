import { t } from 'testcafe';
import * as selector from '../selectors';
import { IPageModel } from '../models';


/**
 * @step
 * @then("user fills in personal data")
 */
export default async (_: string) => {


  // get the page object model that was injected in the context
  const inputData = t.ctx.inputData as IPageModel;

  const emailAddress = inputData.emailAddress || '';
  const gender = inputData.gender || '';

  await t
    .wait(400)
    .typeText(selector.emailAddress, emailAddress, { paste: true })
    .wait(1000)
    .typeText(selector.emailAddressConfirmation, emailAddress, { paste: true })
    .wait(1000)
    .typeText(selector.gender, gender)
    .wait(1000)
    .click(selector.genderMan)
    .wait(5000);
};
