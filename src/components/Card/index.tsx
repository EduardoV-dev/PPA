import React from 'react';
import styles from './card.module.scss';
import cn from 'classnames';

interface ICard {
  children: JSX.Element | JSX.Element[];
  className?: string;
}

const Card: React.FC<ICard> = ({
  className,
  children,
}): JSX.Element => {
  const classNames = cn(styles.card, className);

  return (
    <div className={classNames}>
      {children}
    </div>
  );
}

export default Card;