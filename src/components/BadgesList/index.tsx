import React from 'react';
import { RemoveButton } from '..';
import { badgesTechnologies } from '../../consts';
import { Technologies } from '../../models/types';
import styles from './badgeslist.module.scss';

interface IBadgesList {
  technologies: Technologies[];
  editable?: boolean;
  remove?: (tech: Technologies) => void;
  className?: string;
}

const BadgesList: React.FC<IBadgesList> = ({
  technologies,
  editable,
  remove,
  className,
}): JSX.Element => {
  const badges = technologies.map(techName => badgesTechnologies[techName]);

  return (
    <div className={className}>
      {badges.map((Badge, idx) => (
        <div
          key={idx}
          className={styles.badgeContainer}
        >
          <Badge
            className={styles.badgeContainer__badge}
          />
          {editable && remove && (
            <RemoveButton
              onClick={() => remove(technologies[idx])}
              className={styles.badgeContainer__removeBtn}
            />)}
        </div>
      ))}
    </div>
  );
}

export default BadgesList;