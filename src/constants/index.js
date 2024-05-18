import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  other,
  ai,
  card,
  linux,
  languages,
  reactjs,
  redux,
  tailwind,
  hacked,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "work",
    title: "News",
  },
  {
    id: "contact",
    title: "Contact",
  },
  // {
  //   id: "about",
  //   title: "Login/Signup",
  // },
  
];

const services = [
 
  {
    title: "Cybersecurity Expert",
    icon: backend,
  },
  
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const news = [
  {
    title: "Kolkata youths mimic foreign accents to deceive and defraud unsuspecting victims",
    company_name: "",
    icon: hacked,
    iconBg: "#383E56",
    date: "2023",
    points: [
      "The main accused, Ryan Kallol Shahdas, orchestrated the fraud by speaking on call to the victim in a foreign accent",
      "The gang used illegally obtained bank account details to buy electronic items from e-commerce platforms",
      "One of the gang members pretended to be a bank executive and sent the victim a link to download an application for screen sharing",
      " The Mumbai cyber police nabbed the seven accused from a cinema hall with the help of the Siliguri special task force's tracking expertise",
    ],
  },
  {
    title: "Matthew Perry's Social Media Handle Hacked",
    company_name: "",
    icon: hacked,
    iconBg: "#E6DEDD",
    date: "2023",
    points: [
      "Matthew Perry's Social Media Handle Hacked",
      "Matthew Perry, the late Hollywood star known for his role in 'Friends,' had his social media handle compromised.",
      "The hackers gained unauthorized access to his account, which raised concerns and attracted media attention.",
      " The hackers exploited the situation by using Perry's social media presence to promote fraudulent activities.",
      "The foundation's website was manipulated to redirect users to a suspicious copycat website.",
    ],
  },
  {
    title: "THANE: The cyber-crime police of Thane have launched a probe into a case where a former Managing Director of an MNC lost Rs 4 crore to online scammers",
    company_name: "",
    icon: hacked,
    iconBg: "#383E56",
    date: "2023",
    points: [
      " The victim is a former Managing Director of a multinational corporation (MNC).",
      " The scammers posed as officials of central agencies to gain the victim's trust.",
      "The scammers coerced the victim into sharing confidential bank details",
      " Impersonating authority figures is a common tactic used by cybercriminals to manipulate victims.",
      " This highlights the severity of the situation and the impact on the victim's personal and financial well-being    ",
      
    ],
  },
  
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  
];

const projects = [
  {
    name: "AI Assistant App using Flutter",
    description:
      "An AI-powered assistant application built using Flutter. It utilizes the OpenAI API key to generate images and text-based responses, providing users with personalized assistance.",
    tags: [
      {
        name: "Flutter",
        color: "blue-text-gradient",
      },
      {
        name: "OpenAI",
        color: "green-text-gradient",
      },
      {
        name: "Dally",
        color: "pink-text-gradient",
      },
    ],
    image: ai,
    source_code_link: "https://github.com/Horaunt/ai_assistant",
  },
  {
    name: "Custom Arch Linux Rice",
    description:
      "A customized Arch Linux desktop environment featuring Hyprland as the desktop environment, Kitty as the terminal emulator, Rofi as the application manager,Waybar as the status bar.",
    tags: [
      {
        name: "Linux",
        color: "blue-text-gradient",
      },
      {
        name: "Arch",
        color: "green-text-gradient",
      },
      {
        name: "Distro",
        color: "pink-text-gradient",
      },
    ],
    image: linux,
    source_code_link: "https://github.com/Horaunt/dotfiles",
  },
  {
    name: "Profile Card App",
    description:
      "A simple profile card application designed to display user information in an elegant and user-friendly format.",
    tags: [
      {
        name: "flutter",
        color: "blue-text-gradient",
      },
      {
        name: "dart",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: card,
    source_code_link: "https://github.com/Horaunt/Profile_app1",
  },
];

export { services, technologies, news, testimonials, projects };
