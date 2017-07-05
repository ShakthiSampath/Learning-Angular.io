import { GoodMovieAppPage } from './app.po';

describe('good-movie-app App', () => {
  let page: GoodMovieAppPage;

  beforeEach(() => {
    page = new GoodMovieAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
