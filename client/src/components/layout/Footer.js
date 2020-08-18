import React from 'react';
import {Link} from 'react-router-dom'
import '../../App.css'
import {makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Container from '@material-ui/core/Container'
import { ListItem} from '@material-ui/core';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import FacebookIcon from '@material-ui/icons/Facebook';
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
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none',
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
          
          <div className={classes.grow} />
          <div className={classes.sectionDesktop}>
            
         <ListItem> <Link to='/'style={get} >Get Started</Link> </ListItem>
         <ListItem><Link to='/team' style={connect}>Connect with Us</Link>  </ListItem> 


         <ListItem> <Link to='/elements' style={work}>Work with Us</Link>  </ListItem>
         
         <Link style={social} ><InstagramIcon></InstagramIcon></Link>
        <Link style={social}> <TwitterIcon></TwitterIcon></Link>
         <Link style={social}><FacebookIcon></FacebookIcon></Link>
         <Link style={social}><GitHubIcon></GitHubIcon></Link>
         <ListItem> <Link to='/'style={about} >About Us</Link> </ListItem>
         <ListItem><Link to='/team' style={privacy}>Privacy Policy </Link>  </ListItem> 
         <ListItem><Link to='/team' style={faq}>FAQ </Link>  </ListItem> 
         <ListItem><Link to='/team' style={tandc}>Terms And Conditions </Link>  </ListItem> 

          </div>
        </Toolbar>

        </Container>
 
      </AppBar>
      
    </div>
  );
}

const social = {
  color:"#f0f0f0",
  margin:"50px 0 50px 0px",
}

const get = {
  display: "grid",
  position: "relative",
  top: "8px",
  right: "680px",
  width: "200px",
  height: "100px",
  color: "rgba(0,0,0,0.6)",
  textDecoration:"none",
  fontWeight:"bold",
  fontSize: "13px",
  letterSpacing:"2px",
  textTransform: "uppercase",
  color: "#F6AF00"
}

const connect = {
  position: "absolute",
  top: "15px",
  right: "360px",
  width: "200px",
  height: "100px",
  color: "rgba(0,0,0,0.6)",
  textDecoration:"none",
  fontWeight:"bold",
  fontSize: "13px",
  letterSpacing:"2px",
  textTransform: "uppercase",
  color: "#F6AF00"
}

const work = {
  position: "absolute",
  top: "15px",
  right: "0px",
  width: "200px",
  height: "100px",
  color: "rgba(0,0,0,0.6)",
  textDecoration:"none",
  fontWeight:"bold",
  fontSize: "13px",
  letterSpacing:"2px",
  textTransform: "uppercase",
  color: "#F6AF00"
}


const about = {
  position: "absolute",
  top: "50px",
  right: "875px",
  width: "200px",
  height: "100px",
  color: "rgba(0,0,0,0.6)",
  textDecoration:"none",
  fontWeight:"bold",
  fontSize: "13px",
  letterSpacing:"2px",
  textTransform: "uppercase",
  color: "#F6AF00"
}

const privacy = {
  position: "absolute",
  top: "50px",
  right: "180px",
  width: "190px",
  height: "100px",
  color: "rgba(0,0,0,0.6)",
  textDecoration:"none",
  fontWeight:"bold",
  fontSize: "13px",
  letterSpacing:"2px",
  textTransform: "uppercase",
  color: "#F6AF00"
}

const faq = {
  position: "absolute",
  top: "80px",
  right: "920px",
  width: "200px",
  height: "100px",
  color: "rgba(0,0,0,0.6)",
  textDecoration:"none",
  fontWeight:"bold",
  fontSize: "13px",
  letterSpacing:"2px",
  textTransform: "uppercase",
  color: "#F6AF00"
}

const tandc = {
  position: "absolute",
  top: "80px",
  right: "260px",
  width: "200px",
  height: "100px",
  color: "rgba(0,0,0,0.6)",
  textDecoration:"none",
  fontWeight:"bold",
  fontSize: "13px",
  letterSpacing:"2px",
  textTransform: "uppercase",
  color: "#F6AF00"
}


const appBar =
{
  backgroundColor: "Gray" ,
  marginTop:"3%",
}

export default  Footer;