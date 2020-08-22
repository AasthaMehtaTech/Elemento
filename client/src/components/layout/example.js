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
  const [spacing] = React.useState(8);
  const classes = useStyles();

  const arr1 = [{
    id:"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSuYTDbYKg_8fBE5Y8N6ryR9QgM92ePXAqBwg&usqp=CAU",
    alt:"Profile pic"
  },{
    id:"https://mdbootstrap.com/wp-content/uploads/2015/08/navbar-fb.jpg",
    alt:"Profile pic"
  },{
    id:"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSGtcDYNlfc8JHSe3b5qGFBM0bvmuu7WNkt1w&usqp=CAU",
    alt:"Profile pic"
  }
  ]
  const arr2 = [{

    id:"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSGtcDYNlfc8JHSe3b5qGFBM0bvmuu7WNkt1w&usqp=CAU",
    alt:"Profile pic"
  },{
    
    id:"https://mdbootstrap.com/wp-content/uploads/2015/08/navbar-fb.jpg",
    alt:"Profile pic"
  },{
    id:"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSuYTDbYKg_8fBE5Y8N6ryR9QgM92ePXAqBwg&usqp=CAU",
    alt:"Profile pic"
  }
  ]
  const arr3 = [{

    id:"https://mdbootstrap.com/wp-content/uploads/2015/08/navbar-fb.jpg",
    alt:"Profile pic"
  },{
    
    id:"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSuYTDbYKg_8fBE5Y8N6ryR9QgM92ePXAqBwg&usqp=CAU",
    alt:"Profile pic"
  },{
    id:"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSGtcDYNlfc8JHSe3b5qGFBM0bvmuu7WNkt1w&usqp=CAU",
    alt:"Profile pic"
  }
  ]

  return (
    <div className="sec-backImage">
      <Container>
      <h1 className="title">Examples</h1>
      <p className="para">Quickly get your Portfolio started using any of the examples using the elements ranging from Navigation bar to Buttons.</p>
      <br/> <br/>
      <Grid container className={classes.root} spacing={8}>
        <Grid item xs={12}>
        <Grid container justify="center" spacing={spacing}>
          {arr1.map((value) => (
            <Grid key={value} item>
              <Paper className={classes.paper}>
              <a href="/elements">

              <img src={value.id} alt={value.alt} className="exampleImage" />
              </a>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <Grid container justify="center" spacing={spacing}>
          {arr2.map((value) => (
            <Grid key={value} item>
              <Paper className={classes.paper}>
              <a href="/elements">
              <img src={value.id} alt={value.alt} className="exampleImage" />
              </a>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Grid>

      <Grid item xs={12}>
        <Grid container justify="center" spacing={spacing}>
          {arr3.map((value) => (
            <Grid key={value} item>
              <Paper className={classes.paper}>
              <a href="/elements">
              <img src={value.id} alt={value.alt} className="exampleImage" />
              </a>
              </Paper>
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