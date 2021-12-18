import React from 'react';
import { AddIcon } from '../../../../../icons';
import styles from './fileinput.module.scss';

interface IFileInput {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const FileInput: React.FC<IFileInput> = (props): JSX.Element => {

  return (
    <div className={styles.container}>
      <input
        type="file"
        id="file"
        accept="image/*"
        className={styles.container__fileInput}
        name="images"
        multiple
        {...props}
      />
      <label
        htmlFor="file"
        className={styles.container__label}
      >
        <AddIcon />
      </label>
    </div>
  );
}

export default FileInput;