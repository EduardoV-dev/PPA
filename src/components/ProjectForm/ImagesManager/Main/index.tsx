import React from 'react';
import { RemoveButton } from '../../..';
import FileInput from '../FileInput';
import styles from './manager.module.scss';

interface IImagesManager {
  images: string[];
  loadImagesToList: (e: React.ChangeEvent<HTMLInputElement>) => void;
  removeImageFromList: (URL: string) => void
}

const ImagesManager: React.FC<IImagesManager> = ({
  images,
  loadImagesToList,
  removeImageFromList,
}): JSX.Element => {

  return (
    <>
      <FileInput
        onChange={loadImagesToList}
      />
      <div className={styles.list}>
        {images.map(image => (
          <div
            key={image}
            className={styles.imgContainer}
          >
            <img
              className={styles.imgContainer__img}
              src={image}
              alt=""
            />
            <RemoveButton
              className={styles.imgContainer__removeBtn}
              onClick={() => removeImageFromList(image)}
            />
          </div>
        ))}
      </div>
    </>
  );
}

export default ImagesManager;