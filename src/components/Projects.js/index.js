import React from "react";
import {
  ProjectsContainer,
  ProjectWrapper,
  ProjectCard,
  H1,
  ProjectIcon,
  ProjectTitle,
  ProjectDesc,
} from "./ProjectsElements";
import ecom from "../../Images/ecommercetemp.png";
import {AiFillGithub} from 'react-icons/ai'

const Projects = () => {
  return (
    <ProjectsContainer id="work">
      <H1>
        My <strong className="color-text">Projects</strong>
      </H1>
      <ProjectWrapper>
        <ProjectCard>
          <ProjectIcon src={ecom} />
          <ProjectTitle>Ecommerce</ProjectTitle>
          <ProjectDesc>
            Personal Chat Room or Workspace to share resources and hangout with
            friends build with react.js, Material-UI, and Firebase. Have
            features which allows user for realtime messaging, image sharing as
            well as supports reactions on messages.
          </ProjectDesc>
          <a
            href="https://github.com/Sanidhya-paneri"
            style={{ color: "white" }}
            target="_blank"
            rel="noopener noreferrer"
          >
            <AiFillGithub />
          </a>
        </ProjectCard>

        <ProjectCard>
        <ProjectIcon src={ecom} />
          <ProjectTitle>Ecommerce</ProjectTitle>
          <ProjectDesc>
            Personal Chat Room or Workspace to share resources and hangout with
            friends build with react.js, Material-UI, and Firebase. Have
            features which allows user for realtime messaging, image sharing as
            well as supports reactions on messages.
          </ProjectDesc>
          <a
            href="https://github.com/Sanidhya-paneri"
            style={{ color: "white" }}
            target="_blank"
            rel="noopener noreferrer"
          >
            <AiFillGithub />
          </a>
        </ProjectCard>

        <ProjectCard>
        <ProjectIcon src={ecom} />
          <ProjectTitle>Ecommerce</ProjectTitle>
          <ProjectDesc>
            Personal Chat Room or Workspace to share resources and hangout with
            friends build with react.js, Material-UI, and Firebase. Have
            features which allows user for realtime messaging, image sharing as
            well as supports reactions on messages.
          </ProjectDesc>
          <a
            href="https://github.com/Sanidhya-paneri"
            style={{ color: "white" }}
            target="_blank"
            rel="noopener noreferrer"
          >
            <AiFillGithub />
          </a>
        </ProjectCard>

        <ProjectCard>
        <ProjectIcon src={ecom} />
          <ProjectTitle>Ecommerce</ProjectTitle>
          <ProjectDesc>
            Personal Chat Room or Workspace to share resources and hangout with
            friends build with react.js, Material-UI, and Firebase. Have
            features which allows user for realtime messaging, image sharing as
            well as supports reactions on messages.
          </ProjectDesc>
          <a
            href="https://github.com/Sanidhya-paneri"
            style={{ color: "white" }}
            target="_blank"
            rel="noopener noreferrer"
          >
            <AiFillGithub />
          </a>
        </ProjectCard>
        
      </ProjectWrapper>
    </ProjectsContainer>
  );
};

export default Projects;
