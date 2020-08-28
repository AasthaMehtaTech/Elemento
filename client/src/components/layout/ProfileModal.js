import React from "react";
// import { Container } from "@material-ui/core";
// import "./modal.css";
// import { makeStyles } from '@material-ui/core/styles';
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";
import Popover from '@material-ui/core/Popover';

const imgsize = {
  width: "200px",
  height: "100%",
  textAlign:"center",
  color:"black",
  padding: '8px',
  fontFamily:'Helvetica'
};
const center = {
  textAlign: "center",
  verticalAlign: "center",
};
const avatar = {
  width:"180px",
  height:"180px",
  position:"relative",
  maxWidth: "100%",
  maxHeight: "100%",
  border: "1px solid #fc5a03",
  borderRadius: "50%",
};
const iconColor = {
  color:"#fc5a03",
}
const containerDiv = {
  background:'linearGradient(rgba(250,0,0,0.5),transparent)',
  border: "5px solid rgba(250,250,250,0.5)",
  borderRadius:"10px",
  color:'#ddd',
  backgroundImage: 'linearGradient(to bottom right, #fa7c28, #d9adff)',
  opacity:'0.85',
}

export default function ProfileModal(props) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  return (
    <div>
      <img
          style={avatar}
          src={props.PersonImg}
          // onHover={}
          onClick={handleClick}
          alt="no image"
          id="imgg"
          zIndex="0"
        />
      <div>
        <div style={imgsize}>
          
          <div id="simple-modal-description" style={{textAlign:"center"}}> 
            <h2 id="simple-modal-title">{props.PersonName}</h2>            
           
            
          </div>
        </div>
      </div>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
      > 
        <div style={containerDiv}>

          <div style={imgsize}>
            <h2 id="simple-modal-title" style={imgsize}>{props.PersonName}</h2>
            <div id="simple-modal-description">             
              <p style={imgsize}>{props.PersonRole}</p>  
              <p style={{color:'black'}}>{props.bio}</p>            
              <div style={center}>
               
                <a href={props.githublink} target="_blank">
                  <GitHubIcon style={iconColor}/>
                </a>
                <a href={props.linkedinlink} target="_blank">
                  <LinkedInIcon style={iconColor}/>
                </a>
              </div>
            </div>
          </div>
        </div>
      </Popover>
    </div>
  );
}
