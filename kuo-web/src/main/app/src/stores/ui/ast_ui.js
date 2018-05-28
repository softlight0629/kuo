
const ast_setting_buttons = {
  Button: ['ChangeText', 'Layout', 'Design', 'Link'],
  Text: ['EditText', 'Animation', 'Link'],
  Menu: ['ChangeText', 'Layout', 'Design'],
}

class AstUiStore {
  astSettingButtons(astm) {
    return ast_setting_buttons[astm];
  }
}

export default AstUiStore;
