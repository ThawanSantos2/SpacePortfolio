"use client";

import React, { useState } from "react";
import {
  RxGithubLogo,
  RxInstagramLogo,
  RxLinkedinLogo,
} from "react-icons/rx";
import { FaWhatsapp } from "react-icons/fa";
import WhatsAppModal from "../sub/WhatsAppModal";

const Footer = () => {
  const [isWhatsAppModalOpen, setIsWhatsAppModalOpen] = useState(false);

  const handleOpenWhatsApp = () => {
    setIsWhatsAppModalOpen(true);
  };

  const handleCloseWhatsApp = () => {
    setIsWhatsAppModalOpen(false);
  };

  return (
    <>
      <div className="w-full h-full bg-transparent text-gray-200 shadow-lg p-[15px] relative z-[20]">
        <div className="w-full flex flex-col items-center justify-center m-auto">
          <div className="w-full h-full flex flex-row items-center justify-around flex-wrap">
            
            {/* Community Section */}
            <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
              <div className="font-bold text-[16px]">Comunidade</div>
              <a
                href="https://github.com/ThawanSantos2"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-row items-center my-[15px] cursor-pointer hover:text-purple-500 transition-colors"
              >
                <RxGithubLogo />
                <span className="text-[15px] ml-[6px]">Github</span>
              </a>
            </div>

            {/* Social Media Section */}
            <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
              <div className="font-bold text-[16px]">Redes Sociais</div>
              <a
                href="https://instagram.com/thawan_santos2"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-row items-center my-[15px] cursor-pointer hover:text-purple-500 transition-colors"
              >
                <RxInstagramLogo />
                <span className="text-[15px] ml-[6px]">Instagram</span>
              </a>
              <a
                href="https://linkedin.com/in/thawansantos2"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-row items-center my-[15px] cursor-pointer hover:text-purple-500 transition-colors"
              >
                <RxLinkedinLogo />
                <span className="text-[15px] ml-[6px]">Linkedin</span>
              </a>
              <button
                onClick={handleOpenWhatsApp}
                className="flex flex-row items-center my-[15px] cursor-pointer hover:text-green-500 transition-colors"
              >
                <FaWhatsapp />
                <span className="text-[15px] ml-[6px]">WhatsApp</span>
              </button>
            </div>

            {/* About Section */}
            <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
              <div className="font-bold text-[16px]">Sobre</div>
              <p className="flex flex-row items-center my-[15px] cursor-pointer">
                <span className="text-[15px] ml-[6px]">Desenvolvedor Full-Stack</span>
              </p>
              <a
                href="mailto:sthawan860@gmail.com"
                className="flex flex-row items-center my-[15px] cursor-pointer hover:text-purple-500 transition-colors"
              >
                <span className="text-[15px] ml-[6px]">sthawan860@gmail.com</span>
              </a>
            </div>
          </div>

          {/* Copyright */}
          <div className="mb-[20px] text-[15px] text-center mt-8">
            &copy; Thawan Bomfim dos Santos 2026. Todos os direitos reservados.
          </div>
        </div>
      </div>

      {/* WhatsApp Modal */}
      <WhatsAppModal
        isOpen={isWhatsAppModalOpen}
        onClose={handleCloseWhatsApp}
      />
    </>
  );
};

export default Footer;
