import React, { useState, useEffect, useContext, Fragment } from "react";
import ElementContext from "../../context/element/elementContext";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Grid from "@material-ui/core/Grid";

import JsEditor from "../editor/JsEditor";
import CSSEditor from "../editor/CSSEditor";
import HTMLEditor from "../editor/HTMLEditor";
import ElementView from "./ElementView";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    position: "absolute",
    width: "1000px",
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[8],
    padding: theme.spacing(2, 4, 3),
  },
}));

const ElementModal = (props) => {
  const classes = useStyles();

  const [open, setOpen] = useState(props.isOpen);

  useEffect(() => setOpen(props.isOpen));

  const elementContext = useContext(ElementContext);

  const body = (
    <Fragment>
      <div
        style={{ transform: "translate(30%, 10%)" }}
        className={classes.paper}
      >
        <div className={classes.root}>
          <Grid container spacing={3}>
            <Grid item xs={4}>
              <JsEditor code={props.JSCode} />
            </Grid>

            <Grid item xs={4}>
              <HTMLEditor code={props.HTMLCode} />
            </Grid>

            <Grid item xs={4}>
              <CSSEditor code={props.CSSCode} />
            </Grid>
          </Grid>
        </div>
        <ElementView js={props.JSCode} html={props.HTMLCode} css={props.CSSCode}/>
      </div>
    </Fragment>
  );

  return (
    <div>
      <Modal
        open={open}
        onClose={props.close}
        aria-labelledby='simple-modal-title'
        aria-describedby='simple-modal-description'
      >
        {body}
      </Modal>
    </div>
  );
};

export default ElementModal;
