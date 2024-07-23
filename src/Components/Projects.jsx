import React from 'react'

const Projects = () => {
  return (
    <div id='Projects' className='p-20 flex flex-col items-center justify-center'>
      <h1 data-aos="fade-right" className='text-5xl font-semibold mb-20 leading-normal uppercase text-fuchsia-500'>
        Projects
      </h1>
      <div className='grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 justify-around gap-10'>
        <div className="relative group">
          <img
            data-aos="fade-down"
            height={250}
            width={250}
            className="text-[26px] flex items-center justify-center rounded-3xl p-1 border-2 border-fuchsia-800 b_glow"
            src="./assets/erpskrip.jpg"
            alt=""
          />
          <a href='https://erpskrip.id/' target='_blank' className="absolute inset-0 flex items-center justify-center rounded-3xl text-center bg-black bg-opacity-80 font-bold text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            ERPSKRIP
          </a>
        </div>
        <div className='relative group'>
          <img
            data-aos="fade-up"
            height={250}
            width={250}
            className='text-[26px] flex items-center justify-center rounded-3xl p-1 border-2 border-fuchsia-800 b_glow'
            src="./assets/sipelan.jpg"
            alt="" />
          <div className="absolute inset-0 flex items-center justify-center rounded-3xl text-center bg-black bg-opacity-80 font-bold text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            Sistem Pengelola Aktivitas Perkuliahan
          </div>
        </div>
        <div className='relative group'>
          <img
            data-aos="fade-down"
            height={250}
            width={250}
            className='text-[26px] flex items-center justify-center rounded-3xl p-1 border-2 border-fuchsia-800 b_glow'
            src="./assets/bukuilmiah.jpg"
            alt="" />
          <div className="absolute inset-0 flex items-center justify-center rounded-3xl text-center bg-black bg-opacity-80 font-bold text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            Buku Ilmiah
          </div>
        </div>
        <div className='relative group'>
          <img
            data-aos="fade-up"
            height={250}
            width={250}
            className='text-[26px] flex items-center justify-center rounded-3xl p-1 border-2 border-fuchsia-800 b_glow'
            src="./assets/cache.jpg"
            alt="" />
          <div className="absolute inset-0 flex items-center justify-center rounded-3xl text-center bg-black bg-opacity-80 font-bold text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            Sistem Monitoring<br />Cache Server
          </div>
        </div>
      </div>
    </div>
  )
}

export default Projects