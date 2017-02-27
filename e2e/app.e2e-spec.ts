import { InterregSciencePage } from './app.po';

describe('interreg-science App', function() {
  let page: InterregSciencePage;

  beforeEach(() => {
    page = new InterregSciencePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
