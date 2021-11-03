import React from 'react';
import { Link as Goto } from 'react-router-dom';
import styles from './link.module.scss';
import cn from 'classnames';
import useLinkActive from './useLinkActive';

interface ILink {
  to: string;
  icon: React.FC;
  text: string;
  className?: string;
}

const Link: React.FC<ILink> = ({
  to,
  icon: Icon,
  text,
  className,
}): JSX.Element => {
  const active = useLinkActive(to);
  const classNames = cn(styles.link, className, {
    [styles[`link-active`]]: active,
  });

  return (
    <Goto to={to} className={classNames}>
      <Icon />
      <p className={styles.link__text}>{text}</p>
    </Goto>
  );
}

export default Link;