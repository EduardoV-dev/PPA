import isGithubURL from 'is-github-url';
import {
  IFormErrors,
  IProject,
} from "../models/interfaces";
import {
  isArrayEmpty,
  isStringEmpty,
  isURL,
  trimFields,
} from "../utils";

export const checkData = (project: IProject) => {
  const errors: IFormErrors = {};
  const trimmedData = trimFields(project);

  const {
    name,
    description,
    images,
    technologies,
    urlToProduction,
    urlToSourceCode,
  } = trimmedData;

  if (isStringEmpty(name)) errors.nameError = 'Name can not be empty';
  if (isStringEmpty(description)) errors.descriptionError = 'Description can not be empty';
  if (isStringEmpty(urlToProduction)) errors.urlToProductionError = 'URL have not been defined';
  else if (!isURL(urlToProduction)) errors.urlToProductionError = 'URL is not valid';
  else errors.urlToProductionError = '';
  if (isStringEmpty(urlToSourceCode)) errors.urlToSourceCodeError = 'URL have not been defined';
  else if (!isGithubURL(urlToSourceCode, { repository: true })) errors.urlToSourceCodeError = 'URL is not a Github repo';
  else errors.urlToSourceCodeError = '';
  if (isArrayEmpty(images)) errors.imagesError = 'No images have been selected';
  if (isArrayEmpty(technologies)) errors.technologiesError = 'No technologies have been selected';

  return { errors, trimmedData };
}