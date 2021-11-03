import React from 'react';
import styles from './select.module.scss';
import cn from 'classnames';

interface ISelect {
  itemsSelected: number;
  items: string[];
  className?: string;
  id?: string;
}

const Select: React.FC<ISelect> = ({
  itemsSelected = 0,
  items,
  className,
  ...props
}): JSX.Element => {
  const classNames = cn(styles.select, className);

  return (
    <select className={classNames} {...props}>
      <option value="none">Selected: {itemsSelected}</option>
      {items.map((item, idx) => (
        <option key={idx} value={item}>{item}</option>
      ))}
    </select>
  );
}

export default Select;