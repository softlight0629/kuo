import { observable, extendObservable } from 'mobx';
import RestClient from '../utils/rest_client';

const client = new RestClient('http://192.168.1.100:8081');

export default class SiteStore {

  constructor() {
    extendObservable(this, {
      site: {},
    });

  }

  async load(site) {
    return await client.get(`api/v1/sites/${site}`);
  }
}
