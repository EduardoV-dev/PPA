import React, { useState } from 'react';
import styles from './select.module.scss';
import cn from 'classnames';
import { AddIcon } from '../../../icons';

interface ISelect {
  name: string;
  items: string[];
  className?: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  id?: string;
}

const Select: React.FC<ISelect> = ({
  items,
  className,
  ...props
}): JSX.Element => {
  const classNames = cn(styles.select, className);

  return (
    <div className={styles.container}>
      <select className={classNames} {...props}>
        {items.map((item, idx) => (
          <option
            key={idx}
            value={idx}
          >{item}</option>
        ))}
      </select>
      <AddIcon />
    </div>
  );
}

export default Select;