import { t } from 'testcafe';
import * as selector from '../selectors';

/**
 * @step
 * @@then("user lands on confirmation page")
 */
export default async (_: string) => {

  await t
    .wait(4000)
    .click(selector.switchTariff)
    .wait(1000)
    .click(selector.signupContainerConfirmationForm)
    .wait(4000)
};
