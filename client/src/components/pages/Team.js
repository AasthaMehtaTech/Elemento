import React from 'react';
import '../../App.css';

import Footer from '../layout/Footer';

import Navbar from '../layout/Navbar';
import ScrollTopButton from '../layout/ScrollTopButton';
import { Container } from '@material-ui/core';

const Team = () => {
    return (
        <div >
            <Navbar />
            <ScrollTopButton />
           <div className="teamBackground">
         <Container >

         </Container>
           </div>

           <Footer />
        </div>
    )
}

export default Team
