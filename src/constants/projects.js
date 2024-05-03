import p0img1 from "../assets/images/projects/0-1.png";
import p1img1 from "../assets/images/projects/1-1.png";

const text =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.";

const PROJECTS = [
  {
    id: 0,
    name: "Project 0",
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
    name: "Project 1",
    poster: p1img1,
    tags: ["frontend", "fullstack", "UI/UX"],
    description: text,
    content: [
      { type: "text", value: "This is the first paragraph of project 1." },
      { type: "img", value: p1img1 },
      { type: "text", value: "This is the second paragraph of project 1." },
    ],
  },
  {
    id: 2,
    name: "Project 2",
    poster: p0img1,
    tags: ["branding", "graphic design"],
    description: text,
    content: [
      { type: "text", value: "This is the first paragraph of project 2." },
      { type: "img", value: p1img1 },
      { type: "text", value: "This is the second paragraph of project 2." },
    ],
  },
];

export default PROJECTS;
