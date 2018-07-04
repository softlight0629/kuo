import SiteService from './backend/Site';
import AuthService from './backend/Auth';
import MediaService from './backend/Media';

export default {
  siteService: new SiteService(),
  authService: new AuthService(),
  mediaService: new MediaService(),
}
