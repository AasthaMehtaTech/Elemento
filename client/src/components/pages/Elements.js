import React from 'react';

import Navbar from '../layout/Navbar';
import ScrollTopButton from '../layout/ScrollTopButton';
import Element from '../element/Elements';
import SearchBar from '../element/SearchBar';

import ElementState from '../../context/element/elementState';

const Elements = () => {
    return (
        <div>
            <ElementState>
            <Navbar />
            <ScrollTopButton />
           <SearchBar />
            <Element />
            </ElementState>
        </div>
    )
}

export default Elements
