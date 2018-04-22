import SiteService from './micro/SiteService';
import AuthService from './micro/AuthService';

export default {
  siteService: new SiteService(),
  authService: new AuthService(),
}
