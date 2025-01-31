import React from "react";
import ContactForm from "../components/ContactForm";

export default function Contact() {
  return (
    <main className="min-h-screen bg-[#e5f7f7] flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-xl mx-auto">
        <div className="bg-[#7cc7c7] rounded-2xl p-6 shadow-lg">
          <h1 className="text-2xl font-semibold text-white mb-6">Contact Us</h1>
          <ContactForm />
        </div>
      </div>
    </main>
  );
}
