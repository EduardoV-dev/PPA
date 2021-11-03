import React from 'react';
import styles from './label.module.scss';
import cn from 'classnames';

interface ILabel {
  children: string;
  htmlFor?: string;
  className?: string;
}

const Label: React.FC<ILabel> = ({
  className,
  ...props
}): JSX.Element => {
  const classNames = cn(styles.label, className);

  return (
    <label {...props} className={classNames} />
  );
}

export default Label;