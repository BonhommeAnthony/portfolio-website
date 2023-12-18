"use client";

import * as React from "react";
import { SectionHeading } from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import { sendEmail } from "@/actions/sendEmail";
import { SubmitBtn } from "./submit-btn";
import toast from "react-hot-toast";

export function Contact() {
    const { ref } = useSectionInView("Contact");

    return (
        <motion.section
            ref={ref}
            id="contact"
            className=" w-[min(100%,38rem)] scroll-mt-28 text-center mb-28"
            initial={{ opacity: 0 }}
            whileInView={{
                opacity: 1,
                transition: {
                    duration: 1.5,
                },
            }}
            viewport={{
                once: true,
            }}
        >
            <SectionHeading title="Contact Me" />
            <p className="text-gray-700">
                Please contact me directly at{" "}
                <a href="mailto:bonhomme.anthony@gmail.com" className="underline">
                    bonhomme.anthony@gmail.com
                </a>{" "}
                or through the form below.
            </p>
            <form
                className="mt-10 flex flex-col"
                action={async (FormData) => {
                    const { data, error } = await sendEmail(FormData);
                    if (error) {
                        toast.error(error);
                        return;
                    }
                    toast.success("Message sent successfully!");
                }}
            >
                <input
                    type="email"
                    name="senderEmail"
                    className="h-14 px-4 rounded-lg borderBlack"
                    placeholder="Your email"
                    required
                    maxLength={500}
                />
                <textarea
                    className="h-52 my-3 rounded-lg borderBlack p-4 "
                    name="message"
                    placeholder="Your message"
                    required
                    maxLength={5000}
                />
                <SubmitBtn />
            </form>
        </motion.section>
    );
}
