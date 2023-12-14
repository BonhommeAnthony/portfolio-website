"use client";

import { createContext, useContext, useState } from "react";
import type { SectionName } from "@/lib/types";

type ActiveSectionContextType = {
    activeSection: SectionName;
    setActiveSection: React.Dispatch<React.SetStateAction<SectionName>>;
    timeOfLastClick: number;
    setTimeOfLastClick: React.Dispatch<React.SetStateAction<number>>;
};

export const ActiveSectionContext = createContext<ActiveSectionContextType | null>(null);

export function ActiveSectionContextProvider({ children }: { children: React.ReactNode }) {
    const [activeSection, setActiveSection] = useState<SectionName>("Home");
    const [timeOfLastClick, setTimeOfLastClick] = useState<number>(0);
    return (
        <ActiveSectionContext.Provider
            value={{
                activeSection,
                setActiveSection,
                timeOfLastClick,
                setTimeOfLastClick,
            }}
        >
            {children}
        </ActiveSectionContext.Provider>
    );
}

export function useActiveSection() {
    const context = useContext(ActiveSectionContext);
    if (context === null) {
        throw new Error("useActiveSection must be used within an ActiveSectionContextProvider");
    }
    return context;
}