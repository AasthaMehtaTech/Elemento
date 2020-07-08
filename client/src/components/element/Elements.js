import React, { useEffect, useContext, Fragment } from "react";

import ElementItem from "./ElementItem";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";

import ElementContext from "../../context/element/elementContext";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));

const Element = () => {
  const classes = useStyles();

  const elementContext = useContext(ElementContext);
  const { getElements, elements, loading, filtered } = elementContext;

  useEffect(() => {
    if(elements === null){
      getElements();
    }
    
  }, []);

  if (elements === null) {
    return <h1> loading </h1>;
  }
  return (
    <Fragment>
    <Container maxWidth='lg'>
      
      <div className={classes.root}>
        {filtered === null
          ? elements.map((element) => (
            <ElementItem
              name={element.name}
              img={element.screenshot.data}
              key={element._id}
            />
          )):  filtered.map((element) => (
              <ElementItem
                name={element.name}
                img={element.screenshot.data}
                key={element._id}
              />
            ))}
      </div>
    </Container>
    </Fragment>
  );
};

export default Element;
