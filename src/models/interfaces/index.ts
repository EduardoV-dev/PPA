import { Technologies } from "../types";

export interface IProject {
  name: string;
  description: string;
  technologies: Technologies[];
  images: string[];
  urlToProduction: string;
  urlToSourceCode: string;
}