import React from 'react';
import ProjectContainer from './ProjectContainer'
import { Container, Row, Col } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
const ProjectList = (props) => {
  return(
    <div>
      <Container>
        <Row>
          <Col>
            <ProjectContainer title= 'MOST LIKED' projects={props.projects}/>
          </Col>
          <Col>
            <ProjectContainer title= 'MOST ACTIVE' projects={props.projects}/>
          </Col>
        </Row>
      </Container>
    </div>


  )
}

export default ProjectList;
