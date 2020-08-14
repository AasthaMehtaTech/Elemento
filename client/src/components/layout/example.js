import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import '../../App.css'
import Paper from '@material-ui/core/Paper';
import { Container } from '@material-ui/core';

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

 function Example() {
  // const [spacing, setSpacing] = React.useState(8);
  const [spacing] = React.useState(8);
  const classes = useStyles();

  // const handleChange = (event) => {
  //   setSpacing(Number(event.target.value));
  // };

  return (
    <div className="sec-backImage">
      <Container>
      <h1 className="title">Examples</h1>
      <p className="para">Quickly get your Portfolio started using any of the examples using the elements ranging from Navigation bar to Buttons.</p>
      <br/> <br/>
      <Grid container className={classes.root} spacing={8}>
        <Grid item xs={12}>
        <Grid container justify="center" spacing={spacing}>
          {[0, 1, 2].map((value) => (
            <Grid key={value} item>
              <Paper className={classes.paper}></Paper>
            </Grid>
          ))}
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <Grid container justify="center" spacing={spacing}>
          {[0, 1, 2].map((value) => (
            <Grid key={value} item>
              <Paper className={classes.paper}></Paper>
            </Grid>
          ))}
        </Grid>
      </Grid>

      <Grid item xs={12}>
        <Grid container justify="center" spacing={spacing}>
          {[0, 1, 2].map((value) => (
            <Grid key={value} item>
              <Paper className={classes.paper}></Paper>
            </Grid>
          ))}
        </Grid>
      </Grid>
      </Grid>
      </Container>
     
    </div>
   
  );
}

export default Example;