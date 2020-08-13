import React from 'react';
import projects from './projects';
import ProjectList from './Components/ProjectList'
import './App.css';
import { Form, FormGroup, Label, Input, FormText } from 'reactstrap';
function App() {
  return (
    <div className="App">
      <div className='App-header'>
        <h1>Discover Project</h1>
        <p style={{color: "green"}}>91098 public projects to discover</p>
        <Form>
          <FormGroup>
            <Input type="search" name="search" id="search" placeholder="Type something..." />
          </FormGroup>
        </Form>
      </div>
      <ProjectList projects = {projects}/>
    </div>
  );
}

export default App;
