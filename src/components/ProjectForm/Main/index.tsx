import React from 'react';
import {
  FormControl,
  Input,
  Textarea,
  Label,
  Button,
  Error
} from '../..';
import ImagesManager from '../ImagesManager/Main';
import TechsManager from '../TechsManager';
import { SubmitEvent } from '../../../models/types';
import { IProject } from '../../../models/interfaces';
import useForm from './useForm';
import styles from './projectform.module.scss';
import cn from 'classnames';

interface IProjectForm {
  initialState: IProject;
  submitEvent: SubmitEvent;
  className?: string;
}

const ProjectForm: React.FC<IProjectForm> = ({
  initialState,
  submitEvent,
  className,
}): JSX.Element => {
  const {
    input,
    inputErrors,
    handleOnChange,
    addTechtoList,
    removeTechFromList,
    loadImagesToList,
    removeImageFromList,
    onSubmit,
  } = useForm(initialState, submitEvent);

  const {
    name,
    description,
    technologies,
    images,
    urlToProduction,
    urlToSourceCode,
  } = input;

  const {
    nameError,
    descriptionError,
    technologiesError,
    imagesError,
    urlToProductionError,
    urlToSourceCodeError,
  } = inputErrors;

  const classNames = cn(styles.form, className);

  return (
    <form
      className={classNames}
      noValidate
      autoComplete="off"
      {... {
        onSubmit,
      }}
    >
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
            {nameError && <Error>{nameError}</Error>}
          </FormControl>
          <FormControl>
            <Label htmlFor="description">Description</Label>
            <Textarea
              onChange={handleOnChange}
              name="description"
              placeholder="A great project..."
              value={description}
            />
            {descriptionError && <Error>{descriptionError}</Error>}
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

            {technologiesError && <Error>{technologiesError}</Error>}
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
            {urlToProductionError && <Error>{urlToProductionError}</Error>}
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
            {urlToSourceCodeError && <Error>{urlToSourceCodeError}</Error>}
          </FormControl>
        </div>
      </section>
      <section className={styles.form__lower}>
        <ImagesManager
          {...{
            images,
            loadImagesToList,
            removeImageFromList,
          }}
        />
        {imagesError && <Error>{imagesError}</Error>}
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
    </form >
  );
}

export default ProjectForm;