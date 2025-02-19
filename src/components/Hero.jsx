import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
// import { ComputersCanvas } from './canvas'

const Hero = () => {
  return (
    <>
      <section className="relative w-full h-screen mx-auto">
        <div
          className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}
        >
          <div className="flex flex-col justify-center items-center mt-4">
          <motion.div
              animate={{
                opacity: [0, 1],
              }}
              transition={{
                duration: 2.5,
                delay: 3,
              }}
            >
            <div className="w-5 h-5 rounded-full bg-slate-100" />
            </motion.div>
            <motion.div
              animate={{
                y: [-1, 0],
                opacity: [0, 1],
              }}
              transition={{
                duration: 2,
                delay: 3.5,
                ease: "easeInOut",
              }}
            >
              <div className="w-0.5 lg:h-100 h-80 bg-gradient-to-b from-slate-100 to-slate-600" />
            </motion.div>
          </div>

          <div className="pt-8">
            <motion.div
              animate={{
                x: [-1000, 0],
              }}
              transition={{
                duration: 1.5,
              }}
            >
              <h1 className={`text-5xl font-bold text-white`}>
                Hi, I'm <br />
                <span className="text-6xl text-slate-300">
                  Indranooj Kamble
                </span>
              </h1>
            </motion.div>
            <motion.div
              animate={{
                x: [-1000, 0],
              }}
              transition={{
                duration: 2,
                delay: 1.5,
              }}
            >
              <p className={`${styles.heroSubText} mt-2 text-white`}>
                I design and develop <br className="black lg:hidden" />{" "}
                <span className="text-blue-200 font-semibold"> ui/ux </span> and{" "}
                <span className="text-blue-200 font-semibold"> websites </span>
              </p>
            </motion.div>
          </div>
        </div>

        {/* <ComputersCanvas /> */}

        <div className="absolute bottom-14 lg:bottom-8 w-full flex justify-center items-center">
          <a href="#about">
            <div className="w-[34px] h-[64px] rounded-3xl border-4 border-slate-200 flex justify-center items-start p-2">
              <motion.dev
                animate={{
                  y: [0, 24, 0],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  repeatType: "loop",
                }}
                className="w-3 h-3 rounded-full bg-slate-200 mb-1"
              />
            </div>
          </a>
        </div>
      </section>
    </>
  );
};

export default Hero;
