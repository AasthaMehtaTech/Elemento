import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';


const useStyles = makeStyles((theme) => ({
    paper: {
      position: 'absolute',
      width: 400,
      backgroundColor: theme.palette.background.paper,
      border: '2px solid #000',
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
  }));

 const ElementModal = (props) => {
    const classes = useStyles();

    const [open, setOpen] = useState(props.isOpen);

    useEffect(() => setOpen(props.isOpen))
  
    const body = (
      <div style={{transform: 'translate(50%, 50%)'}} className={classes.paper}>
        <h2 id="simple-modal-title">Text in a modal</h2>
        <p id="simple-modal-description">
          Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
        </p>
    
      </div>
    );
  
    return (
      <div>
      
        <Modal
        open={open}
        onClose={props.close}
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
        >
          {body}
        </Modal>
      </div>
    );
  }

  export default ElementModal;