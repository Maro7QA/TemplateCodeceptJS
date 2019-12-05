import { t } from 'testcafe';
import * as selector from '../selectors';
import { IPageModel } from '../models';

/**
 * @step
 * @when("user selects postal code and submits")
 */
export default async (_: string) => {


  // get the page object model that was injected in the context
  const inputData = t.ctx.inputData as IPageModel;

  const postalCode = inputData.postalCode || '';

  await t
    .wait(400)
    .click(selector.postalCode)
    .wait(400)
    .typeText(selector.postalCode, postalCode, { paste: true })
    .wait(1000)
    .click(selector.submitButton)
    .wait(20000);
};
