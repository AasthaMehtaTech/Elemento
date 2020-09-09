import React from 'react';
import Button from '@material-ui/core/Button';

import Navbar from '../layout/Navbar';
import Footer from '../layout/Footer';
import ScrollTopButton from '../layout/ScrollTopButton';
import Element from '../element/Elements';
import SearchFilter from '../element/SearchFilter';

import ElementState from '../../context/element/elementState';

import downloadAllCode from "../../utils/downloadAllCode";
import {appendAll} from "../../utils/buildAll";


const Elements = () => {
    return (
        <div>
            <ElementState>
               
            <Navbar />
            <SearchFilter />
            <ScrollTopButton />
            <Element />
            <Button variant="outlined" color="primary" onClick={() => { appendAll(); }}>
                Merge
            </Button>
            <Button variant="outlined" color="primary" onClick={() => { downloadAllCode(); }}>
                Download All 
            </Button>
    
            </ElementState>
            <Footer/>
        </div>
    )
}

export default Elements
