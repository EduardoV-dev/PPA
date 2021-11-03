import React from 'react';
import styles from './textarea.module.scss';
import cn from 'classnames';

interface ITextarea {
  placeholder: string,
  name: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  value: string;
  id?: string;
  className?: string;
}

const Textarea: React.FC<ITextarea> = ({
  className,
  ...props
}): JSX.Element => {
  const classNames = cn(styles.textarea, className);

  return (
    <textarea {...props} className={classNames} />
  );
}

export default Textarea;