import next from "../assets/logos/nextjs.png";
import prisma from "../assets/logos/prisma.png";
import aws from "../assets/logos/aws.png";
import git from "../assets/logos/git.png";
import github from "../assets/logos/github.png";
import sql from "../assets/logos/postgreSQL.png";
import tailwind from "../assets/logos/tailwind.png";
import bash from "../assets/logos/bash.png";

export const NAVBAR_MENU = [
  { title: "Home", name: "intro" },
  { title: "Work", name: "work" },
  { title: "About", name: "about" },
  { title: "Tech", name: "tech" },
  { title: "Contact", name: "contact" },
];

export const TIMELINE_ELEMENTS = [
  {
    title: "Montreal, Quebec",
    time: "2004-2005",
    icon: "city",
  },
  {
    title: "Fushun, Liaoning",
    time: "2005",
    icon: "city",
  },
  {
    title: "Edmonton, Alberta",
    time: "2005-2006",
    icon: "city",
  },
  {
    title: "Katy, Texas",
    time: "2007-2008",
    icon: "city",
  },
  {
    title: "Fushun, Liaoning",
    time: "2008-2010",
    icon: "city",
  },
  {
    title: "Surrey, BC",
    time: "2010",
    icon: "city",
  },
  {
    title: "Rawlins, Wyoming",
    time: "2011-2012",
    icon: "town",
  },
  {
    title: "Laramie, Wyoming",
    time: "2012-2013",
    icon: "town",
  },
  {
    title: "Regina, Saskatchewan",
    time: "2014-2017",
    icon: "city",
  },
  {
    title: "Dawson Creek, BC",
    time: "2017-2019",
    icon: "town",
  },
  {
    title: "Grande Prairie, Alberta",
    time: "2019-2022",
    icon: "town",
  },
  {
    title: "Waterloo, Ontario",
    time: "2022-present",
    icon: "city",
  },
].reverse();

export const MAP_MARKERS = [
  {
    name: "Grande Prairie",
    coordinates: [-118.7885, 55.1707],
  },
  {
    markerOffset: -15,
    name: "Regina",
    coordinates: [-104.6189, 50.4452],
  },
  {
    name: "Laramie",
    coordinates: [-105.5911, 41.3114],
  },
  {
    name: "Surrey",
    coordinates: [-122.849, 49.1913],
  },
  {
    name: "Katy",
    coordinates: [-95.8245, 29.7858],
  },
  {
    markerOffset: -15,
    name: "Montreal",
    coordinates: [-73.5674, 45.5019],
  },
  {
    name: "Waterloo",
    coordinates: [-80.5204, 43.4643],
  },
  {
    name: "Edmonton",
    coordinates: [-113.4937, 53.5461],
  },
  {
    name: "Fushun",
    coordinates: [123.94363, 41.88669],
  },
  {
    name: "Rawlins",
    coordinates: [-107.2387, 41.7911],
  },
  {
    name: "Dawson Creek",
    coordinates: [-120.2377, 55.7596],
  },
];

export const WORK_INFORMATION = [
  {
    title: "Frontend Software Engineer Intern @Carta Inc.",
    time: { start: "Jan. 2025", end: "", isCurrent: true },
    desc: "TypeScript | React.js",
  },
  {
    title: "Software Engineer Intern (Frontend Platform) @Carta Inc.",
    time: { start: "May 2024", end: "Aug. 2024", isCurrent: false },
    desc: "TypeScript | CircleCI | Docker | Python",
  },
  {
    title: "Frontend Engineer @Spade AI",
    time: { start: "Jan. 2024", end: "Feb. 2024", isCurrent: false },
    desc: "TypeScript | Next.js",
  },
  {
    title: "Full Stack Engineer @Ojje Inc.",
    time: { start: "Jun. 2023", end: "Sept. 2023", isCurrent: false },
    desc: "JavaScript | React.js",
  },
  {
    title: "Technology Consulting Assistant @Creospark",
    time: { start: "May 2023", end: "Aug. 2023", isCurrent: false },
    desc: "Microsoft Power Platform",
  },
];

export const TECH_STACK = [
  {
    title: "Next JS",
    image: next,
  },
  {
    title: "Prisma",
    image: prisma,
  },
  {
    title: "AWS",
    image: aws,
  },
  {
    title: "Tailwind CSS",
    image: tailwind,
  },
  {
    title: "Bash",
    image: bash,
  },
  {
    title: "Github",
    image: github,
  },
  {
    title: "Git",
    image: git,
  },
  {
    title: "MySQL",
    image: sql,
  },
];
