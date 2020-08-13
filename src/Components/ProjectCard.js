import React from 'react';
import './Project.css';
import { Row, Col } from 'reactstrap';

const ProjectCard = (props)=> {
  const {name, description, image_url} = props.project
  return(
    <div>
      <Row>
        <Col xs="3" className="Project-image">
          <img src={image_url} style={{height: 50}}></img>
        </Col>
        <Col xs="9" className="Project">
          <h5>{name}</h5>
          <p >{description}</p>
        </Col>
      </Row>
    </div>
  )
}
export default ProjectCard;
