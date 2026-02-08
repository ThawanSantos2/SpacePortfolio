"use client";

import React from "react";
import Image from "next/image";

interface Props {
  title: string;
  shortDescription: string;
  image: string;
  tags: string[];
  onLearnMore: () => void;
}

const ProjectCard = ({
  title,
  shortDescription,
  image,
  tags,
  onLearnMore,
}: Props) => {
  
  const handleClick = () => {
    console.log("Card clicado:", title); // Debug
    onLearnMore();
  };

  return (
    <div className="relative flex flex-col rounded-xl overflow-hidden border border-[#2A0E61] bg-[#0a0118] shadow-lg hover:shadow-purple-500/30 transition-all duration-300 group hover:-translate-y-2">
      {/* Image */}
      <div className="relative w-full h-[250px] overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0118] via-transparent to-transparent opacity-60" />
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-2xl font-bold text-white mb-2">
          {title}
        </h3>

        <p className="text-gray-400 text-sm mb-4 flex-grow">
          {shortDescription}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.slice(0, 3).map((tag, index) => (
            <span
              key={index}
              className="px-2 py-1 text-xs rounded-md bg-purple-500/10 text-purple-300 border border-purple-500/20"
            >
              {tag}
            </span>
          ))}
          {tags.length > 3 && (
            <span className="px-2 py-1 text-xs rounded-md bg-purple-500/10 text-purple-300 border border-purple-500/20">
              +{tags.length - 3}
            </span>
          )}
        </div>

        {/* Button */}
        <button
          type="button"
          onClick={handleClick}
          className="w-full py-2 px-4 bg-purple-500/20 hover:bg-purple-500/40 border border-purple-500/50 text-white rounded-lg font-medium transition-all duration-300 hover:scale-105 cursor-pointer"
        >
          Saber Mais
        </button>
      </div>
    </div>
  );
};

export default ProjectCard;
