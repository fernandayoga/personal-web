import { useLoader } from "@react-three/fiber";


import { useLoaderData, useNavigate } from "react-router-dom";


const DetailProyek = () => {
    const navigate = useNavigate()
  const data = useLoaderData();
   

    
  
  return (
    <>
      <div className="flex justify-center items-start h-screen p-6">
        <div
          key={data.id}
          className="w-full max-w-5xl bg-zinc-800 rounded-xl shadow-lg p-6"
        >
          {/* Tombol Back */}
          <a
            onClick={() => navigate(-1)}
            className="inline-block text-white hover:text-violet-500 mb-4"
          >
            <i className="ri-arrow-left-box-line text-3xl"></i>
          </a>

          {/* Wrapper untuk Gambar + Detail */}
          <div className="flex flex-col md:flex-row gap-8">
            {/* Gambar */}
            <div className="flex-1 space-y-6">
              <img
                src={data.gambar}
                alt="image"
                loading="lazy"
                className="rounded-md w-full object-cover"
              />
              <img
                src={data.gambar2}
                alt="image"
                loading="lazy"
                className="rounded-md w-full object-cover"
              />
            </div>

            {/* Detail */}
            <div className="flex-1 ">
              <h1 className="text-3xl font-bold text-white mb-4">
                {data.nama}
              </h1>
              <p className="text-gray-300 leading-relaxed mb-6">
                {data.deskLengkap}
              </p>

              {/* Tools */}
              <div className="flex flex-wrap gap-2 mb-8">
                {data.tools.map((tool, i) => (
                  <p
                    className="py-1 px-3 border border-zinc-600 bg-zinc-700 rounded-md font-semibold text-sm text-white"
                    key={i}
                  >
                    {tool}
                  </p>
                ))}
              </div>

              {/* Buttons */}
              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href={data.linkWeb}
                  className="flex-1 bg-violet-700 py-3 rounded-lg text-center border border-zinc-600 hover:bg-violet-600 transition"
                >
                  Preview Web
                </a>
                <a
                  href={data.linkGithub}
                  className="flex-1 bg-violet-700 py-3 rounded-lg text-center border border-zinc-600 hover:bg-violet-600 transition"
                >
                  Source Code
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DetailProyek;
