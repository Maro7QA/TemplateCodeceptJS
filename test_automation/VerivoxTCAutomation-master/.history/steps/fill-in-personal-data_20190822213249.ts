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
  const firstName = inputData.firstName || '';
  const familyName = inputData.familyName || '';
  const houseNumber = inputData.houseNumber || '';
  const birthday = inputData.birthday || '';


  await t
    .wait(400)
    .typeText(selector.emailAddress, emailAddress, { paste: true })
    .wait(1000)
    .typeText(selector.emailAddressConfirmation, emailAddress, { paste: true })
    .wait(1000)
    .click(selector.gender)
    .wait(1000)
    .click(selector.genderMan)
    .wait(1000)
    .typeText(selector.firstName, firstName, { paste: true })
    .wait(1000)
    .typeText(selector.familyName, familyName, { paste: true })
    .wait(500)
    .click(selector.streetSelector)
    .wait(400)
    .click(selector.street)
    .wait(400)
    .typeText(selector.houseNumber, houseNumber, { paste: true })
    .wait(500)
    .typeText(selector.birthday, birthday, { paste: true })
};
