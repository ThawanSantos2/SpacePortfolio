"use client";

import React, { useState } from "react";
import ProjectCard from "../sub/ProjectCard";
import ProjectModal from "../sub/ProjectModal";
import { Projects_data } from "@/constants";

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<any>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = (project: any) => {
    console.log("Abrindo modal para:", project.title); // Debug
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    console.log("Fechando modal"); // Debug
    setIsModalOpen(false);
    setTimeout(() => setSelectedProject(null), 300);
  };

  return (
    <div
      className="flex flex-col items-center justify-center py-20 px-4"
      id="projects"
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        Meus Projetos
      </h1>

      <div className="w-full max-w-7xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {Projects_data.map((project) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            shortDescription={project.shortDescription}
            image={project.image}
            tags={project.tags}
            onLearnMore={() => handleOpenModal(project)}
          />
        ))}
      </div>

      {isModalOpen && selectedProject && (
        <ProjectModal
          isOpen={isModalOpen}
          onClose={handleCloseModal}
          project={selectedProject}
        />
      )}
    </div>
  );
};

export default Projects;
