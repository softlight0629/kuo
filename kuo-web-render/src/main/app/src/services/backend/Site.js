import oauth from '../../utils/oauth';

// 一个 service 就对应一个 微服务
// 通过 oauth 来与 微服务 交互
const endpoint = 'http://192.168.1.102:8082/api/v1/sites';


class SiteService {

  async fetchSiteFromServer(siteId) {
    return oauth.get(`${endpoint}/${siteId}`);
  }
}

export default SiteService;
