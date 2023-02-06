class ProductLandingPage {
  plpSection = { css: '[data-testid="sectionEnd"]' };
  firstProductPlp = '(//*[@data-testid="ProductTileHeaderCTA"])[1]';

  selectFirstProductPlp() {
    const { I } = inject();
    I.waitForVisible(this.firstProductPlp, 10);
    I.click(this.firstProductPlp);
  }
}

module.exports = new ProductLandingPage();
