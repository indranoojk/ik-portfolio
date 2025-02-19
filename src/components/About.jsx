import React from 'react'
import Tilt from 'react-parallax-tilt';
import { motion } from 'framer-motion';

import { styles } from '../styles';
import { services } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';
import { SectionWrapper } from '../hoc/Index';

const ServiceCard = ({ index, title, icon }) => {
  return (
    <Tilt className="w-full lg:w-[250px] lg:pt-8 pt-3">
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className='w-full white-gray-gradient p-[1px] rounded-[20px] shadow-xl shadow-gray-800'
      >
        <div
          options={{
            max: 45,
            scale: 1,
            speed: 450
          }}
          className='bg-[#080808] rounded-[20px] py-5 px-12 min-h-[230px] flex justify-evenly items-center flex-col'
        >
          <img src={icon} alt={title}
            className='w-16 h-16 object-contain'
          />
          <h3 className="text-white text-[20px] font-bold text-center">{title}</h3>

        </div>

      </motion.div>
    </Tilt>
  )
}

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>
          Introduction
        </p>
        <h1 className={styles.sectionHeadText}>
          Overview
        </h1>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
      >
        I am a skilled Software Developer with expertise in React.js, Node.js, and Web Development, passionate about building scalable, high-performance applications. I specialize in creating dynamic user interfaces, optimizing backend systems, and integrating APIs to deliver seamless web experiences. Always eager to learn and innovate, I strive to develop efficient and user-friendly solutions that push the boundaries of modern web development.
      </motion.p>

      <div className="mt-20 flex flex-wrap lg:flex-nowrap flex-col lg:flex-row gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  )
}

// export default About
export default SectionWrapper(About, "about");