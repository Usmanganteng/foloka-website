import React from "react";

const Maps = ({ umkm }) => {
  return (
    <section className="relative w-full h-[400px] md:h-[600px]">
      {/* Google Maps full section */}
      <div dangerouslySetInnerHTML={{ __html: umkm.lokasi_embed }} />

      {/* Overlay teks di atas maps */}
      <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/30 text-center text-white px-6">
        <h2 className="text-4xl font-bold mb-2 drop-shadow-lg">
          Temukan Kami di Google Maps
        </h2>
        <p className="text-base md:text-lg drop-shadow-md">
          Kunjungi lokasi UMKM kami dan rasakan langsung suasananya!
        </p>

        {/* Icon + teks kecil di bawah */}
        <div className="flex items-center gap-2 mt-4 bg-white/20 backdrop-blur-md px-4 py-2 rounded-full">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/9/9b/Google_Maps_icon_%282020%29.svg"
            alt="Google Maps"
            className="w-6 h-6"
          />
          <span className="font-semibold">Buka di Google Maps</span>
        </div>
      </div>
    </section>
  );
};

export default Maps;
