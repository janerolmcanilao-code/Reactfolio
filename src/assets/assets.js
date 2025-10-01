// assets.jsx

import weatherAppImg from "./images/weather-app.png";

import {
  FaInstagramSquare,
  FaLinkedin,
  FaFacebookSquare,
  FaHtml5,
  FaPython,
  FaGitAlt,
  FaGithub,
  FaJava,
  FaJs,
  FaCss3Alt,
  FaYoutube,
} from "react-icons/fa";
import { BsFiletypeXml } from "react-icons/bs";
import { TbBrandCpp, TbBrandKotlin } from "react-icons/tb";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaSquareXTwitter } from "react-icons/fa6";
import { IoLogoGithub } from "react-icons/io";

// Footer Icons
const footerIcons = [
  {
    name: "x",
    component: FaSquareXTwitter,
    link: "Your twitter link",
  },
  {
    name: "linkedIn",
    component: FaLinkedin,
    link: "Your linkedIn link",
  },
  {
    name: "facebook",
    component: FaFacebookSquare,
    link: "Your facebook link",
  },
  {
    name: "instagram",
    component: FaInstagramSquare,
    link: "Your instagram link",
  },
  {
    name: "github",
    component: IoLogoGithub,
    link: "Your github link",
  },
];

// Logo & Nav
const textLogo = "John Doe";
const imgLogo = null;
const navElements = ["About", "Education", "Skills", "Projects", "Contact"];

// About Section
const AboutPage = {
  authorProfile: "",
  authorDescription:
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
  getInTouchUrl: "Your contact url",
  authorName: "John Doe",
  profileImgTagLine: "Software Engineer @ Google",
  authorContactMail: "johndoe@gmail.com",
  authorContactNumber: "843-695-0671",
};

// Education Section
const EducationPage = [
  {
    graduationYear: 2021,
    degreeType: "High School",
    institution: "XYZ College",
    institutionUrl: "",
  },
  {
    graduationYear: 2027,
    degreeType: "Bachelor's degree",
    institution: "XYZ University",
    institutionUrl: "",
  },
];

// Certificates Section
const CertificatesPage = [
  {
    img: "Your certificate image",
    title: "Blue Mountain Certificate",
    description: "Lorem ipsum...",
    issuedBy: "Blue Mountain",
    credentialURL: "",
  },
];

// Skills Section
const skillsPage = [
  FaGitAlt,
  FaGithub,
  TbBrandCpp,
  FaJava,
  FaJs,
  TbBrandKotlin,
  FaPython,
  FaHtml5,
  BsFiletypeXml,
  FaCss3Alt,
  RiTailwindCssFill,
  FaYoutube,
];

// Projects Section
const projectsPage = [
  {
    projectName: "Weather App",
    projectDescription:
      "A responsive Weather App built with React, TailwindCSS, and Vite that fetches live weather data from OpenWeather API.",
    projectURL: "https://weather-app-ten-eta-95.vercel.app/",
    githubRepository: "https://github.com/janerolmcanilao-code/weather-app", // ✅ fixed name
    tags: ["React", "TailwindCSS", "Vite", "OpenWeather API"],
    date: "2025",
    image: weatherAppImg,
  },
  {
    projectName: "Git clone",
    projectDescription: "lorem ipsum...",
    projectURL: "",
    githubRepository: "",
    tags: ["Flask", "React.js", "MongoDB", "Rest API"],
    date: "Sep 2022 - May 2023",
  },
];

export {
  navElements,
  textLogo,
  imgLogo,
  AboutPage,
  footerIcons,
  EducationPage,
  skillsPage,
  projectsPage,
  CertificatesPage,
};
