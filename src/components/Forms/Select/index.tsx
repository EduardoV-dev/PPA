import React from 'react';
import styles from './select.module.scss';
import cn from 'classnames';

interface ISelect {
  name: string;
  items: string[];
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  value: string;
  className?: string;
  id?: string;
}

const Select: React.FC<ISelect> = ({
  items,
  className,
  ...props
}): JSX.Element => {
  const classNames = cn(styles.select, className);

  return (
    <select
      className={classNames}
      {...props}
    >
      {items.map((item, idx) => (
        <option
          key={idx}
          value={item}
        >{item}</option>
      ))}
      {items.length === 0 && (
        <option
          value={0}
        >
          Empty
        </option>
      )}
    </select>
  );
}

export default Select;