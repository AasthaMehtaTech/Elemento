import React, { useContext, useEffect } from 'react';

import ModalContext from '../../context/modal/modalContext';
import modalState from '../../context/modal/modalState';

import '../../App.css';

const ElementModal = () => {

    const modalContext = useContext(ModalContext);
    const { isOpen } = modalContext;
    var showHideClassName = "modal display-none";
    useEffect(() => {
       showHideClassName = isOpen ? "block" : "none";
       {console.log(showHideClassName)}
    },[isOpen])
   

    const { closeModal } = modalState;

    return (
        <div className={`modal display-${showHideClassName}`}>
      <section className="modal-main">
        <p>Test</p>
        <button onClick={ () => closeModal() }>close</button>
      </section>
    </div>
    )
}

export default ElementModal
