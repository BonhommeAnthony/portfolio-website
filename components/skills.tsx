"use client";

import { skillsData } from "@/lib/data";
import { SectionHeading } from "./section-heading";
import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";
import clsx from "clsx";

const hotSkills = ["React", "Next.js", "TypeScript", "Solidity"];

const fadeInAnimationVariants = {
    initial: {
        opacity: 0,
        y: 100,
    },
    animate: (index: number) => ({
        opacity: 1,
        y: 0,
        transition: {
            delay: 0.05 * index,
        },
    }),
};

export function Skills() {
    const { ref } = useSectionInView("Skills");
    return (
        <section ref={ref} id="skills" className="mb-28 max-w-[53rem] scroll-mt-28 text-center sm:mb-40">
            <SectionHeading title="My Skills" />
            <ul className="flex flex-wrap justify-center gap-2 text-lg text-gray-800">
                {skillsData.map((skill, index) => (
                    <motion.li
                        key={index}
                        className={clsx("bg-white border border-black/[0.1] rounded-xl px-5 py-3", {
                            "bg-gradient-to-r from-[#fbe2e3] to-[#dbd7fb]": hotSkills.includes(skill),
                        })}
                        variants={fadeInAnimationVariants}
                        initial="initial"
                        whileInView="animate"
                        viewport={{
                            once: true,
                        }}
                        custom={index}
                        whileHover={{
                            scale: 1.05,
                            transition: {
                                duration: 0.2,
                            },
                        }}
                    >
                        {skill}
                    </motion.li>
                ))}
            </ul>
        </section>
    );
}
