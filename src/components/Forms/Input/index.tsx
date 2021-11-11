import React from 'react';
import styles from './input.module.scss';
import cn from 'classnames';

interface IInput {
  type: string;
  placeholder: string,
  name: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value: string | number;
  id?: string;
  className?: string;
}

const Input: React.FC<IInput> = ({
  className,
  ...props
}): JSX.Element => {
  const classNames = cn(styles.input, className);

  return (
    <input
      className={classNames}
      {...props}
    />
  );
}

export default Input;