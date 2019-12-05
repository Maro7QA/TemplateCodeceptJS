import { t } from 'testcafe';
import * as selector from '../selectors';

/**
 * @step
 * @@when("user selects first tariff")
 */
export default async (_: string) => {

  await t
    .wait(400)
    .click(selector.firstTariff)
    .wait(1000);
};
