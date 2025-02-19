import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { social } from "../constants";
import { SectionWrapper } from "../hoc/Index";
import { slideIn } from "../utils/motion";
import { img } from "framer-motion/client";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <div className="mt-12 flex flex-col gap-10 overflow-hidden justify-center ">
        <motion.div
          variants={slideIn("left", "tween", 0.2, 1)}
          className="flex flex-col-reverse lg:flex lg:flex-row px-8 rounded-2xl justify-center items-center lg:justify-between lg:items-baseline"
        >
          <div className="justify-start">
            <p className={`sm:text-[18px] text-[14px] tracking-wider pb-6 text-white`}>
              @2025 Indranooj Kamble
            </p>
          </div>
          <div className="flex justify-end gap-1 lg:gap-2">
            {social.map((social, index) => (
              <Link to={social.link} key={social.name} target="_blank">
                <img
                  src={social.icon}
                  alt={social.name}
                  className="w-full h-6 object-contain"
                  key={social.name}
                />
              </Link>
            ))}
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default Footer;
