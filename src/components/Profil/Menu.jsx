import React from "react";
// Import modules tanpa Navigation
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules"; // Hanya Autoplay yang tersisa
import "swiper/css";
// Hapus import CSS navigation, tapi saya biarkan import sisanya
// import "swiper/css/navigation"; 
import "swiper/css/pagination"; 

// Asumsi: Anda memiliki file gambar yang berbeda, tapi untuk sementara pakai kopiImg
import kopiImg from "../../assets/image/makanan/kopi.png"; 

// Utility pemotong teks
const limitText = (text, limit) =>
  text.length > limit ? text.substring(0, limit) + "..." : text;

const Menu = ({ umkm }) => {
  const menuData = [
    // Menambahkan properti bgColor untuk warna latar belakang card
    {
      id: 1,
      name: "Kopi Aren",
      price: 17,
      rating: 5,
      desc: "Kopi susu gula aren dengan cita rasa manis yang pas dan aroma kopi yang kuat.",
      img: kopiImg,
      bgColor: "bg-[#D4795E]", // Oranye kemerahan
    },
    {
      id: 2,
      name: "Ayam Bakar",
      price: 25,
      rating: 4.8,
      desc: "Ayam bakar bumbu khas sambal terasi pedas gurih dan harum.",
      img: kopiImg,
      bgColor: "bg-[#716158]", // Cokelat tua (hijau tua kecokelatan)
    },
    {
      id: 3,
      name: "Es Teh Manis",
      price: 10,
      rating: 4.6,
      desc: "Teh segar dengan es batu dingin yang menyegarkan siang hari.",
      img: kopiImg,
      bgColor: "bg-[#716158]", // Warna untuk Es Teh
    },
    {
      id: 4,
      name: "Nasi Goreng Spesial",
      price: 30,
      rating: 5,
      desc: "Nasi goreng dengan topping telur mata sapi dan kerupuk renyah.",
      img: kopiImg,
      bgColor: "bg-[#D4795E]", // Warna untuk Nasi Goreng Spesial
    },
    {
      id: 5,
      name: "Mie Goreng Jawa",
      price: 20,
      rating: 4.7,
      desc: "Mie goreng dengan cita rasa Jawa yang gurih dan pedas ringan.",
      img: kopiImg,
      bgColor: "bg-[#716158]", // Warna untuk Mie Goreng Jawa
    },
    {
      id: 6,
      name: "Sate Ayam",
      price: 28,
      rating: 4.9,
      desc: "Sate ayam bumbu kacang lembut dan daging yang empuk.",
      img: kopiImg,
      bgColor: "bg-[#D4795E]",
    },
    {
      id: 7,
      name: "Tempe Mendoan",
      price: 12,
      rating: 4.5,
      desc: "Tempe goreng tipis dengan adonan tepung gurih dan sambal kecap.",
      img: kopiImg,
      bgColor: "bg-[#716158]",
    },
  ];

  return (
    // Penyesuaian padding atas dan bawah agar card yang di-scale tidak terpotong
    <section className="bg-[#015258] text-white pt-10 pb-5 px-6 md:px-12"> 
      <div className="text-center mb-10">
        <h2 className="text-4xl font-bold mb-2">Menu Kami</h2>
        <p className="text-gray-200 text-base max-w-2xl mx-auto">
          Temukan beragam menu favorit pelanggan kami, dari minuman hingga hidangan spesial!
        </p>
      </div>

      <Swiper
        slidesPerView={3}
        centeredSlides={true}
        spaceBetween={50}
        grabCursor={true}
        loop={true}
        autoplay={{ delay: 3000, disableOnInteraction: false }}

        // **PROPERTI NAVIGATION DIHAPUS**

        // Modules tanpa Navigation
        modules={[Autoplay]}

        breakpoints={{
          0: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        className=""
      >
        {umkm.menu.map((item, index) => (
          <SwiperSlide key={item.id}>
            {({ isActive }) => (
              <div
                className={`transition-all duration-500 ease-in-out flex flex-col items-center 
                  ${isActive ? "scale-110 opacity-100" : "scale-90 opacity-60"}
                  w-full h-full`} 
              >
                {/* CARD UTAMA - Menggunakan bgColor dari item */}
                <div 
                  className={`${item.bgColor} rounded-2xl shadow-2xl relative w-[260px] md:w-[300px] flex flex-col items-center p-4 h-full`}
                >
                  
                  {/* BADGE HARGA SPESIAL - Diatur di dalam card, sedikit menonjol ke luar card */}
                <div className="absolute top-0 -left-4 bg-[#015258] text-white text-center rounded-[15px] shadow-xl z-20 p-2 min-w-[100px] mt-4">
                  <span className="text-xs font-semibold block leading-none">Harga Spesial</span>
                  <span className="text-2xl font-bold block leading-tight">{item.harga}</span>
                  <span className="text-xs">Ribu</span>
                </div>
                  
                  {/* GAMBAR MAKANAN/MINUMAN - Posisikan di bagian atas card */}
                  <img
                    src={item.img}
                    alt={item.name}
                    className="w-full h-40 object-cover rounded-xl my-4" 
                  />

                  {/* KONTEN DETAIL */}
                  <div className="w-full text-left pb-4 flex flex-col flex-grow"> 
                    <h3 className="text-2xl font-bold mb-1">{item.judul}</h3>

                    <div className="flex items-center mb-2">
                      <span className="text-yellow-400 mr-2">★</span>
                      <p className="text-base font-medium">{item.rating}/5</p>
                    </div>

                    <p className="text-sm mb-4 text-gray-100 flex-grow">
                      {limitText(item.deskripsi, 80)}
                    </p>

                    <button className="bg-[#015258] text-white px-6 py-2 rounded-lg text-base font-semibold hover:bg-[#013b3f] transition w-full mt-auto">
                      Order Now
                    </button>
                  </div>
                </div>
              </div>
            )}
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Menu;