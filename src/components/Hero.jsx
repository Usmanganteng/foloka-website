import React from "react";
import background from "../assets/image/hero/background.jpeg";
import booth1 from "../assets/image/booths/booth1.png";

export default function HeroCircleBooth() {
  const images = [
    { id: 1, src: booth1, link: "/produk1" },
    { id: 2, src: booth1, link: "/produk1" },
    { id: 3, src: booth1, link: "/produk1" },
    { id: 4, src: booth1, link: "/produk1" },
    { id: 5, src: booth1, link: "/produk1" },
    { id: 6, src: booth1, link: "/produk1" },
    { id: 7, src: booth1, link: "/produk1" },
    { id: 8, src: booth1, link: "/produk1" },
  ];

  const circleSize = 500; // ukuran lingkaran
  const boothSize = 90; // ukuran booth (w-24 ~ 96px)
  const radius = circleSize / 2 - boothSize / 2; // jarak dari center ke garis lingkaran

  return (
    <section
      id="hero"
      className="relative w-full min-h-screen bg-cover bg-center text-white overflow-hidden"
      style={{ backgroundImage: `url(${background})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Teks Tengah */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center h-[75vh] px-4">
        <h1 className="text-5xl md:text-6xl font-primary tracking-tighter italic leading-tight">
          Hai <span className="font-bold not-italic">Anak Baik</span>
        </h1>
        <p className="text-lg mt-3 max-w-xl opacity-90">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt, minima?
        </p>
      </div>

      {/* Lingkaran Besar di kanan bawah */}
      <div
        className="absolute bottom-[-180px] right-[-180px]"
        style={{ width: `${circleSize}px`, height: `${circleSize}px` }}
      >
        {/* Outline lingkaran dengan warna #D4795E */}
        <div
          className="relative w-full h-full rounded-full opacity-95"
          style={{ border: "10px solid #D4795E" }}
        ></div>

        {/* Booth di garis lingkaran */}
        <div className="absolute inset-0 animate-spin-slow">
          {images.map((item, index) => {
            const angle = (index / images.length) * 360;

            const x = radius * Math.cos((angle * Math.PI) / 180);
            const y = radius * Math.sin((angle * Math.PI) / 180);

            return (
              <a
                key={item.id}
                href={item.link}
                className="absolute"
                style={{
                  left: `calc(50% + ${x}px - ${boothSize / 2}px)`,
                  top: `calc(50% + ${y}px - ${boothSize / 2}px)`,
                }}
              >
                <img
                  src={item.src}
                  alt="booth"
                  className="w-24 md:w-28 hover:scale-110 transition-transform"
                />
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
