import React from 'react';
import {
  FormControl,
  Input,
  Select,
  Textarea,
  Label,
  Button
} from '..';
import { AddIcon } from '../../icons';
import styles from './projectform.module.scss';
import cn from 'classnames';

interface IProjectForm {
  className?: string;
}

const ProjectForm: React.FC<IProjectForm> = ({
  className,
}): JSX.Element => {
  const classNames = cn(styles.form, className);

  return (
    <form className={classNames}>
      <section className={styles.form__upper}>
        <div>
          <FormControl>
            <Label htmlFor="name">Name</Label>
            <Input name="name" placeholder="New project" type="text" />
          </FormControl>
          <FormControl>
            <Label htmlFor="description">Description</Label>
            <Textarea name="description" placeholder="A great project..." />
          </FormControl>
        </div>
        <div>
          <FormControl>
            <Label htmlFor="technologies">Technologies</Label>
            <Select id="technologies" items={['sass', 'html5']} itemsSelected={2} />
          </FormControl>
          <FormControl>
            <Label htmlFor="URLToproduction">URL To production</Label>
            <Input name="URLToproduction" placeholder="https://..." type="url" />
          </FormControl>
          <FormControl>
            <Label htmlFor="URLToSourceCode">URL To Source Code</Label>
            <Input name="URLToSourceCode" placeholder="https://..." type="url" />
          </FormControl>
        </div>
      </section>
      <section className={styles.form__lower}>
        <div className={styles.form__file}>
          <input
            type="file"
            id="file"
            accept="image/*"
            className={styles.form__fileInput}
          />
          <label htmlFor="file" className={styles.form__label}>
            <AddIcon />
          </label>
        </div>
        <div className={styles.form__list}>
          <img className={styles.form__img} src="https://placekitten.com/64" />
          <img className={styles.form__img} src="https://placekitten.com/64" />
          <img className={styles.form__img} src="https://placekitten.com/64" />
          <img className={styles.form__img} src="https://placekitten.com/64" />
          <img className={styles.form__img} src="https://placekitten.com/64" />
        </div>
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