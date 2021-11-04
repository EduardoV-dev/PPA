import React, { useState } from 'react';
import { 
  Modal, 
  Select, 
  BadgesList 
} from '../..';
import { webTechs } from '../../../consts';
import { AddIcon } from '../../../icons';
import styles from './techs.module.scss';

interface ITechManager {
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

const TechsManager: React.FC<ITechManager> = (props): JSX.Element => {
  const [modalState, setModalState] = useState<boolean>(false);
  const changeModalState = (state: boolean) => setModalState(state);

  return (
    <>
      <div className={styles.selectContainer}>
        <Select
          items={webTechs}
          name="technologies"
          {...props}
        />
        <AddIcon />
      </div>
      <p
        className={styles.toggler}
        onClick={() => changeModalState(true)}
      >Show selected</p>
      <Modal
        state={modalState}
        setState={changeModalState}
        className={styles.modal}
      >
        <div className={styles.modal__head}>
          <p>Selected</p>
          <span
            onClick={() => changeModalState(false)}
          >&times;</span>
        </div>
        <BadgesList
          technologies={['CSS3', 'Bootstrap', 'Firebase', 'JavaScript']}
        />
      </Modal>
    </>
  );
}

export default TechsManager;