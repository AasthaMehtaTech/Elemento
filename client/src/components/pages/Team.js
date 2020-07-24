import React from 'react';
import '../../App.css';
import Footer from '../layout/Footer';
import Navbar from '../layout/Navbar';
import ScrollTopButton from '../layout/ScrollTopButton';
import { Container } from '@material-ui/core';
import backimage  from '../../img/Blueback.svg'
const Team = () => {
    return (
        
        <div className="backTeam" >
            <Navbar />
            <ScrollTopButton />
           
         <Container className="contentTeam" >
     
      <h1 className="titleTeam">About Us</h1>
      <p className="paraTeam"> A set of small, responsive CSS modules that you can use in every web project,
         portfolio or both.
         A set of small, responsive CSS modules that you can use in every web project,
         portfolio or both.
         A set of small, responsive CSS modules that you can use in every web project,
         portfolio or both.
         A set of small, responsive CSS modules that you can use in every web project,
         portfolio or both.
         </p>
      
         
        </Container> 
        <img src={backimage} className="backg" >
            </img>
          

           <Footer />
        </div>
        
    )
}

export default Team
