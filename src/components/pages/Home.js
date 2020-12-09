import React from "react";
import myPic from "./assets/zachPic.png";

function Home() {
  return (
    <div>
      <div
        className="card"
        style={{ height: "80%", border: "black", borderRadius: "0" }}
      >
        <h2
          className="card-header"
          style={{ backgroundColor: "#252525", color: "#B8B8B8" }}
        >
          About Me
        </h2>
        <div className="card-body" style={{ backgroundColor: "#DCDCDC" }}>
          <img
            src={myPic}
            align="left"
            style={{ margin: 5, borderRadius: "3%", width: 250 }}
            alt="myPic"
          />
          <p
            className="card-text"
            align="right"
            style={{ fontSize: 18, color: "#393e46" }}
          >
            My name is Zach Smelcer and I am a Junior Web-Developer currently
            studing at Northwestern University's Coding Boot Camp. My hope is to
            bring my expertise to the table towards a career doing what I love.
            Most of my life has revolved around technology ever since I was very
            little. When I would see new technologies I've never seen before,
            I'd be obssessed with learning about them. Growing up, I was tought
            a bit about how computers work and their hardware inspiring me to
            create my own. Recently, I've learned how to work with the brains of
            the computer which opened my eyes to a whole new digital world.
          </p>
          <p align="right" style={{ fontSize: 18 }}>
            In high school, engineering was my favorite subject and took classes
            three of the four years of my high school career. These were the
            days that I began to realise my knack for problem solving and
            innovation. Now, I'm progressively learning how to innovate, test,
            design, and create web applications and it's been nothing but fun.
            There are so many wonders out there that I want to see the backbones
            of so I can learn how to create new things and solve new problems.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Home;
