import { PageRes } from './resource';

class Site {
  
  constructor(option) {
    this.id = option.id;
    this.guid = option.guid;
    this.address = option.address;
    this.domain = option.domain;
    
    this.pageResList = option.pageResList.map(pageRes => new PageRes(pageRes));
  }
}

export default Site;
