import 'testcafe';
import { getCurrentConfig } from '../config/testcafe-config';
import { pageModel } from '../models';
import { given, then, when } from '../step-runner';

/**
 * @feature
 */
fixture('Feature: TestCafe Example')
  .before(async (ctx) => {
    // inject global configuration in the fixture context
    ctx.config = getCurrentConfig();
  })
  .beforeEach(async (t) => {
    // inject page model in the test context
    t.ctx.inputData = pageModel;
    await given('I navigate to verivox home page');
  });

test('Scenario: switch power provider', async () => {
  await then('user selects power section');
  await when('user selects postal code and submits');
  await when('user selects first tariff');
  await when('user selects sign-up button');
  await then('user fills in personal data');
  await when('user selects switch tariff');
});

/**
test('Scenario: can send feedback with my name only', async () => {
  await when('I enter my name');
  await then('I can submit my feedback on testcafe');
});

test('Scenario: send feedback', async () => {
  await env.only('devci');
  await given('I enter my name');
  await when('I send my feedback on testcafe');
  await then("a 'Thank you' message should appear with my name");
});

*/
