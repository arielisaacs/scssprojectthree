import { ScssprojectthreePage } from './app.po';

describe('scssprojectthree App', function() {
  let page: ScssprojectthreePage;

  beforeEach(() => {
    page = new ScssprojectthreePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
