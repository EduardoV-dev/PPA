import React from 'react';
import { IProjectItem } from '../../../../models/interfaces';
import {
  ChevronRightIcon,
  CodeOpenIcon,
  DeleteIcon,
  EditIcon,
  InfoIcon
} from '../../../../icons';
import {
  Button,
  Card,
  BadgesList
} from '../../../';
import Carousel from '../Carousel';
import styles from './item.module.scss';
import cn from 'classnames';

interface IItem {
  project: IProjectItem;
  className?: string;
}

const Item: React.FC<IItem> = ({
  project,
  className,
}): JSX.Element => {
  const {
    name,
    description,
    images,
    technologies,
    urlToProduction,
    urlToSourceCode,
  } = project;

  console.log(`Proyecto: `, project);
  
  const itemClassNames = cn(styles.item, className);

  return (
    <Card className={itemClassNames}>
      <Carousel
        images={images}
        className={styles.item__carousel}
      />
      <h4 className={styles.item__sectionName}>{name}</h4>
      <p className={styles.item__projectDescription}>{description}</p>
      <h4 className={styles.item__sectionName}>Technologies</h4>
      <BadgesList
        className={styles.item__badgesContainer}
        technologies={technologies}
      />
      <div className={styles.item__btnsContainer}>
        <Button
          type="link"
          href={urlToProduction}
          color="primary"
          text="Visit site"
          icon={ChevronRightIcon}
          className={styles.item__btn}
        />
        <Button
          type="link"
          href={urlToSourceCode}
          color="secondary"
          text="Source code"
          icon={CodeOpenIcon}
        />
      </div>
      <div className={styles.item__menu}>
        <div className={styles.item__head}>
          <p>Options</p>
          <InfoIcon className={styles.item__infoBtn} />
        </div>
        <div className={styles.item__btnsGroup}>
          <Button
            color="info"
            text="Edit"
            type="button"
            icon={EditIcon}
          />
          <Button
            color="warning"
            text="Delete"
            type="button"
            icon={DeleteIcon}
          />
        </div>
      </div>
    </Card>
  );
}

export default Item;