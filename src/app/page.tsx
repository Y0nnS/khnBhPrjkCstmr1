'use client';

import { useState } from 'react';

const CertificateDisplayPage = () => {
  const [activeTab, setActiveTab] = useState('certificate');

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <header className="mb-8 text-center">
          <div className="flex items-center justify-center mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="hidden md:block h-10 w-10 text-indigo-600 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <h1 className="text-xl sm:text-2xl font-bold text-gray-900">Kementerian Perindustrian</h1>
          </div>
          <p className="text-md sm:text-lg text-gray-600">Sertifikasi Produk Industri</p>
        </header>

        {/* Tabs */}
        <div className="flex border-b border-gray-200 mb-8">
          <button
            onClick={() => setActiveTab('certificate')}
            className={`py-2 px-4 font-medium text-sm focus:outline-none ${activeTab === 'certificate' ? 'text-indigo-600 border-b-2 border-indigo-600' : 'text-gray-500 hover:text-gray-700'}`}>
            Data Sertifikat
          </button>
          <button
            onClick={() => setActiveTab('manufacturer')}
            className={`py-2 px-4 font-medium text-sm focus:outline-none ${activeTab === 'manufacturer' ? 'text-indigo-600 border-b-2 border-indigo-600' : 'text-gray-500 hover:text-gray-700'}`}>
            Data Pabrik
          </button>
        </div>

        {/* Certificate Tab */}
        {activeTab === 'certificate' && (
          <div className="bg-white shadow-lg rounded-lg overflow-hidden transition-all duration-300 hover:shadow-xl">
            <div className="p-6 sm:p-8">
              <div className="flex items-start mb-6">
                <div className="bg-indigo-100 p-3 rounded-full mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <div>
                  <h2 className="text-md sm:text-xl font-bold text-gray-800">DATA SERTIFIKAT PRODUK</h2>
                  <p className="text-sm text-gray-500">Nomor: 114/11.01.04/23/LsPro/I/2024</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <InfoCard label="Nama LSPro" value="BSPJI Surabaya" />
                  <InfoCard label="Status Sertifikasi" value="SERTIFIKASI" badgeColor="bg-green-100 text-green-800" />
                  <InfoCard label="Tipe Sertifikasi" value="5" />
                  <InfoCard label="Nomor dan Judul" value="SNI 02-2804-2005 (Pupuk Dolomit)" />
                </div>
                <div className="space-y-4">
                  <InfoCard label="Tanggal Terbit" value="22 Januari 2024" />
                  <InfoCard label="Tanggal Berakhir" value="22 Januari 2028" />
                  <InfoCard label="Nama Perusahaan" value="PT. DWI JAYA EKAPRIMA" />
                  <InfoCard 
                    label="Alamat Perusahaan" 
                    value="Jl. Raya Belitung No.6 GKB Kabomas - Gresik" 
                  />
                  <InfoCard label="Negara Perusahaan" value="Indonesia" />
                </div>
              </div>
            </div>

            <div className="bg-gray-50 px-6 py-4 sm:px-8 border-t border-gray-200">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-sm text-gray-500">Data diperbarui terakhir: 26 Mei 2025</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Manufacturer Tab */}
        {activeTab === 'manufacturer' && (
          <div className="bg-white shadow-lg rounded-lg overflow-hidden transition-all duration-300 hover:shadow-xl">
            <div className="p-6 sm:p-8">
              <div className="flex items-start mb-6">
                <div className="bg-indigo-100 p-3 rounded-full mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <div>
                  <h2 className="text-md sm:text-xl font-bold text-gray-800">DATA PABRIK/MANUFACTURER</h2>
                  <p className="text-sm text-gray-500">Provinsi: Kalimantan Tengah & Jawa Timur</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <InfoCard label="Nama" value="PT. DWI JAYA EKAPRIMA" />
                  <InfoCard 
                    label="Alamat Pabrik" 
                    value="Jl. Raya Daendeles, Desa Banyu Tengah, Panceng - Gresik" 
                  />
                  <InfoCard label="Negara Pabrik" value="Indonesia" />
                  <InfoCard label="Provinsi Pabrik" value="Jawa Timur" />
                </div>
                <div className="space-y-4">
                  <InfoCard label="Merek" value="D 52" />
                  <InfoCard label="Tipe/Jenis Produk" value="Pupuk Dolomit" />
                  <InfoCard label="Nama Lab Uji" value="Balai Riset dan Standardisasi Industri Surabaya" />
                  
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h3 className="text-sm font-medium text-gray-500 mb-2">Sertifikat Hasil Uji (SHU)</h3>
                    <div className="overflow-x-auto">
                      <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-gray-100">
                          <tr>
                            <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">No</th>
                            <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">No SHU</th>
                            <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Tgl SHU</th>
                          </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                          <tr>
                            <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-900">1</td>
                            <td className="px-4 py-2 text-sm text-gray-900">Surabaya/MS.08.01.01/VIII/2024</td>
                            <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-900">22 Januari 2024</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 px-6 py-4 sm:px-8 border-t border-gray-200">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-sm text-gray-500">Data diperbarui terakhir: 26 Mei 2025</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

interface InfoCardProps {
  label: string;
  value: string | React.ReactNode;
  badgeColor?: string;
}

const InfoCard = ({ label, value, badgeColor = 'bg-blue-100 text-blue-800' }: InfoCardProps) => {
  return (
    <div>
      <h3 className="text-sm font-medium text-gray-500">{label}</h3>
      {typeof value === 'string' && value.includes('/') ? (
        <p className="mt-1 text-sm text-gray-900 break-all">{value}</p>
      ) : (
        <p className="mt-1 text-sm text-gray-900">{value}</p>
      )}
    </div>
  );
};

export default CertificateDisplayPage;