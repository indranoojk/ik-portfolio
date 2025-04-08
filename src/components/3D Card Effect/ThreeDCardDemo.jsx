import React from "react";
import { motion } from "framer-motion";
import { CardBody, CardContainer, CardItem } from "./CardContainer";
import { projects } from "../../constants";
import { styles } from "../../styles";
import { fadeIn, textVariant } from "../../utils/motion";

export function ThreeDCardDemo() {
  return (
    <>
      <motion.div variants={textVariant()} className="text-center">
        <h1 className={styles.sectionHeadText}>Projects</h1>
      </motion.div>

      <div className="flex flex-wrap px-8 lg:px-0 lg:grid lg:grid-cols-2 justify-center">
        {projects.map((item, index) => (
          <CardContainer key={index} className="inter-var">
            <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border">
              <CardItem
                translateZ={50}
                className="text-xl font-bold text-neutral-600 dark:text-white"
              >
                {item.name}
              </CardItem>

              <CardItem
                as="p"
                translateZ={60}
                className="text-neutral-500 text-sm max-w-sm mt-2 pt-2 dark:text-neutral-300"
              >
                {item.description}
              </CardItem>

              <CardItem translateZ={100} className="w-full mt-4 p-8">
                <img
                  src={item.image}
                  alt={item.name}
                  className="h-60 w-full object-contain rounded-xl group-hover/card:shadow-xl"
                />
              </CardItem>

              <div className="flex justify-between items-center mt-20">
                <CardItem
                  translateZ={20}
                  as="a"
                  href={item.web_link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-xl text-xs font-normal text-neutral-600 dark:text-white"
                >
                  Explore →
                </CardItem>

                <div className="mt-4 flex flex-wrap gap-2 py-2">
                  {item.tags.map((tag) => (
                    <CardItem
                      key={tag.name}
                      translateZ={20}
                      as="button"
                      className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
                    >
                      {tag.name}
                    </CardItem>
                  ))}
                </div>
              </div>
            </CardBody>
          </CardContainer>
        ))}
      </div>
    </>
  );
}
