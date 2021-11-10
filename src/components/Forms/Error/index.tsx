import React from 'react';
import styles from './error.module.scss';
import cn from 'classnames';

interface IError {
  children: string;
  className?: string;
}

const Error: React.FC<IError> = ({
  className,
  ...props
}): JSX.Element => {
  const classNames = cn(styles.error, className);

  return (
    <span
      className={classNames}
      {...props}
    />
  );
}

export default Error;