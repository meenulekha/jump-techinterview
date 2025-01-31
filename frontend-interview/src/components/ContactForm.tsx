"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Send } from "lucide-react";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Message from ${name} (${email}): ${message}`);
  };

  return (
    <motion.form
      onSubmit={handleSubmit}
      className="space-y-4"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="space-y-2">
        <label className="block text-white text-sm font-medium">Name</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full px-4 py-2 bg-white/90 backdrop-blur-sm rounded-xl focus:outline-none focus:ring-2 focus:ring-white/50 transition-shadow"
          placeholder="Enter your name"
          required
        />
      </div>
      <div className="space-y-2">
        <label className="block text-white text-sm font-medium">Email</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full px-4 py-2 bg-white/90 backdrop-blur-sm rounded-xl focus:outline-none focus:ring-2 focus:ring-white/50 transition-shadow"
          placeholder="Enter your email"
          required
        />
      </div>
      <div className="space-y-2">
        <label className="block text-white text-sm font-medium">Message</label>
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="w-full px-4 py-2 bg-white/90 backdrop-blur-sm rounded-xl focus:outline-none focus:ring-2 focus:ring-white/50 transition-shadow min-h-[120px] resize-y"
          placeholder="Enter your message"
          required
        />
      </div>
      <button
        type="submit"
        className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-white text-[#7cc7c7] rounded-xl font-medium hover:bg-white/90 transition-colors"
      >
        Send Message
        <Send className="h-4 w-4" />
      </button>
    </motion.form>
  );
};

export default ContactForm;
