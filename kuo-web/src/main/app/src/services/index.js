import SiteService from './micro/SiteService';
import AuthService from './micro/AuthService';
import MediaService from './micro/MediaService';

export default {
  siteService: new SiteService(),
  authService: new AuthService(),
  mediaService: new MediaService(),
}
