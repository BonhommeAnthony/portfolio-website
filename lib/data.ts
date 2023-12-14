import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";

export const links = [
    {
        name: "Home",
        hash: "#home",
    },
    {
        name: "About",
        hash: "#about",
    },
    // {
    //     name: "Projects",
    //     hash: "#projects",
    // },
    {
        name: "Skills",
        hash: "#skills",
    },
    {
        name: "Experience",
        hash: "#experience",
    },
    {
        name: "Contact",
        hash: "#contact",
    },
] as const;

export const experiencesData = [
    {
        title: "Senior Front End Engineer at Vintners.co",
        location: "Remote - Paris - New York",
        description:
            "Spearheaded the development of a comprehensive marketplace for craft wine, successfully attracting over 1,000 producers and more than 50 sellers within the first year.",
        icon: React.createElement(CgWorkAlt),
        date: "2021 - 2023",
    },
    {
        title: "Co-Founder - Front-End Engineer at TenderCulture",
        location: "Remote",
        description:
            "Actively participated in architecture discussions, providing valuable input on technical decisions that shaped the platform's scalability, security, and overall functionality.",
        icon: React.createElement(CgWorkAlt),
        date: "2021 - 2022",
    },
    {
        title: "Front-End Developer at DevelopAB",
        location: "Avignon",
        description:
            "Utilized advanced technologies like React.js and Next.js to build responsive, scalable, and visually compelling web solutions.",
        icon: React.createElement(CgWorkAlt),
        date: "2019 - 2021",
    },
] as const;

// export const projectsData = [
//     {
//         title: "CorpComment",
//         description:
//             "I worked as a full-stack developer on this startup project for 2 years. Users can give public feedback to companies.",
//         tags: ["React", "Next.js", "MongoDB", "Tailwind", "Prisma"],
//         imageUrl: corpcommentImg,
//     },
//     {
//         title: "rmtDev",
//         description:
//             "Job board for remote developer jobs. I was the front-end developer. It has features like filtering, sorting and pagination.",
//         tags: ["React", "TypeScript", "Next.js", "Tailwind", "Redux"],
//         imageUrl: rmtdevImg,
//     },
//     {
//         title: "Word Analytics",
//         description:
//             "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
//         tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
//         imageUrl: wordanalyticsImg,
//     },
// ] as const;

export const skillsData = [
    "React",
    "Next.js",
    "TypeScript",
    "Solidity",
    "JavaScript",
    "Jest.js",
    "Git",
    "Tailwind",
    "Chakra UI",
    "Vercel",
    "Shadcn",
    "Framer Motion",
    "Web3.js",
    "Ethers.js",
    "Foundry",
] as const;
