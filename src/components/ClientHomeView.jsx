"use client";

import { useMemo, useRef } from "react";
import AnimationWrapper from "./AnimationWrapper";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";
import Image from "next/image";
import aiImage from "../assets/ai-image.png"
import Link from "next/link";

function variants() {
  return {
    offscreen: {
      y: 150,
      opacity: 0,
    },
    onscreen: ({ duration = 2 } = {}) => ({
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        duration,
      },
    }),
  };
}

const socialIcons = [
  {
    id: "facebook",
    icon: (
      <a href="https://www.facebook.com/md.sinhanoor.9" target="_blank" rel="noopener noreferrer">
      <FaFacebookF
        color="rgba(13, 183, 96, 1)"
        className="w-[40px] h-[40px] "
      />
    </a>
    ),
  },
  {
    id: "twitter",
    icon: (
     <a href="https://www.facebook.com/md.sinhanoor.9" target="_blank" rel="noopener noreferrer"> 
      <FaTwitter color="rgba(13, 183, 96, 1)" className="w-[40px] h-[40px] " /></a>
    ),
  },
  {
    id: "linkedin",
    icon: (
    <a  href="https://www.facebook.com/md.sinhanoor.9" target="_blank" rel="noopener noreferrer">
        <FaLinkedinIn
        color="rgba(13, 183, 96, 1)"
        className="w-[40px] h-[40px] "
      />
    </a>
    ),
  },
  {
    id: "instagram",
    icon: (
   <a href="https://www.facebook.com/md.sinhanoor.9" target="_blank" rel="noopener noreferrer">
       <FaInstagram
        color="rgba(13, 183, 96, 1)"
        className="w-[40px] h-[40px] "
      />
   </a>
    ),
  },

];

export default function ClientHomeView({ data }) {
  console.log(data, "ClientHomeView");

  const setVariants = useMemo(() => variants(), []);
  const containerRef = useRef(null);

  return (
    <div className="max-w-screen-xl mt-24 px-8 xl:px-16 mx-auto" id="home">
      <AnimationWrapper>
        <motion.div
          className={
            "grid grid-flow-row sm:grid-flow-col grid-rows-2 md:grid-rows-1 sm:grid-cols-2 gap-8 py-6 sm:py-16"
          }
          variants={setVariants}
        >
          <div className="flex flex-col justify-center items-start row-start-2 sm:row-start-1">
          <h1 className="text-green-400 mb-4 text-4xl sm:text-5xl lg:text-6xl lg:leading-normal font-extrabold">
            <span className="text-green-400 bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-600">
              Hello, I&apos;m{" "}
            </span>
            <br></br>
            <TypeAnimation
              sequence={[
                "Sinhanoor",
                1000,
                "Web Developer",
                1000,
    
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>
          <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
          who loves creating sleek, user-friendly interfaces. Let's build something awesome!

          </p>
       
            <motion.div className="flex gap-3 cursor-pointer">
              {socialIcons.map((item) => (
                <motion.div
                  key={item.id}
                  initial={{ scale: 0 }}
                  animate={{ rotate: 360, scale: 1 }}
                  transition={{
                    type: "spring",
                    damping: 20,
                    stiffness: 80,
                    duration: 4,
                  }}
                  whileHover={{ scale: 1.2, rotate: 360 }}
                  whileTap={{ scale: 0.8, rotate: -360, borderRadius: "100%" }}
                >
                  {item.icon}
                </motion.div>
              ))}
            </motion.div>
            <Link
              href="/"
              className="px-1 inline-block py-8 "
            >
              <span className=" border-green-400 border-x-4 hover:bg-green-400 hover:text-white rounded-full px-5 py-2 text-green-400 ">
                Download CV
              </span>
            </Link>

            
          </div>
          <motion.div ref={containerRef} className="flex w-full justify-end">
            <motion.div
              drag
              dragConstraints={containerRef}
              className="w-[400px] h-[400px] relative bg-green-main"
            >
              <div className="w-[400px] h-[400px] top-[40px] left-[-30px] rounded-lg border-[6px] border-[#000000] absolute"></div>
              <Image
                src={aiImage}
                alt="Profile Picture"
                layout="responsive"
                quality={100}
                height={300}
                width={300}
                className="absolute top-[-15px]"
              />
            </motion.div>
          </motion.div>
        </motion.div>
      </AnimationWrapper>
      
    </div>
  );
}
