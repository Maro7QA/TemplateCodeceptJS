class LandingPage {
  //locator Id's
  searchInputContainer = '[data-testid="searchBarInput"]';
  searchIcon = '[data-testid="searchIcon"]';
  sportsWear = '[data-testid="Label_Sportswear"]';

  clickSearchIcon() {
    const { I } = inject();
    I.waitForVisible(this.searchIcon);
    I.click(this.searchIcon);
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
