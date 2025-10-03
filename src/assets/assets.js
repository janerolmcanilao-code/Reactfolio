import profileImg from "./images/profile.png";
// assets.jsx

import weatherAppImg from "./images/weather-app.png";
import todoAppImg from "./images/todo-app.png";

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
  FaReact,
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
const textLogo = "Jan Erol";
const imgLogo = null;
const navElements = ["About", "Education", "Skills", "Projects", "Contact"];

// About Section
const AboutPage = {
  authorProfile: profileImg,
  authorDescription:
    "Aspiring front-end developer with a strong foundation in HTML, CSS, JavaScript, ReactJS, and TailwindCss, backed by experience in IT support and database systems. Skilled at building responsive web interfaces and eager to deliver high-quality software solutions.",
  getInTouchUrl: "mailto:janerol.m.canilao@gmail.com",
  authorName: "Jan Erol M. Canilao",
  profileImgTagLine: "Front-End Developer",
  authorContactMail: "janerol.m.canilao@gmail.com",
  authorContactNumber: "0919-681-2788",
};

// Education Section
const EducationPage = [
  {
    graduationYear: 2025,
    degreeType: "Bachelor of Science in Information Technology",
    institution: "University of the Assumption",
    institutionUrl: "https://ua.edu.ph/",
  },
  {
    graduationYear: 2019,
    degreeType: "Science, Technology, Engineering and Mathematics (Specialization in Computer Programming)",
    institution: "Assumpta Technical High School",
    institutionUrl: "",
  },
];

// Certifications Section (styled like Education)
const CertificatesPage = [
  {
    year: 2023,
    title: "Python Essentials 1",
    issuedBy: "",
    credentialURL: "",
  },
  {
    year: 2023,
    title: "JavaScript Essentials 1",
    issuedBy: "",
    credentialURL: "",
  },
  {
    year: 2024,
    title: "Operating Systems Basics",
    issuedBy: "",
    credentialURL: "",
  },
  {
    year: 2024,
    title: "IT Specialist - Cybersecurity",
    issuedBy: "",
    credentialURL: "",
  },
];

// Skills Section
const skillsPage = [
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaGithub,
  FaPython,
  FaGitAlt,
  RiTailwindCssFill,
  FaReact,
];

// Projects Section
const projectsPage = [
  {
    projectName: "Weather App",
    projectDescription:
      "A simple responsive Weather App built with React, TailwindCSS, and Vite that fetches live weather data from OpenWeather API.",
    projectURL: "https://weather-app-ten-eta-95.vercel.app/",
    githubRepository: "https://github.com/janerolmcanilao-code/weather-app", // ✅ fixed name
    tags: ["React", "TailwindCSS", "Vite", "OpenWeather API"],
    date: "2025",
    image: weatherAppImg,
  },
  
  {
  projectName: "To do List",
  projectDescription:
    "A simple To do List built with React, Vite & Tailwind — CRUD Operations",
  projectURL: "https://todo-app-neon-five-74.vercel.app", // updated live link
  githubRepository: "https://github.com/janerolmcanilao-code/todo-app",
  tags: ["React", "Vite", "TailwindCSS"],
  date: "2025",
  image: todoAppImg,
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
