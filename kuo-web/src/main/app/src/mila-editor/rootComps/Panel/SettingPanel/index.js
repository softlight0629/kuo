import DesignPanel from "./Design";
import LayoutPanel from './Layout';
import LinkPanel from './Link';
import TextPanel  from './Text';
import AnimationPanel from './Animation';
import FilterPanel from './Filter';
import ColumnPanel from './Column';

import compPanelsRegistrar from '@packages/compUtils/compPanelsRegistrar';


compPanelsRegistrar.register('compPanels.layout', LayoutPanel);
compPanelsRegistrar.register('compPanels.column', ColumnPanel);
compPanelsRegistrar.register('compPanels.design', DesignPanel);
compPanelsRegistrar.register('compPanels.text', TextPanel);
compPanelsRegistrar.register('compPanels.animation', AnimationPanel);
compPanelsRegistrar.register('compPanels.filter', FilterPanel);


export default {
  DesignPanel,
  LayoutPanel,
  LinkPanel,
  TextPanel,
  AnimationPanel,
  FilterPanel,
}
