const landingPage = require("../src/page/LandingPage");

Feature("homepage");

Scenario("open homepage @homepage", ({ I }) => {
  I.amOnPage("/");
  landingPage.inputSearchTerm("Ski jacket");
  landingPage.selectSportsWear();
});
