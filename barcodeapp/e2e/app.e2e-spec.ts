import { BarcodeappPage } from './app.po';

describe('barcodeapp App', () => {
  let page: BarcodeappPage;

  beforeEach(() => {
    page = new BarcodeappPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
