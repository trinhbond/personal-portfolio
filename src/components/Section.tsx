import { motion } from "framer-motion";
import { forwardRef } from "react";

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
  variant?: any;
}

export const Section = forwardRef<HTMLElement, SectionProps>(
  ({ children, variant }, ref) => (
    <motion.section
      ref={ref}
      className="w-full py-9 px-3 flex flex-wrap flex-col gap-6 font-medium"
      variants={variant}
    >
      {children}
    </motion.section>
  )
);
