import { AstmMenu, AstmButton, AstmText, AstmImage, AstmGallery } from '../models/asset/entity';
import { AstvButton } from '../engine/Asset';

const astm_regs = {
  Menu: AstmMenu,
  Button: AstmButton,
  Text: AstmText,
  Image: AstmImage,
  Gallery: AstmGallery,
};

const astv_regs = {
  Button: AstvButton,
};


export default {
  
  findAstm: kind => astm_regs[kind],

  findAstv: kind => astv_regs[kind],
};
