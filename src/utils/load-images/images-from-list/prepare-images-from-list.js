import { generateImagesPath } from '../../image-src/generate-images-path';

export const prepareImagesFromList = (images, srcConfig, loadOriginalImages ) => {
  const { folder } = srcConfig;

  return images.map((src, index) => {
    const nextSrcConfig = { ...srcConfig };
    nextSrcConfig.folder = /(http(s?)):\/\//gi.test(src) ? '' : folder;
    nextSrcConfig.filename = src;

    return {
      src: generateImagesPath(nextSrcConfig, loadOriginalImages),
      order: index,
    };
  });
};
