import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import {
  About,
  Contact,
  Experience,
  Feedbacks,
  Hero,
  Navbar,
  Tech,
  Works,
} from "./components";
import Projects from "./pages/Projects";
import Footer from "./components/Footer";
import Stars from "./components/canvas/Stars";


const App = () => {
  const [position, setPosition] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setPosition((prev) => prev + 1);

      if (position >= 100) {
        setPosition(0);
      }
    }, 50);

    return () => clearInterval(interval);
  }, [position]); // Add position to dependency array

  return (
    <>
      <BrowserRouter>
        <div className="relative z-0 bg-black overflow-hidden">
          <div
            className="absolute h-screen lg:w-full w-[200%] bg-cover bg-no-repeat bg-center"
            style={{
              backgroundImage: `url('https://images.pexels.com/photos/9665215/pexels-photo-9665215.jpeg')`,
              animationName: "scroll",
              animationDuration: "15s",
              animationTimingFunction: "linear",
              animationIterationCount: "infinite",
            }}
          ></div>

          <div className="relative h-full w-full">
            <Navbar />
            <Hero />
            <About />
            <Experience />
            <Tech />
            <Works />
            {/* <div className="text-center pb-10">
            <Link to="/projects">
              <button className="bg-white text-black px-6 py-3 rounded-md hover:bg-gray-100 transition duration-300 cursor-pointer">
                View More
              </button>
            </Link>
            </div> */}
            {/* <Feedbacks /> */}
            <Contact />
            {/* <StarsCanvas /> */}
            <Footer />
          </div>
        </div>

        {/* <Routes>
          <Route exact path="/" element={<Stars />} />
          <Route exact path="/projects" element={<Projects />} />
        </Routes> */}
      </BrowserRouter>
    </>
  );
};

const styles = `
  @keyframes scroll {
    0% { transform: translateX(0); }
    100% { transform: translateX(-50%); }
  }
`;

const styleElement = document.createElement("style");
styleElement.textContent = styles;
document.head.appendChild(styleElement);

export default App;
