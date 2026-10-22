// Based on the CV's "Keterampilan Teknis" section, plus ROS 2 from the GMRT experience.
// Level is a 0-100 self-rating used for the progress bar. Dummy values — adjust to your own assessment.
export const skillGroups = [
  {
    category: "Languages",
    skills: [
      { name: "Python", icon: "devicon-python-plain colored", level: 75 },
      { name: "JavaScript", icon: "devicon-javascript-plain colored", level: 75 },
      { name: "C++", icon: "devicon-cplusplus-plain colored", level: 65 },
    ],
  },
  {
    category: "Framework & Library",
    skills: [
      { name: "React.js", icon: "devicon-react-original colored", level: 70 },
      { name: "Tailwind CSS", icon: "devicon-tailwindcss-plain colored", level: 80 },
      { name: "Express.js", icon: "devicon-express-original", level: 70 },
      { name: "ROS 2", icon: "devicon-ros-original colored", level: 60 },
    ],
  },
  {
    category: "Database",
    skills: [
      { name: "PostgreSQL", icon: "devicon-postgresql-plain colored", level: 65 },
      { name: "MongoDB", icon: "devicon-mongodb-plain colored", level: 65 },
    ],
  },
  {
    category: "Tools",
    skills: [
      { name: "GitHub", icon: "devicon-github-original", level: 80 },
      { name: "VS Code", icon: "devicon-vscode-plain colored", level: 85 },
      { name: "Postman", icon: "devicon-postman-plain colored", level: 70 },
    ],
  },
];
