import React, { useState } from "react";
import { IFormErrors, IProject } from "../../../models/interfaces";
import { Technologies } from "../../../models/types";
import { getNewImagesURL } from "../../../utils";
import { checkData } from "../../../validations/project";

type ChangeEvent = React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>;

const useForm = (initialState: IProject) => {
  const [input, setInput] = useState<IProject>(initialState);
  const [inputErrors, setInputErrors] = useState<IFormErrors>({});

  const handleOnChange = ({ target: { name, value } }: ChangeEvent) =>
    setInput({ ...input, [name]: value });

  // techsManager logic
  const addTechtoList = (tech: Technologies) =>
    setInput({ ...input, technologies: [...input.technologies, tech] });

  const removeTechFromList = (tech: Technologies) =>
    setInput({ ...input, technologies: [...input.technologies.filter(techFromList => techFromList !== tech)] });

  // imagesManager Logic
  const loadImagesToList = ({ target: { files } }: React.ChangeEvent<HTMLInputElement>) => {
    if (!files) return;
    const newImages = getNewImagesURL(files);
    setInput({ ...input, images: [...input.images, ...newImages] });
  }

  const removeImageFromList = (URL: string) =>
    setInput({ ...input, images: input.images.filter(url => url !== URL) });

  // OnSubmit logic
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const errors = checkData(input);
    if (JSON.stringify(errors) !== '{}') return setInputErrors({ ...errors });
    setInputErrors({});
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