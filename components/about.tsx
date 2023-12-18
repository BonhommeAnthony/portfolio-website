"use client";

import { SectionHeading } from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export function About() {
    const { ref } = useSectionInView("About", 0.5);
    return (
        <motion.section
            ref={ref}
            id="about"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className=" max-w-[45rem] text-center  leading-8  tracking-wide scroll-mt-28"
        >
            <SectionHeading title="About me" />
            <p className="mb-3">
                Bonjour! I&apos;m
                <span className="font-bold italic"> Anthony </span>, a seasoned
                <span className="font-bold italic"> Senior Front-End Engineer </span>
                with a passion for crafting seamless and innovative digital experiences. Currently based in the
                picturesque city of
                <span className="font-bold italic"> Avignon</span> , France, my journey has taken me across diverse
                landscapes, from the vibrant streets of <span className="font-bold italic"> Bangkok</span> to the
                dynamic tech scene of <span className="font-bold italic"> Seoul</span> , and even the bustling energy of
                <span className="font-bold italic"> New-York City</span> .
            </p>
            <p className="mb-3">
                As a Senior <span className="font-bold italic"> Front-End & Blockchain Engineer</span> , I specialize in
                technologies like <span className="font-bold italic"> React.js, Next.js, Typescript, solidity</span>,
                and more. My work has spanned pioneering projects, including spearheading the development of a thriving
                marketplace for craft wine at <span className="font-bold italic"> Vintners</span> . I&apos;ve also
                played a role as Co-Founder and Front-End Engineer, contributing to the creation of a groundbreaking
                SaaS product.
            </p>
            <p className="mb-3">
                Passionate about <span className="font-bold italic"> Blockchain</span> , AI, and emerging technologies,
                I thrive at the intersection of innovation and functionality. Beyond the lines of code, my love for
                investment, soccer, and the intricate world of wines keeps me inspired. Having had the opportunity to
                work remotely, I&apos;ve embraced the challenges and rewards of collaborating across borders, bringing a
                global perspective to my work. My professional journey has also led me to spend valuable time in the
                vibrant tech hub of New York City, further broadening my horizons.
            </p>
            <p className="mb-3">
                Join me on this journey of creating digital landscapes that not only meet but exceed expectations.
                Let&apos;s build something extraordinary together.
            </p>
        </motion.section>
    );
}
