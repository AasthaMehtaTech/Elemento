import React from "react";
import { Link } from "react-router-dom";
import "../../App.css";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import { ListItem } from "@material-ui/core";
import Logo from "../../img/Logo_SVG.svg"
const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    display: "none",
    [theme.breakpoints.up("xs")]: {
      display: "block",
    },
  },
  
  inputRoot: {
    color: "inherit",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 0, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
  sectionDesktop: {
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "flex",
    },
  },
  sectionMobile: {
    display: "flex",
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
}));

function PrimarySearchAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.grow}>
      <AppBar position='static' style={appBar}>
        <Container fixed>
          <Toolbar>
            <Typography className={classes.title} variant='h6' noWrap>
              <Link to='/' >
                {" "}
              <img src={Logo} alt="Elemento"style={companyName} />
              </Link>
            </Typography>

            <div className={classes.grow} />
            <div className={classes.sectionDesktop}>
              <ListItem>
                {" "}
                <Link to='/' style={customStyle}>
                  Home
                </Link>{" "}
              </ListItem>
              <ListItem>
                <Link to='/team' style={customStyle}>
                  Team
                </Link>{" "}
              </ListItem>
              <ListItem>
                {" "}
                <Link to='/elements' style={customStyle}>
                  Elements
                </Link>{" "}
              </ListItem>
              <ListItem>
                {" "}
                <Link to='/contribute' style={customStyle}>
                  Contribute
                </Link>{" "}
              </ListItem>

        </div>
          </Toolbar>
        </Container>
      </AppBar>
    </div>
  );
}

const companyName = {
   width:"auto",
   height: "2vw"
  };
const customStyle = {
  color: "rgba(0,0,0,0.6)",
  textDecoration: "none",
  fontWeight: "bold",
  fontSize: "13px",
  letterSpacing: "2px",
  textTransform: "uppercase",
};
const appBar = {
  backgroundColor: "white",
};

export default PrimarySearchAppBar;
