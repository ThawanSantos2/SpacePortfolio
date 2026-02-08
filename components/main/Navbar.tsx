"use client";

import { Socials } from "@/constants";
import Image from "next/image";
import React, { useState } from "react";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const closeMenu = () => {
        setIsOpen(false);
    };

    return (
        <>
            <div className="w-full h-[65px] fixed top-0 shadow-lg shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-md z-50 px-10 m-0 items-center rounded-full">
                <div className="w-full h-full flex flex-row items-center justify-between m-auto px-[0px] md:px-[10px]">
                    {/* Logo */}
                    <a
                        href="#home"
                        className="h-auto w-auto flex flex-row items-center"
                        onClick={closeMenu}
                    >
                        <Image
                            src="/logo.png"
                            alt="logo"
                            width={50}
                            height={50}
                            className="cursor-pointer hover:animate-spin w-10"
                        />

                        <span className="font-bold ml-[10px] block text-gray-300 z-50 md:text-lg text-xl">
                            Thawan Santos
                        </span>
                    </a>

                    {/* Desktop Menu */}
                    <div className="hidden lg:flex w-1/3 h-full flex-row items-center justify-between lg:pr-12">
                        <div className="flex items-center justify-between w-full h-auto border border-[#7042f861] bg-[#0300145e] mr-[15px] px-[20px] py-[10px] rounded-full text-gray-200">
                            <a href="#about" className="cursor-pointer hover:text-white transition-colors">
                                Sobre Mim
                            </a>
                            <a href="#skills" className="cursor-pointer hover:text-white transition-colors">
                                Habilidades
                            </a>
                            <a href="#services" className="cursor-pointer hover:text-white transition-colors">
                                Serviços
                            </a>
                            <a href="#projects" className="cursor-pointer hover:text-white transition-colors">
                                Projetos
                            </a>
                        </div>
                    </div>

                    {/* Social Icons + Hamburger */}
                    <div className="flex flex-row gap-5 text-white items-center">
                        {/* Social Icons */}
                        <div className="flex gap-5">
                            {Socials.map((social) => (
                                <a
                                    href={social.link}
                                    key={social.name}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <Image
                                        src={social.src}
                                        alt={social.name}
                                        width={24}
                                        height={24}
                                        className="cursor-pointer hover:animate-spin"
                                    />
                                </a>
                            ))}
                        </div>

                        {/* Hamburger Menu - Visible only on mobile/tablet */}
                        <button
                            onClick={toggleMenu}
                            className="lg:hidden flex flex-col gap-1 cursor-pointer z-50"
                            aria-label="Menu"
                        >
                            <div
                                className={`w-6 h-0.5 bg-white transition-all duration-300 ${
                                    isOpen ? "rotate-45 translate-y-2" : ""
                                }`}
                            />
                            <div
                                className={`w-6 h-0.5 bg-white transition-all duration-300 ${
                                    isOpen ? "opacity-0" : "opacity-100"
                                }`}
                            />
                            <div
                                className={`w-6 h-0.5 bg-white transition-all duration-300 ${
                                    isOpen ? "-rotate-45 -translate-y-2" : ""
                                }`}
                            />
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="fixed top-[65px] left-0 right-0 bg-[#03001417] backdrop-blur-md border-b border-[#7042f861] lg:hidden z-40">
                    <div className="flex flex-col items-center gap-4 py-6 px-6">
                        <a
                            href="#about"
                            onClick={closeMenu}
                            className="text-gray-200 hover:text-white transition-colors text-lg cursor-pointer w-full text-center py-2 rounded hover:bg-[#7042f820]"
                        >
                            Sobre Mim
                        </a>
                        <a
                            href="#skills"
                            onClick={closeMenu}
                            className="text-gray-200 hover:text-white transition-colors text-lg cursor-pointer w-full text-center py-2 rounded hover:bg-[#7042f820]"
                        >
                            Habilidades
                        </a>
                        <a
                            href="#services"
                            onClick={closeMenu}
                            className="text-gray-200 hover:text-white transition-colors text-lg cursor-pointer w-full text-center py-2 rounded hover:bg-[#7042f820]"
                        >
                            Serviços
                        </a>
                        <a
                            href="#projects"
                            onClick={closeMenu}
                            className="text-gray-200 hover:text-white transition-colors text-lg cursor-pointer w-full text-center py-2 rounded hover:bg-[#7042f820]"
                        >
                            Projetos
                        </a>
                    </div>
                </div>
            )}
        </>
    );
};

export default Navbar;