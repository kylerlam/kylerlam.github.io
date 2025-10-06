import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Kyler Lam",
  initials: "KL",
  url: "https://kyler.github.io",
  location: "Hong Kong",
  locationLink: "https://www.google.com/maps/place/hongkong",
  description:
    "A web development enthusiast with a degree in Software Engineering.",
  summary:
    "Software Engineering graduate with solid full-stack development skills in Vue3, React, Spring Boot, Flask, and RESTful APIs. Strong programming foundation in Python and Java, with hands-on experience in both independent and collaborative projects. Passionate about LLM-related applications and eager to contribute as a Web Developer / Full-Stack Developer / IT Support.",
  avatarUrl: "/me.jpg",
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "hello@example.com",
    tel: "+123456789",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/kylerlam",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/kyler123/",
        icon: Icons.linkedin,

        navbar: true,
      },
      Email: {
        name: "Email",
        url: "mailto:kwanho.job@gmail.com",
        icon: Icons.email,

        navbar: true,
      },
    },
  },

  education: [
    {
      school: "Bournemouth University",
      href: "https://www.bournemouth.ac.uk/",
      degree: "BSc in Software Engineering",
      logoUrl: "/BU.png",
      start: "2020",
      end: "2024",
    },
    {
      school: "Bournemouth University International College",
      href: "https://www.kaplaninternational.com/higher-education/pathways",
      degree: "Kaplan Pathway in Computing",
      logoUrl: "/Kaplan.jpg",
      start: "2019",
      end: "2020",
    },
    {
      school: "Hong Kong Institute of Vocational Education",
      href: "https://www.ive.edu.hk/en",
      degree: "Diploma in IT Foundation Studies",
      logoUrl: "/IVE.png",
      start: "2018",
      end: "2019",
    },
  ],
  projects: [
    // project 1
    {
      title: "Simple e-shop",
      href: "#",
      dates: "Oct 2025 - Present",
      active: true,
      description:
        "A full-stack e-commerce website built with React, Spring Boot, and MySQL. It empowers individual entrepreneurs to launch their online stores quickly and efficiently. The platform features a responsive design and an appealing user interface, and is envisioned to serve the wider community in the future.",
      technologies: [
        "React.js",
        "Typescript",
        "MySQL",
        "Ant Design",
        "TailwindCSS",
      ],
      links: [
        {
          type: "Source",
          href: "#",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/chat-collect.mp4",
    },
    // project 2
    {
      title: "Awesome Login",
      href: "https://magicui.design",
      dates: "Oct 2025 - Present",
      active: true,
      description:
        "A creative and uniquely styled native front-end login interface that can be seamlessly integrated into any framework project. Built with HTML, CSS, and JavaScript, it features real-time form validation, smooth animations, and a visually appealing user experience.",
      technologies: [
        "JavaScript",
        "HTML",
        "CSS",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/magicuidesign/magicui",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "https://cdn.magicui.design/bento-grid.mp4",
    },
    // project 3
    {
      title: "llm.report",
      href: "https://llm.report",
      dates: "April 2023 - September 2023",
      active: true,
      description:
        "Developed an open-source logging and analytics platform for OpenAI: Log your ChatGPT API requests, analyze costs, and improve your prompts.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Shadcn UI",
        "Magic UI",
        "Stripe",
        "Cloudflare Workers",
      ],
      links: [
        {
          type: "Website",
          href: "https://llm.report",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/dillionverma/llm.report",
          icon: <Icons.github className="size-3" />,
        },
      ],
    },
    {
      title: "Book Activity",
      href: "#",
      dates: "Oct 2023 - June 2024",
      active: true,
      description:
        "A full-stack book and event management system for schools, developed as my final-year university project. Built with Vue, Flask, and MySQL, and now being refactored for improvement.",
      technologies: [
        "Vue.js",
        "Flask",
        "MySQL",
        "JavaScript",
        "ElementUI",
      ],
      links: [
        {
          type: "Source",
          href: "#",
          icon: <Icons.globe className="size-3" />,
        },
      ],
    },
  ],
  hobits: [
    {
      title: "Having a dog",
      description:
        "It might not be easy to have a dog for me right now due to some reasons. Hopefully, I’ll be able to have one in the future.",
      image:
        "https://simpleicons.org/icons/datadog.svg",
    },
    {
      title: "Traveling",
      description:
        "Visiting different countries and experiencing their cultures would broaden my horizons.",
      image:
        "https://www.svgrepo.com/show/189577/flight.svg",
    },
    {
      title: "Become a wonderful creater",
      description:
        "Keep working hard, keep learning, and turn what I’ve learned into something truly inspiring.",
      image:
        "https://simpleicons.org/icons/cashapp.svg",
    },
  ],
} as const;
