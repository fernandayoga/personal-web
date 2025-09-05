import React from "react";
import Image, { listProyek } from "../data";
import { Link } from "react-router-dom";
const Projek = () => {
  return (
    <div>
      <div className="proyek mt-32 py-10" id="proyek">
        <h1 className="text-center text-4xl font-bold mb-2"
        data-aos="fade-up" data-aos-duration="1000" data-aos-once="true">Proyek</h1>
        <p className="text-base/loose text-center opacity-50"
        data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300" data-aos-once="true">
          Berikut beberapa Proyek yang sudah saya buat
        </p>
        <div className="proyek-box mt-14 grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
          {listProyek.map((e, i) => (
            <div key={i} className="p-4 bg-zinc-800 rounded-md"
            data-aos="fade-up" data-aos-duration="1000" data-aos-delay={e.dad} data-aos-once="true">
              <img src={e.gambar} alt="image" loading="lazy"></img>
              <div>
                <h1 className="text-2xl font-bold my-4 ">{e.nama}</h1>
                <p className="text-base/loose mb-4">{e.desk}</p>
                <div className="flex flex-wrap gap-2">
                  {/* {e.tools.map((tool, i) => (
                    <p
                      className="py-1 px-3 border border-zinc-400 bg-zinc-600 rounded-md font-semibold"
                      key={i}
                    >
                      {tool}
                    </p>
                  ))} */}
                </div>
                <div className="mt-8 text-center ">
                  <Link
                    to={`/proyek/${e.id}`}
                    className="bg-violet-700 p-3 rounded-lg block border border-zinc-600 hover:bg-violet-600 hover:cursor-pointer"
                  >
                    Lihat Detail
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="proyek-box"></div>
      </div>
    </div>
  );
};

export default Projek;
