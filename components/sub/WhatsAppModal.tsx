"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { IoClose } from "react-icons/io5";
import { FaWhatsapp } from "react-icons/fa";

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

const WhatsAppModal = ({ isOpen, onClose }: Props) => {
  const [formData, setFormData] = useState({
    name: "",
    subject: "Dúvidas",
    message: "",
  });

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Valida se os campos estão preenchidos
    if (!formData.name.trim() || !formData.message.trim()) {
      alert("Por favor, preencha seu nome e mensagem.");
      return;
    }

    // Formata a mensagem para WhatsApp
    const whatsappMessage = `*${formData.name}*\n\n*Assunto:* ${formData.subject}\n\n*Mensagem:*\n${formData.message}`;

    // Codifica a mensagem para URL
    const encodedMessage = encodeURIComponent(whatsappMessage);

    // Número do WhatsApp (sem espaços, parênteses ou traços)
    const phoneNumber = "5579998466084";

    // Abre o WhatsApp
    window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, "_blank");

    // Limpa o formulário e fecha o modal
    setFormData({ name: "", subject: "Dúvidas", message: "" });
    onClose();
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="fixed inset-0 bg-black/80 z-[100] backdrop-blur-sm animate-fadeIn"
      />

      {/* Modal */}
      <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] max-w-lg max-h-[90vh] overflow-y-auto bg-[#0a0118] border border-[#7042f88b] rounded-2xl z-[101] shadow-2xl animate-slideUp">
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
          {/* Icon and Title */}
          <div className="flex flex-col items-center mb-6">
            <div className="w-20 h-20 rounded-full bg-green-500/20 flex items-center justify-center mb-4">
              <FaWhatsapp className="w-12 h-12 text-green-500" />
            </div>
            <h2 className="text-3xl font-bold text-white text-center">
              Entre em Contato
            </h2>
            <p className="text-gray-400 text-center mt-2">
              Preencha o formulário e envie sua mensagem via WhatsApp
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Name Input */}
            <div>
              <label htmlFor="name" className="block text-white text-sm font-medium mb-2">
                Nome *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-[#1a0b2e] border border-purple-500/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 transition-colors"
                placeholder="Seu nome completo"
              />
            </div>

            {/* Subject Select */}
            <div>
              <label htmlFor="subject" className="block text-white text-sm font-medium mb-2">
                Assunto *
              </label>
              <select
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-[#1a0b2e] border border-purple-500/30 rounded-lg text-white focus:outline-none focus:border-purple-500 transition-colors cursor-pointer"
              >
                <option value="Dúvidas">Dúvidas</option>
                <option value="Orçamento">Orçamento</option>
                <option value="Outros">Outros</option>
              </select>
            </div>

            {/* Message Textarea */}
            <div>
              <label htmlFor="message" className="block text-white text-sm font-medium mb-2">
                Mensagem *
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className="w-full px-4 py-3 bg-[#1a0b2e] border border-purple-500/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 transition-colors resize-none"
                placeholder="Digite sua mensagem aqui..."
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-green-500 hover:bg-green-600 text-white rounded-lg font-semibold transition-all duration-300 hover:scale-105 shadow-lg"
            >
              <FaWhatsapp className="w-5 h-5" />
              Enviar via WhatsApp
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default WhatsAppModal;
