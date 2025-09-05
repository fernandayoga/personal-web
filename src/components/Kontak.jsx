import React from "react";

const Kontak = () => {
  return (
    <>
      <div className="kontak mt-32 sm:p-10 p-0" id="kontak">
        <h1 className="text-4xl mb-2 font-bold text-center"
        data-aos="fade-up" data-aos-duration="1000" data-aos-once="true">kontak</h1>
        <p className="text-base/loose text-center mb-10 opacity-50"
        data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300" data-aos-once="true">
          Mari Terhubung dengan saya
        </p>
        <form
          action="https://formsubmit.co/fernandayoga34@gmail.com"
          method="POST"
          className="bg-zinc-800 p-10 sm:w-fit w-full mx-auto rounded-md "
          autoComplete="off"
          data-aos="fade-up" data-aos-duration="1000" data-aos-delay="500" data-aos-once="true"
        >
          <div className="flex flex-col gap-6 ">
            <div className="flex flex-col gap-2">
              <label className="font-semibold">Nama lengkap</label>
              <input
                type="text"
                name="nama"
                placeholder="Masukan nama...."
                className="border border-zinc-500 p-2 rounded-md"
                required
              />
            </div>
            <div className="flex flex-col gap-6 ">
              <label className="font-semibold">Email</label>
              <input
                type="email"
                name="email"
                placeholder="Masukan email..."
                className="border border-zinc-500 p-2 rounded-md"
                required
              />
            </div>
            <div className="flex flex-col gap-6 ">
              <label htmlFor="pesan" className="font-semibold">
                Pesan
              </label>
              <textarea
                name="pesan"
                id="pesan"
                cols="45"
                rows="7"
                placeholder="Masukan Pesan..."
                className="border border-zinc-500 p-2 rounded-md"
                required
              ></textarea>
            </div>
            <div className="text-center">
              <button
                type="submit"
                className="bg-violet-700 p-3 rounded-lg w-full cursor-pointer block border border-zinc-600 hover:bg-violet-600 hover:cursor-pointer"
              >
                Kirim Pesan
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default Kontak;
