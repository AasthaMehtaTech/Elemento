import React from "react";
import { Link } from "react-router-dom";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";

import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import CssBaseline from "@material-ui/core/CssBaseline";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import Slide from "@material-ui/core/Slide";

const Navbar = (props) => {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({ target: window ? window() : undefined });

  return (
    <Slide appear={false} direction='down' in={!trigger}>
      {children}
    </Slide>
  );
};

// Custom theme for aligning items
const theme = createMuiTheme({
  overrides: {
    // Style sheet name ⚛️
    MuiButton: {
      // Name of the rule
      text: {
        // Some CSS
        color: "white",
      },
    },
  },
});

const HideAppBar = (props) => {
  return (
    <React.Fragment>
      <CssBaseline />
      <Navbar>
        <AppBar>
          <Toolbar>
            <ThemeProvider theme={theme}>
              <Typography variant='h6'>Customizable Portfolio Logo</Typography>
            </ThemeProvider>
          </Toolbar>
          <Link to='/'>Home</Link>
          <Link to='/team'>Team</Link>
          <Link to='/elements'>Elements</Link>
        </AppBar>
      </Navbar>
      <Toolbar />
    </React.Fragment>
  );
};

export default HideAppBar;
