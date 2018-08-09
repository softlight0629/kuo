import Layouter from './layouter';

export default function createLayout() {
  for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  return (new Layouter(args)).createLayout();
}
