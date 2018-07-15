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

  async fetchMediaFolders(guid) {
    return oauth.get(`${endpoint}/media_folders`, {
      params: {
        guid,
      },
    });
  }

  async addMediaFolder(name, parentGuid) {
    return oauth.post(`${endpoint}/media_folders`, {
      guid: parentGuid,
      name,
    })
  }
}

export default MediaService;
