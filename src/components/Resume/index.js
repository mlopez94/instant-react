import React from "react";
// import resumeImg from "../../../public/";

function Resume() {
  return (
    <section className="resSection">
      <h1 className="skillsGraph">My Skills</h1>
      

      <p>HTML</p>
      <div className="container2">
        <div className="skills html">90%</div>
      </div>

      <p>CSS</p>
      <div className="container2">
        <div className="skills css">80%</div>
      </div>

      <p>JavaScript</p>
      <div className="container2">
        <div className="skills js">65%</div>
      </div>

      <p>React</p>
      <div className="container2">
        <div className="skills react">75%</div>
      </div>

      <p>SQL</p>
      <div className="container2">
        <div className="skills sql">85%</div>
      </div>

      <p>Node.js</p>
      <div className="container2">
        <div className="skills node">90%</div>
      </div>

      <p>MongoDB</p>
      <div className="container2">
        <div className="skills mongo">80%</div>
      </div>

      <p>Git</p>
      <div className="container2">
        <div className="skills git">90%</div>
      </div>
    </section>
  );
}

export default Resume;
