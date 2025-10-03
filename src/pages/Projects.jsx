import { PageTitle, Project } from "../components/components.js";
import { projectsPage } from "../assets/assets.js";
import { containerStyle } from "./styles.js";
import { Link } from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io";
import { IoArrowBackOutline } from "react-icons/io5";
import { useEffect, useState } from "react";

const Projects = () => {
  // Removed useEffect for .project-btn since button is gone

  return (
    <>
      { (projectsPage && projectsPage.length > 0) && 
        <div id="Projects" className={`${containerStyle}`}>
          <PageTitle title={"Projects"} />
          <div>
            <div className="grid grid-cols-1 bedar-sc2:grid-cols-2 gap-5">
              {projectsPage
                .filter(project => project.image) // Only show projects with image
                .map(({
                  projectName,
                  projectDescription,
                  projectURL,
                  githubRepository,
                  tags,
                  date,
                  image,
                }, idx) => (
                  <Project
                    key={idx}
                    projectName={projectName}
                    projectDescription={projectDescription}
                    projectURL={projectURL}
                    githubRepository={githubRepository}
                    tags={tags}
                    date={date}
                    image={image}
                  />
                ))}
            </div>
            {/* More Projects button removed */}
          </div>
        </div>
      }
    </>
  );
};

export default Projects;
