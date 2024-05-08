import React from "react";
import './ProjectCards.css'
import { BsGithub } from "react-icons/bs";

function ProjectCards(props) {
  return (
    <div className="card-container">
      <img src={props.imgPath} />
      <div className="card-content">
        <h3>{props.title}</h3>
        <p>
          {props.description}
        </p>
        <a  href={props.ghLink} target="_blank">
          <BsGithub /> &nbsp;
          {"GitHub"}
        </a>
       
      </div>
    </div>
  );
}
export default ProjectCards;
