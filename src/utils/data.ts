import { RiComputerLine, RiEnglishInput } from "react-icons/ri";
import { IProject, IService, ISkill } from "./types";
import { BsCircleFill } from "react-icons/bs";
import { HiChartBar } from "react-icons/hi";
import {
  MdOutlineHighQuality,
  MdOutlineVolunteerActivism,
} from "react-icons/md";
import chess from "../assets/chess.jpg";
import evacuationSimulation from "../assets/evacuationSimulation.png";
import florists from "../assets/florists.jpg";
import newsSite from "../assets/newsSite.jpg";
import trollo from "../assets/trollo.jpg";
import { AiOutlineCheckCircle } from "react-icons/ai";

export const services: IService[] = [
  {
    title: "CodersCamp 2021 5-month course completed",
    about:
      "Completed  course of web programming: <b> HTML5 </b>, <b> CSS3/SCSS </b>, <b> JavaScript </b>, <b>TypeScript </b>, <b> Webpack </b>, <b> React </b>, <b> JEST </b>",
    Icon: RiComputerLine,
  },
  {
    title: "English - B2",
    about: "I can communicate freely in English at B2 level",
    Icon: RiEnglishInput,
  },
  {
    title: "Scrupulousness",
    about: "I attach great importance to the quality of my work",
    Icon: AiOutlineCheckCircle,
  },
  {
    title: "Constant desire to develop",
    about:
      "I'm a person willing to learn new technologies and improve my skills",
    Icon: HiChartBar,
  },
  {
    title: "Paying attention to code quality",
    about:
      "I try to give complex code review and I welcome constructive criticism",
    Icon: MdOutlineHighQuality,
  },
  {
    title: "Volunteering",
    about: "I regularly contribute to charity, e.g. by donating blood",
    Icon: MdOutlineVolunteerActivism,
  },
];

export const languages: ISkill[] = [
  {
    name: "React.js",
    level: "60%",
    Icon: BsCircleFill,
  },
  {
    name: "Javascript",
    level: "60%",
    Icon: BsCircleFill,
  },
  {
    name: "TypeScript",
    level: "30%",
    Icon: BsCircleFill,
  },
  {
    name: "HTML",
    level: "60%",
    Icon: BsCircleFill,
  },
  {
    name: "SCSS/CSS Modules",
    level: "50%",
    Icon: BsCircleFill,
  },

  {
    name: "Tailwind CSS",
    level: "50%",
    Icon: BsCircleFill,
  },
  {
    name: "Python",
    level: "30%",
    Icon: BsCircleFill,
  },
  {
    name: "Bootstrap",
    level: "30%",
    Icon: BsCircleFill,
  },
];

export const tools: ISkill[] = [
  {
    name: "Git/Github",
    level: "80%",
    Icon: BsCircleFill,
  },
  {
    name: "AutoCAD",
    level: "80%",
    Icon: BsCircleFill,
  },
  {
    name: "Figma",
    level: "50%",
    Icon: BsCircleFill,
  },
  {
    name: "ArcGIS",
    level: "70%",
    Icon: BsCircleFill,
  },
  {
    name: "Revit",
    level: "70%",
    Icon: BsCircleFill,
  },
];

export const projects: IProject[] = [
  {
    id: 1,
    name: "Chess",
    description: `In early 2000's with friends we played countless hours in HOMM3 "hot seat" mode, so I decided that making this app will be wonderful tribute. Player can choose easy and normal mode, where easy shows hints for possible moves. If you forgot rules or movements of pawns - don't worry. You can check it at any moment.`,
    image_path: chess,
    deployed_url: "http://bestchess.herokuapp.com/",
    github_url: "https://github.com/SebastianBabinski1/Chess",
    category: ["react", "typescript", "bootstrap", "javascript"],
    key_techs: ["React", "Typescript", "Bootstrap", "SCSS", "HTML"],
  },
  {
    id: 2,
    name: "Simulation of evacuation from building",
    description:
      "Simulation of evacuation from building was my master thesis topic. Using modified Dijkstra and Ant Colony Optimalization algorithms it was checked which version of algorithm gives best results. After making a 3D model of a building I created graph representing network of rooms and corridors, which are necessary for the work. Comparing BIM, GIS technologies and script written in Python we can calculate the probable evacuation time and compare different scenarios.",
    image_path: evacuationSimulation,
    deployed_url: "",
    github_url:
      "https://github.com/SebastianBabinski1/Simulation-of-evacuation-from-building",
    category: ["python"],
    key_techs: ["Python", "ArcPy", "ArcGIS", "Revit", "AutoCAD"],
  },
  {
    id: 3,
    name: "Florists",
    description:
      "Florists website, which presents provided services, sample products, online shopping and contact data.",
    image_path: florists,
    deployed_url: "http://reniaflowers.herokuapp.com/",
    github_url: "https://github.com/SebastianBabinski1/Florists",
    category: ["react", "typescript", "bootstrap", "javascript"],
    key_techs: ["React", "Typescript", "Bootstrap", "SCSS", "HTML"],
  },
  {
    id: 4,
    name: "News site",
    description:
      "Project written in vanilla JS, which presents page pagination, infinite scroll and separate site with favourite articles. You can sort articles by date of publication and by title alphabetically. Moreover user can change number of fetching articles from API. The purpose of this project was improving my skills in vanilla JS, without e.g. React",
    image_path: newsSite,
    deployed_url: "",
    github_url: "https://github.com/SebastianBabinski1/News-site",
    category: ["javascript"],
    key_techs: ["JavaScript", "HTML", "CSS"],
  },
  {
    id: 5,
    name: "Trollo",
    description: `One of the first projects, which presents copy of well known "Trello". We can create users, tables, lists and drag/drop tasks between them. Right now I would make this app completly different, but I've sentiment for it and I can easly check improvement of my skills :)`,
    image_path: trollo,
    deployed_url: "https://trollo-notes.herokuapp.com/",
    github_url: "https://github.com/SebastianBabinski1/Trollo",
    category: ["react", "tailwind", "javascript"],
    key_techs: ["React", "Tailwind", "JavaScript"],
  },
];
