import { 
  AstmMenu, 
  AstmButton, 
  AstmText, 
  AstmImage, 
  AstmGallery,
  AstmInput,
  AstmSelect,
  AstmDropdown,
  AstmRadio,
  AstmCheckbox,
  AstmTextArea,
  AstmPagination,
  AstmSwitch,
  AstmTable,
} from '../models/asset/entity';

import { 
  AstvMenu, 
  AstvButton, 
  AstvText, 
  AstvImage, 
  AstvGallery,
  AstvInput,
  AstvSelect,
  AstvDropdown,
  AstvRadio,
  AstvCheckbox,
  AstvTextArea,
  AstvPagination,
  AstvSwitch,
  AstvTable,
} from '../routers/WorkSpace/SketchBoard/Asset';

const astm_regs = {
  Menu: AstmMenu,
  Button: AstmButton,
  Text: AstmText,
  Image: AstmImage,
  Gallery: AstmGallery,
  Input: AstmInput,
  Select: AstmSelect,
  Dropdown: AstmDropdown,
  Radio: AstmRadio,
  Checkbox: AstmCheckbox,
  TextArea: AstmTextArea,
  Pagination: AstmPagination,
  Switch: AstmSwitch,
  Table: AstmTable,
};

const astv_regs = {
  Menu: AstvMenu,
  Button: AstvButton,
  Text: AstvText,
  Image: AstvImage,
  Gallery: AstvGallery,
  Input: AstvInput,
  Select: AstvSelect,
  Dropdown: AstvDropdown,
  Radio: AstvRadio,
  Checkbox: AstvCheckbox,
  TextArea: AstvTextArea,
  Pagination: AstvPagination,
  Switch: AstvSwitch,
  Table: AstvTable,
};

export default {
  
  findAstm: kind => astm_regs[kind],

  findAstv: kind => astv_regs[kind],
};
