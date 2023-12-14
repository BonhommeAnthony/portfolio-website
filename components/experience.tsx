"use client";

import { experiencesData } from "@/lib/data";
import { SectionHeading } from "./section-heading";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import React from "react";
import { useSectionInView } from "@/lib/hooks";
import { useInView } from "react-intersection-observer";

export function Experience() {
    const { ref } = useSectionInView("Experience");
    return (
        <section ref={ref} id="experience" className=" max-w-[53rem] scroll-mt-28 text-center">
            <SectionHeading title="My Experience" />
            <VerticalTimeline>
                {experiencesData.map((item, index) => (
                    <TimelineElement key={index} item={item} />
                ))}
            </VerticalTimeline>
        </section>
    );
}

function TimelineElement({ item }: { item: (typeof experiencesData)[number] }) {
    const { ref, inView } = useInView({
        triggerOnce: true,
    });
    return (
        <div ref={ref} className="vertical-timeline-element">
            <VerticalTimelineElement
                visible={inView}
                contentStyle={{
                    background: "#f3f4f6",
                    boxShadow: "none",
                    border: "1px solid #e5e7eb",
                    textAlign: "left",
                    padding: "1.3rem 2rem ",
                    fontSize: "0.75rem",
                }}
                contentArrowStyle={{
                    borderRight: "0.4rem solid #9ca3af",
                }}
                date={item.date}
                dateClassName="!px-2"
                icon={item.icon}
                iconStyle={{
                    background: "white",
                }}
            >
                <h3 className="font-semibold !text-lg capitalize">{item.title}</h3>
                <p className="!mt-0 !text-sm !font-light ">{item.location}</p>
                <p className="!font-normal text-gray-700 ">{item.description}</p>
            </VerticalTimelineElement>
        </div>
    );
}
