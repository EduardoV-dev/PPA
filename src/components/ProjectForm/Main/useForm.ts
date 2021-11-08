import { useEffect, useState } from "react";
import { IProject } from "../../../models/interfaces";
import { Technologies } from "../../../models/types";
import { getNewImagesURL } from "../../../utils";

type ChangeEvent = React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>;

const useForm = (initialState: IProject) => {
  const { technologies, images: imgs } = initialState;
  const [input, setInput] = useState<IProject>(initialState);
  const [techs, setTechs] = useState<Technologies[]>(technologies);
  const [images, setImages] = useState<string[]>(imgs);

  const handleOnChange = ({ target: { name, value } }: ChangeEvent) =>
    setInput({ ...input, [name]: value });

  // techsManager logic
  const addTechtoList = (tech: Technologies) =>
    setTechs([...techs, tech]);

  const removeTechFromList = (tech: Technologies) =>
    setTechs([...techs.filter(techFromList => techFromList !== tech)]);

  useEffect(() =>
    setInput(input => ({ ...input, technologies: techs }))
    , [setInput, techs]);

  // imagesManager Logic
  const loadImagesToList = ({ target: { files } }: React.ChangeEvent<HTMLInputElement>) => {
    if (!files) return;
    const newImages = getNewImagesURL(files);
    setImages([...images, ...newImages]);
  }
  
  const removeImageFromList = (URL: string) =>
    setImages(images.filter(url => url !== URL));

  useEffect(() =>
    setInput(input => ({ ...input, images }))
    , [setInput, images]);

  return {
    input,
    handleOnChange,
    addTechtoList,
    removeTechFromList,
    loadImagesToList,
    removeImageFromList,
  }
}

export default useForm;