import React, { useState } from "react";
import { webTechs } from "../../../../consts";
import { IFormErrors, IProjectForm } from "../../../../models/interfaces";
import { SubmitEvent, Technologies } from "../../../../models/types";
import { checkData } from "../../../../validations/project";

type ChangeEvent = React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>;

const useForm = (initialState: IProjectForm, submitEvent: SubmitEvent) => {
  const [input, setInput] = useState<IProjectForm>(initialState);
  const { technologies } = input;
  const [inputErrors, setInputErrors] = useState<IFormErrors>({});

  const handleOnChange = ({ target: { name, value } }: ChangeEvent) =>
    setInput({ ...input, [name]: value });

  // techsManager logic
  const addTechtoList = (tech: Technologies) =>
    technologies.length !== webTechs.length &&
    setInput({ ...input, technologies: [...input.technologies, tech] });

  const removeTechFromList = (tech: Technologies) =>
    setInput({ ...input, technologies: [...input.technologies.filter(techFromList => techFromList !== tech)] });

  // imagesManager Logic
  const loadImagesToList = ({ target: { files } }: React.ChangeEvent<HTMLInputElement>) => {
    if (!files) return;
    setInput({ ...input, images: [...input.images, ...Array.from(files)] });
  }

  const removeImageFromList = (fileName: string) =>
    setInput({ ...input, images: input.images.filter(image => image.name !== fileName) });

  // OnSubmit logic
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { errors, trimmedData: project } = checkData(input);
    if (JSON.stringify(errors) !== '{}') return setInputErrors({ ...errors });
    setInputErrors({});
    submitEvent(project);
  }

  return {
    input,
    inputErrors,
    handleOnChange,
    addTechtoList,
    removeTechFromList,
    loadImagesToList,
    removeImageFromList,
    onSubmit,
  }
}

export default useForm;