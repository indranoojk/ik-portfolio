import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";

import "react-vertical-timeline-component/style.min.css";

import { styles } from "../styles";
import { experiences } from "../constants";
import { SectionWrapper } from "../hoc/Index";
import { textVariant } from "../utils/motion";
import { div } from "framer-motion/client";

const ExperienceCard = ({experience}) => (
  <VerticalTimelineElement
    contentStyle={{ background: '#1a1919', color: '#fff' }}
    contentArrowStyle={{ borderRight: '7px solid #232631' }}
    date={experience.date}
    iconStyle={{ background: experience.iconBg }}
    icon={
      <div className="flex justify-center items-center w-full h-full">
        <img 
        src={experience.icon}
        alt={experience.company_name}
        className="w-[60%] h-[60%] object-contain rounded-full"
        // className="w-[80%] h-[80%] object-cover rounded-full"
        />
      </div>
    }
  >
    <div>
      <h3 className="text-white text-[24px] font-bold">{experience.title}</h3>
      <p className="text-gray-400 text-[16px] font-semibold" style={{ margin: 0 }}>
        {experience.company_name}
      </p>
    </div>
  </VerticalTimelineElement>
)

const Experience = () => {
  return (
    <>
      <motion.div variants={textVariant()} className="lg:text-center">
        <p className={styles.sectionSubText}>What have I done so far</p>
        <h1 className={styles.sectionHeadText}>Work Experience</h1>
      </motion.div>

      <div className="mt-20 flex flex-col">
        <VerticalTimeline>
          {experiences.map((experience, index) => (
            <ExperienceCard key={index} experience={experience} />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default SectionWrapper(Experience, "work");
