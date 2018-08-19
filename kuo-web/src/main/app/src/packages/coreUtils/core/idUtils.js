import shortid from 'shortid';

export default {
  
  uniqId() {
    return shortid.generate();
  },
}
