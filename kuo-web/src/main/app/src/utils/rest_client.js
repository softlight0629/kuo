import axios from 'axios';

export default class RestClient {

  constructor(endpoint) {
    this.endpoint = endpoint;
  }

  async get(api) {
    let res;
    try {
      res = await axios.get(api);
    } catch (e) {
      console.log(e);
    }

    return res.data;
  }

  async post(api, data) {
    const res =  await fetch(`${this.endpoint}/${api}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    return res.data;
  }
}
