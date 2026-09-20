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
      title: "Having a dog",
      description: "It might not be easy to have a dog for me right now due to some reasons. Hopefully, I’ll be able to have one in the future.",
      image: "https://simpleicons.org/icons/datadog.svg",
    },
    {
      title: "Traveling",
      description: "Visiting different countries and experiencing their cultures would broaden my horizons.",
      image: "https://www.svgrepo.com/show/189577/flight.svg",
    },
    {
      title: "Become a wonderful creator",
      description: "Keep working hard, keep learning, and turn what I’ve learned into something truly inspiring.",
      image: "https://simpleicons.org/icons/cashapp.svg",
    },
  ],
} as const;
