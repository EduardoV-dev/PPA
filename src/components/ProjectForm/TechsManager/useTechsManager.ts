import { useState } from "react";
import { webTechs } from "../../../consts";
import { Technologies } from "../../../models/types";

const useTechsManager = (techs: Technologies[]) => {
  const availableTechs = webTechs.filter(tech => !techs.includes(tech as Technologies));
  const [currentTech, setCurrentTech] = useState<Technologies>(availableTechs[0] as Technologies);
  const [modalState, setModalState] = useState<boolean>(false);

  const changeModalState = (state: boolean) => setModalState(state);
  
  const handleOnChange = ({ target: { value } }: React.ChangeEvent<HTMLSelectElement>) =>
    setCurrentTech(value as Technologies);

  return {
    availableTechs,
    currentTech,
    modalState,
    changeModalState,
    handleOnChange,
  }
}

export default useTechsManager;