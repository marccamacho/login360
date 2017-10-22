import { Login360Page } from './app.po';

describe('login360 App', () => {
  let page: Login360Page;

  beforeEach(() => {
    page = new Login360Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
