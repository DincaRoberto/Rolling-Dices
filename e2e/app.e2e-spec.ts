import { RollingDicesPage } from './app.po';

describe('rolling-dices App', () => {
  let page: RollingDicesPage;

  beforeEach(() => {
    page = new RollingDicesPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
