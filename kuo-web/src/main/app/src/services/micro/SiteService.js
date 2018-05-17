import Site from '../../models/site/Site';
import oauth from '../../utils/oauth';

// 一个 service 就对应一个 微服务
// 通过 oauth 来与 微服务 交互
const endpoint = 'http://192.168.1.101:8082/api/v1/sites';

// 那后端的服务数据, 让 store 来生成 domain. 然后 store 将 domain 保存到 服务端
class SiteService {

  async fetchSiteFromServer(siteId) {
    return oauth.get(`${endpoint}/${siteId}`);
  }

  async fetchAllSitesFromServer() {
    return oauth.get(endpoint);
  }

  async addSiteToServer(site) {
    return await oauth.post(endpoint, site);
  }

  async updateSiteToServer(site) {
    return await oauth.put(`${endpoint}/${site.guid}`, site);
  }

  async addPageResourceToServer(siteId, pageResource) {
    return await oauth.post(`${endpoint}/${siteId}/pages`, pageResource);
  }
}

export default SiteService;
