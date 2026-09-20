import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Kyler Lam",
  initials: "KL",
  url: "https://kylerlam.github.io",
  location: "Hong Kong",
  locationLink: "https://www.google.com/maps/place/hongkong",
  description: "A personal space for my experience, projects and hands-on interests.",
  summary:
    "I'm Kyler, also known as LAM Kwan Ho (林坤壕). I hold a BSc (Hons) in Software Engineering from Bournemouth University and have worked in retail and on construction sites.\n\nI maintain personal websites, work with computer and network settings, and use AI tools to help with scripts and practical projects. This is a place to share my experience and connect with people across different fields.",
  avatarUrl: "/me.jpg",
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "kwanho.job@gmail.com",
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
      degree: "BSc (Hons) Software Engineering",
      logoUrl: "/bu.png",
      start: "2020",
      end: "2024",
    },
    {
      school: "Bournemouth University International College",
      href: "https://www.kaplaninternational.com/higher-education/pathways",
      degree: "Foundation Certificate in Computing",
      logoUrl: "/Kaplan.jpg",
      start: "2019",
      end: "2020",
    },
    {
      school: "Hong Kong Institute of Vocational Education",
      href: "https://www.ive.edu.hk/en",
      degree: "Diploma of Foundation Studies - Information Technology",
      logoUrl: "/IVE.png",
      start: "2018",
      end: "2019",
    },
  ],
  hobbies: [
    {
      title: "Docker",
      description: "I enjoy using Docker to deploy and explore containerised applications.",
      image: "/icons/docker-containers.svg",
    },
    {
      title: "Home Networking",
      description:
        "Router setup, IP mapping, Cloudflare DDNS and Nginx reverse proxies, plus network simulations in Packet Tracer.",
      image: "/icons/home-network.svg",
    },
    {
      title: "Aluminium Profile DIY",
      description: "I enjoy hands-on DIY with aluminium profiles.",
      image: "/icons/aluminium-profile.svg",
    },
  ],
} as const;
