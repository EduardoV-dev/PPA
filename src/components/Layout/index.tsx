import React from 'react';
import { Navbar } from '..';
import styles from './layout.module.scss';

interface ILayout {
  children: JSX.Element | JSX.Element[];
}

const Layout: React.FC<ILayout> = ({
  children,
}): JSX.Element => {
  return (
    <div className={styles.layout}>
      <Navbar className={styles.layout__navbar} />
      <main className={styles.layout__main}>
        {children}
      </main>
    </div>
  );
}

export default Layout;