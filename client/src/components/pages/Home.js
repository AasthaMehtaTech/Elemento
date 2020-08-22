import React from "react";
import "../../App.css";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import Navbar from "../layout/Navbar";

import Footer from "../layout/Footer";

import ScrollTopButton from "../layout/ScrollTopButton";
import Example from "../layout/example";

const StyledButton = withStyles({
  root: {
    background: "#FF8E53",
    borderRadius: 6,
    border: 0,
    color: "white",
    height: 48,
    padding: "0 30px",
    boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
    fontSize: "2vh",
   
  },
  label: {
    textTransform: "capitalize",
    
  },
})(Button);

const Home = () => {
  return (
    <div>

      <div className="back-image">
      <Navbar />
      <ScrollTopButton />
     
      <Container maxWidth="lg">
      <Container>
      <h1 className="title">Graphic Elements for Everyone</h1>
      <p className="para"> A set of small, responsive CSS modules that <br/>you can use in every web project,
         portfolio or both.</p>
      
         <p className="para" style={{paddingBottom:"5vh"}}> Download the CSS modules for free,<br/>or contribute!</p>
     <StyledButton className="btn"  href="/elements">Get Started</StyledButton>
     &nbsp;
     <Button variant="outlined" color="cyan" style={btnStyle} href="/team" > Learn More</Button> 
     
        </Container> 
      </Container>
     
      </div>
     <Example />
     <Footer />
     </div>



  );
};
const btnStyle = {
  borderRadius: '6px',
  border: '1px',
  marginLeft: "3vh",
  height: '48px',
  padding: "0 30px",
  boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
};
export default Home;
