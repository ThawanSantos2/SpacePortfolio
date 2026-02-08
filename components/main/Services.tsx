"use client";

import React from "react";
import { motion } from "framer-motion";
import { slideInFromLeft, slideInFromRight } from "@/utils/motion";
import { FaCode, FaServer, FaCogs, FaLightbulb } from "react-icons/fa";

const servicesData = [
  {
    icon: <FaCode className="text-5xl text-purple-500" />,
    title: "Desenvolvimento Frontend",
    description:
      "Crio interfaces de usuário intuitivas e responsivas usando React, Vue.js, HTML, CSS e JavaScript. Foco em performance e experiência do usuário.",
  },
  {
    icon: <FaServer className="text-5xl text-cyan-500" />,
    title: "Desenvolvimento Backend",
    description:
      "Construo APIs robustas e escaláveis com Node.js, PHP e Python. Gerencio bancos de dados como Supabase e MySQL para garantir a integridade dos dados.",
  },
  {
    icon: <FaCogs className="text-5xl text-purple-500" />,
    title: "Infraestrutura e DevOps",
    description:
      "Configuro e gerencio servidores VPS, hospedagem e domínios. Otimizo a entrega de aplicações para garantir alta disponibilidade e performance.",
  },
  {
    icon: <FaLightbulb className="text-5xl text-cyan-500" />,
    title: "Consultoria e Otimização",
    description:
      "Ofereço consultoria para otimização de código, arquitetura de sistemas e melhores práticas de desenvolvimento web, visando a escalabilidade e manutenção.",
  },
];

const Services = () => {
  return (
    <section
      id="services"
      className="flex flex-col items-center justify-center py-20 px-4 relative z-[20]"
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        Serviços
      </h1>

      <div className="w-full max-w-7xl grid grid-cols-1 md:grid-cols-2 gap-8">
        {servicesData.map((service, index) => (
          <motion.div
            key={index}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={index % 2 === 0 ? slideInFromLeft(0.5) : slideInFromRight(0.5)}
            className="relative flex flex-col gap-4 p-8 rounded-xl border border-[#2A0E61] bg-[#0a0118]/50 backdrop-blur-sm hover:border-purple-500/50 transition-all duration-300 hover:scale-105 group"
          >
            {/* Icon */}
            <div className="flex items-center justify-center w-20 h-20 rounded-full bg-purple-500/10 group-hover:bg-purple-500/20 transition-all duration-300">
              {service.icon}
            </div>

            {/* Title */}
            <h3 className="text-2xl font-bold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-500 group-hover:to-cyan-500 transition-all duration-300">
              {service.title}
            </h3>

            {/* Description */}
            <p className="text-gray-400 text-base leading-relaxed">
              {service.description}
            </p>

            {/* Decorative gradient border on hover */}
            <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-r from-purple-500/10 to-cyan-500/10 -z-10" />
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Services;
