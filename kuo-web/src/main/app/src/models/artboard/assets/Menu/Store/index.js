
import { observable } from 'mobx';
import MenuItem from './MenuItem';

class Store {
  
  @observable menuItems = [];

  constructor({ menuItems = [] }) {
    menuItems.forEach(menuItem => {
      this.menuItems.push(new MenuItem(menuItem));
    });
  }
}

export default Store;
