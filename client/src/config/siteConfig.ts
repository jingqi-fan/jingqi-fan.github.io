/**
 * Site Configuration File
 * 
 * This file contains all the configurable content for the personal academic homepage.
 * Update this file to modify site content without touching the component code.
 <!-- Cache bust: 2025-11-15 17:06:43 -->
 */

// ===========================
// Personal Information
// ===========================
export const personalInfo = {
  name: "Jingqi Fan",
  chineseName: "范靖琪",
  pronouns: "she/her",
  title: "Undergraduate Student",
  university: "Northeastern University",
  location: "Shenyang, China",
  email: "jingqifanfanfan@gmail.com",
  
  // Hero Section
  // heroQuote: "Live, travel, adventure, bless, and don't be sorry.",
  // heroAttribution: "Jack Kerouac, Desolation Angels",
  
  // About Me
  aboutMe: {
    intro: `I am a senior undergraduate student at Northeastern University. My research interests focus on the theoretical foundations of online decision making in multi-agent environments.`,
    
    // researchFocus: `My research interests focus on the theoretical foundations of online decision making in multi-agent environments.`,
    
    // researchInterests: [
    //   {
    //     title: "Language Grounding and Spatial Manipulation",
    //     description: "Connecting structured representations with spatial reasoning and physically grounded robotic actions."
    //   },
    //   {
    //     title: "Multimodal Reasoning and Planning",
    //     description: "Enabling embodied agents to integrate vision, language, and action for structured decision-making and open-world generalization."
    //   },
    //   {
    //     title: "Human–Robot Collaborative Intelligence",
    //     description: "Designing interactive systems that support safe and adaptive collaboration between humans and robots in real–simulation hybrid environments."
    //   }
    // ],
    
    // goal: `Guided by the principle of creating technology with everyone, for everyone, my research aims to advance accessible, human-centered AI that enhances daily life and broadens equitable access to intelligent systems.`,
    
    lookingFor: "✨ I am looking for a Ph.D. position starting in 2026 Fall. Please feel free to reach out!"
  },
  
  advisors: [
    {
      name: "Prof. Mingyu Ding",
      url: "https://dingmyu.github.io"
    },
    {
      name: "Prof. Yao (Mark) Mu",
      url: "https://yaomarkmu.github.io/"
    }
  ]
};

// ===========================
// Images and Assets
// ===========================
export const images = {
  heroBackground: "/assets/bg2.jpg",
  profileAvatar: "/assets/photo.jpg",
};

// ===========================
// Social Media Links
// ===========================
export const socialLinks = {
  googleScholar: "https://scholar.google.com/citations?user=qWdyEtsAAAAJ",
  github: "https://github.com/jingqi-fan",
  linkedin: "https://www.linkedin.com/in/jingqi-fan/",
  email: "mailto:jingqifanfanfan@gmail.com",
};

// ===========================
// Navigation Menu
// ===========================
export const navigationMenu = [
  { label: "Home", href: "/#" },
  { label: "Publications", href: "/#publications" },
  // { label: "CV", href: "/assets/CV_Jingqi_Fan.pdf", external: true },
];

export const news = [
  // 你可以按需改成从 siteConfig 导入
  { id: 1, date: "2025-12", text: "One paper is accepted as AAMAS 2026 extended abstract.", link: "" },
  { id: 2, date: "2025-02", text: "One paper is accepted to IJCAI 2025.", link: "" },
  { id: 3, date: "2024-12", text: "Join Microsoft Research Asia as a Research Intern.", link: "" },
];

// ===========================
// Publications
// ===========================
export const publications = [
  {
    id: 1,
    authors: "Jingqi Fan, Canzhe Zhao, Shuai Li, Siwei Wang",
    title: "Decentralized Asynchronous Multi-player Bandits",
    venue: "In the 25th International Conference on Autonomous Agents and Multiagent Systems (AAMAS 2026), Extended Abstract",
    year: 2025,
    links: [
      { text: "Paper", type: "external", link: "https://arxiv.org/abs/2509.25824" },
      // { text: "Code", type: "external", link: "https://arxiv.org/abs/2509.25824" },
      { text: "Slides", type: "pdf", link: "/assets/slide_asyn.pdf" },
      {
        text: "BibTex",
        type: "bib",
        content: `@article{fan2025decentralized,
  title={Decentralized Asynchronous Multi-player Bandits},
  author={Fan, Jingqi and Zhao, Canzhe and Li, Shuai and Wang, Siwei},
  journal={arXiv preprint arXiv:2509.25824},
  year={2025}
}`
      }
    ],
  },
  {
    id: 2,
    authors: "Jingqi Fan, Zilong Wang, Shuai Li, Linghe Kong",
    title: "Multi-player Multi-armed Bandits with Delayed Feedback",
    venue: "In the 34th International Joint Conference on Artificial Intelligence (IJCAI 2025)",
    year: 2025,
    links: [
      { text: "Paper", type: "external", link: "https://www.ijcai.org/proceedings/2025/0564.pdf" },
      { text: "Slides", type: "pdf", link: "/assets/slide_ijcai25.pdf" },
      {
        text: "BibTex",
        type: "bib",
        content: `@inproceedings{fan2025multiplayer,
  title     = {Multi-player Multi-armed Bandits with Delayed Feedback},
  author    = {Fan, Jingqi and Wang, Zilong and Li, Shuai and Kong, Linghe},
  booktitle = {Proceedings of the Thirty-Fourth International Joint Conference on
               Artificial Intelligence, {IJCAI-25}},
  publisher = {International Joint Conferences on Artificial Intelligence Organization},
  pages     = {5065--5073},
  year      = {2025},
  month     = {8},
  doi       = {10.24963/ijcai.2025/564},
  url       = {https://doi.org/10.24963/ijcai.2025/564},
}`
      }
    ],
  },
];

// ===========================
// Academic Service
// ===========================
export const academicService = [
  {
    id: 1,
    role: "Reviewer",
    description: "for AISTATS 2026."
  },
];


// ===========================
// Theme Configuration
// ===========================
export const themeConfig = {
  colors: {
    primary: "blue-900",
    secondary: "blue-800",
    accent: "blue-700",
    text: "gray-900",
    textLight: "gray-700",
    background: "gray-50",
    backgroundDark: "gray-900",
  },
  fonts: {
    sans: "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
    mono: "'Courier New', Courier, monospace",
  },
};
