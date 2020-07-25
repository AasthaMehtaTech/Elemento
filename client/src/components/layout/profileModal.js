import React from "react";
import { Container } from "@material-ui/core";
import "./modal.css";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";
import InstagramIcon from "@material-ui/icons/Instagram";
import FacebookIcon from "@material-ui/icons/Facebook";

const imgsize = {
  position: "relative",
  padding: "10px",
  width: "150px",
  height: "150px",
};
const center = {
  textAlign: "center",
  verticalAlign: "center",
};
const avatar = {
  maxWidth: "100%",
  maxHeight: "100%",
  border: "1px solid #fc5a03",
  borderRadius: "50%",
};

export default class ImageComponent extends React.Component {
   constructor(props) {
    super(props);    
  }
  state = { isOpen: false };
  handleShowDialog = () => {
    this.setState({ isOpen: !this.state.isOpen });
    console.log("clicked");
  };
  render() {
    return (
      <div style={imgsize}>
        <img
          className="small"
          style={avatar}
          src={this.props.PersonImg}
          onClick={this.handleShowDialog}
          alt="no image"
        />
        {this.state.isOpen && (
          <dialog
            className="dialog"
            style={{ position: "relative" }}
            open
            onClick={this.handleShowDialog}
          >
        
        {/*  Modal content */}
        <div className="modal-content" style={imgsize} open onClick={this.handleShowDialog}>
          {/* <div className="modal-header">
            <span className="close">x</span>
            <h2>{this.props.PersonName}</h2>
            <p>{this.props.PersonRole}</p>
          </div> */}
          <div className="modal-body">
            <p>
            {this.props.bio}
          </p>
          </div>
          <div className="modal-footer">
            <div style={center}>
            <a href={this.props.fblink}>
              <FacebookIcon style={{color:"white"}} />
            </a>
            <a href={this.props.instalink}>
              <InstagramIcon style={{color:"white"}} />
            </a>
            <a href={this.props.githublink}>
              <GitHubIcon style={{color:"white"}}/>
            </a>
            <a href={this.props.linkedinlink}>
              <LinkedInIcon style={{color:"white"}}/>
            </a>
            </div>

            {/* Modal Content ends here */}
          </div>
        </div>
        </dialog>
        )}
      </div>
    );
  }
}
