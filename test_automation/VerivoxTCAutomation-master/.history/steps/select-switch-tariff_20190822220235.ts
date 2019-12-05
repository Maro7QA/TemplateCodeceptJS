import { t } from 'testcafe';
import * as selector from '../selectors';

/**
 * @step
 * @@when("user selects switch provider")
 */
export default async (_: string) => {

  await t
    .wait(4000)
    .click(selector.firstTariff)
    .wait(1000);
};
