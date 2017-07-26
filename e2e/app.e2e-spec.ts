import { PartsAndLabor1Page } from './app.po';

describe('parts-and-labor1 App', () => {
  let page: PartsAndLabor1Page;

  beforeEach(() => {
    page = new PartsAndLabor1Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
