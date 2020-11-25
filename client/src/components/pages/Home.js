import React from "react";
import myPic from "./assets/zachPic.png"


function Home() {
  return (
    <div className="card" >
    <h5 className="card-header" style={{fontFamily: 'Ubuntu', fontSize: 25, fontWeight: "bold", backgroundColor: '#CCB7AE', color: "#26252D"}}>About Me</h5>
    <div className="card-body" style={{backgroundColor: "#D6CFCB"}}>
    
    <img src={myPic} align="left" style={{margin: 5, borderRadius: "3%"}} alt="myPic"/>
      <p className="card-text" align="right">
          My name is Zach Smelcer and I am a junior Web-Developer currently studing at Northwestern Univercity Coding Boot Camp. My hope is to bring my expertise to the table and get into a career doing what I love. My whole life has revolved around computers as my parents taught me about them since I was very little. This created an interest in building with them and working with software. Until recently I learned how to work with the brains of the computer which opened my eyes to what they really are. 
      </p>
      <p align="right">
          I love solving problems no matter the situation. In my high school days engineering was my favourite subject and took classes three of the four years of my high school career. Now, I'm engineering but with computers and it's nothing but fun. Other than solving problems and innovation, music and gaming are my favourite hobbies. 
      </p>
    </div>
  </div>
  );
}

export default Home;