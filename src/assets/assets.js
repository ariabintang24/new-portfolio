import logo from "./logo.svg";
import arrow_icon from "./arrow_icon.svg";
import group_profile from "./group_profile.png";
import atom from "./atom.png";
import atom_2 from "./atom-2.png";
import bgImage1 from "./bgImage1.png";
import bgImage2 from "./bgImage2.png";
import microsoft_logo from "./microsoft_logo.png";
import zoom_logo from "./zoom_logo.png";
import rakuten_logo from "./rakuten_logo.png";
import coinbase_logo from "./coinbase_logo.png";
import ads_icon from "./ads_icon.svg";
import content_icon from "./content_icon.svg";
import marketing_icon from "./marketing_icon.svg";
import social_icon from "./social_icon.svg";
import menu_icon from "./menu_icon.svg";
import close_icon from "./close_icon.png";
import work_mobile_app from "./work_mobile_app.png";
import work_fitness_app from "./work_fitness_app.png";
import work_dashboard_management from "./work_dashboard_management.png";
import email_icon from "./email_icon.svg";
import person_icon from "./person_icon.svg";
import facebook_icon from "./facebook_icon.svg";
import twitter_icon from "./twitter_icon.svg";
import instagram_icon from "./instagram_icon.svg";
import linkedin_icon from "./linkedin_icon.svg";
import logo_dark from "./logo_dark.svg";
import airbnb_logo from "./airbnb_logo.svg";
import google_logo from "./google_logo.svg";
import menu_icon_dark from "./menu_icon_dark.svg";
import sun_icon from "./sun_icon.svg";
import moon_icon from "./moon_icon.svg";
import explorrre from "./explorrre.png";
import close_icon_dark from "./close_icon_dark.png";
import my_photo from "./my_photo.jpeg";
import github_icon from "./github_icon.png";
import go_blog from "./go_blog.jpeg";
import thematic from "./thematic.jpeg";
import adopt_me from "./adopt_me.jpeg";
import go_lapor from "./go_lapor.png";
import kos_booking from "./kos_booking.jpeg";

export const company_logos = [
  microsoft_logo,
  zoom_logo,
  rakuten_logo,
  coinbase_logo,
  airbnb_logo,
  google_logo,
];

const assets = {
  kos_booking,
  go_lapor,
  adopt_me,
  thematic,
  go_blog,
  github_icon,
  my_photo,
  atom,
  atom_2,
  explorrre,
  logo,
  arrow_icon,
  group_profile,
  bgImage1,
  bgImage2,
  ads_icon,
  content_icon,
  marketing_icon,
  social_icon,
  menu_icon,
  close_icon,
  close_icon_dark,
  work_mobile_app,
  work_fitness_app,
  work_dashboard_management,
  email_icon,
  person_icon,
  facebook_icon,
  twitter_icon,
  instagram_icon,
  linkedin_icon,
  logo_dark,
  menu_icon_dark,
  sun_icon,
  moon_icon,
};

export default assets;

export const badgeColors = {
  React: "bg-blue-500 text-white",
  Laravel: "bg-red-500 text-white",
  MERN: "bg-green-500 text-white",
  JavaScript: "bg-yellow-400 text-black",
  Node: "bg-green-600 text-white",
  MongoDB: "bg-green-700 text-white",
  Express: "bg-gray-600 text-white",
  Tailwind: "bg-cyan-500 text-white",
};

export const workData = [
  {
    title: "Go-Blog",
    description:
      "Go-Blog is a modern blogging platform that allows users to write, publish, and read articles on topics such as technology, finance, startups, and lifestyle. The platform includes features such as article management, user authentication, and a comment system to support interactive knowledge sharing.",
    fullDescription:
      "Go-Blog is a modern blogging platform that allows users to write, publish, and read articles on topics such as technology, finance, startups, and lifestyle. The platform includes features such as article management, user authentication, and a comment system to support interactive knowledge sharing.",

    image: assets.go_blog,

    category: "Full Stack",

    badges: ["MERN"],

    tags: ["React", "MongoDB", "Node.js", "Express.js", "Tailwind"],

    live: "https://go-blog-ivory.vercel.app/",
    github: "https://github.com/ariabintang24",
  },

  {
    title: "Thematic Academy",
    description:
      "Thematic Academy is a web platform that showcases various training and development programs. It integrates a Dialogflow-powered chatbot that functions as a virtual assistant to help users obtain information about available programs, answer common questions, and support helpdesk services more efficiently.",
    fullDescription:
      "Thematic Academy is a web platform that showcases various training and development programs. It integrates a Dialogflow-powered chatbot that functions as a virtual assistant to help users obtain information about available programs, answer common questions, and support helpdesk services more efficiently.",
    image: assets.thematic,

    category: "Front End",

    badges: ["React"],

    tags: ["React", "Dialogflow", "Tailwind"],

    live: "https://thematic-academy.vercel.app/",
    github: "https://github.com/ariabintang24",
  },

  {
    title: "Explorrre",
    description:
      "Explorrre is a digital platform that provides various insights and information about the world, including general knowledge from different countries. The platform is designed to help users explore global information easily through an informative and user-friendly interface.",
    fullDescription:
      "Explorrre is a digital platform that provides various insights and information about the world, including general knowledge from different countries. The platform is designed to help users explore global information easily through an informative and user-friendly interface.",
    image: assets.explorrre,

    category: "Front End",

    badges: ["React"],

    tags: ["React", "Node.js"],

    live: "https://explorrre.vercel.app/",
    github: "https://github.com/ariabintang24",
  },

  {
    title: "Adopt Me",
    description:
      "Adopt Me is a web-based pet adoption platform that allows users to browse available animals and submit adoption requests. Users can upload and manage animal listings, while adoption requests are processed through an approval system managed by administrators using the Filament admin panel. The platform is designed to simplify the adoption process, improve transparency, and help connect potential adopters with animals in need of a new home.",
    fullDescription:
      "Adopt Me is a web-based pet adoption platform that allows users to browse available animals and submit adoption requests. Users can upload and manage animal listings, while adoption requests are processed through an approval system managed by administrators using the Filament admin panel. The platform is designed to simplify the adoption process, improve transparency, and help connect potential adopters with animals in need of a new home.",
    image: assets.adopt_me,

    category: "Full Stack",

    badges: ["Laravel"],

    tags: ["Laravel", "MySQL", "Tailwind", "Breeze", "Filament", "Spatie"],

    live: "#",
    github: "https://github.com/ariabintang24",
  },

  // ==============

  {
    title: "Go-Lapor",
    description:
      "Go-Lapor is a web-based public complaint system that enables citizens to submit reports or complaints related to public services. The platform is designed to simplify the reporting process, improve transparency, and help institutions manage and respond to community feedback in a more structured way.",
    fullDescription:
      "Go-Lapor is a web-based public complaint system that enables citizens to submit reports or complaints related to public services. The platform is designed to simplify the reporting process, improve transparency, and help institutions manage and respond to community feedback in a more structured way.",
    image: assets.go_lapor,

    category: "Full Stack",

    badges: ["Laravel"],

    tags: ["Laravel", "MySQL", "Spatie", "Bootstrap"],

    live: "#",
    github: "https://github.com/ariabintang24",
  },

  {
    title: "Kos Booking",
    description:
      "Kos Booking is a web-based boarding house reservation system that allows users to browse available rooms, make bookings, and manage their reservation history. The platform integrates the Midtrans payment gateway to support secure online payments and streamline the booking process. Users can easily track their booking history and payment status, while the system ensures a more efficient and organized room reservation experience.",
    fullDescription:
      "Kos Booking is a web-based boarding house reservation system that allows users to browse available rooms, make bookings, and manage their reservation history. The platform integrates the Midtrans payment gateway to support secure online payments and streamline the booking process. Users can easily track their booking history and payment status, while the system ensures a more efficient and organized room reservation experience.",
    image: assets.kos_booking,

    category: "Full Stack",

    badges: ["Laravel"],

    tags: ["Laravel", "MySQL", "Breeze", "Filament", "Tailwind", "Midtrans"],

    live: "#",
    github: "https://github.com/ariabintang24",
  },

  // {
  //   title: "Booking System",
  //   description: "Online booking system with real-time availability.",
  //   fullDescription:
  //     "Full stack booking platform allowing users to schedule appointments, manage availability, and receive notifications. Integrated backend API and secure database.",
  //   image: assets.work_fitness_app,

  //   category: "Full Stack",

  //   badges: ["Laravel"],

  //   tags: ["Laravel", "MySQL", "Tailwind", "REST API"],

  //   live: "#",
  //   github: "#",
  // },

  // {
  //   title: "Portfolio Website",
  //   description: "Personal portfolio website with modern UI.",
  //   fullDescription:
  //     "Interactive developer portfolio website with animations, project showcase, contact form, and responsive design. Built with React and Tailwind.",
  //   image: assets.work_mobile_app,

  //   category: "Front End",

  //   badges: ["React"],

  //   tags: ["React", "Tailwind", "Framer Motion"],

  //   live: "#",
  //   github: "#",
  // },

  // {
  //   title: "Chat Application",
  //   description: "Real-time chat application with authentication.",
  //   fullDescription:
  //     "Real-time chat app with secure login, instant messaging, and scalable backend. Uses WebSocket and modern frontend technologies.",
  //   image: assets.explorrre,

  //   category: "Full Stack",

  //   badges: ["MERN"],

  //   tags: ["React", "Node.js", "MongoDB", "Socket.io"],

  //   live: "#",
  //   github: "#",
  // },
];

export const skillsData = {
  frontend: [
    {
      name: "React",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    },
    {
      name: "Next.js",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
    },
    {
      name: "JavaScript",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    },
    {
      name: "HTML",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
    },
    {
      name: "CSS",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
    },
    {
      name: "Tailwind",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
    },
    {
      name: "Bootstrap",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg",
    },
  ],

  backend: [
    {
      name: "Laravel",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg",
    },
    {
      name: "Node.js",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
    },
    {
      name: "PHP",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg",
    },
    {
      name: "Express.js",
      logo: "/logos/express.png",
    },
    {
      name: "MySQL",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
    },
    {
      name: "MongoDB",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
    },
  ],

  others: [
    {
      name: "GitHub",
      logo: "/logos/github.png",
    },
    {
      name: "Postman",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg",
    },
    {
      name: "Midtrans",
      logo: "/logos/midtrans.jpeg",
    },
    {
      name: "Twilio",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/twilio/twilio-original.svg",
    },
    {
      name: "Figma",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
    },
    {
      name: "Dialogflow",
      logo: "/logos/dialogflow.png",
    },
  ],
};
