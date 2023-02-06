class LandingPage {
  //locator Id's
  searchInputContainer = '[data-testid="searchBarInput"]';
  searchIcon = '[data-testid="searchIcon"]';
  sportsWear = '[data-testid="Label_Sportswear"]';
  acceptAllCookies = { css: '[id="onetrust-accept-btn-handler"]' };
  showAllResults = { css: '[data-testid="SearchTermShowAll"]' };

  selectAcceptAllCookies() {
    const { I } = inject();
    I.waitForVisible(this.acceptAllCookies);
    I.click(this.acceptAllCookies);
  }

  selectShowAllResults() {
    const { I } = inject();
    I.waitForVisible(this.showAllResults);
    I.click(this.showAllResults);
  }

  selectSportsWear() {
    const { I } = inject();
    I.waitForVisible(this.sportsWear);
    I.click(this.sportsWear);
  }

  inputSearchTerm(searchTerm) {
    const { I } = inject();
    I.scrollPageToTop();
    I.waitForVisible(this.searchInputContainer, 10);
    I.fillField(this.searchInputContainer, searchTerm);
  }
}

module.exports = new LandingPage();
