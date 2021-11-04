import React from 'react';
import cn from 'classnames';
import styles from './backdrop.module.scss';

interface Props {
  state: boolean;
  setState: () => void;
  className?: string;
}

const BackDrop: React.FC<Props> = ({
  state,
  setState,
  className,
}): JSX.Element => {
  const classNames = cn(styles.backdrop, className);

  return (
    <>
      {state && (
        <div
          className={classNames}
          onClick={setState}
        />
      )}
    </>
  );
}

export default BackDrop;