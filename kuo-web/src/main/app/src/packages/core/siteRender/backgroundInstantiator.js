import compFactory from '@packages/compUtils/compFactory';

const compType = 'mila.compinents.core.SiteBackground';

export default {
  getBgComponent: () => {
    const props = {
      rootId: 'masterPage',
    }

    const bgConstructor = compFactory.getCompClass(compType);
    return bgConstructor(props);
  }
}
