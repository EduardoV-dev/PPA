import React from 'react';
import LogoPath from '../../../assets/logo.png';
import styles from './logo.module.scss';
import cn from 'classnames';

interface ILogo {
  className?: string;
}

const Logo: React.FC<ILogo> = ({
  className,
}): JSX.Element => {
  const classNames = cn(styles.logo, className);

  return ( 
    <div className={classNames}>
      <img
        src={LogoPath}
        alt='Application Logo'
      />
      <h1 className={styles.logo__name}>PPA</h1>
    </div>
  );
}

export default Logo;