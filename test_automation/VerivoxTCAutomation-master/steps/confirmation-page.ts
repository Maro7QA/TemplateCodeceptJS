import { t } from 'testcafe';
import * as selector from '../selectors';

/**
 * @step
 * @@then("user lands on confirmation page")
 */
export default async (_: string) => {

  await t
    .wait(1000)
    .expect(selector.signupContainerConfirmationForm.exists).ok()
    .wait(4000)
};
