import React from "react";
import {Card, CardTitle, CardText, Row, Col, 
  Jumbotron, Container, CardImg
  } from 'reactstrap';
import passgen from "./assets/passgen300x300.png"
import workDay from "./assets/work-day.png"
import eatdaburger from "./assets/eatdaburger.png"
import fitness from "./assets/fitness.png"
import empdir from "./assets/empdir.png"
import budget from "./assets/budget300x300.png"

function Portfolio(){
    return (
        <div>
        <div>
        <Jumbotron fluid>
          <Container fluid>
            <h1 className="display-3">My Projects</h1>
            <p className="lead">Here is a showcase of the projects I've created.</p>
          </Container>
        </Jumbotron>
      </div>

        <div>
        
    <Row>
      <Col sm="6">
        <Card body>
        <CardImg src={empdir} rounded />
          <CardTitle tag="h5">Employee Directory</CardTitle>
          <CardText>A React app that uses your input to sort through a list of employees and displays their information. </CardText>
          <a  target="_blank" rel="noreferrer" href="https://github.com/zsmeltz/Employee-Directory" >-Employee Directory Repo</a>
              <a target="_blank" rel="noreferrer" href="https://zs-employee-directory.herokuapp.com/" >-Deployed Employee Directory</a>
        </Card>
      </Col>
      <Col sm="6">
        <Card body>
          <CardImg src={budget} rounded/>
          <CardTitle tag="h5">On/Offline Budget Tracker</CardTitle>
          <CardText>An app that can add and subtract your expenses and display them in a chart. You can also use this app online and offline due to it's IndexedDB functionality.</CardText>
          <a  target="_blank" rel="noreferrer" href="https://github.com/zsmeltz/On-Offline-Budget-Tracker" >-On/Offline Budget Tracker Repo</a>
              <a target="_blank" rel="noreferrer" href="https://powerful-peak-05811.herokuapp.com/" >-Deployed On/Offline Budget Tracker</a>
        </Card>
      </Col>
    </Row>
    <br/>
        <Row>
    <Col sm="6">
        <Card body>
          <CardImg src={eatdaburger} rounded />
          <CardTitle tag="h5">Eat Da Burger</CardTitle>
          <CardText>Fun app that uses a database to log new burgers and allows you to "eat" them.</CardText>
          <a  target="_blank" rel="noreferrer" href="https://github.com/zsmeltz/Eat-Da-Burger" >-Eat Da Burger Repo</a>
              <a target="_blank" rel="noreferrer" href="https://zs-eatdaburger.herokuapp.com/" >-Deployed Eat Da Burger</a>
        </Card>
      </Col>
      <Col>
      <Card body>
          <CardImg src={fitness} rounded  />
          <CardTitle tag="h5">Fitness Workout Tracker</CardTitle>
          <CardText></CardText>
          <a  target="_blank" rel="noreferrer" href="https://github.com/zsmeltz/Workout-Logger" >-Fitness Tracker Repo</a>
              <a target="_blank" rel="noreferrer" href="https://frozen-earth-44968.herokuapp.com/" >-Deployed Fitness Tracker</a>
        </Card>
      </Col>
    </Row>
    <br/>
        <Row>
      <Col sm="6">
        <Card body>
        <CardImg src={passgen} rounded />
          <CardTitle tag="h5">Special Title Treatment</CardTitle>
          <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
          <a target="_blank" rel="noreferrer" href="https://github.com/zsmeltz/Simple-Password-Generator" >-Password Generator Repo</a>
              <a target="_blank" rel="noreferrer" href="https://zsmeltz.github.io/Simple-Password-Generator/" >-Deployed Password Generator</a>
        </Card>
      </Col>
      <Col sm="6">
        <Card body>
          <CardImg src={workDay} rounded/>
          <CardTitle tag="h5">Special Title Treatment</CardTitle>
          <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
          <a target="_blank" rel="noreferrer" href="https://github.com/zsmeltz/Work-Day-Planner" >-Work-Day Planner Repo</a>
              <a target="_blank" rel="noreferrer" href="https://zsmeltz.github.io/Work-Day-Planner/" >-Deployed Work Day Planner</a>
        </Card>
      </Col>
    </Row>
    
      </div>
      </div>
    )
};

export default Portfolio;