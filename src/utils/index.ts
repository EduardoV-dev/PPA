const getURLFromImage = (image: File) =>
  URL.createObjectURL(image);

export const getNewImagesURL = (images: FileList) =>
  Array.from(images).map(getURLFromImage);

export const getImageObjectFromURL = (URL: string) =>
  fetch(URL).then(url => url.blob());