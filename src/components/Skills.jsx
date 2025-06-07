/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { twMerge } from "tailwind-merge";
import { motion } from "framer-motion";
import { skills } from "../assets/assets";

const Skills = () => {
  const [progress, setProgress] = useState(skills.map(() => 0));
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.3,
  });

  useEffect(() => {
    if (inView) {
      setProgress(skills.map(() => 0));

      skills.forEach((skill, index) => {
        setTimeout(() => {
          setProgress((prev) => {
            const newProgress = [...prev];
            newProgress[index] = skill.percentage;
            return newProgress;
          });
        }, index * 300);
      });
    } else {
      setProgress(skills.map(() => 0));
    }
  }, [inView]);

  return (
    <section id="our-skills">
      <div className="relative our-skills py-primary bg-white">
        <h2 className="main-title uppercase">our skills</h2>
        <div className="container">
          <div className="flex items-center">
            <img
              src="src/assets/imgs/skills.png"
              alt="skills main image"
              className={twMerge("hidden md:block")}
            />
            <div className="skill flex-1 space-y-5" ref={ref}>
              {skills.map((skill, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 40 }}
                  animate={
                    inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }
                  }
                  transition={{
                    duration: 0.6,
                    delay: index * 0.2, // تأخير متسلسل
                    ease: "easeOut",
                  }}
                >
                  <h3 className="flex items-center justify-between font-bold mb-4 text-lg">
                    {skill.name}
                    <span className="text-xs border border-[#ccc] py-[3px] px-[5px] rounded-[4px] font-bold text-primary">
                      <CountUp
                        key={progress[index]}
                        end={progress[index]}
                        duration={1}
                        suffix="%"
                      />
                    </span>
                  </h3>
                  <div className="bg-[#eee] h-7 rounded-md overflow-hidden">
                    <div
                      className="bg-primary h-full transition-all duration-1000 ease-out"
                      style={{ width: `${progress[index]}%` }}
                    ></div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
