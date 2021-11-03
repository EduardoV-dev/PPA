import React from 'react';
import FileInput from '../FileInput';
import styles from './manager.module.scss';

const ImagesManager: React.FC<{}> = (): JSX.Element => {
  return (
    <>
      <FileInput />
      <div className={styles.list}>
        <img className={styles.list__img} src="https://placekitten.com/64" />
        <img className={styles.list__img} src="https://placekitten.com/64" />
        <img className={styles.list__img} src="https://placekitten.com/64" />
        <img className={styles.list__img} src="https://placekitten.com/64" />
        <img className={styles.list__img} src="https://placekitten.com/64" />
      </div>
    </>
  );
}

export default ImagesManager;