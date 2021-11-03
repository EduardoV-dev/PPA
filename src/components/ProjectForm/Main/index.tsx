import React, { useState } from 'react';
import {
  FormControl,
  Input,
  Select,
  Textarea,
  Label,
  Button
} from '../..';
import ImagesManager from '../ImagesManager';
import { IProject } from '../../../models/interfaces';
import { webTechs } from '../../../consts';
import styles from './projectform.module.scss';
import cn from 'classnames';

interface IProjectForm {
  initialState: IProject;
  className?: string;
}

type ChangeEvent = React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>;

const ProjectForm: React.FC<IProjectForm> = ({
  initialState,
  className,
}): JSX.Element => {
  const [input, setInput] = useState<IProject>(initialState);
  const handleOnChange = ({ target: { name, value } }: ChangeEvent) =>
    setInput({ ...input, [name]: value });

  const {
    name,
    description,
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
            <Select
              onChange={handleOnChange}
              name="technologies"
              id="technologies"
              items={webTechs}
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
        <ImagesManager />
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