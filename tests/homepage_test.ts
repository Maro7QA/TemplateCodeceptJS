const landingPage = require("../src/page/LandingPage");
const productLandingPage = require("../src/page/ProductLandingPage");

Feature("homepage");

Scenario("open homepage @homepage", ({ I }) => {
  I.amOnPage("/");
  landingPage.selectAcceptAllCookies();
  landingPage.selectBasketball();
  landingPage.showResults();
  I.waitForVisible(productLandingPage.offer, 10);
});
