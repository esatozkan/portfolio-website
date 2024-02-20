import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import { ImHtmlFive2 } from "react-icons/im";
import { TbBrandFlutter } from "react-icons/tb";
import serefe from "@/public/serefe.png";
import zooventure from "@/public/zooventure.png";
import zooventurePro from "@/public/zooventurePro.png";
import fiesta from "@/public/fiesta.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Marmara University",
    location: "İstanbul/Turkey",
    description:
      "I started studying Mecanichal Engineering at Marmara University.",
    icon: React.createElement(LuGraduationCap),
    date: "2019",
  },
  {
    title: "Web Developer",
    location: "Kocaeli/Turkey",
    description:
      "I took database and SQL, web application development courses at Komek Education Center.",
    icon: React.createElement(ImHtmlFive2),
    date: "2021 - 2022",
  },
  {
    title: "Full-Stack Developer",
    location: "İstanbul/Turkey",
    description:
      "I took htmls, css, javascript, and react courses from educational platforms such as Bilgeİş, Udemy, and Btk academy.",
    icon: React.createElement(FaReact),
    date: "2022 - 2023",
  },
  {
    title: "Mobile Developer",
    location: "İstanbul/Turkey",
    description:
      "I took the 320-hour face-to-face Flutter mobile application development training of the Istanbul Chamber of Commerce.",
    icon: React.createElement(TbBrandFlutter),
    date: "2023",
  },
  {
    title: "Freelancer",
    location: "İstanbul/Turkey",
    description:
      "I am now a freelance full stack developer. I develop applications and websites using React, Next.js, Tailwind, Flutter, and Firebase.",
    icon: React.createElement(CgWorkAlt),
    date: "2023",
  },
] as const;

export const projectsData = [
  {
    title: "Zooventure",
    description:
      "I have published an educational application containing pictures and photographs of various animals. In this application, by clicking on the animal images, users can listen and learn about the animal species in 8 different languages. The application also includes games which users can reach out to basic level information about animals.",
    tags: ["Dart", "Flutter", "Provider"],
    imageUrl: zooventure,
    urlLink: "https://play.google.com/store/apps/details?id=com.es.animals_app",
  },
  {
    title: "Serefe Klasik",
    description:
      "A card game that people can play by gathering with their friends. They perform the tasks given to them by drawing illustrated and entertaining cards, and those who cannot do so are penalized.",
    tags: ["Dart", "Flutter", "Provider", "Firebase"],
    imageUrl: serefe,
    urlLink:
      "https://play.google.com/store/apps/details?id=com.aeneasgames.serefe_klasik",
  },
  {
    title: "Zooventure Pro",
    description:
      "The app contains 6 different games including the memory game, finding the animal names from given letters and matching real animal photos to animated images which can be played in 6 different languages.",
    tags: [
      "Dart",
      "Flutter",
      "Provider",
      "Firebase",
      "Google Mobile Ads",
      "Hive",
      "In App Purchase",
    ],
    imageUrl: zooventurePro,
    urlLink:
      "https://play.google.com/store/apps/details?id=com.oyunakademisi.zooventure",
  },
  {
    title: "Fiesta",
    description:
      "An app that lets users enjoy time with friends. It includes various games like card games, forbidden word guessing, confession, and more. Users can snap moments while playing and save memories on their profiles.",
    tags: [
      "Dart",
      "Flutter",
      "Provider",
      "Firebase",
      "Hive",
      "In App Purchase",
    ],
    imageUrl: fiesta,
    urlLink: "",
  },
] as const;

export const skillsData = [
  "C++",
  "SQL",
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Git",
  "Tailwind",
  "Bootstrap",
  "Redux",
  "Dart",
  "Flutter",
  "Provider",
  "Firebase",
] as const;
