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
/* import ecom from "../../Images/ecommercetemp.png"; */
import { AiFillGithub } from "react-icons/ai";
import ecommerce from "../../Images/ecommercetemp.png";
import blogging from "../../Images/Projectsimgs/blogging.png";
import user from "../../Images/Projectsimgs/user-registration.png";
import todoapp from "../../Images/Projectsimgs/todo-app.jpg";
import Portfolio from "../../Images/Projectsimgs/portfolio.png";

const Projects = () => {
  return (
    <ProjectsContainer id="work">
      <H1>
        My <strong className="color-text">Projects</strong>
      </H1>
      <ProjectWrapper>
        <ProjectCard>
          <ProjectIcon src={ecommerce} />
          <ProjectTitle>Ecommerce Website</ProjectTitle>
          <ProjectDesc>
            A E-commerce app to shop products online with ease build with
            Django, Bootstrap and Database-Sqlite. Have features like login and
            logout for admin and user, Admin dashboard, Add to cart feature,
            Payment gateway.
          </ProjectDesc>
          <a
            href="https://github.com/Sanidhya-paneri/django-project-ecommerce"
            style={{ color: "white" }}
            target="_blank"
            rel="noopener noreferrer"
          >
            <AiFillGithub />
          </a>
        </ProjectCard>

        <ProjectCard>
          <ProjectIcon src={blogging} />
          <ProjectTitle>Blogging Web App</ProjectTitle>
          <ProjectDesc>
            A Blogging Web app build with Python framework Flask, Bootstrap and
            database- MySql. App feature login and logout, also features CRUD
            functionality which allow to users to write, edit, delete their
            blogs.
          </ProjectDesc>
          <a
            href="/"
            style={{ color: "white" }}
            target="_blank"
            rel="noopener noreferrer"
          >
            <AiFillGithub />
          </a>
        </ProjectCard>

        <ProjectCard>
          <ProjectIcon src={user} />
          <ProjectTitle>User Registration App</ProjectTitle>
          <ProjectDesc>
            A simple web app which can intergrade with other website which
            requires user registration feature build with python framework
            Django and database - Sqlite. App features user to create account
            and login.
          </ProjectDesc>
          <a
            href="https://github.com/Sanidhya-paneri/User-Registration-Django"
            style={{ color: "white" }}
            target="_blank"
            rel="noopener noreferrer"
          >
            <AiFillGithub />
          </a>
        </ProjectCard>

        <ProjectCard>
          <ProjectIcon src={todoapp} />
          <ProjectTitle>ToDo App</ProjectTitle>
          <ProjectDesc>
            A ToDo app build with ReactJs and Bootstrap. This is a simple Todo
            app which uses React Hooks and props and app features adding tasks,
            click to strike on completed task.
          </ProjectDesc>
          <a
            href="https://github.com/Sanidhya-paneri/React-TODO-app"
            style={{ color: "white" }}
            target="_blank"
            rel="noopener noreferrer"
          >
            <AiFillGithub />
          </a>
        </ProjectCard>

        <ProjectCard>
          <ProjectIcon src={Portfolio} style = {{ width:"250px" }} />
          <ProjectTitle>Personal Portfolio</ProjectTitle>
          <ProjectDesc>
            Personal Portfolio Website build with ReactJs. This website is fully
            responsive for mobile devices as well.
          </ProjectDesc>
          <a
            href="https://github.com/Sanidhya-paneri/React-TODO-app"
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
