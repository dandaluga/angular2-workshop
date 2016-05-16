export class WorkshopPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('workshop-app h1')).getText();
  }
}
