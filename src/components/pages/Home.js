import React from "react";
import myPic from "./assets/zachPic.jpg";
import { Jumbotron, Container } from "reactstrap";
import Footer from "../Footer";
function Home() {
  return (
    <div
      style={{
        height: "20%",
        bottom: 0,
        position: "relative",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        backgroundColor: "#252525",
      }}
    >
      <Jumbotron fluid style={{ backgroundColor: "#252525", height: "100%" }}>
        <Container fluid>
          <h1
            style={{
              color: "#DCDCDC",
              paddingBottom: "2%",
              textDecoration: "underline",
            }}
            className="display-3"
          >
            About Me
          </h1>
          <img
            src={myPic}
            align="left"
            style={{ margin: 5, borderRadius: "3%", width: 250 }}
            alt="myPic"
          />
          <p className="lead" align="right" style={{ color: "#DCDCDC" }}>
            My name is Zach Smelcer and I am a Junior Web-Developer. My hope is
            to bring my expertise to the table towards a career doing what I
            love. Most of my life has revolved around technology ever since I
            was very little. When I would see new technologies I've never seen
            before, I'd be obssessed with learning about them. Growing up, I was
            tought a bit about how computers work and their hardware inspiring
            me to create my own. Recently, I've learned how to work with the
            brains of the computer which opened my eyes to a whole new digital
            world.
          </p>
          <p align="right" className="lead" style={{ color: "#DCDCDC" }}>
            In high school, engineering was my favorite subject and took classes
            three of the four years of my high school career. These were the
            days that I began to realise my knack for problem solving and
            innovation. Now, I'm progressively learning how to innovate, test,
            design, and create web applications and it's been nothing but fun.
            There are so many wonders out there that I want to see the backbones
            of so I can learn how to create new things and solve new problems.
          </p>
        </Container>
      </Jumbotron>
      <Footer />
    </div>
  );
}

export default Home;
