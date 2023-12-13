import * as React from "react";

export interface ISectionHeadingProps {
    title: string;
}

export function SectionHeading({ title }: ISectionHeadingProps) {
    return <h2 className="text-3xl font-medium capitalize mb-8">{title}</h2>;
}
