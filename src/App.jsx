import { useEffect, useState } from "react";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Tools from "./components/Tools";
import Projek from "./components/Projek";
import Kontak from "./components/Kontak";
import PreLoader from "./components/PreLoader"





function App() {
  const [count, setCount] = useState(0);
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (count <= 100) {
      const timer = setInterval(() => setCount((prev) => (prev += 1)), 10);
      return () => clearInterval(timer);
    } else {
      setShow(true);
    }
  }, [count, show]);

  
  return (
    <>


    {!show ? <PreLoader count={count}/> :
    <div>
      <Navbar />
      <Hero />
      <div className="tentang mt-32 py-10" id="tentang">
        <About />
        <Tools />
        <Projek />
        <Kontak />
      </div>
      <Footer />
    </div>
    }
    

    </>
  );
}

export default App;
