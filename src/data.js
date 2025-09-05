import HeroImage from "./assets/img/photo.png";
import sandhika from "./assets/img/sandhika.png"

const Image = {
  HeroImage,
  sandhika,
};
export default Image;


// Tools
import Tools1 from "./assets/img/tools/vscode.png";
import Tools2 from "./assets/img/tools/reactjs.png";
import Tools3 from "./assets/img/tools/nextjs.png";
import Tools4 from "./assets/img/tools/tailwind.png";
import Tools5 from "./assets/img/tools/bootstrap.png";
import Tools6 from "./assets/img/tools/js.png";
import Tools7 from "./assets/img/tools/nodejs.png";
import Tools8 from "./assets/img/tools/github.png";
import Tools9 from "./assets/img/tools/ai.png";
import Tools10 from "./assets/img/tools/canva.png";
import Tools11 from "./assets/img/tools/figma.png";

export const listTools = [
  {
    id: 1,
    gambar: Tools1,
    nama: "Visual Studio Code",
    ket: "Code Editor",
    dad: "100",
  },
  {
    id: 2,
    gambar: Tools2,
    nama: "React JS",
    ket: "Framework",
    dad: "200",
  },
  // {
  //   id: 3,
  //   gambar: Tools3,
  //   nama: "Next JS",
  //   ket: "Framework",
  //   dad: "300",
  // },
  {
    id: 3,
    gambar: Tools4,
    nama: "Tailwind CSS",
    ket: "Framework",
    dad: "300",
  },
  {
    id: 4,
    gambar: Tools5,
    nama: "Bootstrap",
    ket: "Framework",
    dad: "400",
  },
  {
    id: 5,
    gambar: Tools6,
    nama: "Javascript",
    ket: "Language",
    dad: "500",
  },
  // {
  //   id: 7,
  //   gambar: Tools7,
  //   nama: "Node JS",
  //   ket: "Javascript Runtime",
  //   dad: "700",
  // },
  {
    id: 6,
    gambar: Tools8,
    nama: "Github",
    ket: "Repository",
    dad: "600",
  },
  // {
  //   id: 9,
  //   gambar: Tools9,
  //   nama: "Adobe Illustrator",
  //   ket: "Design App",
  //   dad: "900",
  // },
  {
    id: 7,
    gambar: Tools10,
    nama: "Canva",
    ket: "Design App",
    dad: "700",
  },
  {
    id: 8,
    gambar: Tools11,
    nama: "Figma",
    ket: "Design App",
    dad: "800",
  },
];



//Projek
import Proyek1 from "./assets/img/proyek/E-commerce.png";
import Proyek2 from "./assets/img/proyek/TXID.png";
import Projek1next from "./assets/img/proyek/E-commerce2.png"
import Projek2next from "./assets/img/proyek/TXID2.png"


export const listProyek = [
  {
    id: 1,
    gambar: Proyek1,
    gambar2 : Projek1next,
    nama: "Website E-Commerce mini",
    linkWeb : "https://e-commerce-mini-fernandayoga.vercel.app",
    linkGithub : "https://github.com/fernandayoga/E-commerce-mini.git",
    desk: "Website E-Commerce yang saya buat merupakan sebuah mini project yang memanfaatkan API dari FakestoreAPI sebagai sumber data produk. ",
    tools: ["React Js", "CSS", "Javascript", "API"],
    dad: "200",
    deskLengkap: "Website E-Commerce ini adalah mini project yang saya buat dengan memanfaatkan FakestoreAPI sebagai sumber data produk. Fitur yang tersedia meliputi pencarian produk, tampilan daftar produk dinamis, detail produk (nama, harga, deskripsi, kategori), serta simulasi checkout. Proyek ini saya kerjakan sebagai latihan setelah mempelajari fundamental React, khususnya dalam mengonsumsi API, mengelola state dengan React Hooks, dan membangun alur interaktif pada aplikasi web sederhana."
  },
  {
    id: 2,
    gambar: Proyek2,
    gambar2 : Projek2next,
    nama: "Website Pemesanan Tiket Film",
    linkWeb : "https://txid-mini-yogz.vercel.app/",
    linkGithub : "https://github.com/fernandayoga/TXID-mini-yogz.git",
    desk: "Website Film yang saya buat merupakan mini project menggunakan React dengan integrasi OMDb API",
    tools: ["React Js", "CSS", "Javascript", "API"],
    dad: "300",
    deskLengkap : "Website Film yang saya buat merupakan mini project menggunakan React dengan integrasi OMDb API. Website ini memiliki fitur search film, menampilkan daftar hasil pencarian, serta halaman detail film dengan informasi lengkap seperti poster, genre, sutradara, aktor, rating, dan plot. Selain itu, saya menambahkan fitur beli tiket film di mana pengguna bisa memilih jadwal tayang, bioskop, jumlah tiket, dan melakukan checkout hingga ke halaman sukses pembelian. Proyek ini menjadi latihan saya dalam penggunaan React Router, Hooks, dan API integration dengan desain bertema dark mode yang modern dan responsif."
  },
  // {
  //   id: 3,
  //   gambar: Proyek3,
  //   nama: "Web Pernikahan 2.0",
  //   desk: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis, laborum!",
  //   tools: ["Vite", "ReactJS", "TailwindCSS", "AOS"],
  //   dad: "400",
  // },
  // {
  //   id: 4,
  //   gambar: Proyek4,
  //   nama: "Website Course",
  //   desk: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis, laborum!",
  //   tools: ["Vite", "ReactJS", "Bootstrap", "AOS"],
  //   dad: "500",
  // },
  // {
  //   id: 5,
  //   gambar: Proyek5,
  //   nama: "Web Portfolio",
  //   desk: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis, laborum!",
  //   tools: ["HTML", "CSS", "Javascript", "Bootsrap"],
  //   dad: "600",
  // },
  // {
  //   id: 6,
  //   gambar: Proyek6,
  //   nama: "Company Profile 2.0",
  //   desk: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis, laborum!",
  //   tools: ["NextJS", "TailwindCSS", "Framermotion"],
  //   dad: "700",
  // },
];