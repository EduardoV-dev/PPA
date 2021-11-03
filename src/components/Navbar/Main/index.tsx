import React from 'react';
import Logo from '../Logo';
import Link from '../Link';
import { AddIcon, ListIcon } from '../../../icons';
import styles from './navbar.module.scss';
import cn from 'classnames';

interface INavbar {
  className?: string;
}

const Navbar: React.FC<INavbar> = ({
  className,
}): JSX.Element => {
  const classNames = cn(styles.navbar, className);

  return (
    <div className={classNames}>
      <Logo />
      <h3 className={styles.navbar__menuHeadline}>Menu</h3>
      <div>
        <Link icon={ListIcon} text="List" to="/list" />
        <Link icon={AddIcon} text="Add" to="/add" />
      </div>
    </div>
  );
}

export default Navbar;