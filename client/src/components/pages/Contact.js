import React from "react";
import Resume from "./Resume.pdf"

function Contact() {

return (
<div className="card">
  <div className="card-header" style={{fontFamily: 'Ubuntu', fontSize: 25, fontWeight: "bold", backgroundColor: '#CCB7AE', color: "#26252D"}}>
    Contact Me
  </div>
  <div style={{backgroundColor: '#D6CFCB'}} className="card-body" >
  <ul>
        <li>Email: zsmelcer98@gmail.com</li>
        <li>Phone #: 636-232-5019</li>
        <li><a target="_blank" rel="noreferrer" href="https://github.com/zsmeltz">My GitHub</a></li>
        <li><a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/zach-smelcer-a29a541b2/">My LinkedIn</a></li>
        <li><a href={Resume} download >Download My Resume</a></li>
    </ul>
  </div>
  
</div>

)

};

export default Contact;