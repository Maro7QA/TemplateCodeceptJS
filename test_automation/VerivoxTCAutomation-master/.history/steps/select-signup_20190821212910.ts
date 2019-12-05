import { t } from 'testcafe';
import * as selector from '../selectors';

/**
 * @step
 * @@when("user selects sign up")
 */
export default async (_: string) => {

  await t
    .wait(4000)
    .click(selector.signupButton)
    .wait(1000);
};
