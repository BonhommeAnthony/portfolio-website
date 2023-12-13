"use client";

import * as React from "react";
import { motion } from "framer-motion";

export function SectionDivider() {
    return (
        <motion.div
            className="bg-gray-200 my-24 h-16 w-1 rounded-full hidden sm:block"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.7 }}
        ></motion.div>
    );
}
