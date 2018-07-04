import { AstmMenu, AstmButton, AstmText, AstmImage, AstmGallery } from '../models/asset/entity';
import { AstvMenu, AstvButton, AstvText, AstvImage, AstvGallery } from '../routers/WorkSpace/SketchBoard/Asset';

const astm_regs = {
  Menu: AstmMenu,
  Button: AstmButton,
  Text: AstmText,
  Image: AstmImage,
  Gallery: AstmGallery,
};

const astv_regs = {
  Menu: AstvMenu,
  Button: AstvButton,
  Text: AstvText,
  Image: AstvImage,
  Gallery: AstvGallery,
};

export default {
  
  findAstm: kind => astm_regs[kind],

  findAstv: kind => astv_regs[kind],
};
