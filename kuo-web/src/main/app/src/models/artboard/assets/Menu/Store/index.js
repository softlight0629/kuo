
import MenuItem from './MenuItem';

class Store {
  
  menuItems = [];

  constructor({ menuItems = [] }) {
    menuItems.forEach(menuItem => {
      this.menuItems.push(new MenuItem(menuItem));
    });
  }
}

export default Store;
