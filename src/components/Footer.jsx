import React from 'react'

const Footer = () => {
  return (
    <div className='mt-32 py-4 flex flex-col gap-6 md:gap-0 items-center mb-10'>
      {/* <h1 className='text-2xl font-bold'>Portofolio</h1>
      <div className='flex gap-7 '>
        <a href="">Beranda</a>
        <a href="">Tentang</a>
        <a href="">Proyek</a>
      </div> */}
      <div className='flex items-center md:gap-10 gap-6'>
        <a href="https://github.com/fernandayoga" className="text-4xl hover:bg-zinc-500 transition-transform duration-300 hover:scale-125 hover:rounded-md">
            <i className='ri-github-fill ri-2'></i>
        </a>
        <a href="https://www.instagram.com/fernanddyoga_/" className="text-4xl hover:bg-zinc-500 transition-transform duration-300 hover:scale-125 hover:rounded-md">
            <i className='ri-instagram-fill ri-2'></i>
        </a>
        <a href="https://www.linkedin.com/in/fernanda-yoga-kurniawan-186b20295/"  className="text-4xl hover:bg-zinc-500 transition-transform duration-300 hover:scale-125 hover:rounded-md">
            <i className='ri-linkedin-fill ri-2'></i>
        </a>
      </div>
      <p className="text-center text-sm opacity-70 mt-10">
  © 2025 Fernanda Yoga. All rights reserved.
</p>
    </div>
  )
}

export default Footer
