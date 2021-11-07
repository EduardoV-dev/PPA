import React from 'react';
import styles from './button.module.scss';
import cn from 'classnames';

interface IButton {
  type: 'button' | 'submit' | 'link';
  color: 'primary' | 'secondary' | 'info' | 'warning';
  text: string;
  icon?: React.FC;
  className?: string;
  href?: string;
  style?: any;
}

const Button: React.FC<IButton> = ({
  type,
  color,
  icon: Icon,
  text,
  className,
  href,
  style,
}): JSX.Element => {
  const classNames = cn(styles.btn, className, {
    [styles[`btn-${color}`]]: color,
    [styles[`btn-${type}`]]: type,
  });

  return (
    <>
      {type === 'link' ? (
        <a
          {...{ href, style }}
          className={classNames}
        >
          <span>{text}</span>
          {Icon && <Icon />}
        </a>
      ) : (
        <button
        {...{ type, style }}
        className={classNames}
        >
          <span>{text}</span>
          {Icon && <Icon />}
        </button>
      )}
    </>
  );
}

export default Button;