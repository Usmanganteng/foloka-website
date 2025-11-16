import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Tentang() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header with Back Button */}
      <div className="bg-primary text-white p-4 shadow-md">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <button
            onClick={() => navigate('/')}
            className="flex items-center text-white hover:text-secondary transition-colors"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Kembali ke Beranda
          </button>
          <h1 className="text-2xl font-bold font-primary">Tentang Foloka</h1>
          <div className="w-24"></div> {/* Spacer for centering */}
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto p-8">
        <div className="bg-white rounded-lg shadow-md p-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-primary font-primary mb-4">Tentang Foloka</h2>
            <p className="text-gray-600 text-lg">Platform rekomendasi tempat makan terbaik di Indonesia</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div>
              <h3 className="text-2xl font-semibold text-primary mb-4">Visi Kami</h3>
              <p className="text-gray-700 leading-relaxed">
                Menjadi platform terdepan dalam membantu masyarakat menemukan pengalaman kuliner terbaik
                di seluruh Indonesia, dengan fokus pada kualitas, keaslian, dan kepuasan pelanggan.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-primary mb-4">Misi Kami</h3>
              <ul className="text-gray-700 space-y-2">
                <li>• Menyediakan rekomendasi restoran terpercaya</li>
                <li>• Mendorong pertumbuhan UMKM kuliner lokal</li>
                <li>• Meningkatkan pengalaman berbagi ulasan</li>
                <li>• Memfasilitasi koneksi antara pelanggan dan pemilik usaha</li>
              </ul>
            </div>
          </div>

          <div className="bg-secondary/10 rounded-lg p-6">
            <h3 className="text-2xl font-semibold text-primary mb-4">Mengapa Memilih Foloka?</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="bg-secondary text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-3">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h4 className="font-semibold text-primary mb-2">Terpercaya</h4>
                <p className="text-gray-600 text-sm">Rekomendasi berdasarkan ulasan nyata dari pengguna</p>
              </div>

              <div className="text-center">
                <div className="bg-secondary text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-3">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h4 className="font-semibold text-primary mb-2">Lokasi Lengkap</h4>
                <p className="text-gray-600 text-sm">Temukan restoran di seluruh Indonesia</p>
              </div>

              <div className="text-center">
                <div className="bg-secondary text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-3">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <h4 className="font-semibold text-primary mb-2">Mudah Digunakan</h4>
                <p className="text-gray-600 text-sm">Interface yang intuitif dan user-friendly</p>
              </div>
            </div>
          </div>

          <div className="text-center mt-8">
            <p className="text-gray-600">
              Bergabunglah dengan komunitas Foloka dan temukan pengalaman kuliner terbaik Anda!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
