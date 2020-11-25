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
        <div style={{backgroundColor: "#495057"}}>
        <div>
        <Jumbotron fluid style={{backgroundColor: "#CCB7AE"}}>
          <Container fluid>
            <h1 style={{fontFamily: "Nunito", color: "#26252D"}}className="display-3">My Projects</h1>
            <p className="lead">Here is a showcase of the projects I've created.</p>
          </Container>
        </Jumbotron>
      </div>

        <div>
        
    <Row>
      <Col sm="6">
        <Card body style={{backgroundColor: '#D6CFCB'}}>
        <CardImg src={empdir} rounded style={{margin: 10}}/>
          <CardTitle tag="h5">Employee Directory</CardTitle>
          <CardText>A React app that uses your input to sort through a list of employees and displays their information. </CardText>
          <a  target="_blank" rel="noreferrer" href="https://github.com/zsmeltz/Employee-Directory" >-Employee Directory Repo</a>
              <a target="_blank" rel="noreferrer" href="https://zs-employee-directory.herokuapp.com/" >-Deployed Employee Directory</a>
        </Card>
      </Col>
      <Col sm="6">
        <Card body style={{backgroundColor: '#D6CFCB'}}>
          <CardImg src={budget} rounded style={{margin: 10}}/>
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
        <Card body style={{backgroundColor: '#D6CFCB'}}>
          <CardImg src={eatdaburger} rounded style={{margin: 10}}/>
          <CardTitle tag="h5">Eat Da Burger</CardTitle>
          <CardText>Fun app that uses a database to log new burgers and allows you to "eat" them.</CardText>
          <a  target="_blank" rel="noreferrer" href="https://github.com/zsmeltz/Eat-Da-Burger" >-Eat Da Burger Repo</a>
              <a target="_blank" rel="noreferrer" href="https://zs-eatdaburger.herokuapp.com/" >-Deployed Eat Da Burger</a>
        </Card>
      </Col>
      <Col>
      <Card body style={{backgroundColor: '#D6CFCB'}}>
          <CardImg src={fitness} rounded  style={{margin: 10}}/>
          <CardTitle tag="h5">Fitness Workout Tracker</CardTitle>
          <CardText>A fitness app that can log a specific workout that you create. The app also displays a page with tables to show your progress.</CardText>
          <a  target="_blank" rel="noreferrer" href="https://github.com/zsmeltz/Workout-Logger" >-Fitness Tracker Repo</a>
              <a target="_blank" rel="noreferrer" href="https://frozen-earth-44968.herokuapp.com/" >-Deployed Fitness Tracker</a>
        </Card>
      </Col>
    </Row>
    <br/>
        <Row>
      <Col sm="6">
        <Card body style={{backgroundColor: '#D6CFCB'}}>
        <CardImg src={passgen} rounded style={{margin: 10}}/>
          <CardTitle tag="h5">Password Generator</CardTitle>
          <CardText>An app that lets you customize a randomly generated password based on prompts.</CardText>
          <a target="_blank" rel="noreferrer" href="https://github.com/zsmeltz/Simple-Password-Generator" >-Password Generator Repo</a>
              <a target="_blank" rel="noreferrer" href="https://zsmeltz.github.io/Simple-Password-Generator/" >-Deployed Password Generator</a>
        </Card>
      </Col>
      <Col sm="6">
        <Card body style={{backgroundColor: '#D6CFCB'}}>
          <CardImg src={workDay} rounded style={{margin: 10}}/>
          <CardTitle tag="h5">Work-Day-Planner</CardTitle>
          <CardText>A planner that lets you save notes for your work-day. This app also configures the current time and color coordinates it.</CardText>
          <a target="_blank" rel="noreferrer" href="https://github.com/zsmeltz/Work-Day-Planner" >-Work-Day Planner Repo</a>
              <a target="_blank" rel="noreferrer" href="https://zsmeltz.github.io/Work-Day-Planner/" >-Deployed Work Day Planner</a>
        </Card>
      </Col>
    </Row>
    <br/>
      </div>
      </div>
    )
};

export default Portfolio;