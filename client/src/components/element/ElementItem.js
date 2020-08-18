import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

import CodeIcon from "@material-ui/icons/Code";
import GetAppRoundedIcon from "@material-ui/icons/GetAppRounded";

import ElementModal from "./ElementModal";

import completeScript from "../../utils/completeScript";
import downloadCode from "../../utils/downloadCode";

const useStyles = makeStyles({
  root: {
    maxWidth: 300,
  },
});

const ElementItem = ({ name, img, HTMLCode, CSSCode, JSCode }) => {
  const classes = useStyles();

  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

 const download= () => {
  downloadCode(HTMLCode, CSSCode, JSCode);
 }

  return (
    <div style={elementStyle}>
      <Card className={classes.root} style={cardStyle}>
        <CardActionArea>
          <CardMedia
            component='img'
            height='140'
            src={`data:image/png;base64,${arrayBufferToBase64({ img }.img)}`}
            title='Element'
          />
          <CardContent>
            <Typography gutterBottom variant='h5' component='h2'>
              {name}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button
            size='small'
            color='seconday'
            variant='outlined'
            startIcon={<GetAppRoundedIcon />}
            onClick={download}
          >
            Download
          </Button>

          <Button
            variant='contained'
            color='primary'
            size='small'
            className={classes.button}
            startIcon={<CodeIcon />}
            onClick={handleOpen}
          >
            View Code
          </Button>
        </CardActions>
      </Card>
      <ElementModal
        isOpen={isOpen}
        close={handleClose}
        CSSCode={CSSCode}
        HTMLCode={HTMLCode}
        JSCode={JSCode}
      />
    </div>
  );
};

const elementStyle = {
  alignContent: "center",
  display: "inline-grid",
  gridTemplateColoumns: "repeat(3, 1fr)",
  gridGap: "1rem",
};

const cardStyle = {
  margin: "20px",
  boxShadow: "0px 6px 15px 10px #ccc",
};

const arrayBufferToBase64 = (buffer) => {
  var binary = "";
  var bytes = [].slice.call(new Uint8Array(buffer));
  bytes.forEach((b) => (binary += String.fromCharCode(b)));
  return window.btoa(binary);
};

export default ElementItem;
