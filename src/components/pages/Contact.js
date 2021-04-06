import React from "react";
import Resume from "./ZRSResume.pdf";
import { Jumbotron, Container } from "reactstrap";
import Footer from "../Footer";
function Contact() {
  return (
    <div
      style={{
        height: "100%",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        backgroundColor: "#252525",
      }}
    >
      <Jumbotron
        fluid
        style={{ backgroundColor: "#252525", position: "relative" }}
      >
        <Container fluid>
          <h1
            style={{
              color: "#DCDCDC",
              paddingBottom: "2%",
              textDecoration: "underline",
            }}
            className="display-3"
          >
            Contact Me
          </h1>
          <ul style={{ color: "#DCDCDC" }}>
            <li>
              Email: {""}
              {""} zsmelcer98@gmail.com
            </li>
            <li>
              Phone #:{""}
              {""} 636-232-5019
            </li>
            <li>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://github.com/zsmeltz"
              >
                My GitHub
              </a>
            </li>
            <li>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.linkedin.com/in/zach-smelcer-a29a541b2/"
              >
                My LinkedIn
              </a>
            </li>
            <li>
              <a href={Resume} download>
                Download My Resume
              </a>
            </li>
          </ul>
        </Container>
      </Jumbotron>
      <Footer />
    </div>
  );
}

export default Contact;
