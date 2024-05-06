import p0img1 from "../assets/images/projects/p0_cover.png";
import p2img1 from "../assets/images/projects/p2_cover.png";
import p4img1 from "../assets/images/projects/p4_cover.png";

const text =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.";

const PROJECTS = [
  {
    id: 0,
    name: "DeepHow",
    subTitle: "AI Startup. Joined as a Frontend Developer",
    poster: p0img1,
    tags: ["frontend"],
    description: text,
    content: [
      { type: "text", value: "This is the first paragraph of project 0." },
      { type: "img", value: p0img1 },
      { type: "text", value: "This is the second paragraph of project 0." },
    ],
  },
  {
    id: 1,
    name: "Personal Website",
    subTitle: "Frontend React project",
    poster: p2img1,
    tags: ["frontend", "fullstack", "UI/UX"],
    description: text,
    content: [
      { type: "text", value: "This is the first paragraph of project 1." },
      { type: "img", value: p2img1 },
      { type: "text", value: "This is the second paragraph of project 1." },
    ],
  },
  {
    id: 2,
    name: "ZGZG Chinese New Year GALA",
    subTitle: "Main designer for the event",
    poster: p4img1,
    tags: ["branding", "graphic design"],
    description: text,
    content: [
      { type: "text", value: "This is the first paragraph of project 2." },
      { type: "img", value: p2img1 },
      { type: "text", value: "This is the second paragraph of project 2." },
    ],
  },
];

export default PROJECTS;
