import p0img1 from "../assets/images/projects/p0_cover.png";
import p1img1 from "../assets/images/projects/p1_cover.png";
import p2img1 from "../assets/images/projects/p2_cover.png";
import p4img1 from "../assets/images/projects/p4_cover.png";
import p5img1 from "../assets/images/projects/p5_cover.png";
import p6img1 from "../assets/images/projects/p6_cover.png";

const text =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.";

const PROJECTS = [
  {
    id: 0,
    type: "coding",
    name: "DeepHow",
    subTitle: "AI Startup. Joined as a Frontend Developer",
    poster: p0img1,
    tags: ["frontend"],
    gitHub: "",
    link: "https://www.deephow.com/",
    description: text,
    content: [
      { type: "text", value: "This is the first paragraph of project 0." },
      { type: "img", value: p0img1 },
      { type: "text", value: "This is the second paragraph of project 0." },
    ],
  },
  {
    id: 1,
    type: "coding",
    name: "Pet Supplies E-shop",
    subTitle: "Fullstack Project",
    poster: p1img1,
    tags: ["frontend", "fullstack", "UI/UX"],
    gitHub: "https://github.com/cchen-00/portfolio",
    link: "https://petshop-38o7.onrender.com/",
    description: text,
    content: [
      { type: "text", value: "This is the first paragraph of project 1." },
      { type: "img", value: p2img1 },
      { type: "text", value: "This is the second paragraph of project 1." },
    ],
  },
  {
    id: 2,
    type: "coding",
    name: "Personal Website",
    subTitle: "Frontend React Project",
    poster: p2img1,
    tags: ["frontend", "fullstack", "UI/UX"],
    gitHub: "https://github.com/cchen-00/portfolio",
    link: "",
    description: text,
    content: [
      { type: "text", value: "This is the first paragraph of project 1." },
      { type: "img", value: p2img1 },
      { type: "text", value: "This is the second paragraph of project 1." },
    ],
  },
  {
    id: 3,
    type: "design",
    name: "ZGZG Chinese New Year GALA",
    subTitle: "Main designer for the event",
    poster: p4img1,
    tags: ["branding", "graphic design", "illustration"],
    behance: "https://www.behance.net/cchengraphfe83",
    link: "https://www.zgzg.io/",
    description: text,
    content: [
      { type: "text", value: "This is the first paragraph of project 2." },
      { type: "img", value: p2img1 },
      { type: "text", value: "This is the second paragraph of project 2." },
    ],
  },
  {
    id: 4,
    type: "design",
    name: "AmeriGanic",
    subTitle: "Branding Project",
    poster: p5img1,
    tags: ["branding", "graphic design"],
    behance: "https://www.behance.net/cchengraphfe83",
    link: "",
    description: text,
    content: [
      { type: "text", value: "This is the first paragraph of project 2." },
      { type: "img", value: p2img1 },
      { type: "text", value: "This is the second paragraph of project 2." },
    ],
  },
  {
    id: 5,
    type: "design",
    name: "Icon Set Design",
    subTitle: "",
    poster: p6img1,
    tags: ["icons", "UI/UX"],
    behance: "https://www.behance.net/cchengraphfe83",
    link: "",
    description: text,
    content: [
      { type: "text", value: "This is the first paragraph of project 2." },
      { type: "img", value: p2img1 },
      { type: "text", value: "This is the second paragraph of project 2." },
    ],
  },
];

export default PROJECTS;
