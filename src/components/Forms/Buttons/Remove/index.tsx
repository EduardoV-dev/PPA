import React from 'react';
import cn from 'classnames';
import styles from './remove.module.scss';

interface IRemove {
  onClick: () => void;
  className?: string;
}

const Remove: React.FC<IRemove> = ({
  className,
  ...props
}): JSX.Element => {
  const classNames = cn(styles.removeBtnBase, className);

  return ( 
    <button 
      type="button"
      className={classNames}
      {...props}  
    >
      -
    </button>
  );
}

export default Remove;