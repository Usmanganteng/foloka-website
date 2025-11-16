import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  const faqs = [
    {
      question: "Apa itu Foloka?",
      answer:
        "Foloka adalah platform untuk menemukan tempat makan terbaik di sekitar Anda berdasarkan rekomendasi pengguna.",
    },
    {
      question: "Bagaimana cara menggunakan Foloka?",
      answer:
        "Cukup buka aplikasi, pilih lokasi Anda, dan jelajahi rekomendasi restoran yang tersedia.",
    },
    {
      question: "Apakah Foloka gratis?",
      answer: "Ya, Foloka sepenuhnya gratis untuk digunakan.",
    },
    {
      question: "Bagaimana cara memberikan ulasan?",
      answer:
        "Anda dapat memberikan ulasan setelah mengunjungi restoran melalui halaman profil restoran.",
    },
  ];

  const filteredFaqs = faqs.filter((faq) =>
    faq.question.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="bg-primary text-white py-16 transition-colors duration-500">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold font-primary text-center mb-8">
          Pertanyaan yang Sering Diajukan
        </h2>

        {/* Search */}
        <div className="max-w-2xl mx-auto mb-8">
          <input
  type="text"
  placeholder="Cari pertanyaan..."
  className="w-full p-4 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#D4795E] transition text-primary"
  value={searchTerm}
  onChange={(e) => setSearchTerm(e.target.value)}
/>

        </div>

        <div className="max-w-2xl mx-auto space-y-4">
          {filteredFaqs.map((faq, index) => {
            const isActive = activeIndex === index;
            return (
              <div key={index} className="rounded-lg overflow-hidden border border-white/20">
                {/* Pertanyaan */}
                <button
                  className="w-full text-left p-4 rounded-lg flex justify-between items-center"
                  onClick={() => toggleFAQ(index)}
                  style={{ backgroundColor: "#D4795E" }} // tombol salmon
                  aria-expanded={isActive}
                >
                  <span className="font-semibold text-white">{faq.question}</span>
                  <motion.span
                    animate={{ rotate: isActive ? 45 : 0 }}
                    className="text-xl font-bold text-white"
                  >
                    +
                  </motion.span>
                </button>

                {/* Jawaban */}
                <AnimatePresence>
                  {isActive && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="p-4 rounded-b-lg bg-[#015258] text-white"
                    >
                      <p>{faq.answer}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}

          {filteredFaqs.length === 0 && (
            <p className="text-center text-gray-300 mt-4">
              Tidak ada pertanyaan yang cocok.
            </p>
          )}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
