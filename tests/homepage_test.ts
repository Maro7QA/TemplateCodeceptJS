const landingPage = require("../src/page/LandingPage");
const productLandingPage = require("../src/page/ProductLandingPage");

Feature("homepage");

Scenario("open homepage @homepage", ({ I }) => {
  I.amOnPage("/");
  landingPage.selectAcceptAllCookies();

  landingPage.inputSearchTerm("Ski jacket");
  landingPage.selectShowAllResults();
  I.waitForVisible(productLandingPage.plpSection, 10);
  productLandingPage.selectFirstProductPlp();
});
