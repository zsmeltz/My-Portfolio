import React from "react";
import Resume from "./Resume.pdf"

function Contact() {

return (
<div className="card" style={{border: 'black'}}>
  <h2 className="card-header" style={{backgroundColor: '#252525', color: "#B8B8B8"}}>
    Contact Me
  </h2>
  <div style={{backgroundColor: 'whitesmoke', fontSize: 18}} className="card-body" >
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