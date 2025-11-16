import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import makananImg from "../assets/image/makanan/ayam.jpg";
import minumanImg from "../assets/image/makanan/ayam.jpg";
import sampingImg from "../assets/image/other-object/other-1.jpg";
import umkmData from "../data/umkmData";

const Recommendation = () => {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState("makanan");
  const [selectedItem, setSelectedItem] = useState(null);

  const data = {
    makanan: umkmData.flatMap(umkm => umkm.menu.filter(item => item.kategori === "makanan").map(item => ({
      id: item.id,
      title: item.judul,
      store: umkm.nama_toko,
      desc: item.deskripsi,
      img: makananImg,
      umkmId: umkm.id
    }))),
    minuman: umkmData.flatMap(umkm => umkm.menu.filter(item => item.kategori === "minuman").map(item => ({
      id: item.id,
      title: item.judul,
      store: umkm.nama_toko,
      desc: item.deskripsi,
      img: minumanImg,
      umkmId: umkm.id
    }))),
  };

  const items = data[selectedCategory];

  return (
    <section id="recomandation" className="flex flex-col md:flex-row w-full ">
      {/* Bagian kiri */}
      <div className="bg-[#D4795E] text-white w-full md:w-1/2 px-10 md:px-16 py-16 flex flex-col justify-start">
        <h2 className="text-center text-5xl font-semibold tracking-tight mb-6">
          Rekomendasi <span className="font-primary italic font-light tracking-normal"> dari Kami </span>
        </h2>

        {/* Mini Navbar */}
        <div className="flex justify-center mb-8">
          <div className="flex border border-white overflow-hidden shadow-md">
            <button
              onClick={() => {
                setSelectedCategory("makanan");
                setSelectedItem(null);
              }}
              className={`px-4 py-2 font-semibold transition-all duration-300 ${
                selectedCategory === "makanan"
                  ? "bg-[#015258] text-white"
                  : "text-white hover:bg-[#015258]/40"
              }`}
            >
              Makanan
            </button>
            <button
              onClick={() => {
                setSelectedCategory("minuman");
                setSelectedItem(null);
              }}
              className={`px-4 py-2 font-semibold transition-all duration-300 ${
                selectedCategory === "minuman"
                  ? "bg-[#015258] text-white"
                  : "text-white hover:bg-[#015258]/40"
              }`}
            >
              Minuman
            </button>
          </div>
        </div>

        {/* Card container */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {items.map((item) => (
            <div
              key={item.id}
              onClick={() => {
                setSelectedItem(item);
                navigate(`/profil/${item.umkmId}`);
              }}
              className="relative bg-white text-[#015258] p-4 cursor-pointer hover:scale-105 transition-transform duration-300"
            >
              <div className="bg-[#015258] h-40 mb-3 relative overflow-hidden">
                {/* Overlay deskripsi saat hover */}
                <div className="absolute inset-0 bg-black/50 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-2">
                  <p className="text-white text-sm text-center">{item.desc}</p>
                </div>
              </div>
              <h3 className="text-md text-center font-bold">{item.title}</h3>
              <p className="text-sm text-center italic text-gray-600">dari {item.store}</p>
            </div>
          ))}
        </div>

        {/* Deskripsi di bawah card dengan animasi slide-fade */}
        <div className="text-center mt-10 max-w-md mx-auto">
          {selectedItem ? (
            <div className="bg-white text-[#015258] rounded-lg p-4 shadow-md animate-slideFade">
              <h3 className="font-bold text-lg">{selectedItem.title}</h3>
              <p className="italic text-sm mb-2">dari {selectedItem.store}</p>
              <p className="text-sm">{selectedItem.desc}</p>
            </div>
          ) : (
            <p className="text-md text-center text-gray-200">
              Pilih salah satu {selectedCategory} untuk melihat detailnya.
            </p>
          )}
        </div>
      </div>

      {/* Bagian kanan → gambar statis */}
      <div className="w-full md:w-1/2 relative">
        <img
          src={sampingImg}
          alt="Gambar Pendamping"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/30"></div>
      </div>

      {/* Tailwind animasi tambahan */}
      <style jsx>{`
        .animate-slideFade {
          animation: slideFade 0.4s ease forwards;
        }
        @keyframes slideFade {
          0% { opacity: 0; transform: translateY(10px); }
          100% { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  );
};

export default Recommendation;
