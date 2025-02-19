import React from "react";
import { motion } from "framer-motion";
import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc/Index";
import { technologies } from "../constants";
import { div } from "framer-motion/client";
import { styles } from '../styles';
import { fadeIn, textVariant } from "../utils/motion";
import Tilt from 'react-parallax-tilt';

const Tech = () => {
  return (
    <>
      <motion.div variants={textVariant()} className="text-center">
        <h1 className={styles.sectionHeadText}>Skills</h1>
      </motion.div>

      <div className="flex flex-row flex-wrap justify-center gap-10">
        {technologies.map((technology, index) => (
          <div className="w-28 h-28" key={technology.name}>
            <Tilt className="w-full">
            <motion.div variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
            className="group">
              <div
                options={{
                  max: 45,
                  scale: 1,
                  speed: 450,
                }}
              >
                <img
                  src={technology.icon}
                  alt={technology.name}
                  index={index}
                  className="w-full h-full object-contain transition-all duration-300 group-hover:blur-sm"
                  style={{ filter: 'grayscale(100%)' }} // Initial blur style
                onMouseEnter={(e) => {
                  e.target.style.filter = 'grayscale(0%)'; // Blur on hover
                  e.target.nextElementSibling.style.opacity = 1; // Show text
                }}
                onMouseLeave={(e) => {
                  e.target.style.filter = 'grayscale(100%)'; // Remove blur
                  e.target.nextElementSibling.style.opacity = 0; // Hide text
                }}
                />
                <div className={`inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 pointer-events-none text-overlay-${technology.name}`}
                > {/* Overlay for text */}
                <p className={`text-white text-sm font-medium`}>{technology.name}</p>
              </div>
              </div>
            </motion.div>
            </Tilt>
          </div>
        ))}
      </div>
      
    </>
  );
};

export default SectionWrapper(Tech, "");
