import React from 'react';
import { ProjectForm } from '../../components';
import { IProject } from '../../models/interfaces';

const Add: React.FC<{}> = (): JSX.Element => {
  const formInitialState: IProject = {
    name: '',
    description: '',
    images: [],
    technologies: [],
    urlToProduction: '',
    urlToSourceCode: '',
  }

  return ( 
    <ProjectForm 
      initialState={formInitialState}
    />
  );
}

export default Add;