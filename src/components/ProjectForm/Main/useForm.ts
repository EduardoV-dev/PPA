import { useEffect, useState } from "react";
import { IProject } from "../../../models/interfaces";
import { Technologies } from "../../../models/types";

type ChangeEvent = React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>;

const useForm = (initialState: IProject) => {
  const [input, setInput] = useState<IProject>(initialState);
  const [techs, setTechs] = useState<Technologies[]>([]);

  const handleOnChange = ({ target: { name, value } }: ChangeEvent) =>
    setInput({ ...input, [name]: value });

  // Select logic
  const addTechtoList = (tech: Technologies) =>
    setTechs([...techs, tech]);

  const removeTechFromList = (tech: Technologies) =>
    setTechs([...techs.filter(techFromList => techFromList !== tech)]);

  useEffect(() =>
    setInput(input => ({ ...input, technologies: techs }))
    , [setInput, techs]);

  return {
    input,
    handleOnChange,
    addTechtoList,
    removeTechFromList,
  }
}

export default useForm;