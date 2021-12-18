import { IProjectForm } from "../models/interfaces";

export const getURLFromImage = (image: File) =>
  URL.createObjectURL(image);

// export const getNewImagesURL = (images: File[] | FileList) =>
//   Array.from(images).map(getURLFromImage);

export const getImageObjectFromURL = (URL: string) =>
  fetch(URL).then(url => url.blob());

export const trimFields = (project: IProjectForm): IProjectForm => ({
  ...project,
  name: project.name.trim(),
  description: project.description.trim(),
  urlToProduction: project.urlToProduction.trim(),
  urlToSourceCode: project.urlToSourceCode.trim(),
});

export const isStringEmpty = (str: string): boolean => str === '';
export const isArrayEmpty = <T>(arr: T[]): boolean => arr.length === 0;

export const isURL = (str: string): boolean => {
  let pattern = new RegExp('^((ft|htt)ps?:\\/\\/)?' + // protocol
    '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' + // domain name and extension
    '((\\d{1,3}\\.){3}\\d{1,3}))' + // OR ip (v4) address
    '(\\:\\d+)?' + // port
    '(\\/[-a-z\\d%@_.~+&:]*)*' + // path
    '(\\?[;&a-z\\d%@_.,~+&:=-]*)?' + // query string
    '(\\#[-a-z\\d_]*)?$', 'i'); // fragment locator
  return pattern.test(str);
}