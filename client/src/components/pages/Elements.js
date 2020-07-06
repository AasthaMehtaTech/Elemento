import React from 'react';

import Navbar from '../layout/Navbar';
import ScrollTopButton from '../layout/ScrollTopButton';
import Element from '../element/Elements';

import ElementState from '../../context/element/elementState';

const Elements = () => {
    return (
        <div>
            <ElementState>
            <Navbar />
            <ScrollTopButton />
            <h1>Elements Page</h1>
            <Element />
            </ElementState>
        </div>
    )
}

export default Elements
