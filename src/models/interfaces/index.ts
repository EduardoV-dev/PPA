import React from "react";
import { Technologies } from "../types";

export interface IProjectForm {
  name: string;
  description: string;
  technologies: Technologies[];
  images: File[];
  urlToProduction: string;
  urlToSourceCode: string;
}

export interface IProjectItem {
  id: string;
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