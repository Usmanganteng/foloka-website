import React from "react";
import { FaInstagram, FaFacebook, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#D4795E] text-white relative">
      <div className="container mx-auto px-4 py-12">
        {/* Branding */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
          <div className="mb-6 md:mb-0">
            <h3 className="text-2xl font-bold font-primary">Foloka</h3>
            <p className="text-sm mt-1">Temukan tempat makan terbaik di sekitar Anda.</p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="/" className="hover:text-[#015258] transition-colors">Beranda</a>
            <a href="/tentang" className="hover:text-[#015258] transition-colors">Tentang</a>
            <a href="/profil" className="hover:text-[#015258] transition-colors">Profil</a>
            <a href="/faq" className="hover:text-[#015258] transition-colors">FAQ</a>
            <a href="/terms" className="hover:text-[#015258] transition-colors">Terms</a>
            <a href="/privacy" className="hover:text-[#015258] transition-colors">Privacy</a>
          </div>
        </div>

        {/* Social Media */}
        <div className="flex gap-6 mb-6">
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#015258] transition-colors">
            <FaInstagram size={24} />
          </a>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#015258] transition-colors">
            <FaFacebook size={24} />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#015258] transition-colors">
            <FaTwitter size={24} />
          </a>
        </div>

        {/* Newsletter */}
        <div className="max-w-md mx-auto mb-8">
          <p className="text-sm mb-2">Berlangganan untuk info terbaru:</p>
          <form className="flex">
            <input
              type="email"
              placeholder="Email Anda"
              className="flex-1 p-2 rounded-l-full border border-gray-300 focus:outline-none"
            />
            <button
              type="submit"
              className="bg-[#015258] text-white px-4 rounded-r-full hover:bg-opacity-90 transition"
            >
              Subscribe
            </button>
          </form>
        </div>

        {/* Contact Info */}
        <div className="text-sm mb-8">
          <p>Email: info@foloka.com</p>
          <p>Telepon: +62 812-3456-7890</p>
          <p>Alamat: Jl. Contoh No. 123, Jakarta</p>
        </div>

        {/* Copyright */}
        <div className="text-center border-t border-white/20 pt-4 text-sm">
          &copy; 2023 Foloka. All rights reserved.
        </div>
      </div>

      {/* Back to Top Button */}
      <button
        className="fixed bottom-4 right-4 bg-[#015258] text-white p-3 rounded-full shadow-lg hover:bg-opacity-90 transition"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        aria-label="Back to Top"
      >
        ↑
      </button>
    </footer>
  );
};

export default Footer;
