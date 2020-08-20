import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Button from '@material-ui/core/Button';

import Navbar from "../layout/Navbar";
import JsEditor from "../editor/dynamic/JsEditor";
import HTMLEditor from "../editor/dynamic/HTMLEditor";
import CSSEditor from "../editor/dynamic/CSSEditor";
import ElementView from '../element/ElementView';
import Footer from '../layout/Footer';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
}));

const Contribute = () => {
  const classes = useStyles();

  const [jsCode, setJsCode] = useState("");
  const [htmlCode, setHtmlCode] = useState("");
  const [cssCode, setCssCode] = useState("");

  const onChangeJs = (e) => {
    {
      var finalCode = "";

      e.display.view.forEach((code) => {
        finalCode += code.line.text;
        finalCode += "\n";
      });
      setJsCode(finalCode);
    }
  };

  const onChangeHtml = (e) => {
    var finalCode = "";

    e.display.view.forEach((code) => {
      finalCode += code.line.text;
      finalCode += "\n";
    });
    setHtmlCode(finalCode);
  }

  const onChangeCss = (e) => {
    var finalCode = "";

    e.display.view.forEach((code) => {
      finalCode += code.line.text;
      finalCode +="\n";
    })
    setCssCode(finalCode);
  }

  return (
    <div>
      <Navbar />
      <Grid container spacing={10}>
        <Grid item xs={4}>
          <JsEditor onChange={onChangeJs} />
        </Grid>
        <Grid item xs={4}>
          <HTMLEditor onChange={onChangeHtml} />
        </Grid>
        <Grid item xs={4}>
          <CSSEditor onChange={onChangeCss} />
        </Grid>
        <Grid item xs = {12}>
          <Button variant="contained" color="secondary">Submit</Button>
        </Grid>
      </Grid>
      <ElementView html={htmlCode} css={cssCode} js={jsCode} />
      <Footer />
    </div>
  );
};

export default Contribute;
