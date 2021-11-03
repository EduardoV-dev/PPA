import React from 'react';
import cn from 'classnames';
import styles from './backdrop.module.scss';

interface Props {
  onClick?: (e: React.MouseEvent<HTMLDivElement>) => void;
  className?: string;
}

const BackDrop: React.FC<Props> = ({
  onClick,
  className,
}): JSX.Element => {
  const classNames = cn(styles.backdrop, className);

  return (
    <div
      className={classNames}
      onClick={onClick}
    />
  );
}

export default BackDrop;