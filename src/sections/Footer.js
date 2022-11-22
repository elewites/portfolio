import React from "react";
import "./css/footer.css";

import Resume from "../images/resume.pdf";

import ReactLogo from "../images/react.png";
import ExpressLogo from "../images/express.png";
import MongoLogo from "../images/mongo.png";
import NodeLogo from "../images/node.png";

function Footer() {
  return (
    <div className="footer-container">
      <p className="stack_text">My favorite technologies</p>
      <div className="stack">
        <div className="left-or-top">

          <a id="eros" href="https://www.mongodb.com/" target="_blank"><img alt="mongo" src={MongoLogo} className="mongo"></img></a>

          <a id='eros'  href="https://expressjs.com/" target="_blank"><img alt="express" src={ExpressLogo} className="express"></img></a>
        </div>
        <div className="right-or-bottom">
          <a id='eros' href="https://reactjs.org/" target="_blank"><img alt="react" src={ReactLogo} className="react"></img></a>
          <a id='eros' href="https://nodejs.org/en/" target='_blank'><img alt="node" src={NodeLogo} className="node"></img></a>
        </div>
      </div>
      <div className="contact">
        <a
          href="https://www.linkedin.com/in/eros-rodriguez-680757209/"
          target="_blank"
        >
          LinkedIn
        </a>
        <a href={Resume} target="_blank">
          Resume
        </a>
        <a href="mailto:elewites@gmail.com">Email</a>
        <a href="https://github.com/elewites" target="_blank">
          Github
        </a>
      </div>
    </div>
  );
}

export default Footer;
