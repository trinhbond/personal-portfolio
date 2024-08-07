import { motion } from "framer-motion";

type SectionProps = {
  children: React.ReactNode;
};

export default function Section({ children }: SectionProps): JSX.Element {
  const visible = { opacity: 1, y: 0, transition: { duration: 1 } };

  const variant = {
    hidden: { opacity: 0 },
    visible,
  };

  return (
    <motion.section
      className="w-full py-6 px-3 flex flex-wrap flex-col gap-6"
      variants={variant}
    >
      {children}
    </motion.section>
  );
}
