import React from 'react'

const ErrorPage = () => {
  return (
    <>
      <div className="min-h-screen flex flex-col justify-center items-center text-white text-center px-4">
      <h1 className="text-6xl font-bold text-violet-600 mb-4">404</h1>
      <h2 className="text-2xl font-semibold mb-2">Halaman Tidak Ditemukan</h2>
      <p className="text-zinc-400 mb-6">
        Maaf, halaman yang kamu cari tidak tersedia atau sudah dipindahkan.
      </p>
      <a
        href="/"
        className="bg-violet-600 hover:bg-violet-500 px-6 py-3 rounded-lg font-medium transition-colors"
      >
        Kembali ke Beranda
      </a>
    </div>
    </>
  )
}

export default ErrorPage
