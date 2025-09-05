import React from 'react'
import { listTools } from "../data";
import { useContext } from 'react';



const Tools = () => {

  return (
    <>
      <div className="tools mt-32" >
          <h1 className="text-4xl/snug font-bold mb-4 text-center"
          data-aos="fade-up" data-aos-duration="1000" data-aos-once="true">Tools dan Teknologi</h1>
          <p className="text-base/loose text-center opacity-50 "
          data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300" data-aos-once="true">Berikut Tools dan Teknologi yang saya gunakan                              </p>
          <div className="tools-box mt-14 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">

          {listTools.map((e, i)=> (
            <div key={i} className="flex item-center gap-2 p-3 border border-zinc-600 rounded-md hover:bg-zinc-800  group "
            data-aos="fade-up" data-aos-duration="1000" data-aos-delay={e.dad} data-aos-once="true">
              <img src={e.gambar} alt="tools" className="w-14 bg-zinc-800 p-1 group-hover:bg-zinc-900" />
              <div>
                <h4>{e.nama}</h4>
                <p>{e.ket}</p>
              </div>
            </div>
          ))}

          </div>
        </div>
    </>
  )
}

export default Tools
