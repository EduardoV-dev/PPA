import { IProject } from "../models/interfaces";

const getURLFromImage = (image: File) =>
  URL.createObjectURL(image);

export const getNewImagesURL = (images: FileList) =>
  Array.from(images).map(getURLFromImage);

export const getImageObjectFromURL = (URL: string) =>
  fetch(URL).then(url => url.blob());

export const trimFields = (project: IProject): IProject => ({
  ...project,
  name: project.name.trim(),
  description: project.description.trim(),
  urlToProduction: project.urlToProduction.trim(),
  urlToSourceCode: project.urlToSourceCode.trim(),
});

export const isStringEmpty = (str: string): boolean => str === '';
export const isArrayEmpty = <T>(arr: T[]): boolean => arr.length === 0;

export const isURL = (str: string): boolean => {
  var pattern = new RegExp('^(https?:\\/\\/)?' + // protocol
    '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.?)+[a-z]{2,}|' + // domain name
    '((\\d{1,3}\\.){3}\\d{1,3}))' + // OR ip (v4) address
    '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + // port and path
    '(\\?[;&a-z\\d%_.~+=-]*)?' + // query string
    '(\\#[-a-z\\d_]*)?$', 'i'); // fragment locator

  return pattern.test(str);
}