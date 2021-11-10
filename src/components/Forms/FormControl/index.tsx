import React, { Children } from 'react';
import cn from 'classnames';
import styles from './formcontrol.module.scss';

interface IFormControl {
  children: JSX.Element[] | (JSX.Element | string | undefined)[];
  className?: string;
}

const FormControl: React.FC<IFormControl> = ({
  children,
  className,
}): JSX.Element => {
  const elements = Children.toArray(children);
  const classNames = cn(styles.formControl, className);

  return ( 
    <div className={classNames}>
      {elements.map((child, idx) => (
        <div key={idx} className={styles.formControl_spacing}>
          {child}
        </div>
      ))}
    </div>
  );
}

export default FormControl;