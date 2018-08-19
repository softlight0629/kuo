
const ast_setting_buttons = {
  Button: ['ChangeText', 'Layout', 'Design', 'Link'],
  RichText: ['EditText', 'Animation', 'Link'],
  Menu: ['ChangeText', 'Layout', 'Design'],
  Photo: ['ChangeImage', 'Settings', 'Filter', 'Design', 'Animation', 'Link'],
  Gallery: ['ManageMedia','GallerySettings', 'Layout', 'Design'],
  Input: ['SetInputType', 'Layout', 'Design'],
  Select: ['ManageItems', 'Setting', 'Layout', 'Design'],
  Dropdown: ['ManageItems', 'Layout', 'Design'],
  Radio: ['ManageButtons', 'Layout', 'Design'],
  Checkbox: ['ManageButtons', 'Layout', 'Design'],
  TextArea: ['SetInitialText', 'Layout', 'Design'],
  Pagination: ['ManageMedia', 'Layout', 'Design'],
  Switch: ['SwitchSettings', 'Layout', 'Design'],
  Table: ['ManageTable', 'Layout', 'Design'],
  StripColumnsContainer: ['ChangeText', 'Layout', 'Design'],
  Column: ['ChangeText', 'Layout', 'Design'],
}

class AstUiStore {

  astSettingButtons(astm) {
    return ast_setting_buttons[astm];
  }
}

export default AstUiStore;
