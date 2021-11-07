import React from 'react';
import {
  FormControl,
  Input,
  Textarea,
  Label,
  Button
} from '../..';
import ImagesManager from '../ImagesManager/Main';
import TechsManager from '../TechsManager';
import { IProject } from '../../../models/interfaces';
import useForm from './useForm';
import styles from './projectform.module.scss';
import cn from 'classnames';

interface IProjectForm {
  initialState: IProject;
  className?: string;
}

const tmpImages = [
  'https://placekitten.com/150',
  'https://placekitten.com/150',
  'https://placekitten.com/150',
  'https://placekitten.com/150',
]

const ProjectForm: React.FC<IProjectForm> = ({
  initialState,
  className,
}): JSX.Element => {
  const {
    input,
    handleOnChange,
    addTechtoList,
    removeTechFromList,
  } = useForm(initialState);

  const {
    name,
    description,
    technologies,
    urlToProduction,
    urlToSourceCode,
  } = input;

  const classNames = cn(styles.form, className);

  return (
    <form className={classNames}>
      <section className={styles.form__upper}>
        <div>
          <FormControl>
            <Label htmlFor="name">Name</Label>
            <Input
              onChange={handleOnChange}
              name="name"
              placeholder="New project"
              type="text"
              value={name}
            />
          </FormControl>
          <FormControl>
            <Label htmlFor="description">Description</Label>
            <Textarea
              onChange={handleOnChange}
              name="description"
              placeholder="A great project..."
              value={description}
            />
          </FormControl>
        </div>
        <div>
          <FormControl>
            <Label htmlFor="technologies">Technologies</Label>
            <TechsManager
              techs={technologies}
              add={addTechtoList}
              remove={removeTechFromList}
            />
          </FormControl>
          <FormControl>
            <Label htmlFor="URLToproduction">URL To production</Label>
            <Input
              onChange={handleOnChange}
              name="urlToProduction"
              placeholder="https://..."
              type="url"
              value={urlToProduction}
            />
          </FormControl>
          <FormControl>
            <Label htmlFor="URLToSourceCode">URL To Source Code</Label>
            <Input
              onChange={handleOnChange}
              name="urlToSourceCode"
              placeholder="https://..."
              type="url"
              value={urlToSourceCode}
            />
          </FormControl>
        </div>
      </section>
      <section className={styles.form__lower}>
        <ImagesManager 
          images={tmpImages}
        />
      </section>
      <section className={styles.form__btns}>
        <Button
          color="secondary"
          text="Preview"
          type="button"
        />
        <Button
          color="primary"
          text="Save project"
          type="submit"
        />
      </section>
    </form>
  );
}

export default ProjectForm;