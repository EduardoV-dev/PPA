import { Technologies } from "../types";

export interface IProject {
  name: string;
  description: string;
  technologies: Technologies[];
  images: string[];
  urlToProduction: string;
  urlToSourceCode: string;
}

export interface IFormErrors {
  nameError?: string;
  descriptionError?: string;
  imagesError?: string;
  technologiesError?: string;
  urlToProductionError?: string;
  urlToSourceCodeError?: string;
}