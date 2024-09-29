import { motion } from "framer-motion";

type SectionProps = {
  children: React.ReactNode;
  variant?: any;
};

export default function Section({
  children,
  variant,
}: SectionProps & React.HTMLAttributes<HTMLDivElement>): JSX.Element {
  return (
    <motion.section
      className="w-full py-9 px-3 max-md:px-4 flex flex-wrap flex-col gap-6 leading-[1.6rem] font-medium max-md:text-sm"
      variants={variant}
    >
      {children}
    </motion.section>
  );
}
