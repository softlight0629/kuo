import DesignPanel from "./Design";
import LayoutPanel from './Layout';
import LinkPanel from './Link';
import TextPanel  from './Text';
import AnimationPanel from './Animation';
import FilterPanel from './Filter';
import ColumnPanel from './Column';

import compPanelsRegistrar from '@packages/compUtils/compPanelsRegistrar';


compPanelsRegistrar.register('panels.compPanels.layout', LayoutPanel);
compPanelsRegistrar.register('panels.compPanels.column', ColumnPanel);
compPanelsRegistrar.register('panels.compPanels.design', DesignPanel);
compPanelsRegistrar.register('panels.compPanels.text', TextPanel);
compPanelsRegistrar.register('panels.compPanels.animation', AnimationPanel);
compPanelsRegistrar.register('panels.compPanels.filter', FilterPanel);
compPanelsRegistrar.register('panels.compPanels.link', LinkPanel);

export default {
  DesignPanel,
  LayoutPanel,
  LinkPanel,
  TextPanel,
  AnimationPanel,
  FilterPanel,
}
