import { t } from 'testcafe';
import * as selector from '../selectors';

/**
 * @step
 * @given,@when("user selects power")
 */
export default async (_: string) => {

  await t
    .wait(400)
    .click(selector.powerSection)
    .wait(1000)
    .click(selector.oekoStromSection);
};
