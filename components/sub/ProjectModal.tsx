"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import { IoClose } from "react-icons/io5";
import { HiExternalLink } from "react-icons/hi";

interface Props {
  isOpen: boolean;
  onClose: () => void;
  project: {
    title: string;
    fullDescription: string;
    image: string;
    link: string;
    tags: string[];
  };
}

const ProjectModal = ({ isOpen, onClose, project }: Props) => {
  
  // Previne scroll quando modal está aberto
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="fixed inset-0 bg-black/80 z-[100] backdrop-blur-sm animate-fadeIn"
      />

      {/* Modal */}
      <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] max-w-4xl max-h-[90vh] overflow-y-auto bg-[#0a0118] border border-[#7042f88b] rounded-2xl z-[101] shadow-2xl animate-slideUp">
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 rounded-full bg-purple-500/20 hover:bg-purple-500/40 transition-all duration-300"
        >
          <IoClose className="w-6 h-6 text-white" />
        </button>

        {/* Content */}
        <div className="p-6 md:p-8">
          {/* Image */}
          <div className="relative w-full h-[300px] md:h-[400px] rounded-xl overflow-hidden mb-6">
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover"
            />
          </div>

          {/* Title */}
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 bg-gradient-to-r from-purple-500 to-cyan-500 bg-clip-text text-transparent">
            {project.title}
          </h2>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-6">
            {project.tags.map((tag, index) => (
              <span
                key={index}
                className="px-3 py-1 text-sm rounded-full bg-purple-500/20 text-purple-300 border border-purple-500/30"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Description */}
          <p className="text-gray-300 text-lg leading-relaxed mb-8">
            {project.fullDescription}
          </p>

          {/* Visit Button */}
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-500 to-cyan-500 text-white rounded-lg font-semibold hover:scale-105 transition-transform duration-300 shadow-lg hover:shadow-purple-500/50"
          >
            Visitar Site
            <HiExternalLink className="w-5 h-5" />
          </a>
        </div>
      </div>
    </>
  );
};

export default ProjectModal;
