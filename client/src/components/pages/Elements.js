import React from 'react';

import Navbar from '../layout/Navbar';
import ScrollTopButton from '../layout/ScrollTopButton';
import Element from '../element/Elements';
import SearchFilter from '../element/SearchFilter';


import ElementState from '../../context/element/elementState';


const Elements = () => {
    return (
        <div>
            <ElementState>
               
            <Navbar />
            <SearchFilter />
            <ScrollTopButton />
            <Element />
         
    
            </ElementState>
        </div>
    )
}

export default Elements
