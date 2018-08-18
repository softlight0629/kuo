import axios from 'axios';

class Client {

  async get(path, option) {
    return await axios.get(path, option);
  }

  async post(path, data, option) {
    console.log(data, 'data..', option);
    return await axios.post(path, data, option);
  }

  async delete(path, option) {
    return await axios.delete(path, option);
  }

  async put(path, option) {
    return await axios.put(path, option);
  }
}

export default new Client();
