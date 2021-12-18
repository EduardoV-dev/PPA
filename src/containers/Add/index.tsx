import React from 'react';
import { ProjectForm } from '../../components';
import { IProjectForm } from '../../models/interfaces';
import { addProject } from '../../services/api';

const Add: React.FC<{}> = (): JSX.Element => {
  const formInitialState: IProjectForm = {
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
      submitEvent={addProject}
    />
  );
}

export default Add;