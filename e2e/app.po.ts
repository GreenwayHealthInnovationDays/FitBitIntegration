export class FitBitApiIntegrationPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('fit-bit-api-integration-app h1')).getText();
  }
}
