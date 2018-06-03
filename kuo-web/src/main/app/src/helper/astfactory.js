import { AstmMenu, AstmButton } from '../models/artboard/assets';
import { AstvMenu, AstvButton } from '../routers/WorkSpace/SketchBoard/Assets';

const astm_regs = {
  Menu: AstmMenu,
  Button: AstmButton,
};

const astv_regs = {
  Menu: AstvMenu,
  Button: AstvButton,
};

export default {
  
  findAstm: kind => astm_regs[kind],

  findAstv: kind => astv_regs[kind],
};
