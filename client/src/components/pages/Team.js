import React from 'react';
import '../../App.css';
import Footer from '../layout/Footer';
import Navbar from '../layout/Navbar';
import {profileKey} from '../layout/TeamDetails';
import ScrollTopButton from '../layout/ScrollTopButton';
import { Container } from '@material-ui/core';
// import backimage  from '../../img/Blueback.svg'
import ProfileModal from "../layout/profileModal";
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

  // const [spacing, setSpacing] = React.useState(8);
  const [spacing] = React.useState(8);
  const classes = useStyles();
  // const handleChange = (event) => {
  //   setSpacing(Number(event.target.value));
  // };

  // const backgg = {
  //     backgroundImage: `url(require("../../img/BlueBlack.svg"))`,
  //     height: '100%',
  //     width:'100%',  
  // }
  return (
      
  <div className="backTeam" >
  <div className="backgg">
    <Navbar />
    <ScrollTopButton /> 
    <Container className="contentTeam">
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
    
    <Footer />
    </div>
    </div>
      
  )
}

export default Team
