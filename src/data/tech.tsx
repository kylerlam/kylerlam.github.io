function getTechData() {
  const techStack = [
    {
      category: "Frontend",
      subcategories: [
        {
          name: "Frameworks & Libraries",
          technologies: [
            { name: "Vue.js", logo: "https://cdn.worldvectorlogo.com/logos/vue-9.svg" },
            { name: "React.js", logo: "https://cdn.worldvectorlogo.com/logos/react-2.svg" },
            { name: "Next.js", logo: "https://cdn.worldvectorlogo.com/logos/next-js.svg" },
          ],
        },
        {
          name: "Styling, Components & Animation",
          technologies: [
            { name: "Tailwind CSS", logo: "https://www.svgrepo.com/show/354431/tailwindcss-icon.svg" },
            { name: "Ant Design", logo: "https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg" },
            { name: "Element UI", logo: "https://cdn.worldvectorlogo.com/logos/element-ui-1.svg" },
            { name: "shadcn/ui", logo: "https://ui.shadcn.com/favicon.ico" },
            { name: "Framer Motion", logo: "https://cdn.worldvectorlogo.com/logos/framer-motion.svg" },
          ],
        },
        {
          name: "Core Languages",
          technologies: [
            { name: "JavaScript", logo: "https://cdn.worldvectorlogo.com/logos/javascript-1.svg" },
            { name: "TypeScript", logo: "https://cdn.worldvectorlogo.com/logos/typescript-2.svg" },
          ],
        },
      ],
    },
    {
      category: "Backend",
      subcategories: [
        {
          name: "Frameworks & Runtimes",
          technologies: [
            { name: "Node.js", logo: "https://cdn.worldvectorlogo.com/logos/nodejs-icon.svg" },
            { name: "Flask", logo: "https://cdn.worldvectorlogo.com/logos/flask.svg" },
            { name: "Spring Boot", logo: "https://cdn.worldvectorlogo.com/logos/spring-boot-1.svg" },
          ],
        },
        {
          name: "Programming Languages",
          technologies: [
            { name: "Python", logo: "https://cdn.worldvectorlogo.com/logos/python-5.svg" },
            { name: "Java", logo: "https://cdn.worldvectorlogo.com/logos/java-14.svg" },
          ],
        },
      ],
    },
    {
      category: "Databases",
      subcategories: [
        {
          name: "Database Management System",
          technologies: [{ name: "MySQL", logo: "https://cdn.worldvectorlogo.com/logos/mysql-logo-pure.svg" }],
        },
      ],
    },
    {
      category: "Development Tools & DevOps",
      subcategories: [
        {
          name: "Tools & Platforms",
          technologies: [
            { name: "Git", logo: "https://cdn.worldvectorlogo.com/logos/git-icon.svg" },
            { name: "GitHub", logo: "https://cdn.worldvectorlogo.com/logos/github-icon-1.svg" },
            { name: "Docker", logo: "https://cdn.worldvectorlogo.com/logos/docker.svg" },
            { name: "VS Code", logo: "https://cdn.worldvectorlogo.com/logos/visual-studio-code-1.svg" },
            { name: "PyCharm", logo: "https://cdn.worldvectorlogo.com/logos/jetbrains-pycharm.svg" },
            { name: "IntelliJ IDEA", logo: "https://cdn.worldvectorlogo.com/logos/intellij-idea-1.svg" },
          ],
        },
      ],
    },
  ];
  return techStack;
}

export const techStackData = getTechData();
