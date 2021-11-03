import React from 'react';
import Backdrop from '../Backdrop';
import styles from './modal.module.scss';

interface Props {
  children: JSX.Element | JSX.Element[];
  state: boolean;
  setState: (prop: boolean) => void;
}

const Modal: React.FC<Props> = ({
  state,
  setState: onClick,
  ...props
}): JSX.Element => {
  return (
    <>
      {state && (
        <>
          <Backdrop onClick={() => onClick(false)} />
          <div className={styles.modal} {...props} />
        </>
      )}
    </>
  );
}

export default Modal;