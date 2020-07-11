import react, { useReducer } from 'react';
import ModalContext from './modalContext';

import{ OPEN_MODAL, CLOSE_MODAL } from '../types';

const ModalState = (props) => {
    const initialState = {
        isOpen: null
    }
}

const [state, dispatch] = useReducer(modalReducer, initialState);

const openModal = () => {
    dispatch({ type: OPEN_MODAL })
}

const closeModal = () => {
    dispatch({ type: CLOSE_MODAL })
}

return(
    <ModalContext.Provider value = {{
        open: state.open,
        openModal,
        closeModal
    }}
    >
    {props.children}

    </ModalContext.Provider>
)

export default ModalState;
