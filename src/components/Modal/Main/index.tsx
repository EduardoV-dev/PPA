import React from 'react';
import Backdrop from '../Backdrop';
import { animated, useSpring } from 'react-spring';
import styles from './modal.module.scss';
import cn from 'classnames';

interface Props {
  children: JSX.Element | JSX.Element[];
  state: boolean;
  setState: (prop: boolean) => void;
  className?: string;
}

const Modal: React.FC<Props> = ({
  state,
  setState,
  className,
  ...props
}): JSX.Element => {
  const springProps = useSpring({
    opacity: state ? 1 : 0,
    transform: `scale(${state ? 1 : 0})`,
    config: { duration: 300 },
  })
  const classNames = cn(styles.modal, className);

  return (
    <>
      <Backdrop
        state={state}
        setState={() => setState(false)}
      />
      <animated.div
        className={classNames}
        style={springProps}
        {...props}
      />
    </>
  );
}

export default Modal;