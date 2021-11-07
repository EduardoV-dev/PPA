import React from 'react';
import FileInput from '../FileInput';
import styles from './manager.module.scss';

interface IImagesManager {
  images: string[];
}

const ImagesManager: React.FC<IImagesManager> = ({
  images,
}): JSX.Element => {
  return (
    <>
      <FileInput />
      <div className={styles.list}>
        {images.map(image => (
          <img
            className={styles.list__img}
            key={image}
            src={image}
            alt={image}
          />
        ))}
      </div>
    </>
  );
}

export default ImagesManager;