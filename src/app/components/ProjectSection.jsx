"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { AnimatePresence, motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "React Portfolio Website",
    description: "A personal portfolio website built with NextJs",
    image: "/images/projects/1.png",
    tag: ["All", "Next.js"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 2,
    title: "E-commerce Website",
    description: "E-commerce website built with React and Redux",
    image: "/images/projects/2.png",
    tag: ["All", "Next.js"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 3,
    title: "Popcorn Movie App",
    description:
      "React application to search movies, TV shows, and actors. Make your own lists, rate them and compare to IMDB ratings.",
    image: "/images/projects/3.png",
    tag: ["All", "React"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 4,
    title: "Coffee delivery",
    description: "React single page application for coffee delivery wih drone",
    image: "/images/projects/4.png",
    tag: ["All", "React"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 5,
    title: "Pizzeria Website",
    description: "React application for a pizzeria",
    image: "/images/projects/5.png",
    tag: ["All", "React"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 6,
    title: "ChunkItUp",
    description: "Goal planning Webapp",
    image: "/images/projects/6.png",
    tag: ["All", "Next.js"],
    gitUrl: "/",
    previewUrl: "/",
  },
];

const ProjectSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) => {
    return project.tag.includes(tag);
  });

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
    exit: { y: 50, opacity: 0 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold mt-4 mb-8 md:md12">
        My Projects
      </h2>
      <div className="flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="React"
          isSelected={tag === "React"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Next.js"
          isSelected={tag === "Next.js"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        <AnimatePresence>
          {filteredProjects.map((project, index) => (
            <motion.li
              key={project.id}
              variants={cardVariants}
              initial="initial"
              animate={isInView ? "animate" : "initial"}
              transition={{ duration: 0.3, delay: index * 0.4 }}
            >
              <ProjectCard
                title={project.title}
                description={project.description}
                imgUrl={project.image}
                tags={project.tag}
                gitUrl={project.gitUrl}
                previewUrl={project.previewUrl}
              />
            </motion.li>
          ))}
        </AnimatePresence>
      </ul>
    </section>
  );
};

export default ProjectSection;
