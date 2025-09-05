import React from "react";
import Image, { listProyek } from "../data";

const About = () => {
  return (
    <>
      <div
        className="xl:w-2/3 lg:w-3/4 w-full mx-auto p-7 bg-zinc-800 rounded-lg md:flex "
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-once="true"
      >
        {/* <img
          src={Image.HeroImage}
          alt="image"
          className="w-12 rounded-md mb-10 md:hidden"
          loading="lazy"
        /> */}
        <p className="text-base/loose mb-10">
          Hi, perkenalkan saya Fernanda Yoga Kurniawan, mahasiswa di Universitas
          17 Agustus 1945 Surabaya, jurusan Sistem dan Teknologi Informasi,
          dengan minat yang mendalam dalam dunia pemrograman.Saya berambisi untuk menjadi seorang
          programmer profesional yang tidak hanya mahir secara teknis, tetapi
          juga mampu menciptakan solusi inovatif yang bermanfaat bagi banyak
          orang. Dengan semangat belajar yang tinggi, saya terus mengasah
          keterampilan dan mengikuti perkembangan teknologi untuk mewujudkan
          tujuan tersebut.
        </p>
        {/* <div className="flex items-center">
          <img
            src={Image.HeroImage}
            alt="image"
            className="w-200 mb-10 rounded-md md:block hidden"
            loading="lazy"
          />
        </div> */}
      </div>
    </>
  );
};

export default About;
