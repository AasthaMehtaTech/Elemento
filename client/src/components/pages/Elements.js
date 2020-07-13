import React from 'react';

import Navbar from '../layout/Navbar';
import ScrollTopButton from '../layout/ScrollTopButton';
import Element from '../element/Elements';
import SearchFilter from '../element/SearchFilter';
import ElementModal from '../element/ElementModal';

import ElementState from '../../context/element/elementState';
import ModalState from '../../context/modal/modalState';

const Elements = () => {
    return (
        <div>
            <ElementState>
                <ModalState>
            <Navbar />
            <SearchFilter />
            <ScrollTopButton />
            <Element />
            <ElementModal />
            </ModalState>
            </ElementState>
        </div>
    )
}

export default Elements
