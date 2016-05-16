import { FitBitApiIntegrationPage } from './app.po';

describe('fit-bit-api-integration App', function() {
  let page: FitBitApiIntegrationPage;

  beforeEach(() => {
    page = new FitBitApiIntegrationPage();
  })

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('fit-bit-api-integration works!');
  });
});
