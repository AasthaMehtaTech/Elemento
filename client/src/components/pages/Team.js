import React from 'react';
import '../../App.css';
import Footer from '../layout/Footer';
import Navbar from '../layout/Navbar';
import {profileKey} from '../../Data/TeamDetails';
import ScrollTopButton from '../layout/ScrollTopButton';
import { Container } from '@material-ui/core';
import ProfileModal from "../layout/ProfileModal";
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      
      height: 300,
      width: 300,
      borderRadius:20,
    },
   
  }));

const Team = () => {

  const [spacing] = React.useState(8);
  const classes = useStyles();
 
  return (
    <div>

    <div className="backTeam" >
    <Navbar />
    <ScrollTopButton /> 
    <Container className="contentTeam">
      <h1 className="titleTeam">About Us</h1>
      <p className="paraTeam">Customizable Portfolio is a website that aims to help people make a fully functional static website in a short amount of time without relying on web developers and that too with very little prior programming experience.

This project is part of PSoC (Program Summer of Code) organized by UIET Chandigarh. It is a 2 month long open source competition to help people get started with open source with the help of experienced mentors.
      </p>      
    </Container> 
    <div className="teamSet">
      <Grid container className={classes.root} spacing={8}>
          <Grid item xs={12}>
          <Grid container justify="center" spacing={spacing}>
            {[0,1,2,3].map((value) => (
              <Grid key={value} item>
                <ProfileModal
          PersonName={profileKey[value].PersonName}
          PersonRole={profileKey[value].PersonRole}
          PersonBio={profileKey[value].PersonBio}
          PersonImg={profileKey[value].PersonImg}
          fblink={profileKey[value].fblink}
          instalink={profileKey[value].instalink}
          githublink={profileKey[value].githublink}
          linkedinlink={profileKey[value].linkedinlink}
          bio={profileKey[value].bio}
          />
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>

    </div>  
      </div>    
    <Footer />
    </div>  

      
  )
}

export default Team
