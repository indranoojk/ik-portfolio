import React from "react";
import { motion } from "framer-motion";
import { Link } from 'react-router-dom';

import { styles } from "../styles";
import { projects } from "../constants";
import { SectionWrapper } from "../hoc/Index";
import { fadeIn, textVariant } from "../utils/motion";

const ProjectCard = ({ index, name, description, tags, image, web_link }) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <div className="relative bg-[#131212] p-5 rounded-2xl cursor-pointer" onClick={() => window.open(web_link, "_blank")}>
        <div
          className="w-full h-[200px]"
        >
          <img
            src={image}
            alt={name}
            className="w-full h-[180px] object-cover rounded-2xl"
          />
        </div>

        <div className="mt-5">
          <h3 className="text-white font-bold text-[24px]">{name}</h3>
          <p className="mt-2 text-[#676769] text-[14px] tracking-tight">{description}</p>
        </div>

        <div className="mt-4 flex flex-wrap gap-2 py-2">
          {tags.map((tag) => (
            <p key={tag.name} className="w-fit h-fit px-2 py-1 bg-[#5d5b5b] text-[13px] rounded-2xl">
              {tag.name}
            </p>
          ))}
        </div>
      </div>

      
    </motion.div>
  );
};

const Projects = () => {
  return (
    <>
      <motion.div variants={textVariant()} className="text-center">
        <h1 className={styles.sectionHeadText}>Projects</h1>
      </motion.div>

      <div className="mt-20 pt-4 flex flex-wrap lg:flex-nowrap gap-7 justify-center mb-10">
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>

    </>
  );
};

export default SectionWrapper(Projects, "");
