import oauth from '../../utils/oauth';

const endpoint = 'http://192.168.1.102:8085/api/v1';

class MediaService {

  async fetchPicturesFromServer() {
    return oauth.get(`${endpoint}/medias`);
  }

  async fetchMediaResources(guid) {
    return oauth.get(`${endpoint}/medias`, {
      params: {
        guid,
      },
    });
  }

  async fetchMediaCategories(guid) {
    return oauth.get(`${endpoint}/media_categories`, {
      params: {
        guid,
      },
    });
  }
}

export default MediaService;
