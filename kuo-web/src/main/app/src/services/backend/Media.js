import { MediaResource } from '../../models/media'
import oauth from '../../utils/oauth';

const endpoint = 'http://192.168.1.102:8085/api/v1/medias';

class MediaService {

  async fetchPicturesFromServer() {
    return oauth.get(endpoint);
  }
}

export default MediaService;
