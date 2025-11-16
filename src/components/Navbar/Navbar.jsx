import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`
        fixed left-1/2 -translate-x-1/2 z-50 
        transition-all duration-300 

        ${scrolled
          ? "top-0 w-full bg-black/80 backdrop-blur-md rounded-none shadow-md"
          : "top-6 w-[90%] bg-white/10 backdrop-blur-md rounded-2xl shadow-lg"}
      `}
    >
      <div className="px-6 py-4 flex items-center justify-between">

        {/* LOGO */}
        <Link to="/" className="text-2xl font-bold tracking-wide">
          LOGO
        </Link>

        {/* MENU */}
        <div className="flex gap-6 text-lg font-medium">
          <Link to="/">Home</Link>
          <Link to="/tentang">Tentang</Link>
        </div>

        {/* SEARCH BAR */}
        <div className="relative">
          <input
            type="text"
            placeholder="Search..."
            className="
              bg-white/20 text-white placeholder-white/70 
              px-4 py-2 rounded-xl outline-none 
              backdrop-blur-sm border border-white/30
            "
          />
        </div>

      </div>
    </nav>
  );
}
