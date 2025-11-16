import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero";
import HowItWorks from "./components/Fungsi";
import Recommendation from "./components/Recommendation";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";
import Tentang from "./pages/Tentang";
import Profil from "./pages/Profil";
import Register from "./pages/Register";
import { Routes, Route, useLocation } from "react-router-dom";

function App() {
  const location = useLocation();
  const hideNavbarAndFooter = location.pathname === '/register' || location.pathname === '/profil' || location.pathname === '/tentang';

  return (
    <div className="text-white">
      {!hideNavbarAndFooter && <Navbar />}

      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <Recommendation />
              <HowItWorks />
              <FAQ />
            </>
          }
        />

        <Route path="/tentang" element={<Tentang />} />
        <Route path="/profil/:id" element={<Profil />} />
        <Route path="/register" element={<Register />} />
      </Routes>

      {!hideNavbarAndFooter && <Footer />}
    </div>
  );
}


export default App;
