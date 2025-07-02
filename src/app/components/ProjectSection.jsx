import React from "react";
import ProjectCard from "./ProjectCard";

const projectsData = [
  {
    id: 1,
    title: "React Portfolio Website",
    description: "A personal portfolio website built with NextJs",
    image: "/images/projects/1.png",
    tag: ["All", "Web"],
  },
  {
    id: 2,
    title: "E-commerce Website",
    description: "E-commerce website built with React and Redux",
    image: "/images/projects/2.png",
    tag: ["All", "Web"],
  },
  {
    id: 3,
    title: "Popcorn Movie App",
    description:
      "React application to search movies, TV shows, and actors. Make your own lists, rate them and compare to IMDB ratings.",
    image: "/images/projects/3.png",
    tag: ["All", "Web"],
  },
  {
    id: 4,
    title: "Coffee delivery",
    description: "React single page application for coffee delivery wih drone",
    image: "/images/projects/4.png",
    tag: ["All", "Web"],
  },
  {
    id: 5,
    title: "Pizzeria Website",
    description: "React application for a pizzeria",
    image: "/images/projects/5.png",
    tag: ["All", "mobile"],
  },
];

const ProjectSection = () => {
  return (
    <>
      <h2 className="text-center text-4xl font-bold mt-4 mb-8 md:md12">
        My Projects
      </h2>
      <div className="grid md:grid-cols-3 gap-8 md:gap-12">
        {projectsData.map((project) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            description={project.description}
            imgUrl={project.image}
            tags={project.tag}
          />
        ))}
      </div>
    </>
  );
};

export default ProjectSection;
