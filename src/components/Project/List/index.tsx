import React, { useEffect, useState } from 'react';
import { collection, onSnapshot, DocumentData } from '@firebase/firestore';
import { ProjectItem } from '../../../components';
import { IProjectItem } from '../../../models/interfaces';
import { db } from '../../../services/firebase';
import styles from './list.module.scss';

const ProjectList: React.FC<{}> = (): JSX.Element => {
  const [projects, setProjects] = useState<DocumentData>([]);

  useEffect(() =>
    onSnapshot(collection(db, 'projects'), snapshot => {
      const projectsFetchedData = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setProjects(projectsFetchedData);
    })
    , []);

  return (
    <div className={styles.container}>
      {projects.length
        ? projects.map((project: IProjectItem) => (
          <ProjectItem
            key={project.id}
            project={project}
          />
        ))
        : <p className={styles.container__message}>No projects to show</p>
      }
    </div>
  );
}

export default ProjectList;