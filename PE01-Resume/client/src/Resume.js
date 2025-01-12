import React from "react";
import "./Resume.css";

function Resume() {
  return (
    <div className="resume">
      <header>
        <h1>Sara Verkiyani</h1>
        <p>
          123 Main Street, Anytown USA, 12345 | (123) 456-7890 |
          <br></br>
          verkiyanisara@cityuniversity.edu
        </p>
      </header>
      <section>
        <h2>Education</h2>
        <div className="education">
          <h3>Master of Science in Computer Science</h3>
          <p>
            City University of Seattle, WA | June 2023
            <br />
            GPA: 3.9/4.0
          </p>
          <h3>Bachelor of softwarw Engineering</h3>
          <p>
            University of Iran, Tehran | May 2021
            <br />
            GPA: 3.7/4.0
          </p>
        </div>
      </section>
      <section>
        <h2>Skills</h2>
        <div className="skills">
  {/* <h2>Skills</h2> */}
  <ul>
    <div>Programming languages: Python, JavaScript, C#</div>
    <div>Frameworks and libraries: React, Visual studio</div>
    <div>Database systems: SQL</div>
    <div>Operating systems: Windows</div>
    <div>Version control: Git, TFS</div>
  </ul>
</div>

      </section>
      <section>
        <h2>Work Experience</h2>
        <div className="experience">
          <h3>Software Engineer</h3>
          <p>
            Telecomunication Company, Iran | May 2022 - August 2022
            <br />
            Worked on a team to develop a new web application using React and
            Node.js
            <br />
            Collaborated with team members to design and implement features
            <br />
            Debugged and fixed issues in the codebase
          </p>
          <h3>Teaching Assistant</h3>
          <p>
            Department of Computer Science, University of Iran | August 2021 -
            Present
            <br />
            Assist with grading and holding office hours for an undergraduate
            computer science course
            <br />
            Help students with assignments and answer questions about course
            material
          </p>
        </div>
      </section>
      <section>
        <h2>Projects</h2>
        <div className="projects">
          <h3>Bank branches Monitoring</h3>
          <p>
          Regarding the monitoring of branches, counters and management of issues such as advertising in bank branches. including Sepeh Bank monitoring software.
          </p>
          <p>
            Source code:{" "}
            <a
              href="https://github.com/studentname/personal-website"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://github.com/privatesourcecode
            </a>
          </p>          
        </div>
      </section>
    </div>
  );
}

export default Resume;
