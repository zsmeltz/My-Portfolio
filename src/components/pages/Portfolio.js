import React from "react";
import {
  Card,
  CardTitle,
  CardText,
  Row,
  Col,
  Jumbotron,
  Container,
  CardImg,
  UncontrolledCarousel,
} from "reactstrap";
import passgen from "./assets/passgen300x300.png";
import workDay from "./assets/work-day.png";
import eatdaburger from "./assets/eatdaburger.png";
import fitness from "./assets/fitness.png";
// import empdir from "./assets/empdir.png";
import gb from "./assets/gb.png";
import login from "./assets/login.png";
import homepage from "./assets/homepage.png";
import categories from "./assets/categories.png";
import post from "./assets/post.png";
import faves from "./assets/faves.png";
import base from "./assets/base.png";
import quote1 from "./assets/quote-1.png";
import quote2 from "./assets/quote-2.png";
import Footer from "../Footer";
const items = [
  {
    src: login,
    altText: "Slide 1",
    key: "1",
  },
  {
    src: homepage,
    altText: "Slide 2",
    key: "2",
  },
  {
    src: categories,
    altText: "Slide 3",
    key: "3",
  },
  {
    src: post,
    altText: "Slide 4",
    key: "4",
  },
  {
    src: faves,
    altText: "Slide 5",
    key: "5",
  },
];

const pnqImages = [
  {
    src: base,
    altText: "Slide 1",
    key: "1",
  },
  {
    src: quote1,
    altText: "Slide 2",
    key: "2",
  },
  {
    src: quote2,
    altText: "Slide 3",
    key: "3",
  },
];

function Portfolio() {
  return (
    <div style={{ backgroundColor: "#495057", overflow: "hidden" }}>
      <div id="apps">
        <Jumbotron fluid style={{ backgroundColor: "#252525" }}>
          <Container fluid>
            <h1 style={{ color: "#DCDCDC" }} className="display-3">
              Portfolio
            </h1>
            <p className="lead" style={{ color: "#DCDCDC" }}>
              Here is a showcase of some apps I've created and{" "}
              <a href="#projects" style={{ color: "#909090" }}>
                projects
              </a>{" "}
              I've been apart of.
            </p>
          </Container>
        </Jumbotron>
      </div>

      <div>
        <h1 style={{ textAlign: "center", color: "#C0C0C0" }}>APPS</h1>
        <hr
          style={{
            marginLeft: "10%",
            marginRight: "10%",
            backgroundColor: "#DCDCDC",
          }}
        ></hr>
        <Row>
          <Col sm="6">
            <Card body style={{ backgroundColor: "#C0C0C0", margin: 20 }}>
              <CardImg src={gb} rounded="true" style={{ marginBottom: 20 }} />
              <CardTitle tag="h4">React Google Books Search</CardTitle>
              <CardText>
                A React app that populates books based on the user's search. The
                user can also choose to view a preview of the specific book or
                save it to the 'saved' page.
              </CardText>
              <h4>Try it out:</h4>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://gb-searchnsave.herokuapp.com/"
              >
                -React Google Books Search
              </a>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://github.com/zsmeltz/GB-SearchNSave"
              >
                -Repo/Docs
              </a>
            </Card>
          </Col>
          <Col sm="6">
            <Card body style={{ backgroundColor: "#C0C0C0", margin: 20 }}>
              {/* <CardImg src={gb} rounded="true" style={{ marginBottom: 10 }}> */}
              <UncontrolledCarousel
                items={pnqImages}
                captionText="Pics N' Quotes"
              />
              {/* </CardImg> */}
              <CardTitle tag="h4" style={{ marginTop: 20 }}>
                Pics N' Quotes
              </CardTitle>
              <CardText>
                This React app takes a quote API and a random background picture
                API and integrates them into what is Pics N' Quotes. The card in
                the middle features a clickable button that will make a random
                quote appear each time the user clicks. The background images
                change every time you open the page which gives the user a
                different background upon each use.
              </CardText>
              <h4>Try it out:</h4>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://zsmeltz.github.io/Pics-N-Quotes/"
              >
                -Pics N' Quotes
              </a>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://github.com/zsmeltz/Pics-N-Quotes"
              >
                -Repo/Docs
              </a>
            </Card>
          </Col>
        </Row>
        <br />
        <Row>
          <Col sm="6">
            <Card body style={{ backgroundColor: "#C0C0C0", margin: 20 }}>
              <CardImg
                src={eatdaburger}
                rounded="true"
                style={{ marginBottom: 20 }}
              />
              <CardTitle tag="h4">Eat Da Burger</CardTitle>
              <CardText>
                Fun app that uses a database to log new burgers and allows the
                user to "eat" them.
              </CardText>
              <h4>Try it out:</h4>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://zs-eatdaburger.herokuapp.com/"
              >
                -Eat Da Burger
              </a>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://github.com/zsmeltz/Eat-Da-Burger"
              >
                -Repo/Docs
              </a>
            </Card>
          </Col>
          <Col>
            <Card body style={{ backgroundColor: "#C0C0C0", margin: 20 }}>
              <CardImg
                src={fitness}
                rounded="true"
                style={{ marginBottom: 20 }}
              />
              <CardTitle tag="h4">Fitness Workout Tracker</CardTitle>
              <CardText>
                A fitness app that can log a specific workout that the user can
                create. The app also displays a page with tables to show workout
                progress.
              </CardText>
              <h4>Try it out:</h4>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://frozen-earth-44968.herokuapp.com/"
              >
                -Fitness Tracker
              </a>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://github.com/zsmeltz/Workout-Logger"
              >
                -Repo/Docs
              </a>
            </Card>
          </Col>
        </Row>
        <br />
        <Row>
          <Col sm="6">
            <Card body style={{ backgroundColor: "#C0C0C0", margin: 20 }}>
              <CardImg
                src={passgen}
                rounded="true"
                style={{ marginBottom: 20 }}
              />
              <CardTitle tag="h4">Password Generator</CardTitle>
              <CardText>
                An app that lets a user customize a randomly generated password
                based on prompts.
              </CardText>
              <h4>Try it out:</h4>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://zsmeltz.github.io/Simple-Password-Generator/"
              >
                -Password Generator
              </a>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://github.com/zsmeltz/Simple-Password-Generator"
              >
                -Repo/Docs
              </a>
            </Card>
          </Col>
          <Col sm="6">
            <Card body style={{ backgroundColor: "#C0C0C0", margin: 20 }}>
              <CardImg
                src={workDay}
                rounded="true"
                style={{ marginBottom: 20 }}
              />
              <CardTitle tag="h4">Work-Day-Planner</CardTitle>
              <CardText>
                A planner that lets a user save notes for their work-day. This
                app also features a color scheme based of the time of day.
              </CardText>
              <h4>Try it out:</h4>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://zsmeltz.github.io/Work-Day-Planner/"
              >
                -Work Day Planner
              </a>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://github.com/zsmeltz/Work-Day-Planner"
              >
                -Repo/Docs
              </a>
            </Card>
          </Col>
        </Row>
        <br />
      </div>
      <h1 style={{ textAlign: "center", color: "#C0C0C0" }} id="projects">
        PROJECTS
      </h1>
      <hr
        style={{
          marginLeft: "10%",
          marginRight: "10%",
          backgroundColor: "#DCDCDC",
        }}
      ></hr>
      <div>
        <Row style={{ left: 0, right: 0, marginRight: 0 }}>
          <Card body style={{ backgroundColor: "#C0C0C0", margin: 30 }}>
            <UncontrolledCarousel items={items} captionText="Bobby's Hobbies" />
            <CardTitle tag="h4" style={{ marginTop: 20 }}>
              Bobby's Hobbies
            </CardTitle>
            <CardText>
              Bobby’s Hobbies is a social media styled MERN (MongoDb, Express,
              React, Node.js) app specifically for posting hobbies. It features
              a login component with a password verifier. On the main page you
              will see several tabs of different categories for hobbies that you
              can view. When the user is signed in and a verified user, they can
              post their own hobby with a name, image, cost, and description.
              The site also allows users to view their favorite hobbies all in
              one page.{" "}
            </CardText>
            <h4>Team:</h4>
            <ul>
              <li>Erik Tomlinson</li>
              <li>Katie Reid-Anderson</li>
              <li>Aida Blinstrubyte</li>
              <li>Zach R. Smelcer</li>
            </ul>
            <h4>Try it out:</h4>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://boiling-scrubland-76321.herokuapp.com/"
            >
              -Bobby's Hobbies
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://github.com/eptomlinson/BobbysHobbys"
            >
              -Repo/Docs
            </a>
          </Card>
        </Row>
      </div>
      <div style={{ textAlign: "center", backgroundColor: "grey" }}>
        <a href="#apps" style={{ color: "black" }}>
          Back To Top
        </a>
      </div>
      <Footer />
    </div>
  );
}

export default Portfolio;
