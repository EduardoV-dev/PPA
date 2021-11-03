import React, { useState } from 'react';
import styles from './select.module.scss';
import cn from 'classnames';
import { Modal } from '..';
import { AddIcon } from '../../icons';

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
  const [state, setState] = useState<boolean>(false);
  const changeState = (value: boolean) => setState(value);

  return (
    <>
      <div>
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
      <span
        className={styles.toggle}
        onClick={() => changeState(true)}
      >Show selected</span>
      <Modal state={state} setState={changeState}>
        
      </Modal>
    </>
  );
}

export default Select;