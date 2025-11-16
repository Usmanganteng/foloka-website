import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import ProfilReview from "../components/Profil/Profil-Review";
import Maps from "../components/Profil/Maps";
import Menu from "../components/Profil/Menu";
import umkmData from "../data/umkmData";

export default function Profil() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [activeTab, setActiveTab] = useState('reviews');

  const umkm = umkmData.find(item => item.id === id);

  if (!umkm) {
    return <div>UMKM not found</div>;
  }

  const tabs = [
    { id: 'reviews', label: 'Ulasan', component: <ProfilReview umkm={umkm} /> },
    { id: 'maps', label: 'Lokasi', component: <Maps umkm={umkm} /> },
    { id: 'menu', label: 'Menu', component: <Menu umkm={umkm} /> }
  ];

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
          <h1 className="text-2xl font-bold font-primary">Profil Restoran</h1>
          <div className="w-24"></div> {/* Spacer for centering */}
        </div>
      </div>

      {/* Tab Navigation */}
      <div className="bg-white shadow-sm">
        <div className="max-w-6xl mx-auto">
          <nav className="flex">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-4 text-sm font-medium border-b-2 transition-colors ${
                  activeTab === tab.id
                    ? 'border-secondary text-secondary'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </nav>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-6xl mx-auto p-6">
        {tabs.find(tab => tab.id === activeTab)?.component}
      </div>

      {/* Quick Actions */}
      <div className="fixed bottom-6 right-6">
        <div className="bg-primary text-white rounded-full p-4 shadow-lg hover:bg-opacity-90 transition-colors cursor-pointer">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
          </svg>
        </div>
      </div>
    </div>
  );
}
