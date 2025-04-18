import { loadImageAsPromise } from './load-image-as-promise';

export const loadOriginalImages = async (imagesSrcs, cb) => {

  await Promise.all(imagesSrcs.map(async ({ src, order }, index) => {
    await loadImageAsPromise({ src, order, index }, cb);
  }));
};
