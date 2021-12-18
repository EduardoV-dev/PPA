import React from 'react';
import FileInput from '../FileInput';
import { RemoveButton } from '../../../..';
import { getURLFromImage } from '../../../../../utils';
import { animated, useTransition } from 'react-spring';
import styles from './manager.module.scss';
import cn from 'classnames';

interface IImagesManager {
  images: File[];
  loadImagesToList: (e: React.ChangeEvent<HTMLInputElement>) => void;
  removeImageFromList: (URL: string) => void;
  className?: string;
}

const ImagesManager: React.FC<IImagesManager> = ({
  images,
  loadImagesToList,
  removeImageFromList,
  className,
}): JSX.Element => {
  const classNames = cn(styles.container, className);
  const transitions = useTransition(images, {
    from: { y: -50, opacity: 0 },
    enter: { y: 0, opacity: 1 },
    leave: { y: 50, opacity: 0 },
    config: { duration: 200 }
  });

  return (
    <div className={classNames}>
      <FileInput
        onChange={loadImagesToList}
      />
      <div className={styles.list}>
        {transitions((props, item: File, transition, idx) => (
          <animated.div
            style={props}
            className={styles.imgContainer}
          >
            <img
              className={styles.imgContainer__img}
              src={getURLFromImage(item)}
              alt={item.name}
            />
            <RemoveButton
              className={styles.imgContainer__removeBtn}
              onClick={() => removeImageFromList(images[idx].name)}
            />
          </animated.div>
        ))}
      </div>
    </div>
  );
}

export default ImagesManager;