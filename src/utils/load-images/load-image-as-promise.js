export const loadImageAsPromise = (data, cb) => {
  const image = new Image();
  image.src = data.src;

  const onImageLoad = () => cb(image, data.order, data.index);

  image.onload = onImageLoad
  image.onerror = onImageLoad
};
