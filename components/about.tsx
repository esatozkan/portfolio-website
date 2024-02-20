"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <span className="mb-3">
        I’m currently studying Mechanical Engineering in Marmara University.
        After I realized my affection in programming, I decided to pursue my
        passion. I enrolled in a coding bootcamp and learned
        <span className="font-medium"> full-stack development</span>. My
        favorite part of programming is the problem-solving aspect. I love the
        feeling of finally figuring out a solution to a problem. My core stack
        is React, Next Js, Flutter and Firebase . I am also familiar with Sql,
        C++ and Typescript. I am always looking to learn new technologies. I am
        currently looking for a full-time position as a software developer.
        <p>
          When I am not coding, I enjoy playing video games, watching movies, and
          doing sports as rowing. I also enjoy learning new things. I am
          currently learning about history and archeology.
        </p>
      </span>
    </motion.section>
  );
}
