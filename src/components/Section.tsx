import { motion, MotionProps } from "framer-motion";
import { forwardRef } from "react";

type CustomSection = React.HTMLAttributes<HTMLElement> &
  MotionProps & {
    children: React.ReactNode;
  };

export const Section = forwardRef<HTMLElement, CustomSection>(
  ({ children, ...props }, ref): JSX.Element => (
    <motion.section
      ref={ref}
      className="w-full p-6 flex flex-wrap flex-col gap-6"
      {...props}
    >
      {children}
    </motion.section>
  )
);
