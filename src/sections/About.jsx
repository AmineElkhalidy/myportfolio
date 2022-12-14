import React from "react";

// Icons
import { ChevronRightIcon } from "@heroicons/react/24/outline";

// motion
import { motion } from "framer-motion";

// Amine Image
import Amine from "../assets/images/AmineElkhalidy.jpg";
import Avatar from "../assets/images/avatar.jpg";

const About = () => {
  return (
    <section className="max-w-6xl mx-auto px-6 min-h-screen" id="about">
      <motion.div
        whileInView={{ y: [100, 50, 0], opacity: [0, 0, 1] }}
        transition={{ duration: 0.5 }}
        className="pt-24"
      >
        {/* Heading */}
        <h2 className="text-black-900 text-2xl text-center font-nav font-semibold mb-16 sm:text-3xl md:text-4xl lg:text-5xl">
          Get to know me
        </h2>

        {/* Content Container */}
        <div className="grid md:grid-cols-2 gap-20 md:px-12 2xl:px-0">
          <div>
            <div>
              <p className="text-grey-500 mb-3 md:text-lg lg:text-xl">
                Hello, My name is{" "}
                <span className=" gradient-text font-medium">
                  Amine Elkhalidy
                </span>
                , I am a{" "}
                <span className="gradient-text font-medium">
                  Front-End web developer
                </span>
                , and I enjoy creating things that live on the internet.
              </p>
            </div>

            {/* Services */}
            <div>
              <p className="text-grey-500 mb-3 md:text-lg lg:text-xl">
                I am working as a freelancer on{" "}
                <a
                  href="https://www.upwork.com/"
                  target="_blank"
                  rel="referrer noopener"
                  className="gradient-text font-medium"
                >
                  Upwork
                </a>
                , I've helped many clients to make their ideas live on the
                network.
              </p>

              {/* <ul className=" text-grey-400 grid gap-1 font-nav font-thin mt-1 mb-4 sm:grid-cols-2 md:text-[1.05rem]">
                <li className="flex items-center gap-2">
                  <CheckBadgeIcon className="w-5 h-5" />
                  PSD/Figma to HTML
                </li>

                <li className="flex items-center gap-2">
                  <CheckBadgeIcon className="w-5 h-5" />
                  Static website
                </li>

                <li className="flex items-center gap-2">
                  <CheckBadgeIcon className="w-5 h-5" />
                  Components & Layouts dev
                </li>

                <li className="flex items-center gap-2">
                  <CheckBadgeIcon className="w-5 h-5" />
                  Pixel-perfect development
                </li>

                <li className="flex items-center gap-2">
                  <CheckBadgeIcon className="w-5 h-5" />
                  Responsiveness
                </li>

                <li className="flex items-center gap-2">
                  <CheckBadgeIcon className="w-5 h-5" />
                  Cross-browser compatibility
                </li>

                <li className="flex items-center gap-2">
                  <CheckBadgeIcon className="w-5 h-5" />
                  Google speed optimization (90+)
                </li>

                <li className="flex items-center gap-2">
                  <CheckBadgeIcon className="w-5 h-5" />
                  Mobile-first development
                </li>
              </ul> */}
            </div>

            {/* Technologies list */}
            <div>
              <p className="text-grey-500 mb-2 md:text-lg lg:text-xl">
                Here are a few technologies I???ve been working with recently:
              </p>

              <ul className="max-w-sm grid grid-cols-2 -mt-2 text-grey-400 font-nav font-thin  md:text-[1.05rem] lg:text-lg">
                <li className="flex items-center gap-2">
                  <ChevronRightIcon className="w-3 h-3" />
                  HTML5
                </li>

                <li className="flex items-center gap-2">
                  <ChevronRightIcon className="w-3 h-3" />
                  CSS3
                </li>

                <li className="flex items-center gap-2">
                  <ChevronRightIcon className="w-3 h-3" />
                  JavaScript(ES6)
                </li>

                <li className="flex items-center gap-2">
                  <ChevronRightIcon className="w-3 h-3" />
                  React
                </li>

                <li className="flex items-center gap-2">
                  <ChevronRightIcon className="w-3 h-3" />
                  TypeScript
                </li>

                <li className="flex items-center gap-2">
                  <ChevronRightIcon className="w-3 h-3" />
                  TailwindCSS
                </li>
              </ul>
            </div>
          </div>

          {/* About Img */}
          <div className="grid place-items-center lg:mt-6">
            <div className="relative group">
              <div className="w-[250px] h-[250px] lg:w-[300px] lg:h-[300px] z-50 -translate-x-4 -translate-y-4 duration-300 group-hover:translate-x-0 group-hover:translate-y-0">
                <img
                  className="w-full h-full object-cover"
                  src={Avatar}
                  alt="Amine preview img"
                />
              </div>
              <div className="w-[250px] h-[250px] lg:w-[300px] lg:h-[300px] image -z-10 absolute top-0 left-0" />
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
