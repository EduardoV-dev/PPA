import React from 'react';
import { PortfolioItem } from '../../components';
import styles from './list.module.scss';

const List: React.FC<{}> = (): JSX.Element => {
  return (
    <div className={styles.container}>
      <PortfolioItem />
      <PortfolioItem />
      <PortfolioItem />
    </div>
  );
}

export default List;