import { observable, action } from 'mobx';

class Pages {

  @observable focusedPage;

  @observable focusedPageTitle;

  @action setFocusedPage(focusedPage) {
    this.focusedPage = focusedPage;
    this.focusedPageTitle = this.getPageTitle(focusedPage.id);
  }
}

export default new Pages();
