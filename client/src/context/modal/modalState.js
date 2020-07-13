import React, { useReducer } from "react";
import ModalContext from "./modalContext";
import ModalReducer from "./modalReducer";

import { OPEN_MODAL, CLOSE_MODAL } from "../types";

const ModalState = (props) => {
  const initialState = {
    isOpen: null,
  };

  const [state, dispatch] = useReducer(ModalReducer, initialState);

  const openModal = () => {
    dispatch({ type: OPEN_MODAL });
  };

  const closeModal = () => {
    dispatch({ type: CLOSE_MODAL });
  };

  return (
    <ModalContext.Provider
      value={{
        isOpen: state.isOpen,
        openModal,
        closeModal,
      }}
    >
      {props.children}
    </ModalContext.Provider>
  );
};

export default ModalState;
