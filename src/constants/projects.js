import p0img1 from "../assets/images/projects/p0_cover.png";
import p1img1 from "../assets/images/projects/p1_cover.png";
import p2img1 from "../assets/images/projects/p2_cover.png";
import p4img0 from "../assets/images/projects/p4_cover.png";
import p4img1 from "../assets/images/projects/p4_img1.png";
import p4img2 from "../assets/images/projects/p4_img2.png";
import p4img3 from "../assets/images/projects/p4_img3.png";
import p4img4 from "../assets/images/projects/p4_img4.png";
import p4img5 from "../assets/images/projects/p4_img5.png";
import p4img6 from "../assets/images/projects/p4_img6.png";
import p4img7 from "../assets/images/projects/p4_img7.png";
import p4img8 from "../assets/images/projects/p4_img8.png";
import p4img9 from "../assets/images/projects/p4_img9.png";
import p5img0 from "../assets/images/projects/p5_cover.png";
import p5img1 from "../assets/images/projects/p5_img1.jpg";
import p5img2 from "../assets/images/projects/p5_img2.png";
import p5img3 from "../assets/images/projects/p5_img3.png";
import p6img0 from "../assets/images/projects/p6_cover.png";
import p6img1 from "../assets/images/projects/p6_img1.png";
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
        type: "list",
        value: [
          "Joined as the first front-end developer, contributing to MVP development. In the later stage, owned the ongoing optimization and maintenance of critical modules like Video Player,  Navigator, Skills, and User Profile. ",
          "Implemented new features using HTML/CSS, JavaScript, Vue, Vuex, and Vuetify.",
          "Ensured cross-device compatibility for desktop and mobile, providing a seamless user experience.",
          "Reviewed designs and helped shape the eventual UX of new features",
        ],
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
    subTitle: "Fullstack Project (MERN)",
    poster: p1img1,
    tags: ["frontend", "fullstack", "UI/UX"],
    github: "https://github.com/cchen-00/petshop",
    demoLink: "https://petshop-38o7.onrender.com/",
    description:
      "Designed and built a fully functional e-commerce website to solidify my understanding of the MERN stack (MongoDB, Express, React, Node. js) and explore the capabilities of the Redux Toolkit.",
    content: [
      { type: "img", value: p1img1 },
      {
        type: "subtitle",
        value: "Test Accounts:",
      },
      {
        type: "text",
        value: "Admin user: admin@123.com | 123456",
      },
      {
        type: "text",
        value: "Regular user: test@123.com | 123456",
      },
      { type: "divider" },
      {
        type: "subtitle",
        value: "Tech Stack:",
      },
      {
        type: "text",
        value: "Front-End:",
      },
      {
        type: "text",
        value:
          "Built with HTML/CSS, JavaScript, Create React app, React, and Redux Toolkit. Security checkout with PayPal",
      },
      {
        type: "text",
        value: "Back-End:",
      },
      {
        type: "text",
        value:
          "Architecture: MERN stack (MongoDB, Express, React, and Node. js). Security: JWT Authentication",
      },
      {
        type: "text",
        value: "Design:",
      },
      {
        type: "text",
        value:
          "Logo & Banners: Adobe Illustrator and Photoshop. UI: Bootstrap Components (Responsive)",
      },
      { type: "divider" },
      {
        type: "subtitle",
        value: "Project Features:",
      },
      {
        type: "text",
        value: "All users:",
      },
      {
        type: "list",
        value: [
          "Comprehensive Product Page: The products page features pagination and allows users to filter products based on entered keywords, and categories. Products could also be sorted by price or creation date.",
          "Complete Shopping Cart and Payment/Order Creation: Users can seamlessly add items to their cart, proceed to checkout, and complete the payment process to place orders.",
          "User Registration and Login: New users can register using their email address and password, and existing users can log in to their accounts.",
          "User Profile Management: Users can access their profiles to edit personal information, set default shipping addresses, and view their order history.",
          "Brand Building and Marketing Modules: Most Popular, On Sale, and About Us modules enhance brand awareness and promote marketing campaigns, contributing to a well-rounded website experience.",
        ],
      },
      {
        type: "text",
        value: "Admin Users:",
      },
      {
        type: "list",
        value: [
          "Admin dashboard provides comprehensive management tools for orders, users, and products.",
          "Product Management: Create, edit, or delete products. Control product visibility (publish/unpublish). Feature products in &quot;Most Popular&quot; section. Set special sale prices.",
          "User Management: View detailed user information and order history. Remove non-admin users.",
          "Order Management: View all orders. Update order status (paid/delivered).",
        ],
      },
      {
        type: "text",
        value: "",
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
    demoLink: "https://ember-chen.site",
    behance: LINKS.behance,
    description: "Frontend React project / Personal branding project.",
    content: [
      { type: "img", value: p2img1 },
      {
        type: "text",
        value:
          "My personal portfolio website. It's a curated collection of my development and design projects.",
      },
      {
        type: "list",
        value: [
          "UI, logo, and images are created with Adobe Illustrator and Photoshop.",
          "Responsive web design, ensures an exceptional user experience across all screens.",
          "Built with HTML/CSS, JavaScript, Vite and React.",
          "Added animation effects with Framer Motion.",
          "Styled CSS with SASS and BEM.",
          "Sent message in Contact with EmailJS.",
          "Deployed with Render, added custom domain.",
        ],
      },
    ],
  },
  {
    id: 3,
    type: "design",
    name: "ZGZG New Year GALA",
    subTitle: "Main designer for the event",
    poster: p4img0,
    tags: ["branding", "graphic design", "illustration"],
    behance: LINKS.behance,
    link: "https://www.zgzg.io/",
    description:
      "I designed the key visual of the 2024 ZaiGeZaiGu Chinese New Year GALA. Also completed the design for multiple versions of posters, websites, event badges, canvas bags, and volunteer certificates.",
    content: [
      { type: "img", value: p4img1 },
      { type: "img", value: p4img2 },
      { type: "img", value: p4img3 },
      { type: "img", value: p4img4 },
      { type: "img", value: p4img5 },
      { type: "img", value: p4img6 },
      { type: "img", value: p4img7 },
      { type: "img", value: p4img8 },
      { type: "img", value: p4img9 },
    ],
  },
  {
    id: 4,
    type: "design",
    name: "AmeriGanic",
    subTitle: "Branding Project",
    poster: p5img0,
    tags: ["branding", "graphic design"],
    behance: LINKS.behance,
    link: "",
    description: "",
    content: [
      {
        type: "text",
        value:
          "AmeriGanic is an organic store in Shijiazhuang, China, specializing in bringing premium American organic products to the Chinese market. ",
      },
      {
        type: "text",
        value:
          "This freelance project is a favorite of mine – I designed their logo, name cards, product category icons, flyer and coupons.",
      },
      { type: "img", value: p5img1 },

      {
        type: "text",
        value:
          "To introduce American organic brands to local customers, AmeriGanic needed an informative yet budget-friendly flyer. We opted for a foldable brochure format, maximizing space while maintaining a clean, organized presentation.",
      },
      { type: "img", value: p5img2 },

      { type: "text", value: "Store coupons: " },
      { type: "img", value: p5img3 },
    ],
  },
  {
    id: 5,
    type: "design",
    name: "Icon Set Design",
    subTitle: "",
    poster: p6img0,
    tags: ["icons", "UI/UX"],
    behance: LINKS.behance,
    link: "",
    description: "Factory theme icon set",
    content: [
      { type: "img", value: p6img0 },
      { type: "img", value: p6img1 },
    ],
  },
];

export default PROJECTS;
