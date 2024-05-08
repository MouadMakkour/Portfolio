import React from "react";
import './Projects.css'
import ProjectCard from "./ProjectCards";
import blogApp from "../../Assets/Projects/blogApp.png";
import SmartAttendance from "../../Assets/Projects/Smart-Attendance.png";
import snakeGame from "../../Assets/Projects/snakeGame.png";


const Projects = React.forwardRef((props, ref) => {
  return (
    <div ref={ref} className="project-wrapper">
      <div className="project-section">
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p>
          Here are a few projects I've worked.
        </p>
        <div className="project-content">
          <div className="project-card">
            <ProjectCard
              imgPath={blogApp}
              title="BlogApp"
              description="Blog page build with Express.js, React.js and Scss, All Crud operations are used, User authentication using JSON Web Tokens (JWT)."
              ghLink="https://github.com/MouadMakkour/BlogApp"
            />
          </div>

          <div className="project-card">
            <ProjectCard
              imgPath={SmartAttendance}
              title="SMART ATTENDANCE TRACKER"
              description="Build using React.js (MUI library) and Spring Boot python (Flask) Incorporating advanced features such as QR code generation and facial detection."
              ghLink="https://github.com/OussamaRemli/SMART-ATTENDANCE-TRACKER/"
            />
          </div>
          <div className="project-card">
            <ProjectCard
              imgPath={snakeGame}
              title="Snake Game"
              description="Build using html/css and js"
              ghLink="https://github.com/MouadMakkour/snakeGameJs"
            />
          </div>
        </div>
      </div>
    </div>
  );
});

export default Projects;
