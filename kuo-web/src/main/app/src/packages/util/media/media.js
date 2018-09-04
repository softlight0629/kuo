import staticAssets from '@packages/staticAssets/staticAssets';

const assetsMap = staticAssets.staticAssetsMap;

function getMediaUrl(mediaPath, fallback) {
  const baseUrl = 'https://static.parastorage.com/services/santa-resources/resources/editor';
  let assetPath = assetsMap[mediaPath] || assetsMap[fallback] || fallback || mediaPath;

  if (assetPath && assetPath[0] === '/') {
    assetPath = assetPath.substr(1);
  }

  return [baseUrl, assetPath].join('/');
}

export default {
  getMediaUrl,
}
