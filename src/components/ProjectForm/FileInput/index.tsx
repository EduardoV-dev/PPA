import React from 'react';
import { AddIcon } from '../../../icons';
import styles from './fileinput.module.scss';

const FileInput: React.FC<{}> = (): JSX.Element => {
  return (
    <div className={styles.container}>
      <input
        type="file"
        id="file"
        accept="image/*"
        className={styles.container__fileInput}
        name="images"
      />
      <label htmlFor="file" className={styles.container__label}>
        <AddIcon />
      </label>
    </div>
  );
}

export default FileInput;