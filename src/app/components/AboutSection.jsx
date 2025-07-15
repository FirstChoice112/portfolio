"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>
          <strong>Frontend:</strong> HTML, CSS, JavaScript, TypeScript, React,
          Next.js, Tailwind
        </li>
        <li>
          <strong>Backend:</strong> Node.js, Express.js
        </li>
        <li>
          <strong>Databases:</strong> SQL (PostgreSQL), NoSQL (MongoDB,
          DynamoDB)
        </li>
        <li>
          <strong>State Management:</strong> Redux, Context API
        </li>
        <li>
          <strong>Authentication:</strong> JWT (JSON Web Tokens), OAuth
        </li>
        <li>
          <strong>APIs:</strong> RESTful APIs, CRUD operations, API keys
        </li>
        <li>
          <strong>DevOps:</strong> CI/CD, Deployment (Vercel, Netlify, AWS)
        </li>
        <li>
          <strong>Tools & Other:</strong> Git, GitHub, Figma, Postman, Insomnia
        </li>
        <li>
          <strong>Methodologies:</strong> Agile, Scrum, Pair Programming
        </li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>JavaScript developer, FolkUniversitetet 2025</li>
        <li>Business and Managment, Handelsakademin 2012</li>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2">
        <li>Certified JavaScript Developer</li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image
          alt="computer"
          src="/images/about.png"
          width={500}
          height={500}
        />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full ">
          <h2 className="text-4xl font-bold mb-4">About me</h2>
          <p className="text-base lg:text-lg">
            I'm a passionate JavaScript developer with extensive experience in
            building dynamic and responsive web applications. On the frontend, I
            specialize in React and Next.js, creating user-friendly interfaces
            that are both performant and accessible. I enjoy leveraging modern
            frameworks to deliver seamless user experiences and scalable
            single-page applications. On the backend, I work with Node.js to
            build robust APIs and server-side logic, ensuring smooth data
            handling and integration. I’m comfortable working with RESTful
            services, databases, and authentication to create full-stack
            solutions that meet business needs.
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              Skills
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              Education
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              Certifications
            </TabButton>
          </div>
          <div className="mt-8 min-h-[150px]">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
