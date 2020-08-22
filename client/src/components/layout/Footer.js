import React from 'react';
import {Link} from 'react-router-dom'
import '../../App.css'
import {makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Container from '@material-ui/core/Container'
import { ListItem} from '@material-ui/core';
import GitHubIcon from '@material-ui/icons/GitHub';


const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },

  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),

    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'flex',
      
    },
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.down('sm')]: {
      display: 'grid',
      margin:'auto',
    },
  },
}));

function Footer() {
  const classes = useStyles();
  
  
  
  

  return (
    <div className={classes.grow}>
      <AppBar position="static" style={appBar}>
         <Container >
        <Toolbar>      
          <div className={classes.sectionDesktop}>
          <div className={classes.sectionMobile} >
        <div className="first">
         <ListItem> <Link to='/elements' className="individual">Get Started</Link> </ListItem>
         <ListItem> <Link to='/team' className="individual">About Us</Link> </ListItem>        
        </div>    
        <div className="second">
          <div className="social-div">
            <a href="https://github.com/AasthaGithub/Customizable_Portfolio" className="social"><GitHubIcon></GitHubIcon></a>
          </div>
        </div>

        <div className="third">
          <ListItem> <Link to='/elements' className="individual">Work with Us</Link>  </ListItem>
          <ListItem><Link to='/team' className="individual">Connect with Us</Link>  </ListItem> 
        </div>
     </div>
      </div>
        </Toolbar>
        </Container>
      </AppBar>
    </div>
  );
}

const appBar =
{ width: '100%',
  backgroundColor: "Gray" ,
  marginTop:"3%",
}

export default  Footer;