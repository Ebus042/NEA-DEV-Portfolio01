import brandLogo from "/public/neaLogo.png";
export default brandLogo;

import heroImg from "../assets/HeroImg.png";
import aboutImg from "../assets/AboutImg.png";

import facebookImg from "../assets/facebook.svg";
import githubImg from "../assets/github.svg";
import linkedInImg from "../assets/linkedIn.svg";

export const navLinks = [
  {
    href: "home",
    label: "Home",
    id: 1,
  },
  {
    href: "about-me",
    label: "About Me",
    id: 2,
  },
  {
    href: "services",
    label: "Services",
    id: 3,
  },
  {
    href: "projects",
    label: "Projects",
    id: 4,
  },
  {
    href: "contact",
    label: "Contact Me",
    id: 5,
  },
];

export const heroSection = [
  {
    title: "Code with Nwafor Ebuka Augustine",
    description: "I'm a Front-End Web/Mobile Developer.",
    image: heroImg,
  },
];

export const aboutMe = [
  {
    title: "About Me",
    descriptions: [
      "I studied Computer Science at Crown Polytechnic, in Ekiti State, Nigeria.",
      " I graduated with an upper credit. Choosing web development as my primary field of concentration was as a result of my passion for website creation.",
      " Growing up, I've always imagined and wondered how so many beautiful website were created and how they function so very well, my curosity is what has led me into studying more about web development.",
      " I'm passionate about creating websites that meets the demands of users from the comfort of their homes and workplaces.",
    ],
    image: aboutImg,
  },
];

export const servicesSection = [
  {
    id: 1,
    title: "Web Development and Design",
    labels: [
      "Responsive Website Design & Development (personal websites, company landing pages, portfolios).",
      "Business Websites (for small businesses, schools, churches, NGOs).",
      "Portfolio & CV Websites (help professionals showcase their work).",
      "E-commerce Sites (basic online stores, product catalogues).",
    ],
  },

  {
    id: 2,
    title: "UI/UX & Frontend Services",
    labels: [
      "User Interface Design (clean, modern layouts with Tailwind).",
      "Frontend Development with React (building interactive dashboards, carts, navigation systems).",
      "Website Redesign (improving existing sites for better usability & aesthetics).",
    ],
  },

  {
    id: 3,
    title: "Technical Services",
    labels: [
      "Website Optimization (speed, mobile-friendliness, accessibility).",
      "Debugging & Fixes (broken layouts, responsiveness issues, JavaScript bugs).",
      "Website Maintenance (updating content, fixing errors, security updates).",
    ],
  },

  {
    id: 4,
    title: "Specialized Projects",
    labels: [
      "Dashboard Development (for organizations to monitor data, reports, tasks).",
      "Forms & Data Collection Pages (schools, churches, businesses need these).",
      "Interactive Features (sliders, modals, navigation menus, carts).",
    ],
  },

  {
    id: 5,
    title: "Related Creative Services",
    labels: [
      "Logo & Brand Design (basic branding for startups).",
      "Social Media Graphics (banners, posters, adverts).",
      "Flyers & Digital Ads for businesses.",
    ],
  },
];

export const socialMedia = [
  {
    id: 1,
    mediaName: "Facebook",
    href: "https://www.facebook.com/share/1WQqJCRuDJ/?mibextid=wwXIfr",
    src: facebookImg,
    alt: "a facebook logo",
  },
  {
    id: 2,
    mediaName: "Instagram",
    href: "https://github.com/Ebus042/",
    src: githubImg,
    alt: "a github logo",
  },
  {
    id: 3,
    mediaName: "LinkedIn",
    href: "https://www.linkedin.com/in/chukwu-ebuka-079926379/",
    src: linkedInImg,
    alt: "linkedIn",
  },

  {
    contactAddress: [
      {
        id: 1,
        location:
          "43 Olaoluwa community, Igoba Phase 3, Akure North, Ondo State.",
        email: "Email: nwaforebuka12@gmail.com",
        href: "mailto:nwaforebuka12@gmail.com",
        phoneNumber: "+2348100655023",
      },
    ],
  },
];
