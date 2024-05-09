import p0img1 from "../assets/images/projects/p0_cover.png";
import p1img1 from "../assets/images/projects/p1_cover.png";
import p2img1 from "../assets/images/projects/p2_cover.png";
import p4img1 from "../assets/images/projects/p4_cover.png";
import p5img1 from "../assets/images/projects/p5_cover.png";
import p6img1 from "../assets/images/projects/p6_cover.png";
import { LINKS } from "./constants";

const PROJECTS = [
  {
    id: 0,
    type: "coding",
    name: "DeepHow",
    subTitle: "AI Startup. Joined as a Frontend Developer",
    poster: p0img1,
    tags: ["frontend"],
    link: "https://www.deephow.com/",
    description:
      "DeepHow is an award-winning AI-powered, video-centric platform for skilled workforce training.",
    content: [
      { type: "img", value: p0img1 },
      {
        type: "text",
        value:
          "As the first front-end developer, I played a key role in building the MVP and establishing the technical foundation for this project. I implemented new features using a modern tech stack including HTML/CSS, JavaScript, Vue.js, Vuex, and Vuetify.  Later, I took ownership of critical modules like the Video Player, Navigator, Skills, and User Profile, ensuring their ongoing optimization, maintenance, and seamless cross-device compatibility across desktop and mobile.  I also actively collaborated with designers to refine the UI/UX of new features. ",
      },
      {
        type: "text",
        value:
          " If you'd like to learn more about the project, feel free to contact me.",
      },
    ],
  },
  {
    id: 1,
    type: "coding",
    name: "Pet Supplies E-shop",
    subTitle: "Fullstack Project",
    poster: p1img1,
    tags: ["frontend", "fullstack", "UI/UX"],
    github: "https://github.com/cchen-00/petshop",
    demoLink: "https://petshop-38o7.onrender.com/",
    description:
      "An eCommerce shop using the MERN stack along with Redux Toolkit.",
    content: [
      { type: "img", value: p1img1 },
      {
        type: "text",
        value: "Admin test account:",
      },
      {
        type: "text",
        value: "Email: admin@123.com",
      },
      {
        type: "text",
        value: "Password:123456",
      },
      {
        type: "text",
        value:
          "I built this comprehensive e-commerce application from scratch, handling both front-end and back-end development. My expertise includes:",
      },

      {
        type: "text",
        value:
          "Full-Stack Development: MERN stack for architecture, Redux Toolkit for state management, data modeling, MongoDB database, RESTful APIs, custom database seeder.",
      },
      {
        type: "text",
        value:
          "Front-End Development: UI/UX design, React.js for dynamic frontend, Redux Toolkit for state management.",
      },
      {
        type: "text",
        value:
          "E-commerce Features: Shopping cart, product reviews, product carousel, pagination, search, user profile, order history, admin panel, product management, user management, order management, secure checkout.",
      },
      {
        type: "text",
        value:
          "UI/UX Design: I designed the website's UI/UX with Bootstrap components and created the logo and banners using Adobe Illustrator and Photoshop.",
      },
    ],
  },
  {
    id: 2,
    type: "coding",
    name: "Personal Website",
    subTitle: "Frontend React Project",
    poster: p2img1,
    tags: ["frontend", "UI/UX", "branding"],
    github: "https://github.com/cchen-00/portfolio",
    link: "",
    behance: LINKS.behance,
    description: "Frontend React project / Personal branding project.",
    content: [
      { type: "img", value: p2img1 },
      {
        type: "text",
        value:
          "This website is designed with Adobe Illustrator and Photoshop. Built with Vite and React. Used SASS to format the Style",
      },
    ],
  },
  {
    id: 3,
    type: "design",
    name: "ZGZG Chinese New Year GALA",
    subTitle: "Main designer for the event",
    poster: p4img1,
    tags: ["branding", "graphic design", "illustration"],
    behance: LINKS.behance,
    link: "https://www.zgzg.io/",
    description: "",
    content: [
      { type: "img", value: p4img1 },
      // { type: "text", value: "This is the first paragraph of project 2." },
      // { type: "text", value: "This is the second paragraph of project 2." },
    ],
  },
  {
    id: 4,
    type: "design",
    name: "AmeriGanic",
    subTitle: "Branding Project",
    poster: p5img1,
    tags: ["branding", "graphic design"],
    behance: LINKS.behance,
    link: "",
    description: "",
    content: [
      { type: "img", value: p5img1 },
      // { type: "text", value: "This is the first paragraph of project 2." },
      // { type: "text", value: "This is the second paragraph of project 2." },
    ],
  },
  {
    id: 5,
    type: "design",
    name: "Icon Set Design",
    subTitle: "",
    poster: p6img1,
    tags: ["icons", "UI/UX"],
    behance: LINKS.behance,
    link: "",
    description: "",
    content: [
      { type: "img", value: p6img1 },
      // { type: "text", value: "This is the first paragraph of project 2." },
      // { type: "text", value: "This is the second paragraph of project 2." },
    ],
  },
];

export default PROJECTS;
