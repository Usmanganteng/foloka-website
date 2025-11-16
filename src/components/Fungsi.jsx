import React, { useState } from "react";
import step1 from "../assets/image/booths/booth1.png";
import owner1 from "../assets/image/owner/owner1.png";

const HowItWorks = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const steps = [
    {
      img: step1,
      title: "Daftar / Membuat Akun",
      desc: "Daftar dan buat akun Brobooth untuk mempermudah proses penyewaan booth Anda.",
    },
    {
      img: step1,
      title: "Pilih Booth yang Anda Inginkan",
      desc: "Pilih booth yang sesuai dengan kebutuhan acara Anda dan nikmati kemudahan dalam pemesanan.",
    },
    {
      img: step1,
      title: "Lanjutkan Pembayaran",
      desc: "Lakukan pembayaran untuk menyelesaikan reservasi booth Anda dengan cepat dan aman.",
    },
  ];

  const owners = Array.from({ length: 6 }, (_, i) => ({
    id: i + 1,
    img: owner1,
    name: `Owner ${i + 1}`,
    store: "UMKM Example",
  }));

  return (
    <section id="howitworks" className="relative w-full">
      {/* Bagian hijau full-width */}
      <div className="bg-[#015258] text-white text-center pt-32 pb-32 w-full">
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
          Nanti Kata <span className="font-primary font-light italic">katanya ya</span>
        </h2>
      </div>

      {/* Bagian salmon di tengah */}
      <div className="bg-[#D4795E] text-white rounded-t-[45px] -mt-20 relative z-10 pb-16">
        <div className="max-w-6xl mx-auto text-center px-4">
          {/* STEP SECTION */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-10">
            {steps.map((step, index) => (
              <div
                key={index}
                className="relative bg-white text-[#015258] rounded-xl shadow-lg p-6 flex flex-col items-center text-center hover:scale-105 hover:shadow-2xl transition-transform duration-300"
              >
                <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-[#015258] text-white font-bold rounded-full w-12 h-12 flex items-center justify-center text-lg shadow-md">
                  {index + 1}
                </div>
                <img src={step.img} alt={step.title} className="w-20 h-20 mb-4 object-contain" />
                <h3 className="text-xl font-primary italic font-semibold mb-2">{step.title}</h3>
                <p className="text-sm font-light text-gray-600">{step.desc}</p>
              </div>
            ))}
          </div>

          {/* Tombol Mulai Sekarang */}
          <div className="mt-12">
            <button
              onClick={() => setIsModalOpen(true)}
              className="bg-[#015258] hover:bg-[#013737] text-white font-semibold px-10 py-3 rounded-full transition"
            >
              Mulai Sekarang
            </button>
          </div>

          {/* Modal */}
          {isModalOpen && (
            <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
              <div className="bg-white rounded-xl p-8 max-w-md w-full relative">
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="absolute top-3 right-3 text-gray-500 hover:text-gray-700 font-bold text-lg"
                >
                  ×
                </button>
                <h3 className="text-2xl font-bold mb-4 text-[#015258]">Selamat Datang!</h3>
                <p className="mb-6 text-gray-700">
                  Yuk mulai mendaftar sekarang untuk menikmati pengalaman menyewa booth dengan mudah.
                </p>
                <a
                  href="/register"
                  className="bg-[#015258] text-white px-6 py-3 rounded-full font-semibold hover:bg-[#013737] transition"
                >
                  Daftar Sekarang
                </a>
              </div>
            </div>
          )}

          {/* OWNER SECTION */}
          <div className="mt-20">
            <h3 className="text-left tracking-tighter font-light text-4xl md:text-5xl mb-8 text-white">
              Cari Tahu! <span className="font-primary font-semibold italic tracking-normal">Pemilik UMKM</span>
            </h3>
            <div
              className="flex gap-6 overflow-x-auto snap-x snap-mandatory scroll-smooth pb-4"
              style={{ scrollbarWidth: "thin", scrollbarColor: "#888 transparent" }}
            >
              {owners.map((owner) => (
                <div
                  key={owner.id}
                  className="flex-shrink-0 w-60 bg-white text-[#015258] rounded-xl shadow-md overflow-hidden hover:scale-105 hover:shadow-2xl transition-transform duration-300 snap-center"
                >
                  <img src={owner.img} alt={owner.name} className="w-full h-40 object-cover" />
                  <div className="p-4 text-center">
                    <h4 className="font-bold">{owner.name}</h4>
                    <p className="text-sm italic">{owner.store}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
