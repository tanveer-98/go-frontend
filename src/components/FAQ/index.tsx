import { useAnimation, motion } from "framer-motion";

import { useInView } from "react-intersection-observer";
import React, { useEffect } from "react";
import {FAQ} from "./faq";
interface IFAQ {
  id: number;
  question: string;
  answer: string;
}
const Faq = () => {
  const Variants1 = {
    visible: { x: 0, y: 0, scale: 1, opacity: 1, transition: { duration: 1 } },
    hidden: { x: 0, y: 120, scale: 1, opacity: 0 },
  };

  const Variants2 = {
    visible: { x: 0, y: 0, scale: 1, opacity: 1, transition: { duration: 1 } },
    hidden: { x: -120, y: 0, scale: 0, opacity: 0 },
  };
  function Heading() {
    const controls = useAnimation();
    const [refHeading, inView] = useInView();
    useEffect(() => {
      if (inView) {
        controls.start("visible");
      }
    }, [controls, inView]);
    return (
      <motion.h2
      
      // <h2 className="title text-center block title font-bold text-white my-12">Our Services</h2>
        className="title text-center block title font-bold text-white my-12"
        ref={refHeading}
        initial="hidden"
        animate={controls}
        variants={Variants1}
      >
        Our Services 
      </motion.h2>
    );
  }

  function P1() {
    const controls = useAnimation();
    const [refHeading, inView] = useInView();
    useEffect(() => {
      if (inView) {
        controls.start("visible");
      }
    }, [controls, inView]);
    return (
      <motion.p
        className="max-w-lg px-6 mx-auto text-center text-grayishBlue"
        ref={refHeading}
        initial="hidden"
        animate={controls}
        variants={Variants1}
      >
        Here are some of our FAQs. If you have any other questions you'd like
        answer please feel free to email us
      </motion.p>
    );
  }

  function FAQSection() {
    const controls = useAnimation();
    const [refHeading, inView] = useInView();
    useEffect(() => {
      if (inView) {
        controls.start("visible");
      }
    }, [controls, inView]);
    return (
      <motion.div
        className="container mx-auto px-6 pb-24 "
        ref={refHeading}
        initial="hidden"
        animate={controls}
        variants={Variants2}
      >
        {/* Accordion Container */}
        {FAQ.map((element: IFAQ) => {
          return (
            <div className="faq-sections max-w-2xl pb-0 mx-auto overflow-hidden">
              <div
                className="py-1 border-b outline-none group"
                tabIndex={element.id}
              >
                {/* Tab Flex Container  */}
                <div
                  className="flex items-center justify-between py-3 text-gray-500 
            transition duration-500 cursor-pointer group ease
            "
                >
                  {/* Tab Title */}
                  <div className="transition duration-500 ease group-hover:text-red-500">
                    {element.question}
                  </div>
                  {/* Arrow */}
                  <div
                    className="transition duration-500 ease
              group-focus:-rotate-180 group-focus:text-red-500"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="12"
                    >
                      <path
                        fill="none"
                        stroke="currentColor"
                        stroke-width="3"
                        d="M1 1l8 8 8-8"
                      />
                    </svg>
                  </div>
                </div>
                {/* Tab Inner Content */}
                <div className="overflow-hidden transition duration-500 group-focus:max-h-screen max-h-0 ease">
                  <p className="py-2 text-justify text-gray-400">
                    {element.answer}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </motion.div>
    );
  }
  return (
    <>
      <div id="faq" className="bg-bgcolormain py-12">
        <div className=" flex flex-col ">
          <Heading />
          <P1 />
        </div>
      </div>
      <section id="faq-accordion" className="bg-bgcolormain">
        {/* Main Container */}

        <FAQSection />
      </section>
    </>
  );
};

export default Faq;
