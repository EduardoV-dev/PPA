import React from 'react';
import { IProject } from '../../models/interfaces';
import {
  ChevronRightIcon,
  CodeOpenIcon,
  DeleteIcon,
  EditIcon,
  InfoIcon
} from '../../icons';
import {
  Button,
  Card,
  Carousel,
  BadgesList,
} from '..';
import styles from './item.module.scss';
import cn from 'classnames';

const images = [
  'https://images.pexels.com/photos/4887163/pexels-photo-4887163.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
  'https://images.pexels.com/photos/7688358/pexels-photo-7688358.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
  'https://images.unsplash.com/photo-1593642532454-e138e28a63f4?ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60',
  'https://images.unsplash.com/photo-1633872422612-067dfafaa480?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw4fHx8ZW58MHx8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60',
]

interface IItem {
  project?: IProject;
  className?: string;
}

const Item: React.FC<IItem> = ({
  project,
  className,
}): JSX.Element => {
  const itemClassNames = cn(styles.item, className);

  return (
    <Card className={itemClassNames}>
      <Carousel
        imagesURL={images}
        className={styles.item__carousel}
      />
      <h4 className={styles.item__sectionName}>Project Name</h4>
      <p className={styles.item__projectDescription}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis sollicitudin et praesent erat lorem rhoncus velit. Elit pellentesque lobortis neque.
      </p>
      <h4 className={styles.item__sectionName}>Technologies</h4>
      <BadgesList
        className={styles.item__badgesContainer}
        technologies={['SASS', 'Firebase', 'React', 'Bootstrap', 'Git']}
      />
      <div className={styles.item__btnsContainer}>
        <Button
          type="link"
          href="#"
          color="primary"
          text="Visit site"
          icon={ChevronRightIcon}
          className={styles.item__btn}
        />
        <Button
          type="link"
          href="#"
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