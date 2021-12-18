import { IProjectForm } from "../interfaces";

export type Technologies = 'HTML5' | 'CSS3' | 'JavaScript' |
  'Git' | 'SASS' | 'Bootstrap' | 'React' |
  'Firebase' | 'Redux' | 'Electron' | 'TypeScript' |
  'Strapi' | 'Next';

export type SubmitEvent = (project: IProjectForm) => void;