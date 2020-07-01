import React from "react";

import Button from '@material-ui/core/Button';

import Navbar from "../layout/Navbar";
import ScrollTopButton from "../layout/ScrollTopButton";

const Home = () => {

  
  return (
    <div className="container">
      <Navbar />
      <ScrollTopButton />
      
      <h1>Home Page</h1>
      <Button variant="outlined" color="inherit" style={btnStyle}> Get Started</Button>
    </div>
  );
};
const btnStyle = {
  background: '#000',
  color: '#fff',
  border: 'none',
  padding:'5px 9px',
horizontalAlign: 'center'
 
}


export default Home;
