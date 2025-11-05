import React from "react";
import Image from "../data";

const Hero = () => {
  return (
    <>
      <div
        className="hero grid md:grid-cols-2 items-center pt-10 xl:gap-0 gap-6 grid-cols-1"
        id="beranda"
      >
        <div className="animate__animated animate__fadeInUp animate__slow">
          <div className="flex place-items-center gap-3 mb-6 bg-zinc-800 w-fit p-4 rounded-2xl">
            <img
              src={Image.sandhika}
              alt="Hero Image"
              className="w-10 rounded-md"
              loading="lazy"
            />
            <q>
              gaada orang baru lahir langsung jago coding, semua dari usaha dan
              latihan
            </q>
          </div>
          <h1 className="text-5xl font-bold mb-6">
            Hi, Saya Fernanda Yoga Kurniawan
          </h1>
          <p className="text-base/loose mb-6 opacity-50">
            Saya memiliki minat besar dalam pemrograman dan berambisi menjadi
            programmer profesional yang mampu menciptakan solusi inovatif.
            Dengan semangat belajar yang tinggi, saya terus mengasah
            keterampilan dan mengikuti perkembangan teknologi untuk meraih
            tujuan tersebut.
          </p>
          <div className="flex items-center">
            <a
              href="/My Personal CV.pdf"
              className="bg-violet-700 p-4 rounded-2xl hover:bg-violet-600"
              download
            >
              Download CV<i className="ri-download-line ri-lg"></i>
            </a>
          </div>
        </div>
        <img
          src={Image.HeroImage}
          alt="Hero Image"
          className="w-[500px] md:ml-auto animate__animated animate__fadeInUp animate__delay-1s"
          loading="lazy"
        />
      </div>
    </>
  );
};

export default Hero;
