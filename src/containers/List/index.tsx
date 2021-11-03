import React from 'react';
import { ProjectItem } from '../../components';
import styles from './list.module.scss';

const List: React.FC<{}> = (): JSX.Element => {
  return (
    <div className={styles.container}>
      <ProjectItem />
      <ProjectItem />
      <ProjectItem />
    </div>
  );
}

export default List;