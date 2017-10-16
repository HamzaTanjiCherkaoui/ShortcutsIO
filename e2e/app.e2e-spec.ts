import { ShortcutIOPage } from './app.po';

describe('shortcut-io App', () => {
  let page: ShortcutIOPage;

  beforeEach(() => {
    page = new ShortcutIOPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
