// `image` is a path under /public (e.g. "/assets/projects/katering-bu-lala.png") —
// a landing page screenshot, ideally ~1280x720 (16:9). Leave it null until the file exists.
export const projects = [
    {
        title: "Katering Bu Lala",
        period: "2025",
        description:
            "Course project migrating a manual catering order system to a web-based platform. Customers can order, subscribe, pay, and track orders, while admins manage and monitor all transactions. Responsible for the backend API (data management, authentication, ordering) consumed by the front-end team.",
        stack: ["Express.js", "MongoDB", "React.js"],
        link: "https://github.com/FaizArsyiP/Lala-Catering",
        image: null, // put the file at /public/assets/projects/katering-bu-lala.png
    },
    {
        title: "TBDFest — Event Ticketing Platform",
        period: "2025",
        description:
            "Course project for online event ticket booking and purchasing, allowing event committees to create and manage their own events. Responsible for the backend, including APIs for user, event, and transaction data using Supabase.",
        stack: ["Next.js", "Supabase", "PostgreSQL"],
        link: "https://github.com/FaizArsyiP/TBDFest",
        image: null, // put the file at /public/assets/projects/tbdfest.png
    },
    {
        title: "Final Project Webdev",
        period: "2024",
        description:
            "Final project for the web development training organized by KMTETI, built using Next.js and Tailwind CSS by utilizing a public API.",
        stack: ["Next.js", "Tailwind CSS"],
        link: "https://github.com/FaizArsyiP/Final-Project-Webdev",
        image: null, // put the file at /public/assets/projects/final-project-webdev.png
    },
];
