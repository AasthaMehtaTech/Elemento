import React from 'react';
import '../../App.css';
import Footer from '../layout/Footer';
import Navbar from '../layout/Navbar';
import ScrollTopButton from '../layout/ScrollTopButton';
import { Container } from '@material-ui/core';
import backimage  from '../../img/Blueback.svg'
import ImageComponent from "../layout/profileModal";
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
// import Akash from '../../img/AK.jpg';



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
    var fblink = "https://www.linkedin.com/in/grep-akash/";
  var instalink = "www.google.com";
  var githublink = "www.google.com";
  var linkedinlink = "www.google.com";

  var profileKey = [{
    PersonName:"Akash Krishna",
    PersonRole:"Software developer",
    PersonBio:"Hi there!",
    PersonImg:"https://images.unsplash.com/photo-1503249023995-51b0f3778ccf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=311&q=80",

    fblink:"https://www.facebook.com/akash.krishna.125",
    instalink:"https://www.instagram.com/akrishna_ak/",
    githublink:"https://github.com/akrishna0",
    linkedinlink:"https://www.linkedin.com/in/grep-akash/",
    bio:"This is Akash Krishna  an Undergrad Student , Full Stack Developer and Cyber Security Enthusiast"
  },
  {
    PersonName:"XYZ",
    PersonRole:"Software developer",
    PersonBio:"Hi there!",
    PersonImg:"https://images.unsplash.com/photo-1503249023995-51b0f3778ccf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=311&q=80",

    fblink:{fblink},
    instalink:{instalink},
    githublink:{githublink},
    linkedinlink:{linkedinlink},
    bio:"Second bro loves to design amazing features list and is expert at handling customer experience."
  },
  {
    PersonName:"XYZ",
    PersonRole:"Software developer",
    PersonBio:"Hi there!",
    PersonImg:"https://images.unsplash.com/photo-1503249023995-51b0f3778ccf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=311&q=80",

    fblink:{fblink},
    instalink:{instalink},
    githublink:{githublink},
    linkedinlink:{linkedinlink},
    bio:"Second bro loves to design amazing features list and is expert at handling customer experience."
  },
  {
    PersonName:"XYZ",
    PersonRole:"Software developer",
    PersonBio:"Hi there!",
    PersonImg:"https://images.unsplash.com/photo-1503249023995-51b0f3778ccf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=311&q=80",

    fblink:{fblink},
    instalink:{instalink},
    githublink:{githublink},
    linkedinlink:{linkedinlink},
    bio:"Second bro loves to design amazing features list and is expert at handling customer experience."
  },
   
];
  const [spacing, setSpacing] = React.useState(8);
  const classes = useStyles();

  const handleChange = (event) => {
    setSpacing(Number(event.target.value));
  };

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
     <div className="teamSet">
     <Grid container className={classes.root} spacing={8}>
        <Grid item xs={12}>
        <Grid container justify="center" spacing={spacing}>
          {[0,1,2,3].map((value) => (
            <Grid key={value} item>
              <ImageComponent 
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
              
        <img src={backimage} className="backg" >
            </img>
           

           <Footer />
        </div>
        
    )
}

export default Team
