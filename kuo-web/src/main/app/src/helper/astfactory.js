import { AstmMenu, AstmButton, AstmText, AstmImage } from '../models/artboard/assets';
import { AstvMenu, AstvButton, AstvText, AstvImage } from '../routers/WorkSpace/SketchBoard/Assets';

const astm_regs = {
  Menu: AstmMenu,
  Button: AstmButton,
  Text: AstmText,
  Image: AstmImage,
};

const astv_regs = {
  Menu: AstvMenu,
  Button: AstvButton,
  Text: AstvText,
  Image: AstvImage,
};

export default {
  
  findAstm: kind => astm_regs[kind],

  findAstv: kind => astv_regs[kind],
};
