"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowRight, BsGithub } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { BsLinkedin } from "react-icons/bs";
import { useSectionInView } from "@/lib/hooks";

export function Intro() {
    const { ref } = useSectionInView("Home");

    return (
        <section ref={ref} className="mb-28 max-w-[50rem] text-center sm:mb-0 scroll-mt-[100rem]" id="home">
            <div className="flex items-center justify-center">
                <div className="relative">
                    <motion.div
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ type: "tween", duration: 0.2 }}
                    >
                        <Image
                            src="/profilepics.png"
                            alt="Anthony portrait"
                            width="192"
                            height="192"
                            quality="95"
                            priority
                            className=" h-24 w-24 rounded-full border-[0.35rem] border-white object-cover shadow-xl "
                        />
                    </motion.div>
                    <motion.span
                        className="text-3xl absolute bottom-0 right-0 "
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ type: "spring", stiffness: 125, delay: 0.1, duration: 0.7 }}
                    >
                        👋
                    </motion.span>
                </div>
            </div>
            <motion.h1
                className="mb-10 mt-4 px-4 text-xl sm:text-3xl font-medium !leading-[1.5]"
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
            >
                <span className="font-bold">Hello, I&apos;m Anthony. </span>
                I&apos;m a <span className="font-bold">Senior Front-End Engineer </span>
                with <span className="font-bold"> 5 years </span>
                of experience specializing in high-impact digital solutions. Proficient in
                <span className="font-bold italic"> React.js</span>,<span className="font-bold italic"> Next.js</span>,
                <span className="font-bold italic">Typescript</span> and
                <span className="font-bold italic "> Solidity</span>.
            </motion.h1>
            <motion.div
                className="flex flex-col sm:flex-row gap-3 justify-center items-center px-4"
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ type: "spring", stiffness: 125, delay: 0.1, duration: 0.7 }}
            >
                <Link
                    href="#contact"
                    className=" group flex items-center bg-gray-900 text-white px-7 py-3 gap-2 rounded-full
                     font-semibold outline-none focus:scale-105 hover:scale-105 active:scale-110 transition "
                >
                    Contact me here <BsArrowRight className="opacity-70 group-hover:rotate-90 transition" />
                </Link>
                <a
                    href="/CV.pdf"
                    download
                    className="group flex items-center bg-white text-gray-900 px-7 py-3 gap-2 rounded-full
                outline-none focus:scale-105 hover:scale-105 active:scale-110 transition font-semibold cursor-pointer border border-black/10"
                >
                    CV <HiDownload className="group-hover:translate-y-1 transition" />{" "}
                </a>
                <a
                    href="/web3CV.pdf"
                    download
                    className="group flex items-center bg-white text-gray-900 px-7 py-3 gap-2 rounded-full
                outline-none focus:scale-105 hover:scale-105 active:scale-110 transition font-semibold cursor-pointer border border-black/10"
                >
                    Web3 CV <HiDownload className="group-hover:translate-y-1 transition" />{" "}
                </a>
                <a
                    href="https://www.linkedin.com/in/anthonybonhomme-blockchain/"
                    target="_blank"
                    className="flex items-center bg-white text-gray-700 p-4 gap-2 rounded-full border border-black/10
                outline-none focus:scale-105 hover:scale-105 active:scale-110 transition font-semibold cursor-pointer"
                >
                    <BsLinkedin />
                </a>
                <a
                    href="https://github.com/BonhommeAnthony"
                    target="_blank"
                    className="flex items-center bg-white text-gray-700 p-4 gap-2 rounded-full border border-black/10
                outline-none focus:scale-105 hover:scale-105 active:scale-110 transition font-semibold cursor-pointer"
                >
                    <BsGithub />
                </a>
            </motion.div>
        </section>
    );
}
