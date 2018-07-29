
const ast_setting_buttons = {
  Button: ['ChangeText', 'Layout', 'Design', 'Link'],
  Text: ['EditText', 'Animation', 'Link'],
  Menu: ['ChangeText', 'Layout', 'Design'],
  Image: ['ChangeImage', 'Design', 'Animation', 'Link'],
  Gallery: ['ManageMedia','GallerySettings', 'Layout', 'Design'],
  Input: ['SetInputType', 'Layout', 'Design'],
  Select: ['ManageItems', 'Setting', 'Layout', 'Design'],
  Dropdown: ['ManageItems', 'Layout', 'Design'],
  Radio: ['ManageButtons', 'Layout', 'Design'],
  Checkbox: ['ManageButtons', 'Layout', 'Design'],
  TextArea: ['SetInitialText', 'Layout', 'Design'],
  Pagination: ['ManageMedia', 'Layout', 'Design'],
  Switch: ['SwitchSettings', 'Layout', 'Design'],
  Table: ['ManageTable', 'Layout', 'Design']
}

class AstUiStore {
  astSettingButtons(astm) {
    return ast_setting_buttons[astm];
  }
}

export default AstUiStore;
