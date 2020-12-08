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
import gb from "./assets/gb.png"



function Portfolio(){
    return (
        <div style={{backgroundColor: "#495057"}}>
        <div>
        <Jumbotron fluid style={{backgroundColor: "#252525"}}>
          <Container fluid>
            <h1 style={{color: "#DCDCDC"}} className="display-3">Portfolio</h1>
            <p className="lead" style={{color: "#DCDCDC"}} >Here is a showcase of some projects I've created.</p>
          </Container>
        </Jumbotron>
      </div>
      
        <div>
        <Row>
        <Col sm="6">
        <Card body style={{backgroundColor: '#C0C0C0',margin: 20}}>
        <CardImg src={gb} rounded="true" style={{marginBottom: 10}}/>
          <CardTitle tag="h4">React Google Books Search</CardTitle>
          <CardText>A React app that populates books based on the user's search. The user can also choose to view a preview of the specific book or save it to the 'saved' page.</CardText>
          <a  target="_blank" rel="noreferrer" href="https://github.com/zsmeltz/GB-SearchNSave" >-Google Books Search Repo</a>
              <a target="_blank" rel="noreferrer" href="https://gb-searchnsave.herokuapp.com/" >-Deployed React Google Books Search</a>
        </Card>
      </Col>
      </Row>
      <br/>
    <Row>
      <Col sm="6">
        <Card body style={{backgroundColor: '#C0C0C0', margin: 20}}>
        <CardImg src={empdir} rounded="true" style={{marginBottom: 10}}/>
          <CardTitle tag="h4">Employee Directory</CardTitle>
          <CardText>A React app that uses the user's input to sort through a list of employees and displays their information. </CardText>
          <a  target="_blank" rel="noreferrer" href="https://github.com/zsmeltz/Employee-Directory" >-Employee Directory Repo</a>
              <a target="_blank" rel="noreferrer" href="https://zs-employee-directory.herokuapp.com/" >-Deployed Employee Directory</a>
        </Card>
      </Col>
      <Col sm="6">
        <Card body style={{backgroundColor: '#C0C0C0', margin: 20}}>
          <CardImg src={budget} rounded="true" style={{marginBottom: 10}}/>
          <CardTitle tag="h4">On/Offline Budget Tracker</CardTitle>
          <CardText>An app that can add and subtract the user's expenses and display them in a chart. The app can be used online and offline due to it's IndexedDB functionality.</CardText>
          <a  target="_blank" rel="noreferrer" href="https://github.com/zsmeltz/On-Offline-Budget-Tracker" >-On/Offline Budget Tracker Repo</a>
              <a target="_blank" rel="noreferrer" href="https://powerful-peak-05811.herokuapp.com/" >-Deployed On/Offline Budget Tracker</a>
        </Card>
      </Col>
    </Row>
    <br/>
        <Row>
    <Col sm="6">
        <Card body style={{backgroundColor: '#C0C0C0', margin: 20}}>
          <CardImg src={eatdaburger} rounded="true" style={{marginBottom: 10}}/>
          <CardTitle tag="h4">Eat Da Burger</CardTitle>
          <CardText>Fun app that uses a database to log new burgers and allows the user to "eat" them.</CardText>
          <a  target="_blank" rel="noreferrer" href="https://github.com/zsmeltz/Eat-Da-Burger" >-Eat Da Burger Repo</a>
              <a target="_blank" rel="noreferrer" href="https://zs-eatdaburger.herokuapp.com/" >-Deployed Eat Da Burger</a>
        </Card>
      </Col>
      <Col>
      <Card body style={{backgroundColor: '#C0C0C0', margin: 20}}>
          <CardImg src={fitness} rounded="true"  style={{marginBottom: 10}}/>
          <CardTitle tag="h4">Fitness Workout Tracker</CardTitle>
          <CardText>A fitness app that can log a specific workout that the user can create. The app also displays a page with tables to show workout progress.</CardText>
          <a  target="_blank" rel="noreferrer" href="https://github.com/zsmeltz/Workout-Logger" >-Fitness Tracker Repo</a>
              <a target="_blank" rel="noreferrer" href="https://frozen-earth-44968.herokuapp.com/" >-Deployed Fitness Tracker</a>
        </Card>
      </Col>
    </Row>
    <br/>
        <Row>
      <Col sm="6">
        <Card body style={{backgroundColor: '#C0C0C0', margin: 20}}>
        <CardImg src={passgen} rounded="true" style={{marginBottom: 10}}/>
          <CardTitle tag="h4">Password Generator</CardTitle>
          <CardText>An app that lets a user customize a randomly generated password based on prompts.</CardText>
          <a target="_blank" rel="noreferrer" href="https://github.com/zsmeltz/Simple-Password-Generator" >-Password Generator Repo</a>
              <a target="_blank" rel="noreferrer" href="https://zsmeltz.github.io/Simple-Password-Generator/" >-Deployed Password Generator</a>
        </Card>
      </Col>
      <Col sm="6">
        <Card body style={{backgroundColor: '#C0C0C0', margin: 20}}>
          <CardImg src={workDay} rounded="true" style={{marginBottom: 10}}/>
          <CardTitle tag="h4">Work-Day-Planner</CardTitle>
          <CardText>A planner that lets a user save notes for their work-day. This app also features a color scheme based of the time of day.</CardText>
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