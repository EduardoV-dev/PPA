import React from 'react';
import {
  Modal,
  Select,
  BadgesList
} from '../..';
import { AddIcon } from '../../../icons';
import { Technologies } from '../../../models/types';
import styles from './techs.module.scss';
import useTechsManager from './useTechsManager';

type fnTech = (tech: Technologies) => void;

interface ITechManager {
  techs: Technologies[];
  add: fnTech;
  remove: fnTech;
}

const TechsManager: React.FC<ITechManager> = ({
  techs,
  add,
  remove,
}): JSX.Element => {
  const {
    availableTechs,
    currentTech,
    modalState,
    changeModalState,
    handleOnChange
  } = useTechsManager(techs);

  return (
    <>
      <div className={styles.selectContainer}>
        <Select
          items={availableTechs}
          name="technologies"
          onChange={handleOnChange}
          value={currentTech}
        />
        <AddIcon
          onClick={() => add(currentTech)}
        />
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
          technologies={techs}
          editable={true}
          className={styles.modal__list}
          remove={remove}
        />
      </Modal>
    </>
  );
}

export default TechsManager;